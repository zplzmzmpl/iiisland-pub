import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../website/_worker.js';

for (const userAgent of ['desktop', 'iPhone Safari', 'Android Chrome']) {
  test(`${userAgent}: legacy homepage recovers through an uncached canonical URL`, async () => {
    const response = await worker.fetch(new Request('https://iiisland-pub.pages.dev/', {
      headers: {'User-Agent': userAgent}
    }), {ASSETS: {fetch() {assert.fail('Legacy navigation must redirect before assets');}}});
    assert.equal(response.status, 302);
    const target = new URL(response.headers.get('Location'));
    assert.equal(target.origin, 'https://iiisland.pages.dev');
    assert.equal(target.pathname, '/');
    assert.ok(target.searchParams.has('_iiisland_redirect'));
    assert.equal(response.headers.get('Cache-Control'), 'no-store');
    assert.equal(response.headers.get('CDN-Cache-Control'), 'no-store');
  });
}

test('legacy links preserve their path, search values and fragment', async () => {
  const response = await worker.fetch(new Request('https://iiisland-pub.pages.dev/guide?from=mobile&tag=a&tag=b#install'), {});
  const target = new URL(response.headers.get('Location'));
  assert.equal(target.pathname, '/guide');
  assert.equal(target.searchParams.get('from'), 'mobile');
  assert.deepEqual(target.searchParams.getAll('tag'), ['a','b']);
  assert.equal(target.hash, '#install');
});

for (const url of [
  'https://iiisland.pages.dev/',
  'https://iiisland.pages.dev/?_iiisland_redirect=20261025',
  'https://iiisland.pages.dev/does-not-exist',
  'https://preview.iiisland.pages.dev/',
  'https://preview.iiisland-pub.pages.dev/'
]) {
  test(`${url}: canonical and preview requests keep the static asset response`, async () => {
    const request = new Request(url);
    const expected = new Response('static asset', {status:url.includes('does-not-exist')?404:200});
    const response = await worker.fetch(request, {ASSETS: {fetch(actual) {
      assert.equal(actual, request);
      return expected;
    }}});
    assert.equal(response, expected);
    assert.equal(response.headers.get('Location'), null);
  });
}

test('legacy migration replaces a supplied recovery marker instead of duplicating it', async () => {
  const response = await worker.fetch(new Request('https://iiisland-pub.pages.dev/?_iiisland_redirect=old'), {});
  const target = new URL(response.headers.get('Location'));
  assert.equal(target.searchParams.getAll('_iiisland_redirect').length, 1);
  assert.notEqual(target.searchParams.get('_iiisland_redirect'), 'old');
});

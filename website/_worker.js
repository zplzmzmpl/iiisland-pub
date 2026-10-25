// Recover browsers that cached the former iiisland -> iiisland-pub 301.
// A bare reverse redirect would send those browsers around the same loop.
export default {
  fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname !== 'iiisland-pub.pages.dev') {
      return env.ASSETS.fetch(request);
    }

    url.protocol = 'https:';
    url.hostname = 'iiisland.pages.dev';
    url.port = '';
    url.searchParams.set('_iiisland_redirect', '20261025');
    return new Response(null, {
      status: 302,
      headers: {
        Location: url.href,
        'Cache-Control': 'no-store',
        'CDN-Cache-Control': 'no-store'
      }
    });
  }
};

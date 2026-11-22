import { readFileSync, writeFileSync } from "node:fs";

const page = new URL("../../website/index.html", import.meta.url);
const release = JSON.parse(readFileSync(0, "utf8"));
const version = /^v(\d+\.\d+\.\d+)$/.exec(release.tag_name)?.[1];
const title = /^iiisland (\d+\.\d+\.\d+) · build ([1-9]\d*)$/.exec(release.name);

if (release.draft !== false || release.prerelease !== false || !version || title?.[1] !== version) {
  throw new Error("Expected a stable vX.Y.Z release titled iiisland X.Y.Z · build N");
}

const dmg = `iiisland-${version}-arm64.dmg`;
for (const name of [dmg, `${dmg}.sha256`, "appcast.xml"]) {
  const uploaded = release.assets?.some((asset) =>
    asset.name === name && asset.state === "uploaded" && asset.size > 0
  );
  if (!uploaded) throw new Error(`The latest release is missing ${name}`);
}

const notes = `https://github.com/zplzmzmpl/iiisland-pub/releases/tag/v${version}`;
let html = readFileSync(page, "utf8");
const fields = [
  [/<dd data-release="version">[^<]*<\/dd>/g, `<dd data-release="version">${version}</dd>`],
  [/<span data-release="build">[^<]*<\/span>/g, `<span data-release="build">${version} · build ${title[2]}</span>`],
  [/<a data-release="notes" href="[^"]*">[^<]*<\/a>/g, `<a data-release="notes" href="${notes}">${version} 更新说明</a>`],
];

for (const [field, replacement] of fields) {
  if ([...html.matchAll(field)].length !== 1) {
    throw new Error(`Expected one release field matching ${field}`);
  }
  html = html.replace(field, replacement);
}

writeFileSync(page, html);
console.log(`Website synced to ${version} · build ${title[2]}`);

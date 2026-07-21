import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const exists = (file) => fs.existsSync(path.join(root, file));
const fail = (message) => {
  console.error(`FAIL  ${message}`);
  process.exitCode = 1;
};
const pass = (message) => console.log(`PASS  ${message}`);

const page = read("app/page.tsx");
const magazine = read("app/MagazineExperience.tsx");
const config = read("app/publication-config.ts");
const layout = read("app/layout.tsx");
const styles = read("app/globals.css");
const source = `${page}\n${magazine}\n${config}\n${layout}`;

if (/export default function Home/.test(page) && /<MagazineExperience\s*\/>/.test(page)) {
  pass("root route renders the interactive magazine");
} else fail("root route entry point is missing");

const renderedPages = [
  "CoverPage",
  "LetterPage",
  "AboutPage",
  "EmotionalFeaturePage",
  "PartnershipPage",
  "OpportunityPage",
  "SponsorshipPage",
  "CommunityPartnerPage",
  "SupportingSponsorPage",
  "PresentingSponsorPage",
  "TitlePartnerPage",
  "ClosingPage",
];
const missingPages = renderedPages.filter((name) => !new RegExp(`<${name}\\s*/>`).test(magazine));
if (missingPages.length === 0) pass("all 12 publication pages are mounted");
else fail(`missing publication pages: ${missingPages.join(", ")}`);

const requiredControls = ["flipNext", "flipPrev", "turnToPage", "FULLSCREEN", "SHARE", "PDF"];
const missingControls = requiredControls.filter((control) => !magazine.includes(control));
if (missingControls.length === 0) pass("page turns and reader controls are present");
else fail(`missing controls: ${missingControls.join(", ")}`);

const mobileRequirements = ["MobilePublicationPage", "mobile-reader-nav", "mobile-page-menu", "goMobile"];
const missingMobile = mobileRequirements.filter((item) => !magazine.includes(item));
if (missingMobile.length === 0 && /@media \(max-width:700px\)/.test(styles) && /font-size:17px/.test(styles)) {
  pass("dedicated reflowed mobile reader and touch navigation are present");
} else fail(`mobile reading architecture is incomplete: ${missingMobile.join(", ")}`);

if (/min-width:701px\) and \(max-width:1399px/.test(styles) && /max-width:590px/.test(styles) && /min-width:1400px/.test(styles)) {
  pass("desktop spread and single-page laptop/tablet breakpoints are present");
} else fail("responsive magazine breakpoints are incomplete");

const expectedCopy = ["$250", "$500", "$1,000", "$2,500", "backtoschoolonmain@gmail.com"];
const missingCopy = expectedCopy.filter((value) => !config.includes(value));
if (missingCopy.length === 0) pass("pricing and contact information are present");
else fail(`missing publication content: ${missingCopy.join(", ")}`);

const assetPaths = new Set();
for (const match of source.matchAll(/["'`](\/assets\/[^"'`]+)["'`]/g)) assetPaths.add(match[1]);
const missingAssets = [...assetPaths].filter((asset) => !exists(`public${asset}`));
if (missingAssets.length === 0) pass(`${assetPaths.size} referenced public assets exist`);
else fail(`missing public assets: ${missingAssets.join(", ")}`);

if (!/(?:\/Users\/|file:\/\/|Downloads\/|localhost:\d+)/.test(source)) {
  pass("no local-computer file paths remain");
} else fail("local-only path found in application source");

if (exists("app/fonts/geist-variable.woff2") && exists("app/fonts/cormorant-garamond.woff2") && exists("app/fonts/cormorant-garamond-italic.woff2")) {
  pass("production typography is bundled locally");
} else fail("local production fonts are incomplete");

if (process.exitCode) process.exit(process.exitCode);

// De instellingen van Nimble voor de gedeelde filmmotor (adm-appkit/tools/filmgenerator, LEESMIJ.md).
// Playwright uit de bouwuitvoer van de testen in de hoofdkloon: `dotnet build tests/Nimble.Tests` levert de map.
export { chromium } from '/Users/dominique/projects/adm-nimble/tests/Nimble.Tests/bin/Debug/net10.0/.playwright/package/index.mjs';
export { BASIS, gebruiker, wachtwoord, meldAan, stemGeheim, bunnyGeheim, appToestand } from './aansturing.mjs';
export { FILMS } from './draaiboek.mjs';
export const MAP = new URL('./', import.meta.url).pathname;
// Voor bunny.mjs: de metadata bij elke video. Eén Bunny-library per pakket (Bunny:LibraryId in user-secrets).
export const PRODUCT = 'Nimble';
export const BRON = 'nimble-docs/tools/films.mjs';
// Voor `bunny.mjs naar-website`: de websitefilms (uitvoering `website`) als JSON IN deze repo, niet in nimble-website.
// Content-hub (de sessie van de websites) leest het van origin/main en zet het in nimble-website/src/data/films.json —
// zonder Bunny-sleutels. Het library-nummer zet content-hub zelf aan de kant van de site (afgesproken 19/10/2026).
export const WEBSITE_FILMS = new URL('./website-films.json', import.meta.url).pathname;

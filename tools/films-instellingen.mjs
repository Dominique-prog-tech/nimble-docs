// De instellingen van Nimble voor de gedeelde filmmotor (adm-appkit/tools/filmgenerator, LEESMIJ.md).
// Playwright uit de bouwuitvoer van de testen in de hoofdkloon: `dotnet build tests/Nimble.Tests` levert de map.
export { chromium } from '/Users/dominique/projects/adm-nimble/tests/Nimble.Tests/bin/Debug/net10.0/.playwright/package/index.mjs';
export { BASIS, gebruiker, wachtwoord, meldAan, stemGeheim, bunnyGeheim, appToestand } from './aansturing.mjs';
export { FILMS } from './draaiboek.mjs';
export const MAP = new URL('./', import.meta.url).pathname;
// Voor bunny.mjs: de metadata bij elke video. Eén Bunny-library per pakket (Bunny:LibraryId in user-secrets).
export const PRODUCT = 'Nimble';
export const BRON = 'nimble-docs/tools/films.mjs';

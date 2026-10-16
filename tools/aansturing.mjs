// ── De koppellaag van Nimble: geheimen, aanmelden en de toestand van de app ──────────────────────────────────
//
// app.mjs zegt WAT Nimble is; de gedeelde schermmachinerie (adm-appkit/tools/schermmachinerie) HOE je aanmeldt en
// geheimen leest. Dit bestand verbindt de twee voor de filmmotor (films-instellingen.mjs).
import { PAKKET, BASIS, ID } from './app.mjs';
import { geheim, aanmeldgegevens, appToestand as _appToestand, meldAan as _meldAan } from '/Users/dominique/projects/adm-appkit/tools/schermmachinerie/aansturing.mjs';

export { BASIS, ID };

const { gebruiker, wachtwoord } = aanmeldgegevens(PAKKET.secrets, PAKKET.cfg);
export { gebruiker, wachtwoord };

// ── ElevenLabs en Bunny: uit user-secrets van de Host, nooit in git of in een log ────────────────────────────
//   ElevenLabs:ApiKey, ElevenLabs:StemNl, ElevenLabs:StemFr (optioneel ElevenLabs:Model) — dezelfde stemmen als
//   CreditSoft (beslist 06/09/2026). Bunny:LibraryId en Bunny:ApiKey — een eigen library per pakket.
export const stemGeheim = naam => geheim(PAKKET.secrets, `ElevenLabs:${naam}`);
export const bunnyGeheim = naam => geheim(PAKKET.secrets, `Bunny:${naam}`);

export const appToestand = () => _appToestand(PAKKET.repo);

// ⚠️ NIMBLE ONTHOUDT DE TAAL PER GEBRUIKER (gemeten 16/10/2026). Een Franse opname zet culture/set?c=fr-BE, en
// daarna staat de opnamegebruiker bij elke volgende aanmelding op Frans — ook voor wie daarna met die gebruiker werkt.
// De gedeelde meldAan kiest de tenant sinds adm-appkit 60b387f taalonafhankelijk; hier zetten we de taal na het
// aanmelden altijd terug op Nederlands, zodat een ronde niet in de taal van de vorige blijft hangen.
export const meldAan = async (page, user, ww, kiesTenant) => {
  await _meldAan(page, PAKKET.basis, user, ww, kiesTenant, PAKKET.tenant);
  await page.goto(`${PAKKET.basis}/culture/set?c=nl-BE`);
  await page.waitForLoadState('networkidle');
};

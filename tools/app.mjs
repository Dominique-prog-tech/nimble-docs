// ── DE INSTELLINGEN VAN NIMBLE voor de filmmotor ──────────────────────────────────────────────────────────
//
// Wat in de filmtooling naar Nimble zelf wijst: de poort, de klant, waar de geheimen staan, waar de repo staat.
// De motor zelf staat in adm-appkit/tools/filmgenerator (sinds 16/10/2026, gedeeld met CreditSoft).
//
// ⚠️ Vaste demo-records worden in het draaiboek op NAAM of NUMMER gezocht (Residentie Parkzicht VME, OFF-2026-0003),
// niet op id: de demo-generator maakt bij een nieuwe aanmaak nieuwe id's, de namen en nummers blijven.
export const PAKKET = {
  naam:    'Nimble',
  basis:   'http://localhost:5145',
  repo:    '/Users/dominique/projects/adm-nimble',
  // Het wachtwoord komt uit user-secrets van de Host (UserSecretsId in Nimble.Host.Web.csproj). Nooit printen.
  secrets: `${process.env.HOME}/.microsoft/usersecrets/fde8d6e2-f9e0-4397-bd76-17900e705b69/secrets.json`,
  cfg:     '/Users/dominique/projects/adm-nimble/src/Host/Nimble.Host.Web/appsettings.Development.json',
  tenant:  'demo',
  help:    '/Users/dominique/projects/adm-nimble/src/Host/Nimble.Host.Web/Help/NimbleHelpProvider.cs',
};
export const BASIS = PAKKET.basis;
export const ID = {};

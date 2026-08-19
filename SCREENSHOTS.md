# Openstaande screenshots

Werklijst die ik (Claude) bijhoud zodra een scherm vrijgegeven wordt en de handleiding
er een NL/FR-pagina voor krijgt. Elke regel = één plek in de handleiding waar een
schermafbeelding nog ontbreekt. Dit bestand staat bewust **buiten** `docs/` (mkdocs'
`docs_dir`) — het wordt dus nooit mee gepubliceerd op docs.nimble-erp.eu.

**⚠️ Sinds 19/08/2026 hoeft dit niet meer met de hand, en sinds diezelfde dag werkt het ook echt.**
`adm-nimble/docs/tools/gen-screenshots.mjs` maakt de beelden automatisch — overgenomen uit CreditSoft,
dat dit al langer zo doet. Draaien, vanuit de hoofdmap van `adm-nimble`:

```bash
node docs/tools/gen-screenshots.mjs
```

Meer is er niet: het script haalt de aanmelding zelf uit de user-secrets van de Host
(`Auth:InitialAdmin:UserName/Password`). Dat is de dev-geheimenkluis van .NET — buiten de repo, per
machine — dus er komt nog steeds geen geheim in git. Wil je een andere login, zet dan
`NIMBLE_DOCS_GEBRUIKER` / `NIMBLE_DOCS_WACHTWOORD` in de omgeving; die gaan vóór.

Het script meldt zichzelf aan, kiest de demo-tenant, zet de taal per beeld en schrijft rechtstreeks
naar `docs/images/`. **Het weigert te draaien buiten een demo-tenant** — thomadak en bavo dragen
echte klantnamen, en deze handleiding staat publiek. De demo-tenant bestaat sinds 19/08/2026 en wordt
gevuld met een knop op `/beheer/conversie` (alleen zichtbaar op tenantcode `demo`).

Wat het script niet kan, doet Dominique nog met de hand: beeld maken, in `docs/images/<sectie>/...`
zetten, de `![...](../images/...)`-referentie toevoegen in zowel de NL- als de FR-pagina, en de regel
hieronder verplaatsen naar "Afgewerkt".

Formaat: `- [ ] pagina.md (+ .fr.md) — locatie in de pagina — wat de screenshot moet tonen`

## Open

- [ ] `fiches.fr.md` — onder "Enregistrer, annuler, supprimer" — **enkel de FR nog.** Het beeld bestaat (`fiche-archiveren-bevestiging-fr.png`) maar is niet geplaatst: het bevestigingsvenster van de AppKit is Nederlands, óók op een Franse pagina ("Archiveren?", "U archiveert …", knoppen "Archiveren"/"Annuleren"). Die teksten staan hardgecodeerd in `Adm.AppKit.Web`, niet in een vertaaltabel. Gemeld aan de ADM One-sessie op 19/08/2026. Plaatsen zodra dat opgelost is — een Franse handleiding met een Nederlands venster leest als een fout in de handleiding, terwijl de fout in de app zit.
- [ ] `fiches.md` (+ `.fr.md`) — onder "Wie mag wijzigen" — dezelfde fiche zonder bewerkrecht: velden grijs, enkel de terugknop
- [ ] `settings/company-profile.md` — onder "Het scherm openen" — de Bedrijfsfiche-pagina met de vijf kaarten (Identiteit, Contact, Adres, Bank, Documenten & huisstijl)
- [ ] `settings/company-profile.md` — onder "Gegevens ophalen uit de KBO" — het BTW-veld met de Ophalen-knop, vóór/na klikken
- [ ] `relations.md` — onder "Het scherm openen" — de relatielijst met de kolommen en de knop Nieuwe relatie
- [ ] `relations.md` — onder "Blok Identificatie" — de relatiefiche met het Identificatie-blok en de Ophalen-knop (KBO)
- [ ] `relations.md` — onder "Blok Adres" — het Adres-blok met een opengeklapte postcodelijst
- [ ] `relations.md` — onder "Blok Classificatie" — het Classificatie-blok met Categorie, Bron en Verantwoordelijke ingevuld
- [ ] `relations.md` — onder "Blok Afkomstig van een lead" — een omgezette klant met het volledige herkomstblok
- [ ] `relations.md` — onder "Tabblad Contactpersonen" — het tabblad met twee gekoppelde personen, rol en e-mail ingevuld
- [ ] `relations.md` — onder "Het scherm openen" (journaal-bullet) — de journaal-rail open op het tabblad Contacten
- [ ] `crm/contactpersonen.md` — onder "Het scherm openen" — de contactenlijst met de kolom Bedrijven gevuld
- [ ] `crm/contactpersonen.md` — onder "Blok Bedrijven" — de fiche met twee gekoppelde bedrijven en verschillende rollen
- [ ] `crm/contactpersonen.md` — onder "De lijst" (journaal-bullet) — de journaal-rail open met de Taken-tab
- [ ] `administration/contact-functions.md` — onder "Het scherm openen" — de lijst met contactfuncties
- [ ] `administration/conversion.md` — onder "Het scherm openen" — het conversiescherm met de Firebird-broncontrole en de startknop
- [ ] `administration/platform-management.md` — onder "Het scherm openen" — de Platformbeheer-hub met de tegelgroepen (zoals ze zichtbaar zijn met volle rechten)
- [ ] `administration/article-families.md` — onder "Het scherm openen" — de familielijst met een uitgeklapte subfamilie
- [ ] `administration/units.md` — onder "Het scherm openen" — de eenhedenlijst
- [ ] `administration/master-data.md` — onder "Het scherm openen" — één representatieve sorteerbare lijst (bv. productiestatus) met de sleep-volgorde
- [ ] `administration/lead-sources.md` — onder "Het scherm openen" — de leadbronnenlijst
- [ ] `administration/lead-request-types.md` — onder "Een type aanmaken of bewerken" — het bewerkvenster met de omvangvraag-sectie en de live-preview
- [ ] `administration/lead-status.md` — onder "Het scherm openen" — de leadstatuslijst met de vaste sleutels
- [ ] `administration/lead-status.md` — onder "Volgorde en zichtbaarheid op het bord" — het bewerkvenster met de Volgorde-spinner en het Tonen-op-het-bord-vinkje
- [ ] `crm/leads.md` — onder "Bord" — het leadbord met meerdere kolommen, een kaart met aandacht-markering
- [ ] `crm/leads.md` — onder "Lijst" — de leadlijst met de kolommen
- [ ] `crm/leads.md` — onder "Blok Contact" — de leadfiche met het Contact-blok en de Ophalen-knop (KBO)
- [ ] `crm/leads.md` — onder "Blok De aanvraag" — de leadfiche met het blok De aanvraag, inclusief een zichtbare omvangvraag
- [ ] `crm/leads.md` — onder "Blok Opvolging" — de leadfiche met het blok Opvolging, status op Verloren zodat Verliesreden zichtbaar is
- [ ] `crm/leads.md` — onder "Tabblad Journaal" — de leadfiche met het tabblad Taken open (sinds 19/08/2026 staan Taken, Logboek en Bijlagen als aparte tabbladen, niet meer gestapeld onder één Journaal-tab)
- [ ] `crm/leads.md` — onder "Leads via uw website" — het Logboek van een lead met een binnengekomen website-aanvraag
- [ ] `settings/company-profile.md` — onder "Website-leads naar" — de kaart Contact met het veld Website-leads naar en de uitleg eronder
- [ ] `crm/tasks.md` — onder "Mijn taken of alle taken" — het takenscherm met de schakelaar en een gevulde lijst
- [ ] `crm/tasks.md` — onder "Taken die vanzelf verschijnen" — een automatisch aangemaakte opvolgtaak met het codelabel zichtbaar
- [ ] `administration/lead-follow-up.md` — onder "Het scherm openen" — het instellingenscherm met de schakelaar en het dagenveld
- [ ] `administration/account-categories.md` — onder "Het scherm openen" — de lijst met klantcategorieën
- [ ] `inventory/articles.md` — onder "De lijst" — de artikellijst met de kolommen en een gevulde familie
- [ ] `inventory/articles.md` — onder "Een artikel aanmaken of bewerken" — de artikelfiche met de verplichte velden (sinds 19/08/2026 een pagina, geen venster)
- [ ] `inventory/articles.md` — onder "De rail Stock" — de opengeklapte stockrail met de opmerking over het oude pakket
- [ ] `bijlagen.md` — onder "Een bestand toevoegen" — het tabblad Bijlagen met enkele bestanden, waarvan minstens één foto met miniatuur
- [ ] `bijlagen.md` — onder "Het tabblad openen" — het journaalpaneel met de tabkeuze open, zodat Bijlagen tussen de andere tabbladen staat

## Afgewerkt

Alle vier gemaakt met `gen-screenshots.mjs` op 19/08/2026, uit de demo-tenant, NL én FR.

- [x] `fiches.md` (+ `.fr.md`) — onder "Tabbladen" — `fiche-tabbladen.png`
- [x] `lijsten-filteren.md` (+ `.fr.md`) — onder "De filterbouwer" — `lijst-werkbalk-filterbouwer.png`
- [x] `lijsten-filteren.md` (+ `.fr.md`) — onder "Meerdere voorwaarden" — `filterbouwer-twee-voorwaarden.png`
- [x] `lijsten-filteren.md` (+ `.fr.md`) — onder "De filterbalk" — `filterbalk-actieve-voorwaarde.png`
- [x] `fiches.md` — onder "Opslaan, annuleren, verwijderen" — `fiche-archiveren-bevestiging.png` (NL; de FR staat nog open, zie hierboven)

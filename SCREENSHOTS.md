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

> **Waarom deze nog niet gemaakt zijn** (stand 22/08/2026, na 24 van de 40). Ze vallen in twee groepen,
> en dat onderscheid bepaalt wat er moet gebeuren:
>
> **A · Het script kán ze, ze staan gewoon nog niet in de tabel** — een tabklik of een pop-up meer:
> het tabblad Contactpersonen op een relatie, de journaal-rail op de twee lijsten, het tabblad Journaal
> op een lead, en het bewerkvenster van Leadstatus. Volgende ronde.
>
> **B · De demo-tenant heeft de gegevens niet.** Geen taken, geen bijlagen, geen ingevulde bedrijfsfiche,
> geen omgezette lead en geen website-lead. Die beelden komen er pas wanneer de generator dat erbij maakt
> — dat is werk aan `DemoDataGenerator`, niet aan het script. Idem voor "de fiche zonder bewerkrecht":
> daar is een gebruiker zónder bewerkrecht voor nodig, en de demo-tenant heeft geen gebruikers.
>
> ⚠️ De regel over `administration/lead-request-types.md` spreekt nog van een **bewerkvenster**. Dat is
> sinds 22/08/2026 een eigen pagina; de regel hoort herschreven te worden vóór er een beeld bij gemaakt
> wordt, anders schiet je iets wat niet meer bestaat.


- [ ] `fiches.md` (+ `.fr.md`) — onder "Wie mag wijzigen" — dezelfde fiche zonder bewerkrecht: velden grijs, enkel de terugknop
- [ ] `settings/company-profile.md` — onder "Het scherm openen" — de Bedrijfsfiche-pagina met de vijf kaarten (Identiteit, Contact, Adres, Bank, Documenten & huisstijl)
- [ ] `settings/company-profile.md` — onder "Gegevens ophalen uit de KBO" — het BTW-veld met de Ophalen-knop, vóór/na klikken
- [ ] `relations.md` — onder "Blok Afkomstig van een lead" — een omgezette klant met het volledige herkomstblok
- [ ] `relations.md` — onder "Tabblad Contactpersonen" — het tabblad met twee gekoppelde personen, rol en e-mail ingevuld
- [ ] `relations.md` — onder "Het scherm openen" (journaal-bullet) — de journaal-rail open op het tabblad Contacten
- [ ] `crm/contactpersonen.md` — onder "De lijst" (journaal-bullet) — de journaal-rail open met de Taken-tab
- [ ] `administration/lead-request-types.md` — onder "Een type aanmaken of bewerken" — het bewerkvenster met de omvangvraag-sectie en de live-preview
- [ ] `administration/lead-status.md` — onder "Volgorde en zichtbaarheid op het bord" — het bewerkvenster met de Volgorde-spinner en het Tonen-op-het-bord-vinkje
- [ ] `crm/leads.md` — onder "Tabblad Journaal" — de leadfiche met het tabblad Taken open (sinds 19/08/2026 staan Taken, Logboek en Bijlagen als aparte tabbladen, niet meer gestapeld onder één Journaal-tab)
- [ ] `crm/leads.md` — onder "Leads via uw website" — het Logboek van een lead met een binnengekomen website-aanvraag
- [ ] `settings/company-profile.md` — onder "Website-leads naar" — de kaart Contact met het veld Website-leads naar en de uitleg eronder
- [ ] `crm/tasks.md` — onder "Mijn taken of alle taken" — het takenscherm met de schakelaar en een gevulde lijst
- [ ] `crm/tasks.md` — onder "Taken die vanzelf verschijnen" — een automatisch aangemaakte opvolgtaak met het codelabel zichtbaar
- [ ] `bijlagen.md` — onder "Een bestand toevoegen" — het tabblad Bijlagen met enkele bestanden, waarvan minstens één foto met miniatuur
- [ ] `bijlagen.md` — onder "Het tabblad openen" — het journaalpaneel met de tabkeuze open, zodat Bijlagen tussen de andere tabbladen staat

## Afgewerkt

Alle vier gemaakt met `gen-screenshots.mjs` op 19/08/2026, uit de demo-tenant, NL én FR.

Vijftien erbij op 22/08/2026, zelfde script, zelfde tenant, NL én FR — de lijst- en beheerschermen die met de demo-gegevens vanzelf gevuld zijn.

En negen blokken op een fiche — die worden uitgesneden op de kaart zelf, want de handleiding
bespreekt ze één voor één en een volledig scherm per alinea leest als ruis.

- [x] `relations.md` — `relatie-blok-identificatie.png`
- [x] `relations.md` — `relatie-blok-adres.png`
- [x] `relations.md` — `relatie-blok-classificatie.png`
- [x] `crm/contactpersonen.md` — `contactpersoon-blok-bedrijven.png`
- [x] `administration/conversion.md` — `conversie-scherm.png`
- [x] `crm/leads.md` — `lead-blok-contact.png`
- [x] `crm/leads.md` — `lead-blok-aanvraag.png`
- [x] `crm/leads.md` — `lead-blok-opvolging.png`
- [x] `inventory/articles.md` — `artikel-fiche.png`

- [x] `relations.md` — `relaties-lijst.png`
- [x] `crm/contactpersonen.md` — `contactpersonen-lijst.png`
- [x] `administration/contact-functions.md` — `contactfuncties-lijst.png`
- [x] `administration/platform-management.md` — `platformbeheer-hub.png`
- [x] `administration/article-families.md` — `families-lijst.png`
- [x] `administration/units.md` — `eenheden-lijst.png`
- [x] `administration/master-data.md` — `productiestatus-lijst.png`
- [x] `administration/lead-sources.md` — `leadbronnen-lijst.png`
- [x] `administration/lead-status.md` — `leadstatus-lijst.png`
- [x] `crm/leads.md` — `leads-bord.png`
- [x] `crm/leads.md` — `leads-lijst.png`
- [x] `administration/lead-follow-up.md` — `leadopvolging-scherm.png`
- [x] `administration/account-categories.md` — `klantcategorieen-lijst.png`
- [x] `inventory/articles.md` — `artikelen-lijst.png`
- [x] `inventory/articles.md` — `artikel-stockrail.png`

- [x] `fiches.md` (+ `.fr.md`) — onder "Tabbladen" — `fiche-tabbladen.png`
- [x] `lijsten-filteren.md` (+ `.fr.md`) — onder "De filterbouwer" — `lijst-werkbalk-filterbouwer.png`
- [x] `lijsten-filteren.md` (+ `.fr.md`) — onder "Meerdere voorwaarden" — `filterbouwer-twee-voorwaarden.png`
- [x] `lijsten-filteren.md` (+ `.fr.md`) — onder "De filterbalk" — `filterbalk-actieve-voorwaarde.png`
- [x] `fiches.md` (+ `.fr.md`) — onder "Opslaan, annuleren, verwijderen" — `fiche-archiveren-bevestiging.png`.
      De FR stond een halve dag open: het venster van de AppKit was Nederlands, óók op een Franse pagina.
      Opgelost in AppKit 0.209.0, opnieuw geschoten en geplaatst op 19/08/2026.

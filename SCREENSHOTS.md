# Openstaande screenshots

Werklijst die ik (Claude) bijhoud zodra een scherm vrijgegeven wordt en de handleiding
er een NL/FR-pagina voor krijgt. Elke regel = één plek in de handleiding waar een
schermafbeelding nog ontbreekt. Dit bestand staat bewust **buiten** `docs/` (mkdocs'
`docs_dir`) — het wordt dus nooit mee gepubliceerd op docs.nimble-erp.eu.

**⚠️ Sinds 19/08/2026 hoeft dit niet meer met de hand.** `adm-nimble/docs/tools/gen-screenshots.mjs`
maakt de beelden automatisch — overgenomen uit CreditSoft, dat dit al langer zo doet. Draaien:

```bash
NIMBLE_DOCS_WACHTWOORD='…' node docs/tools/gen-screenshots.mjs
```

Het script meldt zichzelf aan, kiest de demo-tenant, zet de taal per beeld en schrijft rechtstreeks
naar `docs/images/`. **Het weigert te draaien buiten een demo-tenant** — thomadak en bavo dragen
echte klantnamen, en deze handleiding staat publiek.

**Twee dingen ontbreken nog vóór het kan draaien:** er is nog géén demo-tenant in Nimble, en het
wachtwoord van de testgebruiker moet in de omgeving staan. Zolang dat niet geregeld is, blijft de
oude werkwijze gelden: Dominique maakt de screenshots, plaatst ze in `docs/images/<sectie>/...`,
voegt de `![...](../images/...)`-referentie toe in zowel de NL- als de FR-pagina, en vinkt de regel
hieronder af (verplaatst naar "Afgewerkt").

Formaat: `- [ ] pagina.md (+ .fr.md) — locatie in de pagina — wat de screenshot moet tonen`

## Open

- [ ] `fiches.md` (+ `.fr.md`) — onder "Tabbladen" — een relatiefiche met de twee groepen tabbladen zichtbaar (links Fiche/Contactpersonen, rechts Contacten/Taken/Logboek/Bijlagen)
- [ ] `fiches.md` (+ `.fr.md`) — onder "Opslaan, annuleren, verwijderen" — de bevestigingsvraag "Archiveren?" met de naam van het record erin
- [ ] `fiches.md` (+ `.fr.md`) — onder "Wie mag wijzigen" — dezelfde fiche zonder bewerkrecht: velden grijs, enkel de terugknop
- [ ] `lijsten-filteren.md` (+ `.fr.md`) — onder "De filterbouwer" — de werkbalk van een lijst met de trechterknop aangeduid (Artikelen leent zich het best)
- [ ] `lijsten-filteren.md` (+ `.fr.md`) — onder "Meerdere voorwaarden" — het venster Filterbouwer met twee voorwaarden en de En/Of-knop zichtbaar
- [ ] `lijsten-filteren.md` (+ `.fr.md`) — onder "De filterbalk: zien waarop u filtert" — de balk boven de lijst met een uitgeschreven voorwaarde, vinkje en kruisje
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

*(nog leeg)*

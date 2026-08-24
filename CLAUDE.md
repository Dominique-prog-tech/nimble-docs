# Context voor Claude — Nimble Documentatie

Deze file leid je telkens wanneer je in deze repo werkt. Lees hem voor je begint.

## Doel van deze repo

De officiële handleiding van **Nimble**, gepubliceerd op
<https://docs.nimble-erp.eu>.

Nimble is een ERP-platform voor projectgebaseerde KMO's (bouw, installatie,
technische uitvoering): projectbeheer, planning, werkorders, offertes,
vorderingsstaten, artikel- en stockbeheer, CRM/relaties.

**Migratie:** we bouwen de nieuwe app (**.NET / Blazor** in `adm-nimble`) naast
de legacy (Delphi/UniGUI + Firebird). De handleiding volgt het **nieuwe**
platform en groeit mee per gevalideerd scherm — niet de oude Delphi-UI.

## Doelpubliek

**Externe klanten die Nimble afnemen** — projectleiders, zaakvoerders en
administratief personeel. Professionals in hun vakgebied, geen IT-developers.

Uitzondering: enkele **Beheer**-pagina's (bv. Conversie) zijn voor
ADM-operators; vermeld dat duidelijk bovenaan de pagina.

### Implicaties voor schrijfstijl
- **U-vorm**, professioneel maar toegankelijk.
- **Korte zinnen**, één gedachte per zin.
- **Vakjargon mag** (vorderingsstaat, ploeg, projectfase), uitleg via
  de begrippenlijst waar nodig.
- **Geen IT-jargon** zonder context (wel oké op operator-pagina's zoals Conversie).
- **Concreet en actiegericht**: "Klik op X", "Vul Y in".

## Bronnen op deze machine

### Nieuwe app (autoritatief voor nieuwe schermen)
- **Pad**: `~/projects/adm-nimble/`
- **Repo**: ADM-Concept/adm-nimble
- **Schermen**: `src/Host/Nimble.Host.Web/Components/Pages/*.razor`
- **Nav**: `Program.cs` → `AddNavItems` / `AddNavSection`
- **Context-help**: `src/Host/Nimble.Host.Web/Help/NimbleHelpProvider.cs`
  (route → korte intro + docs-slug). **DoD:** scherm klaar ⇒ Entry in de
  provider + docs-pagina NL/FR + nav-item hier. **Elk hoofdscherm van een
  module krijgt zijn eigen Entry — geen uitzonderingen** (10/08/2026: Leads
  bleek te ontbreken ondanks een uitgewerkt scherm).

### Delphi-source (read-only, legacy-referentie)
- **Pad**: `~/projects/platform-nimble-delphi/` (of Windows-pad uit eerdere setup)
- **Repo**: ADM-Concept/platform-nimble-delphi
- Alleen raadplegen voor migratie-gedrag / veldmapping — **niet** als bron
  voor UI-teksten van nieuwe schermen.

**NOOIT** Write/Edit op `.pas` / `.dfm` (Windows-1252 encoding).

## Docs ↔ app koppeling

| App-route | Docs-slug | HelpProvider-prefix |
|---|---|---|
| `/relaties` | `relations` | `relaties` |
| `/crm/leads` | `crm/leads` | `crm/leads` |
| `/beheer/conversie` | `administration/conversion` | `beheer/conversie` |
| `/administration` | `administration/platform-management` | `administration` |
| `/administration/company-profile` | `settings/company-profile` | `administration/company-profile` |
| `/administration/families`, `/voorraad/families` | `administration/article-families` | `administration/families`, `voorraad/families` |
| `/administration/eenheden`, `/voorraad/eenheden` | `administration/units` | `administration/eenheden`, `voorraad/eenheden` |
| `/administration/lookups/{key}` (nog niet vrijgegeven) | `administration/master-data` | `administration/lookups` |
| `/administration/lookups/leadbronnen` | `administration/lead-sources` | `administration/lookups/leadbronnen` |
| `/administration/types-aanvraag` | `administration/lead-request-types` | `administration/types-aanvraag` |
| `/administration/lead-status` | `administration/lead-status` | `administration/lead-status` |

URL-patroon: `https://docs.nimble-erp.eu[/fr]/{slug}/`

## Modulestructuur (nieuw platform)

De docs-navigatie volgt de **nieuwe** sidebar. Alleen **klare** pagina's
staan in `mkdocs.yml` → `nav`. Skelet/TODO van de oude Delphi-scan blijft
op schijf staan tot het vervangen is, maar komt **niet** in de nav.

1. **Relaties** — klanten & leveranciers
2. **Voorraad** — artikelen, families, eenheden *(nog te documenteren)*
3. **Werk** — projecten, werkorders, werkbonnen, planning, medewerkers, ploegen
4. **Verkoop** — offertes, facturen
5. **Inkoop** — bestellingen
6. **Beheer** — tenants, gebruikers, rollen, conversie, prullenbak, actielogboek

## Vaktermen

- **Relatie** — klant en/of leverancier (één fiche, twee vlaggen).
- **Tenant** — één KMO-klant op het multi-tenant platform (eigen database).
- **Conversie** — eenmalige/herhaalbare import Firebird → PostgreSQL.
- **Vorderingsstaat** — deelfactuur op basis van uitvoeringsvoortgang.
- **Ploeg** — uitvoeringsteam.
- **Artikel** — verhandelbare eenheid (materiaal, uren, post).

## Conventies

- Bestanden: **kleine letters, koppeltekens, geen accenten**
- i18n: `pagina.md` = NL, `pagina.fr.md` = FR
- Eén `# H1` per pagina; Material-admonitions (`tip` / `warning` / `info`)
- Screenshots: PNG, max 1920px; placeholder oké tot Dominique levert

### Vormgeving — vloot-afspraak

De drie docs-sites (CreditSoft, Nimble, CleanOps) delen één opzet. De afspraak én de drie gemeten
valkuilen staan in **`~/projects/adm-appkit/docs/docs-site-vormgeving.md`** — lees dat vóór je iets aan
de vorm wijzigt, en **stem een wijziging af met de andere twee**.

Kort: merkkleur uit `logo.svg`, header wit in licht en zwart in donker, en drie valkuilen die er alle
drie uitzien alsof alles klopt (een `:root`-regel die niet werkt, een palet dat op twee plaatsen staat,
en meten binnen een seconde na een themawissel). **Niet hier overschrijven — verwijs ernaar.**

## Een pagina schrijven

### De schrijfregels — vloot-afspraak

**Bron: `~/projects/adm-appkit/docs/handleiding-schrijfregels.md`.** Lees dat vóór je aan een pagina
begint. Zeven regels die geen enkele controle kan meten — waaronder de twee die hier al misgingen:

- een nieuwe **functie** op een **bestaand** scherm ontsnapt aan de hele deploy-poort, want dat scherm
  had al een help-entry en al een pagina. Voeg je iets toe, ga dan zélf naar de handleidingpagina en
  de help-entry van dat scherm;
- **beschrijf wat er ís, niet wat er veranderd is** — met de *impliciete* vergelijking als valstrik.
  "Het type opent op een eigen pagina" bevat geen enkel verboden woord en is tóch een vergelijking met
  een venster dat de lezer nooit gezien heeft. Zo'n zin veroudert stil; een verandering is nieuws op
  het moment dat ze gebeurt, en dat hoort in de release notes.

**Niet hier overschrijven — verwijs ernaar.** Vind je dat een regel bij Nimble anders moet liggen, vul
dan het gedeelde bestand aan (met erbij wát er misging), zodat CreditSoft en CleanOps het meekrijgen.

### Schermafbeeldingen

Ze worden **automatisch** gemaakt door `adm-nimble/docs/tools/gen-screenshots.mjs`, uit de
**demo-tenant** — het script weigert op thomadak of bavo, want die dragen echte klantnamen en deze
site staat publiek. Draaien, vanuit de hoofdmap van `adm-nimble`:

```bash
node docs/tools/gen-screenshots.mjs [naam-van-een-schot]
```

De aanmelding komt uit de user-secrets van de Host; er staat geen wachtwoord in het script.

**Waar een beeld nog moet komen, staat een markering ín de pagina:**

```markdown
<!-- AFBEELDING: wat het beeld moet tonen — en, als het er nog niet is, waaróm niet -->
```

⚠️ **Niet in een lijst ernaast.** Tot 24/08/2026 stond dit in een `SCREENSHOTS.md` in de wortel.
Dat werkt alleen voor wie weet dat die lijst bestaat — wie de eindfase doet, opent een pagina. Een
markering in de tekst verhuist bovendien mee bij het herschrijven en verdwijnt vanzelf zodra het
beeld er staat. Sinds AppKit 0.274.0 meldt de deploy-poort zo'n apart manifestbestand als bevinding.

Zet in de markering ook de **reden** wanneer een beeld nog niet gemaakt kán worden ("vraagt taken in
de demo-tenant"). Anders leest een lege plek als achterstand terwijl het een besluit is.

### De flow

Gebruik **`/adm-toolkit:handleiding-schrijven <scherm>`**. Die loopt de hele procedure af: de source
lezen, de pagina-template, NL én FR, de `nav` in `mkdocs.yml`, en de entry in de hulplade van de app.

Daar staan ook de stijlregels die vroeger hier stonden — geen verzonnen functionaliteit, geen
Amerikaanse SaaS-toon, actief formuleren, en zelf geen schermafdrukken plaatsen.

> Tot 15/08/2026 stond die template hier uitgeschreven, en identiek in de twee andere docs-repo's:
> 113 regels die drie keer onderhouden moesten worden. De **schrijfflow** hierboven blijft wél
> repo-eigen — die verschilt echt per platform.

## De lijst / Velden en functies

## Publicatie

- Live: **https://docs.nimble-erp.eu**
- Push naar `main` → GitHub Actions → GitHub Pages
- Workflow: `.github/workflows/deploy.yml`

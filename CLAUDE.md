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

## Pagina-template

```markdown
# [Schermnaam]

[Eén alinea: wanneer/waarom.]

## Het scherm openen

## De lijst / Velden en functies

## Veelgemaakte fouten

!!! warning
    …

## Zie ook
```

⚠️ **Scope (10/08/2026): niet enkel het hoofdscherm.** De help-lade (het "?"-paneel in de app)
koppelt aan de **route** van het hoofdscherm (lijst/bord) en toont enkel een korte intro + link
hierheen — een bewerk-/aanmaakformulier zonder eigen route erft automatisch diezelfde
lade-inhoud. **Deze pagina zelf mag zich daar niet toe beperken**: documenteer ook de volledige
functionaliteit van vensters die rechtstreeks van dit hoofdscherm afgeleid zijn (typisch het
bewerkformulier/de fiche, ook al is dat een popup zonder eigen URL) — elk veld, elke
verplichte-veld-regel, elke workflow-stap die de gebruiker daar tegenkomt.

## Wat NIET doen

- Geen functionaliteit verzinnen die niet in de Blazor-source staat.
- Geen oude Delphi-menu's documenteren alsof ze het nieuwe platform zijn.
- Geen Amerikaanse SaaS-toon. Belgisch-professioneel.
- Geen lange paragrafen — stappen of lijsten.

## Publicatie

- Live: **https://docs.nimble-erp.eu**
- Push naar `main` → GitHub Actions → GitHub Pages
- Workflow: `.github/workflows/deploy.yml`

# Context voor Claude — Nimble Documentatie

Deze file leid je telkens wanneer je in deze repo werkt. Lees hem voor je begint.

## Doel van deze repo

De officiële handleiding van **Nimble**, een Delphi-platform voor
project-gebaseerd werk (bouw, installatie, projectuitvoering).
Het ondersteunt projectbeheer, planning, CRM, offertes, facturatie en
boekhouding.

**Historische noot**: het broncode-project heet intern `DamcErp.dpr`.
Nimble is de productnaam waaronder het verkocht wordt.

## Doelpubliek

**Externe klanten die het Nimble-platform afnemen** — projectleiders,
zaakvoerders en administratief personeel van projectgebaseerde
bedrijven (bouw, installatie, technische uitvoering).
Professionals in hun vakgebied, geen IT-developers.

### Implicaties voor schrijfstijl
- **U-vorm**, professioneel maar toegankelijk.
- **Korte zinnen**, één gedachte per zin.
- **Vakjargon mag** (vorderingsstaat, ploeg, projectfase), uitleg via
  de begrippenlijst waar nodig.
- **Geen IT-jargon** zonder context.
- **Concreet en actiegericht**: "Klik op X", "Vul Y in".

## Bronnen op deze machine

### Delphi-source (read-only)
- **Pad**: `D:\@newProjects\platform-nimble-delphi\`
- **Repo**: ADM-Concept/platform-nimble-delphi (private)
- **Project-bestand**: `DamcErp.dpr` (oude interne naam)
- **Autoritieve bron** voor: schermen, velden, validaties, foutmeldingen,
  bedrijfsregels, menu-structuur.

**Bij elk docs-onderwerp: lees relevante .pas/.dfm bestanden eerst.**
Verzin nooit functionaliteit — markeer onzekerheden met `[TODO]`.

### Belangrijke regel rond Delphi-source
**NOOIT** Write of Edit gebruiken op `.pas` of `.dfm` bestanden — Windows-1252/
ANSI encoding zou beschadigd raken. Alleen Read.

## Sleutel-source-bestanden

| Vraag over... | Lees... |
|---|---|
| Menu-structuur, sidebar | `uSidebarStyling.pas` — functie `GetNimbleSidebar` |
| Hoofdvenster, hoofdform | `Main.pas` / `Main.dfm` |
| Login-flow | `Login.pas` / `Login.dfm` |
| Data-laag algemeen | `MainModule.pas` / `MainModule.dfm` |
| CRM-data | `CrmModule.pas` / `CrmModule.dfm` |
| Database-schema | `database-schema.sql` |
| Globale constants/enums | `ProjectConstants.pas` |

## Modulestructuur (matchend met sidebar)

De docs-navigatie volgt **één-op-één de sidebar** van het platform:

1. **Aan de slag** — installatie, eerste aanmelding, interface, dashboard
2. **Werk** — taken, foto's-inbox, agenda, planning uitvoering, archief
3. **Projecten** — projectdashboard, projectenlijst, artikelen
4. **CRM** — relaties, contacten, leveranciers, verlof
5. **Offertes** — offertedashboard, offertelijst
6. **Financieel** — verkoop, vorderingsstaten, facturen, herinneringen, aankopen
7. **Beheer** — alle configuratie en stamgegevens
8. **Mijn gebruiker** — profiel, platform-overzicht, support, uitloggen
9. **Concepten** — begrippenlijst, workflow

## Vaktermen die uitleg verdienen

- **Project** — een werkopdracht met meerdere fases en deeluitvoeringen.
- **Vorderingsstaat** — periodieke factuur op basis van uitvoeringspercentage
  bij langlopende projecten (typisch in bouw).
- **Ploeg** — uitvoeringsteam (medewerkers + materiaal).
- **Artikel** — verhandelbare eenheid (materiaal, werkuren, post).
- **Relatie** — overkoepelende term voor klant of prospect in CRM.
- **Peppol** — Europees netwerk voor elektronische facturatie.
- **Exact Online** — externe boekhoudsoftware waarmee gekoppeld kan worden.

## Terminologie — consistent gebruiken

- "relatie" voor CRM (kan klant of prospect zijn) — niet "contact"
- "contact" specifiek voor contactpersoon bij een relatie
- "project" (niet: dossier of opdracht — Nimble is project-georiënteerd)
- "ploeg" (niet: team)
- "factuur" / "vorderingsstaat" (afhankelijk van type)
- "rappel" / "herinnering" — Nimble gebruikt "herinnering" in de UI

## Conventies voor docs

### Bestandsstructuur
- `docs/` — alle markdown-pagina's
- `docs/images/` — alle screenshots
- Map- en bestandsnamen: **kleine letters, koppeltekens, geen accenten**

### Screenshots
- Formaat: PNG voor UI met tekst, JPG voor foto's
- Resolutie: max 1920px breed
- Alt-text altijd beschrijvend

### Markdown
- Eén `# H1` per pagina (de paginatitel).
- `## H2` voor hoofdsecties, `### H3` voor subsecties.
- Admonitions (`!!! tip`, `!!! warning`, `!!! info`, `!!! danger`) volgens
  Material-syntax.

### Links
- Tussen pagina's: relatieve paden met `.md` extensie.
- Naar afbeeldingen: absoluut vanaf docs-root: `/images/bestand.png`.

## TODO-markers — conventie

```markdown
!!! info "TODO"
    Beschrijving van wat hier nog ingevuld moet worden.
    Bron in source: `bestand.pas`
```

## Schrijfflow per pagina

1. Lees de source (`.pas` en `.dfm`) van het bijhorende scherm.
2. Begrijp velden, knoppen, validaties.
3. Schrijf de pagina volgens de template hieronder.
4. Maak screenshot, plaats in `docs/images/`.
5. Verwijs vanuit de tekst.
6. Lokaal previewen via `mkdocs serve`.
7. Commit + push.

## Pagina-template

```markdown
# [Naam van het scherm]

[Eén alinea: wanneer en waarom gebruikt een gebruiker dit scherm.]

## Het scherm openen

[Hoe navigeren in Nimble.]

## Velden en functies

[Per veld of sectie een korte uitleg.]

## Veelgemaakte fouten

!!! warning
    [Wat gaat vaak fout, en hoe vermijd je dat.]

## Zie ook

- [Gerelateerde pagina](pad.md)
```

## Wat NIET doen

- Geen functionaliteit verzinnen die niet in de source staat.
- Geen Amerikaanse SaaS-toon. Belgisch-professioneel.
- Geen "the system will…". Actief: "U klikt op X, en Y verschijnt."
- Geen lange paragrafen — splits in stappen of lijsten.

## Publicatie-status

Op moment van setup: **GitHub Pages is nog NIET geactiveerd** voor deze repo.
Reden: repo is private en GitHub Pages vereist GitHub Pro voor private repos.

Wanneer publicatie gewenst is:
- Optie 1: repo public maken (gratis Pages).
- Optie 2: GitHub Pro nemen (~$4/mnd), repo blijft private.
- Daarna: Settings → Pages → Source: GitHub Actions.
- Voor custom domein: CNAME-record + docs/CNAME bestand.

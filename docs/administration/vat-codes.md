# Btw-codes

De btw-codes die u op een offerte- of factuurregel kiest. Elke code draagt een **tarief** én een
**categorie voor de e-factuur** — en die twee zijn niet hetzelfde.

## Het scherm openen

1. Klik onderaan in de zijbalk op **Platformbeheer**.
2. Klik in de groep **Verkoop** op de tegel **Btw-codes**.

## Waarom er een categorie naast het tarief staat

Drie van de gangbare codes rekenen **0 %** maar betekenen iets totaal anders: vrijgesteld, verlegd naar de
medecontractant, of intracommunautair. Op een factuur hoort bij elk een andere vermelding, en uw
boekhouding boekt ze op andere rekeningen. Wie enkel "0 %" bewaart, kan die factuur niet meer opmaken
zonder te raden.

Vandaar de kolom **Categorie e-factuur**. Die volgt de Peppol-standaard, het formaat waarin elektronische
facturen verstuurd worden.

## De lijst

| Kolom | Betekenis |
|---|---|
| **Volgorde** | Bepaalt de plaats in de keuzelijst |
| **Code** | De korte sleutel zoals u ze kent: `21%`, `6%`, `MC` |
| **Naam (NL)** en **Naam (FR)** | Wat er in de keuzelijst en op documenten verschijnt |
| **Tarief** | Het percentage. Nul bij verlegging, vrijstelling, intracommunautaire levering en uitvoer |
| **Categorie e-factuur** | De Peppol-categorie — zie hieronder |

![Het scherm Btw-codes met de startset, en bovenaan de knoppen Nieuwe code en Exporteren.](../images/btw-codes.png)

Dubbelklik op een rij om ze te bewerken, of klik op **Nieuwe code**. Met **Exporteren** haalt u de lijst binnen in een bestand.

## Een code aanmaken of bewerken

Er opent een venster **Nieuwe btw-code** of **Btw-code bewerken**.

| Veld | Wat u invult |
|---|---|
| **Volgorde** | De plaats in de keuzelijst. Een nieuwe code krijgt een voorstel achteraan |
| **Code** | Verplicht |
| **Tarief (%)** | Van 0 tot 100. Een nieuwe code begint op 21 |
| **Naam (NL)** en **Naam (FR)** | De naam in de basistaal van uw bedrijf is verplicht; de andere taal draagt het label *optioneel* |
| **Categorie e-factuur** | Verplicht. Een nieuwe code begint op *Standaardtarief (S)*. U kunt in de lijst zoeken |

Onder de velden herinnert het venster eraan dat tarief en categorie niet hetzelfde zeggen. Klik op
**Bewaren**, of op **Annuleren** om het venster te sluiten zonder te bewaren.

<!-- AFBEELDING: het venster Btw-code bewerken in tenant demo (code MC) met Volgorde, Code, Tarief (%), Naam (NL), Naam (FR, optioneel), Categorie e-factuur op Medecontractant (AE), de uitlegregel en de knoppen Bewaren, Annuleren en Verwijderen -->

### De categorieën

| Categorie | Wanneer |
|---|---|
| **Standaardtarief (S)** | Een gewoon tarief: 21 %, 12 %, 6 % |
| **Nultarief (Z)** | Een levering tegen 0 % die geen vrijstelling is |
| **Vrijgesteld (E)** | Vrijgesteld van btw |
| **Medecontractant (AE)** | De btw is verlegd naar de medecontractant |
| **Intracommunautair (K)** | Een intracommunautaire levering |
| **Uitvoer buiten de EU (G)** | Uitvoer buiten de Europese Unie |
| **Buiten de btw (O)** | Een verrichting die buiten het toepassingsgebied van de btw valt |

## Welke code een nieuwe regel krijgt

Een nieuwe regel op een offerte neemt de btw-code over van de laatste regel. Op de eerste regel van een lege
offerte stelt Nimble de bovenste code van deze lijst voor. Met de **Volgorde** bepaalt u dus zelf uw
standaardtarief.

## De startset

Elke nieuwe klant krijgt automatisch een Belgische startset:

| Code | Naam | Tarief | Categorie |
|---|---|---:|---|
| `21%` | 21% — standaardtarief | 21 % | Standaardtarief (S) |
| `6%` | 6% — renovatie en verbouwing | 6 % | Standaardtarief (S) |
| `12%` | 12% — verlaagd tarief | 12 % | Standaardtarief (S) |
| `MC` | Btw verlegd — medecontractant | 0 % | Medecontractant (AE) |
| `INTRA` | Intracommunautaire levering | 0 % | Intracommunautair (K) |
| `VRIJ` | Vrijgesteld van btw | 0 % | Vrijgesteld (E) |
| `EXPORT` | Uitvoer buiten de EU | 0 % | Uitvoer buiten de EU (G) |

Die set is een **vertrekpunt**, geen wet. Werkt u vooral aan renovaties, zet dan `6%` bovenaan — dan stelt
een nieuwe offerte dat tarief voor. Codes die u nooit gebruikt, mag u verwijderen.

!!! info "De startset komt maar één keer"
    Codes worden alleen aangemaakt bij een klant die er nog geen heeft. Verwijdert u er later een, dan komt
    die niet vanzelf terug. Wilt u ze terug, haal ze dan uit de prullenbak.

## Verwijderen

Open de code en klik rechts in het venster op **Verwijderen**. De vraag vóór het verwijderen zegt ook op
hoeveel offerte- en factuurregels de code nog staat, bijvoorbeeld *btw-code MC — die staat nog op 12 offerte-
en factuurregels*.

Na bevestiging komt de code in de [prullenbak](recycle-bin.md) en verdwijnt ze uit de keuzelijst. Regels die
ze al dragen, behouden hun tarief. Terughalen kan via de prullenbak.

## Veelgemaakte fouten

!!! warning
    - **Alle btw-codes verwijderen** — een offerteregel rekent dan 0 % btw, zonder waarschuwing. U merkt het
      pas wanneer de klant de offerte al heeft.
    - **Medecontractant als "0 %" bewaren** zonder de categorie *Medecontractant (AE)* — dan mist uw
      e-factuur de verplichte vermelding en klopt uw boekhouding niet.
    - **Het tarief van een bestaande code wijzigen** — dat verandert niets aan offertes die al opgemaakt
      zijn: die bewaren het percentage zoals het gerekend was. Dat is de bedoeling.

## Zie ook

- [Offertes](../sales/quotes.md) — waar u deze codes per regel kiest
- [Facturen](../sales/invoices.md)
- [Platformbeheer](platform-management.md)

# Stamgegevens (keuzelijsten)

Onder **Platformbeheer** beheert u ook de sorteerbare keuzelijsten die overal in Nimble in vervolgkeuzelijsten verschijnen. Deze pagina geeft een overzicht; elke lijst heeft ook een eigen pagina.

| Lijst | Groep | Gebruikt bij |
|---|---|---|
| [Productiestatus](production-statuses.md) | Projecten | Hoever het werk van een project staat |
| [Pipeline-status](pipeline-statuses.md) | Projecten | Hoever de verkoop van een project staat |
| [Projecttypes](project-types.md) | Projecten | Indeling van projecten (renovatie, nieuwbouw …) |
| [Klantcategorieën](account-categories.md) | Relaties | Indeling van klanten (particulier, architect …) |
| [Contactfuncties](contact-functions.md) | Relaties | Functietitels op contactpersonen |
| [Leadbronnen](lead-sources.md) | Leads | Waar een lead vandaan komt |

Deze zes lijsten werken op dezelfde manier.

## Het scherm openen

1. Klik onderaan in de zijbalk op **Platformbeheer**.
2. Klik in de groep **Projecten**, **Relaties** of **Leads** op de gewenste tegel.

![De sorteerbare lijst Productiestatus, met de volgorde per rij en een kleurstaal met kleurcode.](../images/productiestatus-lijst.png)

## De lijst

| Kolom | Betekenis |
|---|---|
| **Volgorde** | Bepaalt de volgorde in de keuzelijsten (laag = bovenaan) |
| **Code** | Korte, unieke code |
| **Naam (NL)** | Nederlandstalige naam |
| **Naam (FR)** | Franstalige naam |
| **Kleur** | Enkel bij Productiestatus: een gekleurd blokje met de kleurcode, bv. `#28AB45` |

Dubbelklik op een rij om ze te bewerken, of klik op **Nieuwe waarde**. Met **Exporteren** haalt u de lijst binnen in een bestand.

## Een waarde aanmaken of bewerken

Er opent een venster **Nieuwe waarde** of **Bewerken**.

1. De **Volgorde** wordt automatisch voorgesteld (hoogste + 10); pas ze aan om de waarde te verplaatsen.
2. Vul de **Code** in — verplicht.
3. Vul de naam in de **basistaal van uw bedrijf** in — verplicht. De andere taal draagt het label **optioneel**, bijvoorbeeld **Naam (FR, optioneel)**.
4. Enkel bij Productiestatus: kies een **Kleur** uit het palet, of **Geen kleur**.
5. Klik op **Bewaren**, of op **Annuleren** om het venster te sluiten zonder te bewaren.

Ontbreekt er iets, dan noemt een melding bovenaan het venster welke velden nog leeg zijn.

!!! tip "Stappen van 10"
    De volgorde springt standaard met 10 (10, 20, 30 …). Zo kunt u later makkelijk een waarde tussenvoegen zonder alles te hernummeren.

## Verwijderen

Open de waarde en klik rechts in het venster op **Verwijderen**. Na bevestiging komt de waarde in de [prullenbak](recycle-bin.md); bestaande records die ze gebruiken blijven behouden. Terughalen kan via de prullenbak.

## Veelgemaakte fouten

!!! warning
    - **Naam in de andere taal vergeten** — gebruikers in die taal zien dan de naam in de basistaal.
    - **Waarden verwijderen die nog in gebruik zijn** — de records behouden hun waarde, maar nieuwe records kunnen ze niet meer kiezen.

## Zie ook

- [Platformbeheer](platform-management.md)
- [Types aanvraag](lead-request-types.md) en [Leadfases](lead-status.md) — keuzelijsten voor leads met een eigen scherm
- [Btw-codes](vat-codes.md), [Offertestatus](quote-status.md) en [Factuurstatus](invoice-status.md) — keuzelijsten voor verkoop

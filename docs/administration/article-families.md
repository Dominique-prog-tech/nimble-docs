# Artikelfamilies

Met **artikelfamilies** deelt u uw artikelcatalogus in groepen in: families en (optioneel) subfamilies, maximaal twee niveaus. Zo filtert en rapporteert u makkelijker op soorten artikelen.

## Het scherm openen

1. Klik onderaan in de zijbalk op **Platformbeheer**.
2. Klik in de groep **Artikelen** op de tegel **Artikelfamilies**.

## De lijst

| Kolom | Betekenis |
|---|---|
| **Code** | Korte, unieke code van de familie |
| **Naam (NL)** | Nederlandstalige naam |
| **Naam (FR)** | Franstalige naam |
| **Bovenliggende familie** | De hoofdfamilie waaronder deze subfamilie valt; `—` = zelf een hoofdfamilie |

![De lijst met artikelfamilies, met bovenaan de knoppen Nieuwe familie en Exporteren.](../images/families-lijst.png)

Dubbelklik op een rij om ze te bewerken, of klik op **Nieuwe familie**. Met **Exporteren** haalt u de lijst binnen in een bestand.

## Een familie aanmaken of bewerken

Er opent een venster **Nieuwe familie** of **Familie bewerken**.

1. Vul de **Code** in — verplicht.
2. Vul de naam in de **basistaal van uw bedrijf** in — verplicht. De andere taal draagt het label **optioneel**, bijvoorbeeld **Naam (FR, optioneel)**.
3. Kies eventueel een **Bovenliggende familie (leeg = hoofdfamilie)**. Met het kruisje maakt u het veld weer leeg.
4. Klik op **Bewaren**, of op **Annuleren** om het venster te sluiten zonder te bewaren.

Ontbreekt er iets, dan noemt een melding bovenaan het venster welke velden nog leeg zijn.

<!-- AFBEELDING: het venster Familie bewerken in tenant demo (familie ELEK) met Code, Naam (NL), Naam (FR, optioneel), Bovenliggende familie en de knoppen Bewaren, Annuleren en Verwijderen -->

!!! tip "Twee niveaus"
    Enkel hoofdfamilies zijn kiesbaar als bovenliggende familie. Een subfamilie kan zelf geen subfamilies hebben.

## Verwijderen

Open de familie en klik rechts in het venster op **Verwijderen**. Na bevestiging komt de familie in de [prullenbak](recycle-bin.md) en verdwijnt ze uit de lijsten; bestaande artikelen blijven behouden. Terughalen kan via de prullenbak.

## Veelgemaakte fouten

!!! warning
    - **Naam in de andere taal vergeten** — gebruikers in die taal zien dan de naam in de basistaal.
    - **Alles op één niveau** — gebruik subfamilies voor een fijnere indeling in plaats van heel veel hoofdfamilies.

## Zie ook

- [Platformbeheer](platform-management.md)
- [Eenheden](units.md)

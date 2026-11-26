# Soorten installatie

Met **soorten installatie** deelt u de installaties bij uw klanten in: condensatieketel, warmtepomp, ventilatie-unit, boiler … U
kiest zelf welke soorten u nodig hebt.

## Het scherm openen

1. Klik onderaan in de zijbalk op **Platformbeheer**.
2. Klik in de groep **Projecten** op de tegel **Soorten installatie**.

Op de fiche van een installatie opent **Soorten beheren** hetzelfde scherm.

De kolom **Controlepunten** in de lijst toont hoeveel vaste controlepunten elke soort heeft.

![De lijst Soorten installatie met vier soorten: condensatieketel, warmtepomp, ventilatie-unit en boiler, met hun code, hun naam in het Nederlands en het Frans, en het aantal controlepunten (drie bij de condensatieketel).](../images/installatie-soorten.png)

## Waar de soort gebruikt wordt

- Op de **fiche van een installatie**, in het veld **Soort**.
- Als **kolom** in de lijst [Installaties](../work/installations.md), waar u erop kunt sorteren en filteren.
- In de **naam** van een installatie: *Warmtepomp Daikin Altherma 3 H HT* is de soort, het merk en het model samen. Zo staat de
  installatie op de werkorder, de werkbon en de QR-sticker.
- Op de **werkbon**: de [controlepunten](#controlepunten) van de soort komen voorgesteld bij elke installatie van die soort.

Leest u installaties in uit Excel met een soort die nog niet bestaat, dan maakt Nimble ze aan. Kijk de lijst daarna even na.

## Een soort toevoegen of wijzigen

Klik op **Nieuwe waarde**, of dubbelklik op een bestaande rij. Er opent een venster met onderstaande velden en de knoppen
**Bewaren** en **Annuleren**; bij een bestaande waarde staat rechts ook **Verwijderen**.

| Veld | Opmerking |
|---|---|
| **Volgorde** | Bepaalt de plaats in de keuzelijst; laagste getal bovenaan |
| **Code** | Uw eigen korte sleutel, verplicht en uniek |
| **Naam (NL)** en **Naam (FR)** | De naam in de basistaal van uw bedrijf is verplicht. Blijft de andere taal leeg, dan verschijnt de naam in de basistaal |
| **Controlepunten** | De vaste punten die bij een installatie van deze soort nagekeken worden, één punt per regel. Zie hieronder |

### Controlepunten

In het veld **Controlepunten** zet u wat er bij elke installatie van deze soort nagekeken moet worden, één punt per regel.
Een soort heeft hoogstens 50 punten, elk van hoogstens 200 tekens.

![Het venster Bewerken van de soort Condensatieketel met code KETEL: volgorde, code, de naam in het Nederlands en het Frans, en het veld Controlepunten met drie punten, Druk nakijken, Rookgas meten en Expansievat nakijken, elk op een eigen regel. Achter het venster de lijst met de kolom Controlepunten, die bij deze soort 3 telt.](../images/soort-installatie-controlepunten.png)

Op het tabblad **Installaties** van een [werkbon](../work/work-sheets.md#installaties) stelt Nimble deze punten voor bij een
installatie van deze soort, tenzij het onderhoudsbezoek eigen punten heeft. Een controle die al bewaard is, verandert niet
als u de lijst van de soort later wijzigt. De mobiele app krijgt hetzelfde voorstel.

## Een soort verwijderen

**Verwijderen** archiveert de soort: ze verdwijnt uit de keuzelijst, maar installaties die ze al dragen, houden ze. Terughalen kan via
de [prullenbak](recycle-bin.md).

## Zie ook

- [Installaties](../work/installations.md)
- [Onderhoud](../work/maintenance.md)

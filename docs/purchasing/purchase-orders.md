# Bestellingen

Een **bestelling** legt vast wat u bij een leverancier besteld hebt en hoever de levering staat. Bij het
ontvangen boekt Nimble de goederen in de voorraad — u hoeft dat niet apart bij te houden.

## Het scherm openen

Klik in de zijbalk op **Inkoop** en daarna op **Bestellingen**.

## De lijst

![De lijst met bestellingen, met de kolommen Nummer, Leverancier, Besteldatum en Status.](../images/bestellingen-lijst.png)

| Kolom | Wat het zegt |
|---|---|
| **Nummer** | Uw bestelnummer |
| **Leverancier** | Bij wie u bestelde |
| **Besteldatum** | Wanneer u bestelde |
| **Status** | Hoever de bestelling staat — zie [De status](#de-status) |

Dubbelklik een rij om de bestelling te openen. U kunt zoeken, sorteren, filteren en exporteren zoals in de
andere lijsten.

Klik rechts op de rail **Journaal** en kies een bestelling in de lijst. Het paneel toont de tabbladen
**Taken**, **Notities**, **Bijlagen** en **Logboek** van die bestelling.

!!! info "Nog geen leverancier of artikel?"
    Dan toont het scherm geen lijst maar de melding dat u eerst een leverancier en een artikel moet
    toevoegen. Zonder die twee valt er niets te bestellen.

## Een bestelling aanmaken

Klik **Nieuwe bestelling**. Vul in de kaart **Bestelgegevens** in:

| Veld | Opmerking |
|---|---|
| **Nummer** | Verplicht — u kiest het zelf |
| **Leverancier** | Verplicht — kies uit uw relaties die als leverancier gemarkeerd zijn |
| **Besteldatum** | Verplicht — staat standaard op vandaag |
| **Verwachte leverdatum** | Wanneer de leverancier levert. Zo ziet u of kritiek materiaal op tijd binnen is |
| **Status** | Een nieuwe bestelling staat op **Klad** |
| **Notitie** | Afspraken met de leverancier, leveradres, bijzonderheden |

Klik **Bewaren**. Ontbreekt er een verplicht veld, dan noemt de melding bovenaan het veld bij naam. Na het
bewaren keert u terug naar de lijst.

## Regels toevoegen

![De fiche van bestelling B2026-0011 met status Besteld: Bestelgegevens met leverancier Ventura Air Systems BV en Verwachte leverdatum, twee regels met de kolom Nog te komen in het oranje, en onderaan Bewaren, Receptioneren, Deellevering boeken, Annuleren en Verwijderen.](../images/bestelling-fiche.png)

Onder de kaart **Regels** staat een rij om een regel toe te voegen. Kies een **Artikel**, vul het **Aantal**
in en klik **Regel toevoegen**.

Laat u **Prijs** leeg, dan neemt Nimble de aankoopprijs van het artikel. Is deze levering anders geprijsd,
vul de prijs dan in vóór u de regel toevoegt.

| Kolom | Wat het zegt |
|---|---|
| **Artikel** | Nummer en naam van het artikel |
| **Aantal** | Wat u besteld hebt |
| **Ontvangen** | Wat er al binnen is |
| **Nog te komen** | Wat er van deze regel nog onderweg is |
| **Prijs** | De prijs per eenheid |
| **Subtotaal** | Aantal maal prijs |

Onder de regels staat het **Totaal**. Met het kruisje achteraan haalt u een regel weg.

Vergeet niet te **bewaren**: een regel die nog niet bewaard is, kan niet ontvangen worden.

## Goederen ontvangen

Op een bewaarde bestelling die niet **Ontvangen** of **Geannuleerd** is, staan onderaan de fiche twee
knoppen. Het verschil telt:

- **Receptioneren** boekt in één keer alles wat nog openstaat. Gebruik dit wanneer de levering volledig is.
- **Deellevering boeken** opent het venster **Levering ontvangen**, waarin u per regel invult wat er
  binnengekomen is. De bestelling blijft daarna openstaan voor de rest.

![Het venster Levering ontvangen met de velden Ontvangen op en Notitie, en per regel Artikel, Besteld, Ontvangen, Nu ontvangen en Prijs.](../images/bestelling-ontvangst.png)

In het venster vult u in:

| Veld | Opmerking |
|---|---|
| **Ontvangen op** | Staat op vandaag |
| **Notitie** | Leveringsbon, chauffeur, bijzonderheden |
| **Nu ontvangen** | Per regel. Staat al ingevuld met wat er nog openstaat — pas het aan als er minder kwam |
| **Prijs** | Rekent de leverancier iets anders aan dan besteld, pas de prijs dan hier aan. Laat u ze staan, dan geldt de prijs van de bestelling |

Klik **Boeken**. Staat er bij geen enkele regel een hoeveelheid, dan zegt het venster dat. **Annuleren**
sluit het venster zonder iets te boeken.

Na het boeken staan de goederen in de voorraad en past de status zich aan: **Deels geleverd** zolang er
iets openstaat, **Ontvangen** wanneer alles binnen is.

### De leveringen

Zodra er iets ontvangen is, verschijnt de kaart **Leveringen**. Daar staat per ontvangen regel de
**Datum**, het **Artikel**, het **Aantal** en de **Prijs**.

Is een regel aan een andere prijs geleverd dan besteld, dan staat die prijs in het oranje. Daaronder
verschijnt de melding om dat na te kijken vóór u de aankoopfactuur goedkeurt.

## De status

| Status | Betekenis |
|---|---|
| **Klad** | Nog niet verstuurd naar de leverancier |
| **Besteld** | Verstuurd, nog niets ontvangen |
| **Deels geleverd** | Een deel is binnen, er staat nog iets open |
| **Ontvangen** | Alles binnen en in de voorraad geboekt |
| **Geannuleerd** | Gaat niet door |

In het veld **Status** kiest u zelf enkel **Klad**, **Besteld** of **Geannuleerd**. **Deels geleverd** en
**Ontvangen** volgen uit het boeken van een levering; die kunt u niet met de hand kiezen.

!!! info "Wat telt als onderweg"
    Op de [Voorraadstand](../inventory/stock-level.md) telt enkel wat openstaat op een bestelling met status
    **Besteld** of **Deels geleverd**. Een bestelling in **Klad** telt nog niet mee.

Op een **geannuleerde** bestelling kan niets meer ontvangen worden.

## Een bestelling verwijderen

Klik op de fiche op **Verwijderen** en bevestig. De bestelling verdwijnt uit de lijst en komt in de
[prullenbak](../administration/recycle-bin.md). Van daaruit zet u ze met **Herstellen** terug.

## Waar de voorraad zichtbaar is

Na een ontvangst ziet u het resultaat onder **Voorraad → Artikelen**, op het tabblad **Stock** van het
artikel. Elke ontvangst staat daar als *Ontvangst bestelling* gevolgd door het bestelnummer. Zie
[Artikelen](../inventory/articles.md).

## Zie ook

- [Voorraadstand](../inventory/stock-level.md)
- [Aankoopfacturen](purchase-invoices.md)
- [Prullenbak](../administration/recycle-bin.md)
- [Werken met een fiche](../fiches.md)

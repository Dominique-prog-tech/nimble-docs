# Onkosten

In **Onkosten** houdt u bij wat medewerkers voorschoten: een parking aan de werf, brandstof, een maaltijd, klein materiaal. Elke
onkost draagt haar ticket en zegt of ze al terugbetaald is. Een onkost op een project telt als kost in de
[nacalculatie](projects.md#het-blok-nacalculatie) van dat project.

## Het scherm openen

Klik in de zijbalk op **Werk → Onkosten**. U hebt het recht nodig om werkorders en werkbonnen te bekijken; onkosten toevoegen of
wijzigen vraagt het recht om werkorders en werkbonnen te bewerken.

![De lijst Onkosten van 2026 met de kolommen Datum, Medewerker, Soort, Bedrag incl. btw, Project, Status, Terugbetaald op en Opmerking: onder meer Dieter Cools met Parking € 4,80 op P2026-005, nog Open, en Kris Van Damme met Brandstof € 62,35 op P2026-001, Terugbetaald op 19/11/2026.](../images/onkosten.png)

## De lijst

Elke regel is één onkost, de nieuwste bovenaan. Met **◀** en **▶** naast het jaartal kiest u een ander jaar. Het info-icoon naast de
titel toont wat er dat jaar nog **open** staat en wat al **terugbetaald** is.

U zoekt, sorteert en filtert zoals in elke [lijst](../lijsten-filteren.md): zo vindt u bijvoorbeeld alle open onkosten van één
medewerker. Met **Exporteren** neemt u de lijst mee naar Excel of CSV, bijvoorbeeld voor de terugbetaling.

## Een onkost toevoegen of wijzigen

Klik op **Onkost toevoegen**, of dubbelklik op een regel. Er opent een venster met deze velden:

| Veld | Opmerking |
|---|---|
| **Medewerker** | Verplicht. Wie de onkost voorschoot |
| **Datum** | Verplicht. De dag van de uitgave |
| **Bedrag incl. btw** | Verplicht. Het bedrag van het ticket, zoals u het terugbetaalt |
| **Soort** | Verplicht. De soorten beheert u in [Soorten onkosten](../administration/expense-types.md) |
| **Project** | Het project waarop de onkost als kost telt. Leeg = een onkost zonder project |
| **Opmerking** | Vrij, bijvoorbeeld waar of waarom |
| **Terugbetaald op** | De dag dat u de onkost terugbetaalde. Leeg = nog open. Niet vóór de datum van de uitgave |

Klik **Bewaren**. Daarna verschijnt onderaan het blok **Ticket**: voeg er de foto of pdf van het ticket toe, of sluit het venster.
Met **Verwijderen** gaat een onkost naar de [prullenbak](../administration/recycle-bin.md).

## Onkosten op de werkbon

Op een [werkbon](work-sheets.md#onkosten) geeft de ploeg de onkosten van die dag in, bij het blok **Onkosten**. Zo'n onkost krijgt
de datum van de werkbon, en ze hoort bij het project van de werkbon. Ze staat ook in deze lijst.

## In de nacalculatie

Een onkost met een project telt als kost in de nacalculatie van dat project, in de tegel **Onkosten**, en in de winst per maand van
de [statistieken](../sales/statistics.md). De onkosten tellen **inclusief btw**: zo staan ze op het ticket en zo betaalt u ze terug.

## Veelgemaakte fouten

!!! warning
    - **Het ticket zoeken vóór het bewaren.** Het blok Ticket verschijnt pas wanneer de onkost bewaard is.
    - **Een onkost van de werf zonder project.** Zonder project telt ze in geen enkele nacalculatie. Geef ze in op de werkbon, of
      kies het project.

## Zie ook

- [Werkbonnen](work-sheets.md)
- [Projecten](projects.md)
- [Soorten onkosten](../administration/expense-types.md)

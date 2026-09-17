# Artikelen

Op het scherm **Artikelen** staat alles wat u levert of plaatst: de omschrijving, de prijzen en de familie
waarin het hoort. Het is de lijst waaruit u offertes en bestellingen samenstelt.

## Het scherm openen

Klik in de zijbalk op **Voorraad → Artikelen**.

## De lijst

| Kolom | Wat het is |
|---|---|
| **Nummer** | Uw eigen artikelnummer |
| **Naam** | Korte benaming |
| **Familie** | De groep waarin het artikel hoort |
| **Eenheid** | Stuk, meter, uur … |
| **Stock** | De huidige voorraad — zie de opmerking onderaan |
| **Verkoopprijs** | Prijs per eenheid. Leeg wanneer er geen prijs is ingevuld |
| **Actief** | Een vinkje bij artikelen die u nog gebruikt |

![De artikellijst met de kolommen Nummer, Naam, Familie, Eenheid, Stock, Verkoopprijs en Actief, en bovenaan de keuzelijst Alle families.](../images/artikelen-lijst.png)

Met de keuzelijst **Alle families** bovenaan toont u enkel de artikelen van één familie. U kunt ook
zoeken, sorteren, filteren en exporteren zoals in de andere lijsten. Dubbelklik een rij om het artikel te
openen.

## Een artikel aanmaken of bewerken

Klik **Nieuw artikel**, of dubbelklik een bestaande rij.

![De artikelfiche met de kaarten Algemeen, Prijzen en voorraad en Omschrijving, en rechts de tabbladen Stock, Taken, Notities, Bijlagen en Logboek.](../images/artikel-fiche.png)

De fiche heeft drie kaarten.

**Algemeen**

| Veld | Opmerking |
|---|---|
| **Nummer** | Verplicht en uniek — zie hieronder |
| **Naam** | Verplicht |
| **Familie** | Verplicht — beheerd via [Artikelfamilies](../administration/article-families.md) |
| **Eenheid** | Verplicht — beheerd via [Eenheden](../administration/units.md) |
| **Actief** | Zet dit uit voor artikelen die u niet meer gebruikt; ze blijven bestaan op oude documenten |

**Prijzen en voorraad**

| Veld | Opmerking |
|---|---|
| **Verkoopprijs** | Wat de klant betaalt |
| **Aankoopprijs** | Wat u zelf betaalt. Nimble stelt ze voor op een nieuwe bestelregel |
| **Minimumvoorraad** | Onder dit aantal verschijnt het artikel op de [Voorraadstand](stock-level.md) als bij te bestellen. Laat leeg om het artikel niet op te volgen — leeg is iets anders dan nul |
| **Streefvoorraad** | Tot hier wordt er aangevuld wanneer u bijbestelt. Laat leeg om tot het minimum aan te vullen |

**Omschrijving** — langere tekst, bijvoorbeeld voor op een offerte.

Klik **Bewaren**. Ontbreekt er een verplicht veld, dan noemt de melding bovenaan het veld bij naam. Na het
bewaren keert u terug naar de lijst.

!!! info "Familie en eenheid zijn verplicht"
    Een artikel zonder familie is in geen enkele lijst terug te vinden, en zonder eenheid weet niemand of
    "10" tien stuks of tien meter betekent. Vandaar dat beide moeten. Ontbreekt de familie of eenheid die u
    nodig hebt, maak ze dan eerst aan via Platformbeheer.

!!! info "Het nummer is uniek"
    Twee artikelen met hetzelfde nummer kan niet: Nimble weigert te bewaren en zegt waarom. Dat geldt ook
    voor een nummer van een artikel in de prullenbak.

Rechts op de fiche staan de tabbladen **Stock**, **Taken**, **Notities**, **Bijlagen** en **Logboek** —
dezelfde als in het journaal naast de lijst.

## Een artikel verwijderen

Klik op de fiche op **Verwijderen** en bevestig. Het artikel verdwijnt uit de lijst en komt in de
[prullenbak](../administration/recycle-bin.md). Van daaruit zet u het met **Herstellen** terug.

Gebruikt u een artikel enkel niet meer, zet het dan liever op **niet actief**.

## Het journaal naast de lijst

Klik rechts op de rail **Journaal** en kies een artikel in de lijst. Het paneel toont dan de zijkant van dát
artikel, verdeeld over vijf tabbladen:

- **Stock** — de huidige stand en alle bewegingen van dit artikel.
- **Taken** — wat er voor dit artikel nog moet gebeuren.
- **Notities** — vrije notities bij dit artikel. Zie [Notities](../notities.md).
- **Bijlagen** — documenten en foto's bij dit artikel, bijvoorbeeld een technische fiche. Zie
  [Bijlagen](../bijlagen.md).
- **Logboek** — wie welk veld van dit artikel wijzigde, en wanneer. Alleen om te lezen.

Zo bekijkt u de voorraad van artikel na artikel zonder telkens een fiche te openen.

![Het journaal open naast de artikellijst, op het tabblad Stock met de huidige stock en de bewegingen.](../images/artikel-journaal.png)

!!! warning "De voorraad wordt voorlopig nog in uw huidige pakket bijgehouden"
    Zolang u met beide pakketten werkt, houdt uw **huidige pakket** de voorraad bij. Het tabblad Stock zegt
    dat ook: *De voorraad wordt nog in uw huidige pakket bijgehouden. Dit register vult zich bij de
    overstap.* De standen die u hier ziet komen dus nog niet uit Nimble. (Op de afbeelding hierboven staan
    wél cijfers: die komt uit een demo-omgeving.)

    Dat is bewust: als twee systemen tegelijk voorraad bijhouden, lopen ze gegarandeerd uit elkaar, en dat
    merkt u pas bij de eerste telling. Er is dus één plek die telt, en dat is voorlopig uw huidige pakket.

    Boekingen kunnen daarom nog niet gedaan worden. Bij de overstap wordt de beginstand overgenomen en gaat
    het hier verder.

### De drie soorten beweging

| Soort | Wat het betekent |
|---|---|
| **Ontvangst** | Goederen komen binnen — bijvoorbeeld een ontvangen bestelling. Het aantal is positief |
| **Verbruik** | Goederen gaan eruit — verwerkt op een werkbon of een project. Het aantal is negatief |
| **Correctie** | Een handmatige rechtzetting na een telling. Het teken hangt af van de richting |

Elke beweging toont haar soort, het aantal, de datum en het uur, en een eventuele notitie. Een ontvangen
bestelling staat er bijvoorbeeld als *Ontvangst bestelling* gevolgd door het bestelnummer.

Het grootboek wordt **nooit gewijzigd**: een fout zet u recht met een nieuwe beweging, niet door de oude aan
te passen. Zo blijft zichtbaar wat er wanneer gebeurd is. De bewegingen staan onder elkaar, met de jongste
bovenaan; een plus betekent erbij, een min eraf.

## Veelgemaakte fouten

!!! warning
    - **Denken dat de voorraad fout staat** omdat er 0 staat — zie de opmerking hierboven; die stand komt
      pas bij de overstap.
    - **Een artikel verwijderen dat u enkel niet meer gebruikt** — zet het op **niet actief**. Dan blijft
      het leesbaar op wat er al was.
    - **Een minimum van 0 invullen om een artikel niet op te volgen** — laat het veld dan leeg. Met 0 volgt
      Nimble het artikel wél op.

## Zie ook

- [Voorraadstand](stock-level.md)
- [Bestellingen](../purchasing/purchase-orders.md)
- [Artikelfamilies](../administration/article-families.md)
- [Eenheden](../administration/units.md)
- [Lijsten filteren](../lijsten-filteren.md) — de trechterknop, de filterbouwer en de filterbalk
- [Werken met een fiche](../fiches.md) — eigen adres, tabbladen, bewaren en archiveren

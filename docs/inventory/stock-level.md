# Voorraadstand

De **Voorraadstand** is geen overzicht van alles wat er ligt — dat staat op de artikelenlijst. Het is een
**bestelsignaal**: enkel de artikelen waarvan de voorraad onder het ingestelde minimum zakt, met wat er nog
besteld moet worden bovenaan.

## Het scherm openen

Klik in de zijbalk op **Voorraad** en daarna op **Voorraadstand**.

![De voorraadstand met bovenaan de zin over het huidige pakket en vier tegels, en daaronder één artikel onder zijn minimum.](../images/voorraadstand.png)

!!! warning "De voorraad wordt nog in uw huidige pakket bijgehouden"
    Bovenaan het scherm staat: *De voorraad wordt nog in uw huidige pakket bijgehouden. Deze cijfers vullen
    zich bij de overstap.* Zolang u met beide pakketten werkt, komen de standen op dit scherm dus nog niet
    uit Nimble. Zie ook [Artikelen](articles.md).

## Eerst: welke artikelen doen mee?

Alleen artikelen **met een minimum**. Een leeg minimum betekent "dit volgen we niet op". Dat onderscheid is
er met reden: zonder drempel zou elk artikel dat ooit aangemaakt is hier permanent in het rood staan, en dan
kijkt er niemand meer naar.

U zet het minimum op de **artikelfiche**, in het veld **Minimumvoorraad**, samen met de
**Streefvoorraad**.

Heeft nog geen enkel artikel een minimum, dan toont het scherm geen lijst maar een melding die naar de
artikelfiche verwijst. Zonder drempel kan dit scherm niet zeggen of er iets tekort is.

## De vier tegels

| Tegel | Telt | Klik brengt u naar |
|---|---|---|
| **Opgevolgd** | artikelen met een minimum | **Artikelen** |
| **Bij te bestellen** | regels waar u werkelijk moet bestellen — wat onderweg is, telt mee | **Bestellingen** |
| **Nu al tekort** | regels waar het materiaal er vandaag niet ligt — ook als er genoeg onderweg is | — |
| **Zonder drempel** | artikelen zonder minimum, die niet opgevolgd worden | — |

Het verschil tussen **Nu al tekort** en **Bij te bestellen** is het aantal artikelen waarvan de aanvulling
al onderweg is.

## De kolommen

| Kolom | Wat het zegt |
|---|---|
| **Artikel** | Nummer, naam en tussen haakjes de eenheid, die voor de hele rij geldt |
| **In stock** | De huidige stand |
| **Onderweg** | Wat besteld is maar nog niet geleverd |
| **Minimum** | Onder deze grens moet u aanvullen |
| **Streef** | De voorraad die u wil aanhouden |
| **Bij te bestellen** | Hoeveel er bij moet om weer op peil te komen |

De **voorraad zelf** is gekleurd, en dat verschil telt: **rood** betekent dat er nog besteld moet worden,
**oranje** dat er vandaag te weinig ligt maar de levering al loopt.

Dubbelklik een rij om de artikelfiche te openen. U kunt de lijst ook exporteren. Zakt geen enkel opgevolgd
artikel onder zijn minimum, dan staat er *Geen enkel opgevolgd artikel zakt onder zijn minimum.*

!!! info "Onderweg telt mee"
    Dit is waarom dit scherm bestaat naast de voorraadkolom op de artikelenlijst. Wat u al besteld hebt,
    wordt meegerekend — anders bestelt u een tweede keer wat al onderweg is. Onderweg telt wat openstaat op
    bestellingen met status **Besteld** of **Deels geleverd**; een bestelling in **Klad** telt niet mee.

## "al besteld" in plaats van een aantal

Staat er bij **Bij te bestellen** het woord **al besteld**, dan ligt er vandaag te weinig, maar is de
aanvulling al onderweg en volstaat ze. U hoeft niets te doen.

Zo'n regel staat er toch bij, want fysiek is er een tekort: wie vandaag materiaal nodig heeft, moet weten
dat het er niet ligt. Daarom tellen de tegels **Bij te bestellen** en **Nu al tekort** verschillend.

## Hoeveel er bijbesteld moet worden

**Bij te bestellen** vult aan tot uw **streefwaarde**, niet tot net boven het minimum. Staat een artikel op
24 met minimum 25 en streef 100, dan is het voorstel 76 — niet 1. Zo koopt u in één keer genoeg in plaats
van elke week een handvol.

Heeft een artikel geen streefwaarde, dan wordt er aangevuld tot het minimum.

## Wat u met dit scherm doet

De lijst zegt wat er moet gebeuren; het bestellen zelf doet u onder **Inkoop → Bestellingen**. De tegel
**Bij te bestellen** brengt u daar rechtstreeks naartoe.

## Zie ook

- [Artikelen](articles.md)
- [Bestellingen](../purchasing/purchase-orders.md)

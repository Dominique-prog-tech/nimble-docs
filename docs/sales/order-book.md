# Orderboek

Het **orderboek** is het werk dat uw klanten aanvaard hebben en dat u nog moet factureren. Dit scherm toont het
bedrag van vandaag, hoe het per maand of per week verliep, en welke projecten het dragen.

Alle bedragen zijn **exclusief btw**.

## Het scherm openen

Klik in de zijbalk op **Verkoop → Orderboek**. Op het dashboard opent een klik op de tegel **Orderboek** hetzelfde
scherm.

U heeft het recht nodig om facturen te bekijken.

![Het orderboek: bovenaan het bedrag en het aantal projecten, daaronder de grafiek per maand met de staven Aanvaard
en Gefactureerd en de lijn Orderboek, en onderaan de lijst per project.](../images/orderboek.png "Het orderboek per maand")

## Bovenaan

| Tegel | Wat het betekent |
|---|---|
| **Orderboek** | Het bedrag van vandaag: aanvaard en nog niet gefactureerd, over al uw projecten |
| **Projecten met werk in het orderboek** | Hoeveel projecten daartoe bijdragen |

## Het verloop

Kies boven de grafiek **Per maand** (de laatste twaalf maanden) of **Per week** (de laatste dertien weken).

| In de grafiek | Wat het toont |
|---|---|
| **Aanvaard** (staaf) | Wat uw klanten in die periode aanvaard hebben |
| **Gefactureerd** (staaf) | Wat er in die periode gefactureerd werd tegen aanvaard werk |
| **Orderboek** (lijn) | Hoe groot het orderboek was op het einde van de periode |

De lopende maand of week staat bleker: die cijfers kunnen nog bewegen.

!!! info "Gefactureerd telt enkel wat het orderboek afboekt"
    Factureert u op een project méér dan er aanvaard was — meerwerk, een prijsherziening — dan telt dat
    deel niet bij **Gefactureerd**. Het zat nooit in het orderboek. Daardoor is de lijn altijd de vorige stand,
    plus wat er aanvaard werd, min wat er gefactureerd werd.

## De lijst per project

Onder de grafiek staat elk project met werk in het orderboek, het grootste bovenaan:

| Kolom | Wat het betekent |
|---|---|
| **Nummer**, **Naam**, **Klant** | Het project |
| **Aanvaard** | De som van de aanvaarde offertes van het project |
| **Gefactureerd** | De facturen van het project, min de creditnota's |
| **Nog te factureren** | Wat er van dit project in het orderboek staat |

Dubbelklik op een rij om het project te openen. Met **Exporteren** neemt u de lijst mee naar Excel.

Een project dat in de prullenbak staat maar nog aanvaarde offertes draagt, telt mee en krijgt het label
*in de prullenbak*.

## Hoe het orderboek gerekend wordt

- Enkel **aanvaarde** offertes tellen. Een verstuurde offerte is nog een voorstel.
- Een factuur in **klad** of een **geannuleerde** factuur boekt niets af. Een **creditnota** boekt terug.
- Het orderboek wordt **per project** berekend en pas daarna opgeteld. Een project waarop u méér gefactureerd
  heeft dan er aanvaard was, telt voor nul. Het maakt het orderboek van uw andere projecten niet kleiner.
- Een offerte telt op de dag waarop ze **aanvaard** werd.

## Meldingen onder de grafiek

Onder de grafiek kan een regel met een waarschuwingsteken staan. Die zegt hoeveel offertes of facturen het
verloop anders laten uitvallen dan u zou verwachten:

- **Offertes zonder aanvaardingsdatum** tellen op hun **offertedatum**. Die ligt meestal iets vroeger dan de
  echte aanvaarding: in het verleden stijgt het orderboek dan iets te vroeg.
- **Offertes zonder project** tellen niet mee: het orderboek rekent per project.
- **Facturen zonder project** boeken niets af om dezelfde reden.

!!! warning "Een hoog orderboek? Kijk naar de oudste projecten"
    Staat er werk in het orderboek van een project dat al lang afgewerkt is, dan hangt de factuur ervan
    meestal niet aan dat project. Het project kiest u op de factuur zelf, zolang ze in klad staat: daarna
    ligt de factuur vast.

## Zie ook

- [Dashboard](../getting-started/dashboard.md)
- [Offertes](quotes.md)
- [Facturen](invoices.md)

# Documentsjablonen

Uw offerte draagt uw eigen briefhoofd, uw eigen aanhef en uw eigen voorwaarden. Die stelt u hier in.

## Het scherm openen

**Platformbeheer → Documentsjablonen**. U hebt er het recht *Documentsjablonen beheren* voor nodig.

Bovenaan kiest u het **document** — vandaag is dat de offerte — en de **taal**. Kiest u *Beide talen*, dan
geldt uw tekst voor Nederlandstalige én Franstalige klanten. Wilt u ze laten verschillen, dan maakt u per
taal een eigen versie; de taal van de klant bepaalt welke er op het blad komt.

## De drie vakken

| Vak | Waar het staat |
|---|---|
| **Briefhoofd en klantgegevens** | Bovenaan het blad, boven de titel |
| **Aanhef** | Tussen de kenmerken en de eerste regels |
| **Voorwaarden** | Onderaan, onder de totalen |

U bewerkt ze met opmaak zoals in een tekstverwerker: vet, lijsten, tabellen, uitlijning.

!!! info "Een leeg vak betekent: standaard"
    Laat een vak leeg om de standaardopmaak te gebruiken. U vult dus enkel in wat u wil aanpassen — u hoeft
    het briefhoofd niet over te typen als u alleen voorwaarden wil toevoegen.

## Variabelen

Rechts staat de lijst met **variabelen**. Sleep er een in uw tekst, en op de offerte komt de echte waarde te
staan: de naam van de klant, het offertenummer, de geldigheidsdatum.

Een variabele herkent u aan de accolades: `{{klant_naam}}`. Typt u er een verkeerd, dan meldt het scherm dat
boven de vakken — die naam blijft anders leeg op de offerte, zonder dat iets het zegt.

!!! warning "Niet elke naam werkt overal"
    De lijst rechts toont enkel de variabelen die in déze drie vakken werken. Namen die met een regel te
    maken hebben — een aantal, een prijs — krijgen alleen binnen de regeltabel een waarde, en die tabel
    stelt u niet zelf in.

## Wat u niet kunt aanpassen

De **regels, de bedragen en de totalen** liggen vast. Dat is met opzet: daar staan de cijfers die naar uw
klant gaan, en een opmaakfout mag ze niet kunnen wegnemen.

De **notitie van de offerte zelf** — wat de verkoper bij dát document typte — staat er ook altijd, onder de
totalen en boven uw voorwaarden.

## Uw werk nakijken

**Afdrukvoorbeeld** toont uw sjabloon op een voorbeeldofferte met verzonnen gegevens. U ziet meteen welke
tekst uit een variabele komt en welke vast in uw sjabloon staat, zonder een echte offerte te openen. Met de
werkbalk boven het document bladert u en zoomt u in; met **Downloaden** bewaart u het voorbeeld als PDF.

**Standaard herstellen** verwijdert uw eigen tekst en zet de standaardopmaak terug.

## Veelgemaakte fouten

!!! warning
    - **Een variabele overtypen in plaats van slepen.** `{{klant naam}}` met een spatie werkt niet. Sleep ze
      uit de lijst, dan staat ze juist.
    - **Bedragen in het briefhoofd verwachten.** Het totaal hoort onderaan; in de kop is `{{totaal_incl}}`
      nog niet berekend op de plaats waar u het zet.
    - **Vergeten op te slaan vóór u van taal wisselt.** Het scherm laadt dan de andere versie en uw
      wijziging is weg.

## Zie ook

- [Offertes](../sales/quotes.md) — waar uw sjabloon terechtkomt
- [Bedrijfsfiche](company-profile.md) — uw naam, adres en logo, die het briefhoofd vult

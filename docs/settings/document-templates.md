# Documentsjablonen

Uw offerte draagt uw eigen briefhoofd, uw eigen aanhef en uw eigen voorwaarden. Die stelt u hier in.

## Het scherm openen

1. Klik onderaan in de zijbalk op **Platformbeheer**.
2. Klik in de groep **Verkoop** op de tegel **Documentsjablonen**.

U hebt er het recht *Documentsjablonen beheren* voor nodig.

<!-- AFBEELDING: het scherm Documentsjablonen in tenant demo — bovenaan Document (Offerte) en Taal (Beide talen) met de knoppen Bewaren, Afdrukvoorbeeld en Standaard herstellen; links de drie vakken, rechts de lijst Variabelen -->

## Document en taal

Bovenaan kiest u het **Document** — vandaag is dat de offerte — en de **Taal**. Kiest u *Beide talen*, dan
geldt uw tekst voor Nederlandstalige én Franstalige klanten. Wilt u ze laten verschillen, dan maakt u per
taal een eigen versie; de taal van de klant bepaalt welke er op het blad komt.

Een andere taal kiezen laadt meteen de versie van die taal. Bewaar dus eerst wat u net wijzigde.

## De knoppen

| Knop | Wat hij doet |
|---|---|
| **Bewaren** | Bewaart de drie vakken voor het gekozen document en de gekozen taal |
| **Afdrukvoorbeeld** | Toont uw sjabloon op een voorbeeldofferte — zie **Uw werk nakijken** hieronder |
| **Standaard herstellen** | Verwijdert uw eigen tekst voor dit document en deze taal, na bevestiging. Enkel actief wanneer er een eigen sjabloon bewaard is |

## De drie vakken

| Vak | Waar het staat |
|---|---|
| **Briefhoofd en klantgegevens** | Bovenaan het blad, boven de titel van de offerte |
| **Aanhef** | Tussen de kenmerken en de eerste regels |
| **Voorwaarden** | Onder de totalen: betaaltermijn, geldigheid, ondertekening |

U bewerkt ze met opmaak zoals in een tekstverwerker. De werkbalk boven elk vak bevat, van links naar
rechts: ongedaan maken en opnieuw, **Lettertype**, **Grootte**, vet (**B**), een knop **⋯** met meer
opmaak, het menu **Alinea**, het menu **Invoegen** en het menu **Tabel**.

!!! info "Een leeg vak betekent: standaard"
    Laat een vak leeg om de standaardopmaak te gebruiken. U vult dus enkel in wat u wil aanpassen — u hoeft
    het briefhoofd niet over te typen als u alleen voorwaarden wil toevoegen.

## Variabelen

Rechts staat de lijst **Variabelen**. Sleep er een in een vak, en op de offerte komt de echte waarde te
staan. Klikt u op een variabele, dan kopieert u ze; plak ze daarna waar u wilt.

Een variabele herkent u aan de accolades, bijvoorbeeld `{{klant_naam}}`. De lijst bevat onder meer:

| Variabele | Wat er op de offerte komt |
|---|---|
| `{{afzender_naam}}` | Uw bedrijfsnaam |
| `{{klant_naam}}` | Naam van de klant |
| `{{nummer}}` | Offertenummer |
| `{{datum}}` | Datum van de offerte |
| `{{geldig_tot}}` | Geldigheidsdatum |
| `{{totaal_incl}}` | Totaal inclusief btw |

Daarnaast vindt u er variabelen voor uw logo, uw adres, uw contactgegevens en uw btw-nummer, het adres van
de klant, de titel, de variant en de versie van de offerte, de andere totalen en de notitie van de offerte.
Houd de muis boven een variabele om de uitleg te zien, waar die er is.

Staat er in een vak een naam die niet bestaat, dan toont het scherm boven de vakken **Onbekende variabelen:**
met die namen. Die melding verschijnt wanneer u bewaart of het scherm opnieuw opent — niet terwijl u typt.
Een onbekende naam blijft leeg op de offerte.

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

**Afdrukvoorbeeld** toont uw sjabloon op een voorbeeldofferte met verzonnen gegevens. Het voorbeeld gebruikt
wat er nú in de vakken staat, ook als u nog niet bewaard hebt. Zo ziet u welke tekst uit een variabele komt
en welke vast in uw sjabloon staat, zonder een echte offerte te openen.

Staat de taal op *Beide talen*, dan volgt het voorbeeld de taal waarin u Nimble gebruikt. Met **Downloaden**
bewaart u het voorbeeld als PDF.

## Veelgemaakte fouten

!!! warning
    - **Een variabele overtypen in plaats van slepen.** `{{klant naam}}` met een spatie werkt niet. Sleep ze
      uit de lijst, dan staat ze juist.
    - **Bedragen in het briefhoofd verwachten.** Het totaal hoort onderaan; in de kop is `{{totaal_incl}}`
      nog niet berekend op de plaats waar u het zet.
    - **Vergeten te bewaren vóór u van taal wisselt.** Het scherm laadt dan de andere versie en uw
      wijziging is weg.
    - **Denken dat het afdrukvoorbeeld bewaart.** Het voorbeeld toont uw tekst, maar pas **Bewaren** zet hem
      op uw offertes.

## Zie ook

- [Offertes](../sales/quotes.md) — waar uw sjabloon terechtkomt
- [Bedrijfsfiche](company-profile.md) — uw naam, adres en logo, die het briefhoofd vult

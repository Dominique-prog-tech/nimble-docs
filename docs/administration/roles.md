# Rollen

Een rol is een bundel rechten. U kent een rol toe aan een gebruiker in plaats van elk recht apart te geven — zo hoeft u bij een nieuwe collega maar één keuze te maken.

## Het scherm openen

Klik in de zijbalk op **Beheer** en daarna op **Rollen**.

## Een rol aanmaken

1. Kies bovenaan de **Tenant** waarvoor u rollen beheert. Zolang er geen gekozen is, staat er **— kies een tenant —**.
2. Typ de naam bij **Nieuwe rol** en klik op **Toevoegen**.

De nieuwe rol verschijnt in de lijst **Rollen** links.

## Rechten toekennen

Selecteer een rol in de lijst. Rechts verschijnt **Rechten**: een lijst met vinkvakjes, gegroepeerd per onderdeel van Nimble. Vink aan wat deze rol mag en klik op **Rechten bewaren**. Bij een geslaagde bewaring verschijnt **✓ bewaard**.

Onder **Gebruikers met deze rol** ziet u wie de rol vandaag draagt. Staat daar **Er zijn nog geen gebruikers**, dan is de rol aangemaakt maar nog aan niemand toegekend.

Met **Rol verwijderen** haalt u een rol weg. Doe dat pas nadat u de gebruikers die hem dragen een andere rol gegeven hebt.

## Wat een recht doet

Een recht dat u **uitvinkt**, verbergt het scherm én blokkeert het. De menu-ingang verdwijnt, en wie het adres rechtstreeks intypt komt er evenmin binnen. U hoeft dus niet apart na te denken over "zichtbaar" en "toegankelijk" — dat is één en dezelfde instelling.

## Bekijken of bewerken

Elk gebied van Nimble heeft **twee** rechten, en het verschil telt:

| Recht | Wat het geeft |
|---|---|
| **Bekijken** | Het scherm opent en alles is leesbaar. Er staan geen knoppen om iets toe te voegen, te bewaren of te verwijderen |
| **Bewerken** | Daarbovenop: nieuwe records aanmaken, wijzigingen bewaren, records verwijderen |

**Bewerken vervangt bekijken niet — het komt erbovenop.** Wie mag bewerken, heeft ook het kijkrecht nodig; anders opent het scherm niet.

Zo stelt u de rollen samen die u voor ogen hebt: een verkoper die offertes maakt maar de planning enkel bekijkt, een ploegbaas die werkbonnen invult maar niet aan de facturatie komt, een boekhouder die overal meeleest.

!!! tip "Ziet iemand geen knoppen meer?"
    Dan draagt zijn rol wel het kijkrecht maar niet het bewerkrecht voor dat gebied. Vink het aan bij **Rechten** en laat de persoon zich opnieuw aanmelden.

## Veelgemaakte fouten

!!! warning
    **Neem nooit het laatste beheerrecht weg.** Vinkt u bij de enige rol die rollen mag beheren dat recht uit, dan kan niemand het nog terugzetten — ook u niet. Maak eerst een tweede rol met dat recht aan, of controleer dat u zelf een andere rol met beheerrechten hebt.

!!! info
    **Een wijziging geldt vanaf de volgende aanmelding.** Iemand die op dit moment werkt, merkt uw aanpassing pas nadat hij zich afmeldt en opnieuw aanmeldt. Vraag de persoon dat te doen wanneer de wijziging dringend is.

## Zie ook

- [Gebruikers](users.md) — een rol aan iemand toekennen
- [Klantenregister](tenants.md) — voor welke klant u rollen beheert

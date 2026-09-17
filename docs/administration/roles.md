# Rollen

Een rol is een bundel rechten. U kent een rol toe aan een gebruiker in plaats van elk recht apart te geven — zo hoeft u bij een nieuwe collega maar één keuze te maken.

## Het scherm openen

1. Klik onderaan in de zijbalk op **Platformbeheer**.
2. Klik in de groep **Gegevens en toegang** op de tegel **Rollen**.

Het scherm heet **Rollen & rechten**. Het is in drie kolommen verdeeld: **Rollen**, **Rechten** en
**Gebruikers met deze rol**.

<!-- AFBEELDING: het scherm Rollen & rechten in tenant demo met een zelfgemaakte rol geselecteerd — links de lijst Rollen met Nieuwe rol en Toevoegen, in het midden de rechten met vinkjes per onderdeel en Rechten bewaren, rechts Gebruikers met deze rol met Sofie Maes, Pieter Janssens en Elke Wouters. Te schieten als tenant-beheerder, niet als operator: het operatorbeeld toont de tenantkeuze met echte klantnamen -->

!!! info "Voor ADM-operators: eerst een tenant kiezen"
    Een operator ziet bovenaan de keuzelijst **Tenant**. Zolang er **— kies een tenant —** staat, verschijnen
    de kolommen niet. Als beheerder van uw eigen bedrijf ziet u die keuzelijst niet; u werkt meteen in uw
    eigen omgeving.

## Een rol aanmaken

Typ de naam in het veld **Nieuwe rol** onder de lijst **Rollen** en klik op **Toevoegen**. De nieuwe rol
verschijnt in de lijst.

## De systeemrol

Eén rol draagt een slotje (🔒): de systeemrol voor het beheer van uw omgeving. Die rol heeft **automatisch
alle rechten** die u kunt toekennen. U kunt haar rechten niet aanpassen en de rol niet verwijderen; nieuwe
rechten komen er vanzelf bij.

Wilt u iemand slechts een deel van het beheer geven, maak dan een aparte rol aan.

## Rechten toekennen

Klik op een rol in de lijst. In het midden verschijnt **Rechten — {naam van de rol}**: vinkjes, gegroepeerd per
onderdeel van Nimble. Vink aan wat deze rol mag en klik op **Rechten bewaren**. Bij een geslaagde bewaring
verschijnt **✓ bewaard**.

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

## Gebruikers toewijzen

Rechts, onder **Gebruikers met deze rol**, staan alle gebruikers van uw omgeving met een vinkje ervoor. Achter
elke naam staan als label de rollen die die persoon nu draagt.

Vink een gebruiker aan om hem deze rol te geven, of vink hem uit om de rol af te nemen. Staat er **Er zijn nog
geen gebruikers.**, dan zijn er in deze omgeving nog geen gebruikers.

## Een rol verwijderen

Selecteer de rol en klik onder de lijst op **Rol verwijderen**. Die knop staat niet bij de systeemrol. Geef de
gebruikers die de rol dragen eerst een andere rol.

## Veelgemaakte fouten

!!! warning
    **Neem niet uw eigen laatste beheerrecht weg.** Draagt u een zelfgemaakte rol met het recht om rollen te beheren, en vinkt u dat recht uit, dan kunt u het zelf niet meer terugzetten. Laat dat dan doen door iemand met de systeemrol.

!!! info
    **Wanneer een wijziging geldt, hangt af van wát u wijzigt.**

    - **Vinkt u een recht aan of uit bij een rol**, dan geldt dat meteen. Wie op dat moment werkt, ziet het na een verversing van zijn scherm — afmelden hoeft niet.
    - **Geeft u iemand een andere rol**, dan geldt dat pas bij zijn volgende aanmelding. Vraag de persoon zich af te melden en opnieuw aan te melden wanneer het dringend is.

## Zie ook

- [Gebruikers](users.md) — gebruikers aanmaken (voor ADM-operators)
- [Platformbeheer](platform-management.md)

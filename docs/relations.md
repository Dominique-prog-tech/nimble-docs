# Relaties

Op het scherm **Relaties** beheert u de klanten en leveranciers van uw bedrijf. Eén relatie kan **klant**, **leverancier**, of beide tegelijk zijn.

## Het scherm openen

Klik in de zijbalk op **CRM → Relaties**.

## De lijst

| Kolom | Betekenis |
|---|---|
| **Naam** | Bedrijfsnaam of weergavenaam |
| **Btw-nummer** | Ondernemingsnummer |
| **Gemeente** | Postcode en gemeente samen |
| **Verantwoordelijke** | Het vaste aanspreekpunt binnen uw team |
| **Taal** | De documenttaal van deze relatie |
| **Type** | Badges Klant / Leverancier |
| **Aangemaakt** | Wanneer de fiche is aangemaakt |

- **Zoeken en filteren** — gebruik de rasterzoekfunctie om snel een relatie te vinden.
- **Exporteren** — exporteer de lijst naar Excel of CSV.
- **Nieuw** — klik op **Nieuwe relatie**.
- **Bewerken** — **dubbelklik** een rij om de fiche te openen.
- **Journaal** — klik rechts op de rail **Journaal** voor de zijkant van de geselecteerde relatie. Die heeft drie tabbladen:
    - **Contacten** — wie u bij deze klant moet hebben. E-mailadressen en nummers zijn aanklikbaar, zodat u kunt bellen of mailen zonder de fiche te openen. Klik een kaartje om de contactfiche te openen, of gebruik **Nieuwe contactpersoon** om er meteen een aan deze klant te koppelen.
    - **Taken** — wat er nog moet gebeuren.
    - **Logboek** — wat er gebeurd is: notities en oproepen.

## De relatiefiche

De fiche heeft twee tabbladen: **Fiche** en **Contactpersonen**. De knoppen **Opslaan**, **Annuleren** en **Verwijderen** staan onder de tabbladen en gelden voor allebei — u kunt dus bewaren vanaf welk tabblad u ook staat.

Het tabblad **Fiche** is verdeeld in blokken.

### Blok Identificatie

| Veld | Uitleg |
|---|---|
| **Naam** | Verplicht. Bedrijfsnaam of weergavenaam. |
| **Relatienummer** | Optioneel intern nummer. |
| **Rechtsvorm** | Keuzelijst (BV, NV, VZW …). Zoek door te typen. |
| **Btw-nummer** | Ondernemingsnummer, met de knop **Ophalen** ernaast. |

#### Gegevens ophalen uit de KBO

Vul het btw-nummer in en klik op **Ophalen**. Naam, straat, nummer, postcode, gemeente en land worden ingevuld met de gegevens uit de Kruispuntbank van Ondernemingen. Bestaat het nummer niet, dan verschijnt een melding en blijft de fiche ongewijzigd.

### Blok Adres

| Veld | Uitleg |
|---|---|
| **Straat** en **Nr** | Vrije tekst. |
| **Postcode** | Zoeklijst — typ een postcode of een gemeentenaam. De gemeente wordt mee ingevuld. |
| **Gemeente** | Zoeklijst — werkt in de andere richting: kies een gemeente en de postcode volgt. |
| **Land** | Zoeklijst met de landenlijst. |

!!! tip "U hoeft er maar één in te vullen"
    Postcode en gemeente vullen elkaar aan. Kies er één en het andere veld volgt vanzelf.

### Blok Contact

| Veld | Uitleg |
|---|---|
| **E-mail** | Optioneel, maar ingevuld moet het een geldig adres zijn — u ziet de melding tijdens het typen. |
| **Telefoon** | Vrije tekst. |

### Blok Classificatie

| Veld | Uitleg |
|---|---|
| **Categorie** | Klantcategorie uit **Platformbeheer**. Zoek door te typen. |
| **Bron** | Hoe deze relatie u leerde kennen. Dezelfde lijst als de **leadbron**, zodat een omgezette lead zijn herkomst behoudt. |
| **Verantwoordelijke** | Het vaste aanspreekpunt binnen uw team. |
| **Documenttaal** | Stuurt de taal van offertes en facturen voor deze klant, los van de taal waarin u zelf werkt. Leeg = de standaardtaal van uw bureau. |
| **Klant** / **Leverancier** | Vink aan wat van toepassing is — beide mag. |
| **Actief** | Uitvinken verbergt de relatie niet automatisch uit alle lijsten; gebruik dit als statusmarkering. |

### Blok Afkomstig van een lead

Dit blok verschijnt alleen bij een relatie die uit een **lead** is ontstaan, en alleen als u leads mag inkijken. Het toont, leesbaar en niet wijzigbaar: leadnummer, status, type aanvraag, omvang, budget, timing, urgentie, volgende actie met datum, en wanneer de lead is aangemaakt. Velden die de lead niet had, blijven weg.

!!! note "Waarom niet gewoon velden op de klant?"
    Budget, timing en urgentie beschrijven één aanvraag, geen klant — na de eerste offerte kloppen ze niet meer. Ze blijven daarom bij de lead staan, maar u vindt ze hier terug zonder naar het leadscherm te moeten.

### Tabblad Contactpersonen

Hier beheert u wie er bij deze klant aan de lijn komt. Het aantal staat in de titel van het tabblad, zodat u niet hoeft te openen om te weten of er iemand aan hangt.

| Kolom | Uitleg |
|---|---|
| **Persoon** | De naam. Enkel lezen — de persoon zelf bewerkt u via [Contactpersonen](crm/contactpersonen.md). |
| **Rol** | Wat deze persoon bij **dit** bedrijf doet. Dezelfde persoon kan elders een andere rol hebben. |
| **E-mail** | Een adres dat afwijkt van dat van de persoon. Laat het leeg om het persoonlijke adres te gebruiken — dat staat als grijze suggestie in het veld. |
| **Gsm** | Van de persoon zelf, ter info. |

- **Koppelen** — kies onderaan een persoon in de zoeklijst en klik op **Koppelen**.
- **Loskoppelen** — haalt de koppeling weg. De persoon zelf blijft bestaan; hij kan bij een ander bedrijf werken.

!!! note "Alles gaat pas mee bij Opslaan"
    Ook koppelingen en rollen worden pas weggeschreven wanneer u op **Opslaan** klikt. **Annuleren** laat alles zoals het was.

## Onderaan de fiche

- **Opslaan** — bewaart de wijzigingen. Alleen actief met een ingevulde naam en een geldig e-mailadres.
- **Annuleren** — sluit zonder te bewaren.
- **Verwijderen** — alleen bij een bestaande relatie, zie hieronder.

## Verwijderen

In het bewerkvenster klikt u op **Verwijderen**. De relatie wordt **gearchiveerd** (soft-delete) en belandt in de **Prullenbak**, waar u ze kunt herstellen vóór definitieve verwijdering.

## Veelgemaakte fouten

!!! warning
    - **Categorie of bron leeg laten** — beide zijn optioneel, maar zonder ingevulde waarden kunt u later niet rapporteren per klantsoort of per kanaal.
    - **Postcode en gemeente los van elkaar aanpassen** — gebruik de zoeklijsten; handmatig overtypen kan een combinatie opleveren die niet bestaat.
    - **Documenttaal verwarren met uw eigen taal** — dit veld bepaalt de taal van de documenten die de klant krijgt, niet de taal van uw scherm.
    - **Actief uitvinken om iets te verwijderen** — daarvoor dient **Verwijderen**; **Actief** is enkel een markering.

## Gegevens uit de legacy

Heeft u een bestaande Firebird-databank? Via **Beheer → Conversie** importeert u de actieve `CRM_ACCOUNTS` als relaties. De conversie is herhaalbaar: bestaande rijen worden bijgewerkt op basis van de legacy-sleutel, zonder dubbels.

## Zie ook

- [Leads](crm/leads.md) — van eerste contact tot omzetting naar klant
- [Contactpersonen](crm/contactpersonen.md) — de mensen achter deze bedrijven
- [Conversie](administration/conversion.md) — Firebird → PostgreSQL overzetten

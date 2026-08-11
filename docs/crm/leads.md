# Leads

Op het scherm **Leads** volgt u elke aanvraag op, van het eerste contact tot de omzetting naar klant.
Een lead doorloopt een vaste reeks statussen (de pijplijn); u kiest zelf of u die als bord of als lijst
bekijkt.

## Het scherm openen

Klik in de zijbalk op **CRM → Leads**.

## Bord- of lijstweergave

Bovenaan schakelt u tussen **Bord** en **Lijst** — beide tonen dezelfde leads, enkel de vorm verschilt.

### Bord

Elke kolom is een status uit de pijplijn (Nieuw, Gekwalificeerd, Offerte, Verloren …). De naam van elke
kolom is hertaalbaar via **Platformbeheer → Leadstatus**; een status die daar op "Verborgen" staat, mist
u hier als kolom — tenzij er nog een lead in die status staat.

- Elke kaart toont: naam, gemeente (of leadnummer als er geen gemeente is), verantwoordelijke en budget.
- **Sleep** een kaart naar een andere kolom om de status te wijzigen. Klik een kaart om de volledige
  fiche te openen.
- Onderaan elke kolom staat de som van het budget van de leads erin.
- Een kaart met een gele waarschuwing heeft aandacht nodig: de volgende actie is verlopen, of de
  heractivatiedatum (On hold) is voorbij. Dit is puur visueel — er wordt niets extra opgeslagen.
- Klik op het info-icoon naast de titel voor een korte herinnering aan hoe het bord werkt.

!!! warning "Verloren en On hold vragen een extra stap"
    Een kaart naar **Verloren** slepen vraagt eerst een **verliesreden**; een kaart naar **On hold**
    slepen vraagt een **heractivatiedatum**. Zonder die gegevens in te vullen, gaat de verplaatsing niet
    door — de kaart blijft in de kolom waar ze stond.

### Lijst

De klassieke tabelweergave, met kolommen **Nummer**, **Naam**, **Status**, **Leadbron**,
**Verantwoordelijke** en **Volgende actie**. Dubbelklik op een rij om de fiche te openen, of gebruik
**Nieuwe lead** om er een aan te maken. Deze weergave leent zich beter voor filteren, sorteren en
exporteren dan het bord.

## De leadfiche

Zowel een dubbelklik op een kaart als op een lijstrij opent hetzelfde bewerkvenster, opgebouwd in drie
blokken — dezelfde volgorde waarin u de informatie doorgaans aan de telefoon te horen krijgt.

### Blok Contact

| Veld | Opmerking |
|---|---|
| **Naam** | Verplicht |
| **Telefoon** | |
| **E-mail** | Optioneel, maar moet geldig zijn als u iets invult — u krijgt meteen een melding bij een ongeldig adres |
| **Straat / Nr** | |
| **Postcode / Gemeente** | Typ in een van beide velden en zoek in de lijst; het andere veld vult automatisch aan |
| **Categorie** | Optionele klantcategorie |
| **Btw-nummer** | Optioneel — zie hieronder |

**Gegevens ophalen uit de KBO:** vul het btw-nummer in en klik op **Ophalen**. Nimble vult naam en adres
automatisch aan vanuit de Kruispuntbank van Ondernemingen (KBO/BCE), in de taal van uw scherm. Wordt er
niets gevonden, dan verschijnt een melding en blijven de velden zoals u ze zelf invulde.

### Blok De aanvraag

| Veld | Opmerking |
|---|---|
| **Type aanvraag** | Wat de lead precies vraagt (dakwerk, sauna, leiding …) — beheerd via **Platformbeheer → Types aanvraag** |
| **Omvangvraag** | Verschijnt enkel als het gekozen type er een heeft (bv. m², aantal personen, lopende meter); het bijschrift en de eenheid volgen het type |
| **Leadbron** | Waar de lead vandaan komt — beheerd via **Platformbeheer → Leadbronnen** |
| **Timing** | Vrije tekst, bv. "voorjaar 2027" |
| **Budget** | Geschat bedrag |
| **Urgentie** | Laag / Normaal / Hoog — staat standaard op **Normaal** bij een nieuwe lead |

### Blok Opvolging

| Veld | Opmerking |
|---|---|
| **Status** | De pijplijnstatus; verborgen statussen zonder leads verschijnen niet in de lijst |
| **Verantwoordelijke** | De gebruiker die de lead opvolgt |
| **Leadnummer** | Wordt bij een nieuwe lead automatisch voorgesteld — u mag het overschrijven, maar het veld is verplicht |
| **Volgende actie / Datum** | Wat de volgende stap is en tegen wanneer |
| **Verliesreden** | Verschijnt en is **verplicht** zodra de status **Verloren** is |
| **Heractivatiedatum** | Verschijnt en is **verplicht** zodra de status **On hold** is |

### Onderaan de fiche

- **Opslaan** — bewaart de lead. Is de status Verloren of On hold zonder de bijhorende verplichte
  gegevens, dan blijft de knop uitgeschakeld.
- **Annuleren** — sluit zonder te bewaren.
- **Omzetten naar klant** — enkel zichtbaar bij een bestaande, nog niet omgezette lead. Maakt van de lead
  een relatie (klant); de fiche toont daarna een melding dat de lead is omgezet.
- **Verwijderen** — enkel bij een bestaande lead. Archiveert de lead naar de prullenbak; niets wordt
  definitief gewist.

## Veelgemaakte fouten

!!! warning
    - **Geen verliesreden of heractivatiedatum bij het slepen** — de verplaatsing op het bord gaat dan
      niet door; vul het gevraagde veld in het popupvenster in.
    - **Ongeldig e-mailadres** — de fiche weigert dan niet meteen op te slaan, maar toont wel een
      waarschuwing; los ze op vóór u opslaat.
    - **Leadnummer verwijderen zonder vervanging** — het veld is verplicht; laat het lege veld niet staan
      na het overschrijven.
    - **Twee keer proberen om te zetten** — is een lead al omgezet, dan is de knop **Omzetten naar klant**
      niet meer zichtbaar; gebruik de klantenfiche zelf voor verdere aanpassingen.

## Zie ook

- [Leadbronnen](../administration/lead-sources.md)
- [Types aanvraag](../administration/lead-request-types.md)
- [Leadstatus](../administration/lead-status.md)
- [Relaties](../relations.md)

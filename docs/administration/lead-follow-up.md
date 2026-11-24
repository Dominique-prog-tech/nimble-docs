# Opvolging van leads, offertes, onderhoud en serviceverzoeken

Elke ochtend kijkt Nimble na welke leads blijven liggen en welke verstuurde offertes nog geen antwoord hebben, en
maakt daar een taak van. Dezelfde ronde zet het volgende onderhoudsbezoek klaar. Op dit scherm bepaalt u wanneer dat
gebeurt, en hoe serviceverzoeken binnenkomen.

## Het scherm openen

1. Klik onderaan in de zijbalk op **Platformbeheer**.
2. Klik in de groep **Leads** op de tegel **Opvolging van leads, offertes, onderhoud en serviceverzoeken**.

![Het instellingenscherm Opvolging van leads, offertes, onderhoud en serviceverzoeken met het vinkje Automatische opvolging aan, het veld Stil na (dagen), het blok Verstuurde offertes met Offertes zonder antwoord opvolgen en Opvolgen na (dagen), het blok Onderhoudscontracten met Klaarzetten (dagen vooraf) en het vinkje De klant verwittigen over zijn onderhoudsbezoek, het blok Serviceverzoeken met Projecttype voor een nieuw project en het vinkje De klant verwittigen over zijn serviceverzoek, het vinkje Klanten kunnen een storing melden in het portaal, het vinkje Iedereen met de sticker kan een storing melden en het veld Verantwoordelijke voor verzoeken uit het portaal en via de sticker, en de knoppen Bewaren en Opvolging nu draaien.](../images/leadopvolging-scherm.png)

## De drie regels

Nimble maakt een opvolgtaak in drie gevallen. Twee daarvan liggen vast, één stelt u zelf in.

| Regel | Instelbaar? |
|---|---|
| De **volgende actie** van een lead staat op een datum die voorbij is | Nee |
| Een lead in een **gepauzeerde** fase heeft zijn **heractivatiedatum** bereikt | Nee |
| Een **lopende** lead zonder geplande volgende actie ligt te lang stil | **Ja** — zie hieronder |

De eerste twee hebben geen instelling nodig: daar heeft iemand zelf een datum gezet. Dan is er niets te
kiezen — die datum ís de afspraak.

## Stil na (dagen)

Hoe lang een lead zonder geplande volgende actie mag blijven liggen voor hij een taak krijgt. Standaard
**14 dagen**; toegelaten van 1 tot 365. Het veld is enkel invulbaar wanneer **Automatische opvolging aan**
aangevinkt is.

!!! info "Een lead met een volgende actie telt niet mee"
    Staat er een volgende actie gepland — ook een in de toekomst — dan is de lead ingepland en niet
    vergeten. Deze regel geldt alleen voor leads waar niemand iets voor plande. Dat is precies de lead die
    anders stil uit beeld verdwijnt.

Welk getal past, hangt af van uw werk. Verkoopt u iets waarover mensen weken nadenken, dan is 14 dagen
kort en krijgt u taken die niemand leest. Gaat het om aanvragen die snel beslist worden, dan is 30 dagen
te laat. Begin bij 14 en pas aan wat u in de praktijk ziet.

## Automatische opvolging aan of uit

Vink **Automatische opvolging aan** aan of uit en klik op **Bewaren**. Zet u de opvolging **uit**, dan maakt Nimble geen nieuwe taken meer aan. Taken die er al staan, blijven
gewoon staan — uitzetten mag geen werk laten verdwijnen dat al aan iemand toegewezen is.

## Opvolging nu draaien

De knop **Opvolging nu draaien** staat naast **Bewaren**. Hiermee draait u meteen een ronde in plaats van tot morgenochtend te wachten. Handig net nadat u de termijn
gewijzigd hebt: u ziet direct hoeveel taken dat oplevert.

De melding toont wat de ronde deed, bijvoorbeeld *Leads bekeken: 12. Nieuwe taken: 2. Al aanwezig: 3. Offertes, nieuwe taken: 1.*
Zette de ronde een onderhoudsbezoek klaar, dan staat dat er ook bij, bijvoorbeeld *Onderhoud: 1 klaargezet, 0 afgewerkt.* Vertrok er een
bevestiging van de dag voor een serviceverzoek, dan ziet u bijvoorbeeld *Serviceverzoeken bevestigd: 1. Zonder e-mailadres: 0. Niet verstuurd: 0.*

!!! info "Bewaar eerst"
    De knop draait met wat er in de databank staat, niet met wat er op het scherm staat. Wijzigt u de
    termijn en klikt u meteen op **Opvolging nu draaien**, dan draait hij nog met de vorige waarde. Klik
    eerst op **Bewaren**.

!!! info "U krijgt nooit twee keer dezelfde herinnering"
    Staat een taak al open voor een lead, dan komt er geen tweede bij — ook niet als u de ronde tien keer
    draait. Werkt u de taak af en blijft de lead daarna opnieuw liggen, dan volgt er wél een nieuwe.

## Verstuurde offertes

Een gemailde offerte die op **Verstuurd** blijft staan zonder antwoord, krijgt één taak **Offerte opvolgen** voor wie de offerte
mailde. Nimble stuurt de klant zelf niets; de herinnering verstuurt u vanuit de offerte met **Meer…** → **Herinnering sturen** (zie
[Offertes](../sales/quotes.md#een-opvolgtaak-en-een-herinnering)).

- **Offertes zonder antwoord opvolgen** zet dit aan of uit. **Standaard staat het uit.** Taken die er al staan, blijven staan.
- **Opvolgen na (dagen)**: standaard **7**, geteld vanaf de dag dat de offerte gemaild werd. Mailt u ze opnieuw, dan begint de
  telling opnieuw en kan er een nieuwe taak komen.
- Een offerte die al meer dan 30 dagen over die termijn is, krijgt geen taak meer: dat is geen opvolging meer maar een vergeten
  offerte. Kijk die na in de [offertelijst](../sales/quotes.md).
- Per verzending komt er één taak, ook als u ze afwerkt zonder dat de klant antwoordt.

Klik op **Bewaren** na een wijziging.

## Onderhoudscontracten

Dezelfde ronde zet de bezoeken van uw [onderhoudscontracten](../work/maintenance.md) klaar.

- **Klaarzetten (dagen vooraf)**: zoveel dagen vóór het volgende bezoek zet Nimble 's ochtends een werkorder klaar bij **Nog in
  te plannen** op het planbord, met een taak voor de verantwoordelijke van het project. Standaard **30 dagen**.
- **De klant verwittigen over zijn onderhoudsbezoek**: een mail wanneer het bezoek klaargezet wordt (*wij nemen contact op*), en
  een bevestiging zodra het een dag heeft op het planbord. **Standaard staat het uit.** Per contract zet u het nog uit op het
  tabblad Onderhoud van het project; de teksten staan bij **Mailsjablonen**.

Klik op **Bewaren** na een wijziging.

## Serviceverzoeken

Vijf instellingen voor de [serviceverzoeken](../work/service-requests.md):

- **Projecttype voor een nieuw project**: krijgt een serviceverzoek een werkorder en heeft de klant geen lopend project, dan maakt
  Nimble een project van dit type. Leeg: het nieuwe project krijgt geen type, tenzij u er een kiest in het venster.
- **De klant verwittigen over zijn serviceverzoek**: een ontvangstbevestiging bij een nieuw verzoek (in het venster met een vinkje),
  en een bevestiging zodra de werkorder een dag heeft op het planbord. **Standaard staat het aan.** De teksten staan bij
  **Mailsjablonen**.
- **Klanten kunnen een storing melden in het portaal**: een klant met toegang tot het
  [portaal voor uw klanten](../crm/portaal-voor-klanten.md#storing-melden) meldt zelf een storing voor een van zijn installaties,
  met foto's, en volgt de stand bij **Mijn meldingen**. Het verzoek komt binnen zoals een verzoek van kantoor. **Standaard staat het
  uit.**
- **Iedereen met de sticker kan een storing melden**: wie de [QR-sticker](../work/installations.md#de-qr-sticker) op een installatie
  scant, meldt een storing zonder aan te melden: naam, telefoon, wat er is en foto's. Het verzoek komt binnen met het kanaal
  **QR-sticker**; bel de melder na voor u een bezoek plant. Zie [Een melding via de QR-sticker](../work/service-requests.md#een-melding-via-de-qr-sticker).
  **Standaard staat het uit.**
- **Verantwoordelijke voor verzoeken uit het portaal en via de sticker**: wie een verzoek uit het portaal of via de sticker krijgt als
  de klant zelf geen verantwoordelijke heeft. Leeg: de taak **Serviceverzoek behandelen** staat bij **Niemand**.

De bevestiging van de dag vertrekt niet enkel 's ochtends: Nimble kijkt elk kwartier na of een werkorder van een verzoek een dag
kreeg.

Klik op **Bewaren** na een wijziging.

## Waar de taken terechtkomen

- In het scherm **Taken** (**CRM → Taken**). Een lead zonder verantwoordelijke levert een taak zonder
  verantwoordelijke; in de filter op verantwoordelijke vindt u die taken onder **Niemand**.
- Op de leadfiche zelf, onder **Journaal** › **Taken**.

!!! tip "Zorg dat elke lead een verantwoordelijke heeft"
    Een taak zonder verantwoordelijke staat bij niemand op naam. Wie in het scherm **Taken** filtert op zijn
    eigen naam, ziet hem niet. De opvolging is dan wel gelopen, maar de lead blijft even onzichtbaar als
    daarvoor.

    U dwingt dit af bij [Leadfases](lead-status.md): zet **Verantwoordelijke** als verplicht veld op de fase
    waar het ertoe begint te doen — bijvoorbeeld vanaf *Gekwalificeerd*. Vanaf dan kan geen enkele lead verder
    zonder dat iemand hem opvolgt.

## Zie ook

- [Leads](../crm/leads.md)
- [Taken](../crm/tasks.md)
- [Offertes](../sales/quotes.md)

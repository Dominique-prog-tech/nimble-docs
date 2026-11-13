# Opvolging van leads en offertes

Elke ochtend kijkt Nimble na welke leads blijven liggen en welke verstuurde offertes nog geen antwoord hebben, en
maakt daar een taak van. Op dit scherm bepaalt u wanneer dat gebeurt.

## Het scherm openen

1. Klik onderaan in de zijbalk op **Platformbeheer**.
2. Klik in de groep **Leads** op de tegel **Opvolging van leads en offertes**.

![Het instellingenscherm Opvolging van leads en offertes met het vinkje Automatische opvolging aan, het veld Stil na (dagen), het blok Verstuurde offertes met Offertes zonder antwoord opvolgen en Opvolgen na (dagen), en de knoppen Bewaren en Opvolging nu draaien.](../images/leadopvolging-scherm.png)

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

De melding toont wat de ronde deed, bijvoorbeeld *12 leads bekeken, 2 nieuwe taken, 3 bestonden al. Offertes: 1 nieuwe taken.*

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

## Waar de taken terechtkomen

- In het scherm **Taken** (**CRM → Taken**). Een lead zonder verantwoordelijke levert een taak zonder
  verantwoordelijke; in de filter op verantwoordelijke vindt u die taken onder **Niemand**.
- Op de leadfiche zelf, in het tabblad **Taken**.

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

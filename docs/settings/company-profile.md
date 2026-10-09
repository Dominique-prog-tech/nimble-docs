# Bedrijfsfiche

Op de **Bedrijfsfiche** beheert u de eigen gegevens van uw bedrijf: identiteit, contact, financiële instellingen, adres, bankrekeningen en logo. Deze gegevens worden gebruikt op documenten zoals offertes en facturen.

## Het scherm openen

1. Klik onderaan in de zijbalk op **Platformbeheer**.
2. Klik in de groep **Bedrijf** op de tegel **Bedrijfsfiche**.

![De Bedrijfsfiche met bovenaan de tabbladen Bedrijfsgegevens en Logboek, de kaarten Identiteit, Adres, Contact, Bank, Financiële instellingen en Documenten & huisstijl, en rechtsonder de knop Bewaren.](../images/bedrijfsfiche.png)

!!! info "De naam staat op uw offertes en facturen"
    De **naam** van uw bedrijf vult u hier zelf in. Hij staat bovenaan elke offerte en factuur. Het veld is verplicht en telt hoogstens 60 tekens.

Staat er **Nog geen bedrijfsfiche voor deze tenant.**, klik dan op **Bedrijfsfiche aanmaken**. De kaarten verschijnen daarna en u kunt ze invullen.

De fiche heeft twee tabbladen: **Bedrijfsgegevens** met de kaarten hieronder, en rechts het **[Logboek](#logboek)**.

## De kaarten

| Kaart | Velden |
|---|---|
| **Identiteit** | Naam (verplicht), BTW / ondernemingsnr. met de knop **Ophalen**, FSMA-nummer |
| **Contact** | Telefoon, Fax, E-mail, Website, **Website-leads naar**, **Mail bij het toewijzen van een taak** |
| **Financiële instellingen** | Standaard betalingstermijn (dagen), Eerste aanmaning na (dagen), Daarna elke (dagen), Marge groen vanaf (%), Marge oranje vanaf (%), Standaard-uurartikel (regie), Reistijd registreren, Artikel voor reistijd (regie) |
| **Adres** | Straat, Nr., Bus, Postcode, Gemeente, Land |
| **Bank** | IBAN, BIC, Rekening — en een tweede rekening: IBAN (2), BIC (2), Rekening (2) |
| **Documenten & huisstijl** | Logo |

## Website-leads naar

Vult iemand het contactformulier op uw website in, dan maakt Nimble daar automatisch een lead van en
verwittigt u per e-mail. In het veld **Website-leads naar** bepaalt u wie die melding krijgt.

![De kaart Contact met het veld Website-leads naar en de uitleg eronder.](../images/bedrijfsfiche-blok-contact.png)

- Vul een adres in van de persoon of de ploeg die aanvragen opvolgt — een groepsadres zoals
  `verkoop@uwbedrijf.be` mag ook.
- Laat u het veld **leeg**, dan gaat de melding naar het **e-mailadres** hierboven op deze kaart.
- Staan beide leeg, dan krijgt u geen mail. De lead wordt wél aangemaakt en er staat een taak klaar, dus
  er gaat niets verloren — maar u ziet ze pas wanneer u in Nimble kijkt.

Zie [Leads](../crm/leads.md) voor wat er met zo'n aanvraag gebeurt.


## Mail bij het toewijzen van een taak

Staat **Mail bij het toewijzen van een taak** aan, dan krijgt wie een taak toegewezen krijgt een mail: de taak, waar ze bij
hoort, de begin- en vervaldag en een link naar [Taken](../crm/tasks.md).

- Het geldt voor elke nieuwe toewijzing, ook voor een taak die Nimble zelf aanmaakt, zoals de opvolging van een lead.
- Wie zichzelf een taak geeft, krijgt geen mail.
- De mail volgt de taal van wie de taak krijgt.
- De tekst past u aan op [Mailsjablonen](mail-templates.md), sjabloon **Taak toegewezen**.

Standaard staat het **uit**.

## Financiële instellingen

Deze kaart bevat de grenzen die u zelf kiest voor facturatie en voor de marge van projecten.

![De kaart Financiële instellingen met Standaard betalingstermijn (dagen) op 30, Eerste aanmaning na en Daarna elke leeg met de tip 14 (standaard), Marge groen vanaf 43, Marge oranje vanaf 40, Standaard-uurartikel (regie) op Werkuur installateur, Reistijd registreren niet aangevinkt en Artikel voor reistijd (regie) leeg.](../images/bedrijfsfiche-blok-financieel.png)

| Veld | Wat het doet |
|---|---|
| **Standaard betalingstermijn (dagen)** | Geldt voor klanten zonder eigen termijn. Laat u het leeg, dan stelt Nimble geen vervaldag voor en vult u die zelf in op de factuur. |
| **Eerste aanmaning na (dagen)** | Hoelang u een klant na de vervaldag met rust laat. Leeg betekent veertien dagen. |
| **Daarna elke (dagen)** | De tijd tussen de eerste en de tweede herinnering, en tussen elke volgende. Leeg betekent veertien dagen — niet: geen aanmaningen. |
| **Marge groen vanaf (%)** | Vanaf deze marge kleurt een project groen op de projectfiche. |
| **Marge oranje vanaf (%)** | Vanaf deze marge kleurt een project oranje. Daaronder is het rood. |
| **Standaard-uurartikel (regie)** | Het uurartikel voor facturatie in regie, voor elke medewerker zonder eigen uurartikel. Leeg = elke medewerker heeft een eigen uurartikel nodig, anders houdt Nimble de regiefactuur tegen |
| **Reistijd registreren** | Aangevinkt vraagt de werkbon per persoon ook de uren verplaatsing. Ze tellen mee als kost voor het project en staan apart in de nacalculatie. Zie [Werkbonnen](../work/work-sheets.md) |
| **Artikel voor reistijd (regie)** | Het artikel waartegen reistijd in regie gefactureerd wordt, als eigen regel. Leeg (*— reistijd niet aanrekenen —*): reistijd komt niet op een regiefactuur, en het voorstel zegt hoeveel uren dat zijn |

Laat u beide margevelden leeg, dan kleurt de projectfiche niet. Nimble zegt dan niets over uw grenzen.

Twee combinaties weigert het scherm bij het bewaren:

- **De oranjegrens ligt boven de groengrens.** Groen is de bovenste grens: zet oranje lager.
- **Er staat een oranjegrens zonder groengrens.** Zonder groengrens kleurt er niets — vul ze allebei in, of laat ze allebei leeg.

Zie [Aanmaningen](../sales/reminders.md) voor wat er met de aanmaningstermijnen gebeurt.

## Projectnummering

Hier kiest u of Nimble een nummer voorstelt voor een nieuw project, en in welke vorm.

| Veld | Wat het doet |
|---|---|
| **Voorvoegsel** | De letters vóór elk projectnummer, bijvoorbeeld PRJ. Laat u het leeg, dan stelt Nimble geen nummer voor en typt u het zelf |
| **Jaartal** | Het jaar in het nummer, met 4 cijfers (2026) of 2 cijfers (26) |
| **Scheidingsteken** | Een streepje tussen voorvoegsel, jaar en volgnummer, of niets |
| **Volgnummer** | Het aantal cijfers van het volgnummer: 3 (001) of 4 (0001) |

Onder de velden ziet u meteen hoe een nummer eruitziet, bijvoorbeeld **PRJ-2026-001** of **PRJ26001**.

Het volgnummer begint elk jaar opnieuw bij 1. Een voorgesteld nummer kunt u altijd overschrijven. Bestaat
het volgende nummer al, dan slaat Nimble het over. Projecten die al een nummer hebben, behouden het.

Werkt u met het nummer van het stuk waaruit het project ontstaat, zoals een offerte of een bestelbon, laat
het voorvoegsel dan leeg.

## Gegevens ophalen uit de KBO

1. Vul uw **BTW / ondernemingsnr.** in.
2. Klik op **Ophalen**.
3. Nimble vult het adres in vanuit de Kruispuntbank van Ondernemingen (KBO/BCE) en zet het nummer in de juiste vorm.

![De kaart Identiteit met de naam, het btw-nummer en de knop Ophalen.](../images/bedrijfsfiche-blok-identiteit.png)

Vindt de KBO geen onderneming voor dat nummer, dan meldt het scherm **Geen onderneming gevonden voor dat nummer.**

## Adres invullen

- Typ in het veld **Postcode** — kies uit de lijst; de gemeente wordt automatisch ingevuld.
- U kunt in het veld **Postcode** ook op gemeentenaam zoeken. Staat bij **Land** een ander land dan België, dan typt u de postcode zelf in.
- Kies het **Land** uit de lijst.

## Logo instellen

1. Sleep een afbeelding naar het sleepvak, of klik erop om een bestand te kiezen.
2. Toegestaan: PNG, JPG, GIF of WebP — maximaal 4 MB.
3. Klik op **Verwijderen** naast het logo om het te wissen.

## Bewaren

Klik rechtsonder op **Bewaren**. Het logo wordt apart bewaard, meteen bij het uploaden.

Deze fiche heeft geen knop Annuleren. Wilt u uw wijzigingen niet bewaren, klik dan bovenaan op **← Terug naar platformbeheer** en kies **Weggaan** bij de vraag of u zonder bewaren wilt vertrekken. Sluit of herlaadt u het tabblad met onbewaarde wijzigingen, dan vraagt uw browser het.

Klopt er iets niet aan uw telefoonnummer of aan een van de twee e-mailadressen, dan staat dat er meteen onder het veld — u hoeft niet eerst te klikken. Klikt u toch, dan noemt een balk bovenaan in één regel álle velden die het bewaren nog tegenhouden.

## Logboek

Het tabblad **Logboek** toont wie wat wijzigde op de bedrijfsfiche, en wanneer: per veld de oude en de nieuwe
waarde. Een verwijzing staat er met haar naam, bijvoorbeeld het standaard-uurartikel met de naam van het
artikel. Het logboek leest opnieuw telkens u het tabblad opent, dus ook meteen na het bewaren.

## Veelgemaakte fouten

!!! warning
    - **Bewaren vergeten** — wijzigingen aan de velden worden pas bewaard na een klik op **Bewaren** (het logo wél meteen).
    - **Ongeldig e-mailadres of telefoonnummer** — leeg laten mag, maar wat u invult moet kloppen; anders weigert het scherm te bewaren.
    - **Verkeerd adres voor website-leads** — een typfout in dit veld valt nergens op: de aanvragen via uw website komen dan gewoon nooit aan.
    - **Een leeg aanmaningsveld lezen als "geen aanmaningen"** — leeg betekent veertien dagen.
    - **Enkel een oranjegrens invullen** — zonder groengrens kleurt er niets, en het scherm weigert te bewaren.
    - **Logo te groot** — maximaal 4 MB; verklein de afbeelding eerst.

## Zie ook

- [Platformbeheer](../administration/platform-management.md)
- [Documentsjablonen](document-templates.md) — uw briefhoofd op de offerte
- [Aanmaningen](../sales/reminders.md)

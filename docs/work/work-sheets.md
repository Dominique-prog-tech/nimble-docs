# Werkbonnen

Een werkbon is **één werkdag op één werkorder**: wie er stond, hoeveel uur, wat er verbruikt is en hoe de
dag geëindigd is. Alles wat later gebeurt — nacalculatie, meerwerk factureren, productiviteit — leest van
dit blad.

## Het scherm openen

Klik in de zijbalk op **Werk → Werkbonnen**. U komt er ook via de knop **Werkbon toevoegen** op een
werkorder; de bon hangt dan meteen aan die werkorder.

Staat er nog geen enkele werkorder, dan vraagt het scherm u eerst een werkorder te maken: een werkbon hoort
altijd bij een werkorder.

## De lijst

![De lijst Werkbonnen met de kolommen Datum, Werkorder, Uren, Einde van de dag, Meerwerk en Omschrijving; rechts de dichtgeklapte lade Journaal.](../images/werkbonnen-lijst.png)

| Kolom | Wat het is |
|---|---|
| **Datum** | De werkdag |
| **Werkorder** | De opdracht waar deze dag onder valt |
| **Uren** | Het totaal van alle medewerkers op die dag |
| **Einde van de dag** | Op schema · Achterstand · Onderbroken · Klaar |
| **Meerwerk** | Toont **ja** wanneer de ploeg extra werk vastgesteld heeft |
| **Omschrijving** | Het dagrapport in het kort |

- **Nieuwe werkbon** opent een lege fiche.
- De drie knoppen naast Zoeken zijn de filter, de kolomkiezer en **Exporteren**.

Rechts zit de lade **Journaal**, bij de werkbon waarop uw cursor staat: taken, notities, bijlagen en
logboek zonder de fiche te openen.

## De fiche

U opent een fiche door te dubbelklikken op een rij.

![De fiche van een werkbon: bovenaan het werkordernummer met de datum en een link naar het project, daaronder de blokken De werkdag, Uren per medewerker, Voortgang en meerwerk en Verbruikt materiaal.](../images/werkbon-fiche.png)

Bovenaan staat het werkordernummer met de datum, en daaronder een link naar het **project** waar die
werkorder onder valt. Links staat het tabblad **De werkdag**, rechts **Taken**, **Notities**, **Bijlagen**
en **Logboek**.

Onderaan staat de knoppenbalk: **Bewaren**, **Afdrukvoorbeeld**, **Annuleren** en, apart rechts,
**Verwijderen**. Mag u de werkbon niet wijzigen, dan ziet u enkel **Naar de lijst**.

### De werkdag

| Veld | Opmerking |
|---|---|
| **Werkorder** | Verplicht. Waar deze dag onder valt |
| **Datum** | Verplicht |
| **Totaal uren** | Zolang er geen urenregels zijn, vult u hier zelf het aantal uren in. Zodra er regels zijn, toont het veld hun som |
| **Dagrapport** | Wat er die dag gebeurd is, in gewone taal |

Klikt u **Bewaren** terwijl een verplicht veld leeg is, dan zegt de fiche bovenaan wat er ontbreekt.

### Uren per medewerker

Onder de lijst voegt u een regel toe: kies een **Medewerker**, vul de **Uren** in (hoogstens 24) en
eventueel een **Notitie**, en klik **Toevoegen**. U kiest uit de actieve medewerkers. Met het kruisje
verwijdert u een regel.

Het **Totaal** onderaan is de som, en dat is meteen het totaal van de werkbon.

Deze uren zijn de bron van de nacalculatie op het project: ze worden vermenigvuldigd met de **Uurkost**
van de medewerker.

### Voortgang en meerwerk

**Einde van de dag** zegt hoe het werk ervoor staat. Onder de keuze staat telkens wat de waarde betekent:

| Waarde | Wat het betekent |
|---|---|
| **Op schema** | Het werk vordert zoals gepland |
| **Achterstand** | Er is gewerkt, maar er zijn meer dagen nodig dan voorzien |
| **Onderbroken** | De werf ligt stil — weer, materiaal, toegang of een beslissing van de klant |
| **Klaar** | Alles is af; de werf kan opgeleverd worden |

**Verwachte vervolgactie** is wat er morgen moet gebeuren. Vul dat in bij achterstand of onderbreking —
het is wat de volgende ploeg als eerste leest.

**Er is meerwerk vastgesteld** is een aparte vlag, geen zin in het dagrapport. Meerwerk moet nog
goedgekeurd en gefactureerd worden, en niemand vindt dat terug in een lap tekst.

#### Het meerwerk beschrijven en beslissen

Vinkt u **Er is meerwerk vastgesteld** aan, dan verschijnen deze velden:

<!-- AFBEELDING: het blok Voortgang en meerwerk op de werkbon van 02/09/2026 op WO-2026-002 in de demo — meerwerk aangevinkt, met Wat houdt het meerwerk in, Stand Goedgekeurd, Geschat bedrag, Beslist op en Beslist door -->

| Veld | Opmerking |
|---|---|
| **Wat houdt het meerwerk in** | Verplicht. Beschrijf het zo dat het goedgekeurd en gefactureerd kan worden |
| **Stand** | **Gemeld**, **Goedgekeurd**, **Geweigerd** of **Gefactureerd** |
| **Geschat bedrag** | Een schatting van de werf, zonder btw. Leeg laten mag. Wat u werkelijk aanrekent, staat op de factuur |
| **Beslist op** | De datum van de beslissing. Staat er alleen wanneer de stand niet op Gemeld staat |
| **Beslist door** | Wie akkoord gaf of weigerde. Staat er alleen wanneer de stand niet op Gemeld staat |

Hier beslist u over een meerwerk: zet de **Stand** op **Goedgekeurd** of **Geweigerd** en vul in wanneer en
door wie. Staat de stand op **Gemeld**, dan waarschuwt de fiche dat het werk mogelijk wél uitgevoerd en niet
aangerekend wordt.

Alle meerwerken over alle projecten heen ziet u op het scherm [Meerwerken](extra-work.md).

### Verbruikt materiaal

Materiaal voegt u toe bij het **aanmaken** van de werkbon: kies een **Artikel**, vul het **Aantal** in en
klik **Toevoegen**. Bij het bewaren wordt dat materiaal van de voorraad afgeboekt.

Op een bewaarde werkbon kunt u het materiaal daarom niet meer wijzigen. De fiche zegt dat ook.

!!! warning "Materiaal wijzigt u niet achteraf op de bon"
    De voorraad is al bewogen. Klopt er iets niet, corrigeer dat dan met een aparte voorraadcorrectie in
    plaats van de bon aan te passen — anders lopen uw werkbon en uw voorraad uit elkaar.

## Het blad laten aftekenen

**Afdrukvoorbeeld** geeft u de werkbon als document: het blad dat de ploeg op de werf laat aftekenen. De
bestandsnaam draagt het werkordernummer en de datum.

Dat werkt alleen op een **bewaarde** bon.

## Een werkbon verwijderen

**Verwijderen** vraagt eerst een bevestiging. De werkbon gaat naar de prullenbak, en het verbruikte
materiaal wordt terug op de voorraad geboekt.

Is de werkbon al eens verwijderd en hersteld, dan weigert Nimble een tweede keer: het verbruik kan niet
nog eens teruggeboekt worden. U krijgt dan een melding, en zet de voorraad zelf recht met een correctie.

## Zie ook

- [Werkorders](work-orders.md) — de opdracht waar een werkbon onder valt
- [Meerwerken](extra-work.md) — alle gemelde meerwerken in één overzicht
- [Medewerkers](staff.md) — de uurkost waarmee de uren gerekend worden

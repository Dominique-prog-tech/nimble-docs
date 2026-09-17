# Werkorders

Een werkorder is **wat er op een werf moet gebeuren**, onder een project. De werkbonnen eronder zijn de
dagen waarop er effectief aan gewerkt is. Zo hangt alles samen:

**Project → werkorder → werkbon.** Het project is de opdracht van de klant, de werkorder is een stuk werk
op dat project, en elke werkbon is één werkdag.

## Het scherm openen

Klik in de zijbalk op **Werk → Werkorders**.

Staat er nog geen enkel project, dan vraagt het scherm u eerst een project toe te voegen: een werkorder
hoort altijd bij een project.

## De lijst

![De lijst Werkorders met de kolommen Nummer, Project, Omschrijving, Ploeg, Status en Gepland; vier werkorders op vier verschillende projecten, en rechts de dichtgeklapte lade Journaal.](../images/werkorders-lijst.png)

| Kolom | Wat het is |
|---|---|
| **Nummer** | Het kenmerk van de werkorder, bijvoorbeeld WO-2026-004 |
| **Project** | Het project waar de werkorder onder valt, met nummer en naam |
| **Omschrijving** | Wat er moet gebeuren — dit onderscheidt twee werkorders op hetzelfde project |
| **Ploeg** | De ploeg die de werf doet |
| **Status** | Nog te starten · Bezig · Afgewerkt |
| **Gepland** | De dag waarop het werk voorzien is |

- **Nieuwe werkorder** opent een lege fiche.
- De drie knoppen naast Zoeken zijn de filter, de kolomkiezer en **Exporteren**.

Rechts zit de lade **Journaal**. Die hoort bij de werkorder waarop uw cursor staat: klik een rij aan en
klap de lade uit met de pijl. U vindt er de taken, notities, bijlagen en het logboek van die werkorder,
zonder de fiche te openen.

## De fiche

U opent een fiche door te dubbelklikken op een rij.

![De fiche van werkorder WO-2026-004 met bovenaan het nummer en de status Bezig, het blok De opdracht, en daaronder het blok Uitvoering met 36 gewerkte uren, 3 werkbonnen, de tegel Werkbonnen met meerwerk en een lijst van de werkbonnen met datum, uren en einde van de dag.](../images/werkorder-fiche.png)

Bovenaan staat het nummer van de werkorder met zijn status. Links staan de tabbladen **De opdracht** en
**Werfvoorbereiding**, rechts **Taken**, **Notities**, **Bijlagen** en **Logboek**.

Onderaan staat de knoppenbalk: **Bewaren**, **Werkbon toevoegen**, **Annuleren** en, apart rechts,
**Verwijderen**. Mag u de werkorder niet wijzigen, dan ziet u enkel **Naar de lijst**.

### De opdracht

| Veld | Opmerking |
|---|---|
| **Nummer** | Verplicht. Uw eigen kenmerk voor deze werkorder |
| **Project** | Verplicht. Het project waar de werkorder onder valt |
| **Omschrijving** | Wat er moet gebeuren. Dit is wat de werkorder ván het project onderscheidt |
| **Ploeg** | Wie de werf doet. U kiest uit de actieve ploegen |
| **Gepland op** | De voorziene dag |
| **Status** | Nog te starten · Bezig · Afgewerkt |

Klikt u **Bewaren** terwijl **Nummer** of **Project** leeg is, dan zegt de fiche bovenaan wat er ontbreekt.

### Uitvoering

Dit blok staat op een bewaarde werkorder. U vult het **niet** in — het leest van de werkbonnen die onder
deze werkorder hangen.

| Tegel | Wat ze toont |
|---|---|
| **Gewerkte uren** | De som van alle uren op alle werkbonnen |
| **Werkbonnen** | Het aantal werkbonnen |
| **Werkbonnen met meerwerk** | Hoeveel meerwerken er nog beslist moeten worden. Staat er alleen als die er zijn |
| **Goedgekeurd meerwerk** | Hoeveel meerwerken goedgekeurd zijn, met het geschatte bedrag. Staat er alleen als die er zijn |

Daaronder staat elke werkbon met zijn datum, uren, einde van de dag en omschrijving. Draagt een werkbon
meerwerk, dan staat er een label met de stand ervan, bijvoorbeeld *Meerwerk · Gefactureerd*. Klik op een
regel om die werkbon te openen.

**Werkbon toevoegen** maakt een nieuwe werkbon aan die al aan deze werkorder hangt.

## Werfvoorbereiding

Op het tweede tabblad staan zeven punten die vóór de start in orde moeten zijn. Bovenaan leest u hoeveel
er al in orde zijn, bijvoorbeeld *3 van 7 punten in orde*.

![Het tabblad Werfvoorbereiding van WO-2026-003: drie van de zeven punten aangevinkt, en een oranje kader dat de vier ontbrekende punten met naam noemt.](../images/werkorder-werfvoorbereiding.png)

| Punt | Waarover het gaat |
|---|---|
| **Technisch** | Dossier gelezen, risico's gekend |
| **Klant** | Startdatum bevestigd, contactpersoon gekend |
| **Ploeg** | Toegewezen en gebrieft |
| **Materiaal** | Besteld, geleverd of klaar om te laden |
| **Materieel** | Camionette, kraan, stelling, hoogtewerker |
| **Veiligheid** | Risico's en maatregelen |
| **Administratief** | Vergunningen, toegang, parking |

Staan alle zeven aan, dan krijgt de werkorder bovenaan de vermelding **Startklaar** en zegt het scherm dat
de werf kan starten. Ontbreekt er iets, dan noemt het kader **welk** punt ontbreekt — niet alleen dát er
iets ontbreekt.

!!! note "Alleen zolang de werf nog moet starten"
    De vermelding **Startklaar** en de melding erover verschijnen enkel wanneer de status op **Nog te
    starten** staat — dan is het ook de vraag die u zich stelt. Zodra de werf **Bezig** of **Afgewerkt**
    is, blijven de zeven vinkjes staan als naslag van wat er vóór de start in orde was, en zegt het scherm
    dat.

!!! tip "Zeven punten en geen enkel vinkje 'voorbereid'"
    Eén vinkje zou u vertellen dát het niet in orde is, maar niet wát er ontbreekt. Daarom staan de zeven
    apart: u kan de werf overdragen aan iemand anders en die ziet meteen waar hij moet beginnen.

## Een werkorder verwijderen

Dat kan **alleen wanneer er geen werkbonnen onder hangen**. Zijn die er wel, dan weigert Nimble en zegt
hoeveel het er zijn:

> **Opgelet** — Deze werkorder kan niet verwijderd worden: er hangen nog 3 werkbonnen aan, met
> gepresteerde uren. Verwijder eerst die werkbonnen.

Hangen er geen werkbonnen onder, dan vraagt Nimble eerst een bevestiging.

De reden voor die weigering is dat een werkbon gepresteerde uren draagt. Verdwijnt de werkorder, dan blijven
die uren staan zonder dat nog iemand ziet bij welke opdracht ze horen — en daar leunen de nacalculatie en de
facturatie van meerwerk op.

!!! note "Ook de prullenbak telt mee"
    Een werkbon die u verwijderd hebt, staat in de prullenbak en kan daar weer uit. Daarom telt Nimble die
    mee: anders zou u de werkorder kunnen verwijderen en de werkbon daarna terughalen, met een opdracht
    eronder die niet meer bestaat.

Wilt u een afgehandelde werf uit uw dagelijkse lijst? Zet de status op **Afgewerkt** in plaats van de
werkorder te verwijderen.

## Zie ook

- [Projecten](projects.md) — het project waar een werkorder onder valt
- [Werkbonnen](work-sheets.md) — de werkdagen onder een werkorder
- [Ploegen](teams.md) — de ploeg die de werf doet

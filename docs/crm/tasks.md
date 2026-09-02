# Taken

Op het scherm **Taken** staat alles wat nog moet gebeuren, uit het hele pakket samen: taken bij een lead,
bij een klant, bij een project. Het is de plek om 's morgens te beginnen.

## Het scherm openen

Klik in de zijbalk op **CRM → Taken**.

![Het takenscherm met de filterbalk, de afvinkkolom en de kolom Hangt aan.](../images/taken-scherm.png)

## De lijst filteren

Bovenaan staan twee filters en een teller.

- **Enkel openstaand** — de standaard. Afgewerkte taken blijven buiten beeld.
    - **Ook afgewerkt** toont ze er weer bij.
    - **Alle statussen** laat het onderscheid helemaal los.
- **Iedereen** — of één verantwoordelijke. Zo ziet u enkel wat bij u ligt.
- De **teller** ernaast zegt hoeveel taken u ziet. Zijn er meer dan duizend, dan leest u
  bijvoorbeeld *"1.000 van 2.912"* — u ziet dan de eerste duizend.

!!! info "Ziet u minder dan verwacht?"
    Kijk naar de twee filters. Een taak zonder verantwoordelijke valt weg zodra u op één persoon filtert,
    en een afgewerkte taak valt weg onder **Enkel openstaand**.

## Een taak afwerken

Klik het vinkje in de eerste kolom, **Klaar**. De taak is meteen afgewerkt.

Staat de lijst op **Enkel openstaand**, dan verdwijnt ze uit beeld. Was u te snel, zet het filter dan op
**Ook afgewerkt** en klik het vinkje opnieuw — de taak staat weer open.

## Een taak openen of aanmaken

**Dubbelklik** op een taak om ze te openen. U kunt aanpassen:

| Veld | Opmerking |
|---|---|
| **Titel** | Wat er moet gebeuren. Verplicht |
| **Omschrijving** | Vrije tekst met de details |
| **Start** en **Vervaldag** | Wanneer u eraan begint en wanneer het klaar moet zijn |
| **Status** | Open, Bezig, Afgewerkt of Geannuleerd |
| **Prioriteit** | Laag, Normaal, Hoog of Dringend |
| **Verantwoordelijke** | Wie de taak opvolgt |

Onderaan het venster ziet u **Hangt aan**: het project, de relatie of de lead waar de taak bij hoort. Dat
is alleen ter informatie — waar een taak aan hangt, wijzigt u op de fiche zelf.

Met **Nieuwe taak** maakt u er een aan die aan niets hangt: een losse taak.

!!! tip "Hangt de taak bij een dossier? Maak ze daar aan"
    Een taak die u vanuit het **Journaal** van een lead, klant of project aanmaakt, hangt meteen aan het
    juiste dossier. Ze verschijnt daarna gewoon in dit overzicht, met de verwijzing in de kolom
    **Hangt aan**.

## Taken die vanzelf verschijnen

Sommige taken maakt Nimble zelf aan.

| Waar het vandaan komt | Wanneer |
|---|---|
| Een lead met een verlopen **volgende actie** | Elke ochtend, zolang de lead niet beweegt |
| Een lead op **On hold** waarvan de heractivatiedatum bereikt is | De ochtend na die datum |
| Een lead waar **al een tijd niets** mee gebeurde | Elke ochtend |
| Een aanvraag via uw **website** | Zodra ze binnenkomt |

Zie [Leads](leads.md) voor de details.

!!! info "Nooit twee keer dezelfde herinnering"
    Staat zo'n taak al open, dan komt er geen tweede bij. Werkt u ze af en blijft de lead daarna opnieuw
    liggen, dan volgt er wél een nieuwe.

## Het belletje bovenaan

Staat er een **herinnering** op een taak en is dat moment voorbij, dan verschijnt er een teller bij het
belletje rechtsboven. Klikken brengt u naar dit scherm.

!!! info "De herinnering zet u op de fiche, niet hier"
    Het veld **Herinnering** staat in het tabblad **Taken** van het journaal — op de fiche van de lead,
    de klant of het project. Op dit overzicht kunt u het niet instellen. Een bestaande herinnering blijft
    wel gewoon staan als u de taak hier bewerkt.

## De lijst meenemen

Rechtsboven staat **Exporteren**: de lijst gaat naar Excel of CSV, met de filters die op dat moment
aanstaan. Daarnaast staat een **zoekvak** dat over alle kolommen zoekt.

## Veelgemaakte fouten

!!! warning
    - **Denken dat er geen taken zijn** terwijl er op één verantwoordelijke gefilterd staat. Zet het filter
      op **Iedereen**, zeker in een dossier dat pas is overgezet — daar heeft nog niemand een taak toegewezen.
    - **Een afgewerkte taak kwijt zijn** — zet het statusfilter op **Ook afgewerkt**.
    - **Eén keer klikken en denken dat de taak opent.** Een taak opent met een **dubbelklik**; één klik
      selecteert enkel de rij.

## Zie ook

- [Leads](leads.md) — waar de automatische opvolgtaken vandaan komen
- [Relaties](../relations.md) — taken op een klantenfiche
- [Notities](../notities.md) — wat u zelf noteert bij een record

# Projecten

Een project is de werf waar alles aan hangt: offertes, werkorders, werkbonnen en facturen verwijzen
ernaar. Op het scherm **Projecten** houdt u de lijst bij. Op de projectfiche legt u de gegevens van één
werf vast, ziet u hoe de werf financieel en in uitvoering loopt, en volgt u de oplevering op.

## Het scherm openen

Klik in de zijbalk op **Werk → Projecten**.

## De lijst

![De projectenlijst met de kolommen Nummer, Naam, Klant, Status, Startdatum, Einde, Projecttype, Productiestatus met een gekleurd blokje, en Pipeline-status; rechts de dichtgeklapte lade Journaal.](../images/projecten-lijst.png)

| Kolom | Wat het is |
|---|---|
| **Nummer** | Het projectnummer |
| **Naam** | Waar het project over gaat |
| **Klant** | De relatie waarvoor u werkt |
| **Status** | **Actief**, **In wacht** of **Afgerond** |
| **Verantwoordelijke** | Wie het project opvolgt. Filter op uw eigen naam om uw projecten te zien |
| **Startdatum** / **Einde** | Wanneer het werk loopt |
| **Projecttype** | Wat voor werk het is, bijvoorbeeld Nieuwbouw |
| **Productiestatus** | Waar het werk op de werf staat. Het gekleurde blokje ervoor is de kleur die uw bedrijf aan die status gaf |
| **Pipeline-status** | Waar de zaak commercieel staat |

De laatste drie kolommen verschijnen alleen wanneer uw bedrijf waarden in die keuzelijst heeft. Die lijsten
beheert u onder **Platformbeheer**.

- **Nieuw project** opent een lege fiche.
- Met **Zoeken** filtert u op alles wat in de lijst staat.
- De drie knoppen naast Zoeken zijn de filter, de kolomkiezer en **Exporteren**.
- Onderaan kiest u hoeveel rijen u per pagina wil zien.

Rechts zit de lade **Journaal**. Die hoort bij het project waarop uw cursor staat: klik een rij aan en klap
de lade uit met de pijl. U vindt er de taken, notities, bijlagen en het logboek van dat project, zonder de
fiche te openen.

!!! tip "Een project zonder einddatum"
    De kolom **Einde** mag leeg blijven. Dat komt voor bij een project dat op **In wacht** staat: er is
    een startdatum afgesproken, maar nog geen einde. Zodra de planning vastligt, vult u de datum aan.

## De projectfiche

U opent een fiche door te dubbelklikken op een rij.

Bovenaan staan links de tabbladen **Algemeen**, **Overdracht**, **Voorbereiding**, **Materiaal**,
**Oplevering** en **Documenten** — en **Vorderingsstaten** bij een project met een aanvaarde offerte — en rechts
**Taken**, **Notities**, **Bijlagen**, **Mails** en **Logboek**.

Onderaan staat de knoppenbalk: **Bewaren**, **Projectdossier**, **Annuleren** en, apart rechts,
**Verwijderen**. De balk blijft staan terwijl u door de fiche scrolt.

- **Projectdossier** ziet u alleen wanneer u de financiële cijfers mag bekijken.
- Mag u het project niet wijzigen, dan ziet u geen **Bewaren** en **Verwijderen**, en heet **Annuleren**
  **Naar de lijst**.
- **Verwijderen** vraagt eerst een bevestiging. Het project gaat naar de prullenbak.

### Tabblad Algemeen

![De projectfiche P2026-001 op het tabblad Algemeen: links nummer, naam, klant en omschrijving, rechts status, productiestatus, projecttype, pipeline-status, de datums en het werfadres.](../images/project-fiche.png)

| Veld | Opmerking |
|---|---|
| **Nummer** | Verplicht. Het projectnummer waarmee offertes en facturen naar deze werf verwijzen. Heeft uw bedrijf een [projectnummering](../settings/company-profile.md#projectnummering), dan staat er bij een nieuw project al een voorstel dat u mag overschrijven |
| **Naam** | Verplicht. Waar het project over gaat, in één zin |
| **Klant** | De relatie waarvoor u werkt. Kies uit de lijst; met het kruisje maakt u het veld weer leeg |
| **Verantwoordelijke** | Wie het project opvolgt. Kies uit de gebruikers van uw bedrijf. Dit is ook wie het dossier bij de overdracht overneemt |
| **Omschrijving** | Ruimte voor wat er precies afgesproken is |
| **Status** | Waar het project staat: **Actief**, **In wacht** of **Afgerond** |
| **Productiestatus** | Waar het werk staat op de werf, bijvoorbeeld **In uitvoering**. Dit staat los van de status |
| **Projecttype** | Wat voor werk het is, bijvoorbeeld **Nieuwbouw** |
| **Pipeline-status** | Waar de zaak commercieel staat — niet waar het werk staat |
| **Startdatum** / **Einddatum** | Wanneer het werk loopt |
| **Werf** | Naam of aanduiding van de werf, wanneer die anders heet dan het project |
| **Straat**, **Postcode**, **Gemeente** | Het adres van de werf. Typ in **Postcode** en kies uit de lijst; **Gemeente** vult mee aan |
| **Werfcontact** | Het aanspreekpunt op de werf. Kies uit de contactpersonen van al uw relaties, dus ook van een architect of aannemer. Achter de naam staat bij welke relatie de persoon hoort |

**Productiestatus**, **Projecttype** en **Pipeline-status** staan er alleen wanneer uw bedrijf waarden in
die keuzelijst heeft.

Het werfadres is optioneel. Ligt de werf op het adres van de klant, dan mag u die velden leeg laten.

Klikt u **Bewaren** terwijl **Nummer** of **Naam** leeg is, dan zegt de fiche bovenaan wat er ontbreekt.

Onder de gegevens staan tot vier blokken die Nimble zelf invult. U kunt ze niet wijzigen. Ze verschijnen
op een bewaard project, en de laatste drie enkel wanneer er iets te tonen is.

#### Het blok Financieel

![Het blok Financieel van P2026-001: Afgesproken € 4.933,24 uit aanvaarde offertes, Gefactureerd € 0,00 oftewel 0% van het afgesproken bedrag, Nog te factureren € 4.933,24 en Openstaand € 0,00.](../images/project-financieel.png)

Alle bedragen in dit blok zijn **inclusief btw**, zodat u ze naast uw facturen en betalingen kunt leggen.

| Bedrag | Wat het is |
|---|---|
| **Afgesproken** | Het totaal van de aanvaarde offertes voor dit project |
| **Gefactureerd** | Wat er al gefactureerd is, met eronder het percentage van het afgesproken bedrag |
| **Nog te factureren** | Het verschil tussen die twee |
| **Openstaand** | Wat de klant nog moet betalen |

Is er meer gefactureerd dan afgesproken, dan staat **Nog te factureren** in het oranje, met *meer
gefactureerd dan afgesproken* eronder. Bij meerwerk is dat gewoon, maar zo ziet u het meteen. Is er meer
ontvangen dan gefactureerd, dan staat onder **Openstaand** *meer ontvangen dan gefactureerd*.

#### Het blok Uitvoering

Dit blok verschijnt zodra er een werkorder of gewerkte uren op het project staan.

![Het blok Uitvoering met Gewerkte uren 56,5 u, Werkorders 1 en Goedgekeurd meerwerk 1 met € 480,00 geschat, en daaronder de regel van werkorder WO-2026-002 met datum, status Bezig en omschrijving.](../images/project-blok-uitvoering.png)

| Tegel | Wat ze toont |
|---|---|
| **Gewerkte uren** | De som van de uren op alle werkbonnen van dit project |
| **Werkorders** | Het aantal werkorders |
| **Werkbonnen met meerwerk** | Hoeveel meerwerken er nog beslist moeten worden. Staat er alleen als die er zijn |
| **Goedgekeurd meerwerk** | Hoeveel meerwerken goedgekeurd zijn, met het geschatte bedrag. Staat er alleen als die er zijn |

Draagt een goedgekeurd meerwerk geen bedrag, dan zegt de tegel dat het bedrag onvolledig is.

Daaronder staat elke werkorder met zijn nummer, geplande datum, status en omschrijving.

#### Het blok Nacalculatie

De nacalculatie zet de werkelijke kosten van de werf tegenover wat u gefactureerd hebt. Het blok verschijnt
zodra er kosten of facturen op het project staan. Alle bedragen zijn hier **exclusief btw**: btw is geen
opbrengst.

![Het blok Nacalculatie met de zes tegels Loonkost, Materiaalkost, Opbrengst, Brutowinst, Nog niet gefactureerd en Marge, daaronder Geraamde kost, Werkelijke kost en Afwijking, en het oranje kader over uren zonder uurkost en materiaal zonder aankoopprijs.](../images/project-blok-nacalculatie.png)

| Tegel | Wat ze toont |
|---|---|
| **Loonkost** | De uren op de werkbonnen maal de **Uurkost** van elke medewerker, met eronder het aantal uren |
| **Materiaalkost** | Het verbruikte materiaal, aan de huidige aankoopprijs van het artikel |
| **Opbrengst** | Wat er gefactureerd is, zonder btw |
| **Brutowinst** | Opbrengst min loonkost en materiaalkost |
| **Nog niet gefactureerd** | De gemaakte kosten waar nog geen factuur tegenover staat. Dit is wat het werk gekost heeft, niet wat het waard is |
| **Marge** | De brutowinst als percentage van de opbrengst |

Een paar gevallen om te kennen:

- Is er nog niets gefactureerd, dan tonen **Brutowinst** en **Marge** een streepje met *nog niets
  gefactureerd*. Een lopend project leest dan niet als verlieslatend.
- Staat er omzet maar geen enkele kost, dan tonen ze een streepje met *geen kosten geboekt*.
- Is er meer gefactureerd dan er aan kosten geboekt is, dan heet de vijfde tegel **Vooruit gefactureerd**.
- De **Marge** kleurt groen, oranje of rood volgens de margegrenzen op de
  [Bedrijfsfiche](../settings/company-profile.md). Zonder grenzen staat er *geen margegrenzen ingesteld*, en
  kleurt de marge enkel rood bij verlies.

Staat er een aanvaarde offerte op het project, dan volgen nog drie bedragen:

| Bedrag | Wat het is |
|---|---|
| **Geraamde kost** | De aankoopprijs van de regels op de aanvaarde offerte |
| **Werkelijke kost** | Loonkost plus materiaalkost |
| **Afwijking** | Het verschil, in euro en in procent. Rood wanneer de werf duurder uitvalt dan geraamd |

!!! warning "Een oranje kader betekent: de cijfers zijn onvolledig"
    Nimble telt een ontbrekende prijs niet stilzwijgend als nul. Ontbreekt er iets, dan staat er onder het
    blok een oranje kader. Het zegt welk cijfer daardoor verkeerd staat, en waarom:

    - uren op een medewerker zonder uurkost;
    - verbruikt materiaal op een artikel zonder aankoopprijs;
    - uren op een werkbon zonder medewerker;
    - geen enkele geboekte kost.

    Ook regels op de aanvaarde offerte zonder aankoopprijs worden gemeld: de geraamde kost staat dan te
    laag. Vul de ontbrekende gegevens aan op de medewerker- of artikelfiche, dan klopt de nacalculatie.

#### Het blok Offertes en facturen

Hier staan de offertes en facturen van dit project, met nummer, datum, status en bedrag. Een creditnota
draagt een eigen label. Klik op een nummer om het document te openen.

### Tabblad Overdracht

Op dit tabblad legt u vast wanneer verkoop het dossier aan de projectleiding overdroeg. Dat is het begin
van de uitvoering, zoals het tabblad Oplevering hieronder het einde vastlegt.

**Overgedragen op** is de datum waarop de projectleiding het dossier overnam. Vanaf die datum is zij
verantwoordelijk. Blijft het veld leeg, dan geldt het dossier als nog niet overgedragen.

**Overgedragen aan** is wie het dossier overneemt. Dat is de **Verantwoordelijke** van het project: het is
hetzelfde veld als op het tabblad Algemeen. Kiest u hier iemand, dan staat die persoon daar ook.

Werd hier vroeger een naam getypt, dan ziet u die onder het veld als **Vroeger
ingevuld**. Die tekst gaat niet verloren, maar u kunt hem niet meer wijzigen. Kies de persoon uit de lijst
om het veld opnieuw in te vullen.

In **Afspraken of reden** zet u wat er bij de overdracht is afgesproken. Ging het dossier terug naar
verkoop omdat er iets ontbrak, zet dan hier waarom. Zo staat bij het dossier zelf wat er misging.

!!! warning
    **Een tweede terugsturing overschrijft de eerste.** Het veld draagt één tekst, geen geschiedenis. Wilt
    u een verloop bijhouden, zet dan de vorige reden erbij in plaats van hem te vervangen.

#### Wat er klaar moet zijn

Ontbreekt de **klant** of het **werfadres** (straat en gemeente), dan staat er bovenaan een melding. Zonder
die twee kan de projectleider niets plannen: er is geen opdrachtgever en geen plaats om naartoe te gaan.

De velden blijven wel invulbaar. Dat is met opzet: een dossier dat u vroeger al hebt overgedragen, kan zo
alsnog zijn datum krijgen zonder dat u eerst een adres moet verzinnen.

!!! info
    De postcode en het land tellen niet mee voor deze melding. Bij bestaande dossiers staan die velden vaak
    leeg terwijl het adres wel bruikbaar is.

### Tabblad Voorbereiding

Hier staat wat er klaar moet zijn vóór de werf start. Een nieuw project krijgt de **standaardlijst** van uw
bedrijf; bij een bestaand project voegt u ze toe met **Standaardlijst toevoegen**.

- Vink een punt af zodra het in orde is. Nimble noteert de datum.
- Kies per punt een **Verantwoordelijke**: wie ervoor zorgt.
- Met **Punt toevoegen** zet u er een eigen punt bij, verplicht of niet. Met het rode ✕ schrapt u een punt
  dat voor dit project niet geldt.

Bovenaan staat hoever het project is, bijvoorbeeld *3 van 7 verplichte punten afgevinkt*. Het project is
**startklaar** wanneer alle verplichte punten afgevinkt zijn. Een project zonder één punt is niet startklaar:
dan is er nog niets voorbereid.

### Tabblad Materiaal

Hier staat het materiaal voor dit project, in twee lijsten die elk de helft van het tabblad krijgen en elk
apart scrollen.

<!-- AFBEELDING: het tabblad Materiaal met bovenaan de materiaallijst (titels, regels en hun status) en onderaan de projectartikelen -->

#### Materiaallijst

Een regel is wat er nodig is: een omschrijving, een aantal en een eenheid, met eventueel een uitgebreide
omschrijving eronder. Met **Titel toevoegen** zet u er een kop tussen, bijvoorbeeld *Afbraakwerken*.

Elke regel heeft een **status**: waar het materiaal op dit moment is.

| Status | Betekenis |
|---|---|
| **Te bestellen** | Nog niets besteld |
| **In bestelling** | Besteld, nog niet binnen |
| **In magazijn** | Binnen, ligt klaar in het magazijn |
| **Op de werf** | Geleverd op de werf |

- **Nieuwe regel** voegt een regel toe; dubbelklik op een regel om ze te wijzigen of te verwijderen.
- Vink regels aan om hun status in één keer te wijzigen: kies de status en klik **Status zetten**.
- Sleep een regel aan het handvat links om de volgorde te wijzigen.
- **Overnemen uit offerte** zet de regels van de aanvaarde offerte van dit project in de lijst — zonder opties
  en witregels. U kunt het gerust opnieuw doen: wat er al staat, komt er niet nog eens bij.

#### Projectartikelen

Onderaan staan de artikelen uit uw catalogus die voor dit project nodig zijn. Klik **Artikel toevoegen**, zoek
het artikel op code of omschrijving en kies het. Daarna vult u het aantal in, de **Leverancier**, en of het
**Besteld** is en een **Stockartikel**.

### Tabblad Oplevering

Op dit tabblad legt u vast wanneer de werf opgeleverd is, en wat er nog moet gebeuren.

![Het tabblad Oplevering van project P2026-004: bovenaan de opleverdatum, daaronder vier tellers en de lijst met opleverpunten, waarvan twee een vervallen datum in het rood tonen.](../images/project-oplevering.png)

**Opgeleverd op** is de datum waarop u de werf hebt overgedragen. Vanaf die datum loopt de
garantietermijn. Blijft het veld leeg, dan geldt de werf als nog niet opgeleverd.

**Opgeleverd door** noteert wie de oplevering deed, of namens wie. In **Wat er afgesproken is** zet u de
opmerkingen van de klant en de afspraken over de resterende punten.

#### Opleverpunten

Een opleverpunt is iets dat nog moet gebeuren vóór de werf helemaal af is. Boven de lijst staan vier
tellers:

| Teller | Wat ze telt |
|---|---|
| **Nog open** | Punten die nog niet afgevinkt zijn |
| **Vervallen** | Punten waarvan de datum bij **Tegen** voorbij is |
| **Zonder eigenaar** | Punten waar niemand aan toegewezen is |
| **Zonder datum** | Punten zonder datum bij **Tegen** |

!!! warning "Een punt zonder eigenaar of datum blijft liggen"
    De laatste twee tellers staan er met reden. Een punt waarvan niemand weet wie het doet of wanneer het
    klaar moet zijn, wordt in de praktijk niet afgewerkt. Zet er dus altijd een naam en een datum bij.

Onder de lijst voegt u een punt toe: vul **Wat** in, kies een **Eigenaar**, zet een datum bij **Tegen** en
klik **Punt toevoegen**. Als eigenaar kiest u uit de actieve medewerkers.

In de lijst zet u een punt klaar met **Afvinken**; in de kolom **Klaar** staat dan de datum. Met het kruisje
verwijdert u een punt. Afgevinkte punten staan onderaan, in het grijs.

Een vervallen datum staat in het rood. In het beeld hierboven is dat het geval bij twee punten.

#### Facturatievrijgave

Onderaan het tabblad staat of het project vrij is om te factureren. Is het nog niet volledig afgehandeld,
dan leest u waarom: de werf is nog niet opgeleverd, of er staan nog opleverpunten open.

Dat blok belet u **niet** om te factureren: een vorderingsstaat hoort net vóór de oplevering. Het is een
waarschuwing, geen grendel.

Wilt u het project toch uitdrukkelijk vrijgeven, vink dan **Toch vrijgeven om te factureren** aan en vul bij
**Waarom** de reden in. Die reden komt in het logboek van het project. Zonder reden telt de vrijgave niet.

### Tabblad Documenten

Hier staan de bijlagen van dit project, in mappen.

<!-- AFBEELDING: het tabblad Documenten met links de mappenboom en rechts de bijlagen van de gekozen map -->

Links staat de mappenboom. **Alle bijlagen** toont alles, **Zonder map** wat nog in geen map zit; achter elke
map staat hoeveel bijlagen erin zitten. Kies een map, dan ziet u rechts enkel haar bijlagen. Wat u oplaadt
terwijl een map gekozen is, komt in die map.

- **Nieuwe map** maakt een map op het hoogste niveau, **Submap** een map onder de gekozen map. Met
  **Hernoemen** wijzigt u de naam.
- **Verwijderen** kan enkel bij een lege map: zonder submappen en zonder bijlagen.
- Een bijlage in een andere map zetten doet u via het menu achteraan de regel.
- Een nieuw project krijgt de [standaardmappen](../administration/default-folders.md) van uw bedrijf. Op een
  bestaand project vult **Standaardmappen invoegen** aan wat ontbreekt.

De mappen bestaan enkel op de projectfiche. In het journaal rechts, bij **Bijlagen**, staan dezelfde bijlagen in
één lijst, zonder mappen.

### Tabblad Vorderingsstaten

Bij een project met een aanvaarde offerte factureert u hier naar gelang van de uitvoering. Het tabblad toont de
staten van dit project, nieuwste eerst; **Nieuwe vorderingsstaat** maakt de volgende. Hoe u een staat invult,
laat goedkeuren en factureert, leest u in [Vorderingsstaten](../sales/progress-reports.md).

### Mails in het journaal

Rechts bij **Mails** staan de mails van dit project: de offertes en facturen die gemaild zijn, en de
antwoorden. Klik een mail om ze te lezen. Van mails uit het vorige programma kan het zijn dat enkel wie,
wanneer en het onderwerp bewaard zijn; dat zegt het venster dan.

## Factureren in regie

Werk dat niet in een offerte zat, factureert u volgens de gewerkte uren. Klik op **Factureren in regie**. Het
venster toont de uren van de werkbonnen van dit project die nog op geen enkele factuur staan: **één regel per
werkbon en per uurartikel**, met de datum en de werkorder erin, bijvoorbeeld *24/09/2026 — WO-2026-0001 —
Werkuur installateur*, het aantal uren, de prijs en het totaal.

- De prijs komt uit het **uurartikel** van de medewerker (zie [Medewerkers](staff.md)), en anders uit het
  standaard-uurartikel in de [bedrijfsgegevens](../settings/company-profile.md).
- Heeft iemand geen van beide, of heeft het uurartikel geen verkoopprijs, dan zegt het venster wie of wat, en
  maakt Nimble nog geen factuur. Vul het aan en probeer opnieuw.
- Vink de regels aan die u wilt factureren en klik op **Klad-factuur maken**. U komt op een klad-factuur die u
  nog kunt nakijken; de btw staat op het tarief van de aanvaarde offerte van het project.

Uren die op een factuur staan, komen niet meer terug in het venster. Verwijdert u de regel of de klad-factuur,
dan staan die uren weer open.

## Het projectdossier

Met de knop **Projectdossier** opent u een afdrukvoorbeeld van het project, dat u als PDF kunt bewaren. Het
dossier bevat de gegevens en het werfadres, de financiële stand, de nacalculatie en de werkorders.

## Zie ook

- [Werken met een fiche](../fiches.md) — hoe de tabbladen en knoppen op elke fiche werken
- [Lijsten filteren](../lijsten-filteren.md) — zoeken, filteren en kolommen kiezen
- [Relaties](../relations.md) — de klanten waarvoor u projecten aanmaakt
- [Werkorders](work-orders.md) — het werk op een project
- [Medewerkers](staff.md) — de uurkost waarmee de nacalculatie rekent

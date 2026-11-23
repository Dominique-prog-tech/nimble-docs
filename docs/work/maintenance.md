# Onderhoud

Een onderhoudscontract is bij Nimble een project met bezoeken die terugkomen: de jaarlijkse beurt van een ketel, de controle van
een warmtepomp om het half jaar. U legt de bezoeken één keer vast. Nimble zet elk bezoek op tijd klaar als werkorder, en uw
technieker vinkt op de werkbon per toestel af wat hij nakeek.

## Hoe het samenhangt

1. U maakt een **project** voor de klant, bijvoorbeeld met het projecttype Onderhoud.
2. Op het tabblad **Onderhoud** van dat project legt u het **contract** vast (looptijd en prijs) en de **bezoeken**: wat, hoe vaak,
   wanneer het volgende, en voor welke **toestellen**.
3. Valt het volgende bezoek binnen de termijn, dan zet Nimble 's ochtends een **werkorder** klaar bij **Nog in te plannen** op het
   [planbord](planning.md), met een taak voor de verantwoordelijke van het project.
4. U plant de werkorder in. De technieker vult de **werkbon** in, met op het tabblad **Toestellen** de controle per toestel.
5. Zegt de werkbon **Klaar**, dan schuift het volgende bezoek op, gerekend vanaf de dag van het bezoek.

## Het scherm openen

Klik in de zijbalk op **Werk → Onderhoud**.

## De lijst

De lijst toont de bezoeken van alle onderhoudscontracten, het vroegste bovenaan. Zo staat wat te laat is altijd eerst.

![De lijst Onderhoud met de kolommen Volgend bezoek, Stand, Werkorder, Project, Klant, Omschrijving, Interval, Ploeg en Laatste bezoek: het jaarlijkse onderhoud van de gastoestellen van Gemeente Nijlen staat Klaargezet met zijn werkorder, de controle van de warmtepomp van de bibliotheek staat Gepland.](../images/onderhoud-lijst.png)

| Kolom | Wat het is |
|---|---|
| **Volgend bezoek** | De dag waarop het volgende bezoek voorzien is |
| **Stand** | Waar het bezoek staat, zie hieronder |
| **Werkorder** | De werkorder die Nimble klaarzette. Klik erop om hem te openen |
| **Project** | Het project van het contract |
| **Klant** | De klant van dat project |
| **Omschrijving** | Wat er bij het bezoek gebeurt |
| **Interval** | Hoe vaak het bezoek terugkomt, bijvoorbeeld *elk jaar* of *om de 6 maanden* |
| **Ploeg** | De ploeg die het bezoek doet |
| **Laatste bezoek** | De dag van het laatste afgewerkte bezoek |

| Stand | Betekenis |
|---|---|
| **Gepland** | Het volgende bezoek ligt verder dan de termijn: er gebeurt nog niets |
| **Binnenkort** | Het bezoek valt binnen de termijn; de werkorder komt bij de volgende ochtendronde |
| **Klaargezet** | Er staat een werkorder klaar die nog niet afgewerkt is |
| **Te laat** | De dag van het bezoek is voorbij, en er staat niets klaar of het klaargezette werk is nog niet af |
| **Buiten contract** | Het bezoek valt buiten de looptijd van het contract: Nimble zet het niet klaar. Verzet de datum of pas het contract aan. Een contract dat stilzwijgend verlengt, loopt door zolang u het niet opzegt |

Dubbelklik op een rij om het project te openen. Rechts zit de lade **Journaal** van het project waarop uw cursor staat.

## Het tabblad Onderhoud van het project

Open het project en klik op het tabblad **Onderhoud**. U vindt er drie kaarten: het contract, de installaties van het project en de
onderhoudsbezoeken.

![Het tabblad Onderhoud van project P2026-006 voor Gemeente Nijlen: de kaart Contract met de looptijd, de verlenging en de prijs per jaar, de kaart Installaties met de toestellen van het project, en de kaart Onderhoudsbezoeken met twee bezoeken, hun interval, het volgende bezoek, de stand, de werkorder en het aantal toestellen.](../images/project-onderhoud.png)

### Het contract

Klik op **Contract toevoegen** of **Contract bewerken**. Het formulier opent in de kaart zelf.

| Veld | Wat het is |
|---|---|
| **Begin** | De eerste dag van het contract. Verplicht |
| **Einde** | De laatste dag. Leeg betekent onbepaalde duur. Verplicht zodra **Stilzwijgend verlengen** aangevinkt is |
| **Opzegtermijn (dagen)** | Hoeveel dagen vóór het einde de klant moet opzeggen |
| **Verlengen met (maanden)** | Met hoeveel maanden het contract stilzwijgend verlengt |
| **Stilzwijgend verlengen** | Op het einde loopt het contract vanzelf verder met de gekozen maanden. Zegt de klant op, zet dit dan uit: na de einddatum zet Nimble geen bezoeken meer klaar |
| **Klant verwittigen over zijn bezoeken** | Zie [De klant verwittigen](#de-klant-verwittigen) |

Onder **Prijs** vult u de vaste prijs in: het **Bedrag per periode (excl. btw)**, het **Artikel op de factuur**, de **Btw**, de
**Periode** (per maand, per kwartaal, per half jaar of per jaar) en wanneer u factureert:

- **vooraf, bij het begin van elke periode**;
- **na het eerste bezoek in de periode**: zolang er in de periode geen bezoek afgewerkt is, wacht de factuur.

Laat het bedrag leeg voor een contract zonder vaste prijs. Dan factureert u de uren in regie, zoals bij elk ander project.

!!! info "Wat Nimble met de prijs doet"
    Is een periode aan de beurt, dan maakt Nimble 's ochtends een **conceptfactuur** met een regel per periode, en een taak
    *Contractfactuur nakijken*. U kijkt de factuur na en reikt ze zelf uit. De uren van een onderhoudsbezoek zitten in de prijs:
    **Factureren in regie** stelt ze niet voor. Een herstelling op hetzelfde project blijft in regie.

Heeft het contract een einde, dan krijgt de verantwoordelijke twee weken vóór de laatste opzegdag een taak *Onderhoudscontract loopt
af*. Zo blijft er tijd om met de klant te beslissen.

### De installaties

De toestellen die bij dit project horen. **Nieuwe installatie** opent een lege fiche met de klant en het project al ingevuld. Meer
daarover in [Installaties](installations.md).

### De onderhoudsbezoeken

| Kolom | Wat het is |
|---|---|
| **Omschrijving** | Wat er bij het bezoek gebeurt |
| **Interval** | Hoe vaak het terugkomt |
| **Volgend bezoek** | De dag van het volgende bezoek |
| **Stand** | Zoals in de lijst hierboven |
| **Werkorder** | De klaargezette werkorder, met een link |
| **Toestellen** | Hoeveel toestellen bij het bezoek horen. Klik om ze te kiezen |
| **Laatste bezoek** | De dag van het laatste afgewerkte bezoek |
| **Ploeg** | De ploeg die het bezoek doet |

**Bezoek toevoegen** opent een venster:

| Veld | Wat het is |
|---|---|
| **Omschrijving** | Bijvoorbeeld *Jaarlijks onderhoud gastoestellen*. Verplicht |
| **Om de** | Hoe vaak: een getal en een eenheid (dagen, weken, maanden, jaar) |
| **Volgend bezoek** | De dag van het eerstvolgende bezoek. De dag van de uitvoering kiest u later op het planbord |
| **Duur (dagen)** | Hoe lang het bezoek duurt, bijvoorbeeld 0,5 of 2 |
| **Ploeg** | De ploeg die het bezoek doet. Mag leeg blijven |
| **Na te kijken** | Eén punt per regel. Ze komen op de werkorder en worden op de werkbon per toestel afgevinkt |

Dubbelklik op een bezoek om het bij te stellen. **Verwijderen** zet het in de [prullenbak](../administration/recycle-bin.md).

Klik in de kolom **Toestellen** om de toestellen van het bezoek te kiezen. Het venster toont de toestellen van het project eerst,
daarna de andere van dezelfde klant, met hun serienummer en locatie.

## Hoe een bezoek klaargezet wordt

Elke ochtend kijkt Nimble welke bezoeken binnen de termijn vallen. Standaard is dat **30 dagen**; u stelt het in bij
[Opvolging van leads, offertes, onderhoud en serviceverzoeken](../administration/lead-follow-up.md#onderhoudscontracten).

Voor elk bezoek dat aan de beurt is, komt er:

- een **werkorder** bij **Nog in te plannen** op het planbord, met de ploeg, de duur, de toestellen en de punten om na te kijken in
  de omschrijving;
- een taak *Onderhoud inplannen* voor de verantwoordelijke van het project.

Op de [werkbon](work-sheets.md#toestellen) van die werkorder vinkt de technieker per toestel de punten af. Zegt de werkbon **Klaar**,
dan noteert Nimble het bezoek als laatste bezoek en schuift het volgende op met het interval.

## De klant verwittigen

Nimble kan de klant mailen over zijn bezoek: een aankondiging zodra het bezoek klaargezet is (*wij nemen contact op*), en een
bevestiging zodra het een dag heeft op het planbord.

Dat gebeurt enkel als beide aanstaan:

1. voor het hele bedrijf: **De klant verwittigen over zijn onderhoudsbezoek** bij
   [Opvolging](../administration/lead-follow-up.md#onderhoudscontracten). Standaard staat dat uit;
2. per contract: **Klant verwittigen over zijn bezoeken** in het contract. Standaard staat dat aan.

De teksten van beide mails past u aan bij **Platformbeheer → Mailsjablonen**. Een klant zonder e-mailadres krijgt niets; de mail
staat in het tabblad **Mails** van het project.

## Veelgemaakte fouten

!!! warning "Een bezoek dat niet klaargezet wordt"
    Staat het bezoek op **Buiten contract**, dan valt de datum buiten de looptijd van het contract. Verzet de datum van het bezoek,
    of pas het begin of het einde van het contract aan.

!!! warning "De werkorder staat er, maar niemand plant hem in"
    De taak *Onderhoud inplannen* gaat naar de verantwoordelijke van het project. Heeft het project geen verantwoordelijke, dan staat
    de taak bij niemand op naam. Vul de verantwoordelijke in op de projectfiche.

## Zie ook

- [Installaties](installations.md)
- [Projecten](projects.md)
- [Planning](planning.md)
- [Werkbonnen](work-sheets.md)
- [Opvolging van leads, offertes, onderhoud en serviceverzoeken](../administration/lead-follow-up.md)

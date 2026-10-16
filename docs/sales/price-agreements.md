# Prijsafspraken

Een **prijsafspraak** legt vast welke prijs u met één klant afsprak voor een reeks artikelen, voor een periode:
een raamcontract met een vereniging van mede-eigenaars, een prijslijst van een projectontwikkelaar voor al zijn
woningen van dit jaar. Maakt u een offerte voor die klant, dan laadt u de afgesproken posten in één klik in, met
de afgesproken prijs.

## Waar u ze vindt

Open een klant in [Relaties](../relations.md) en klik op het tabblad **Prijsafspraken**. Het tabblad staat enkel
op een **bewaarde** relatie die **Klant** aangevinkt heeft.

![Het tabblad Prijsafspraken op de fiche van Residentie Parkzicht VME: één afspraak met haar naam, de periode, het
aantal regels en de status Geldig.](../images/relatie-prijsafspraken.png)

| Kolom | Wat het betekent |
|---|---|
| **Naam** | Hoe u de afspraak noemt — "Onderhoud gemeenschappelijke delen", "Platte daken woningen 2026" |
| **Geldig vanaf** en **Geldig tot en met** | De periode. Zonder einddatum loopt de afspraak door |
| **Regels** | Hoeveel artikelen erin staan |
| **Status** | **Geldig**, **Nog niet geldig** of **Verlopen**, gerekend op vandaag |

Klik op **Nieuwe prijsafspraak** om er een te maken. Dubbelklik op een rij om ze te openen.

U heeft het recht nodig om offertes te bekijken; om een afspraak te maken of te wijzigen, het recht om offertes te
bewerken.

## Een prijsafspraak

![Een prijsafspraak: bovenaan de naam en de periode, daaronder de regels met hoofdstuk, artikel, eenheid,
standaardprijs, kostprijs, afgesproken prijs en marge, en onderaan het vak om een Excel-bestand in te lezen.](../images/prijsafspraak-fiche.png)

Bovenaan staan de **naam** en de **periode**. Een afspraak geldt op elke dag van haar periode, de begin- en de
einddatum inbegrepen.

Daaronder staan de **regels**: elk artikel met de prijs die voor deze klant geldt.

| Kolom | Wat het betekent |
|---|---|
| **Hoofdstuk** | De kop waaronder de post op de offerte komt — "1. Werkuren", "2. Verplaatsing". Leeg mag |
| **Artikel** | Het artikel uit uw [catalogus](../inventory/articles.md) |
| **Eenheid** | Van het artikel |
| **Standaardprijs** | De verkoopprijs van het artikel, ter vergelijking |
| **Kostprijs** | De kostprijs van het artikel |
| **Afgesproken prijs** | De prijs voor deze klant. Leeg = een post zonder prijs: hij komt mee op de offerte, en u vult de prijs daar in |
| **Marge** | Wat de afgesproken prijs overlaat boven de kostprijs, in procent van de prijs |

- **+ Artikel** voegt een artikel toe. Het krijgt de standaardprijs als voorstel en het hoofdstuk van de regel
  erboven, zodat u een hoofdstuk maar één keer typt.
- **Verwijderen** naast een regel haalt het artikel uit de afspraak.
- **Bewaren** legt de afspraak vast. Niets is bewaard tot u daarop klikt.

### Kostprijs en marge

De kolommen **Kostprijs** en **Marge** ziet u enkel met het recht om de financiële cijfers te bekijken.

De marge kleurt volgens de margegrenzen van uw [bedrijfsfiche](../settings/company-profile.md), zoals op een
project: groen, oranje of rood. Zonder ingestelde grenzen krijgt ze geen kleur.

Ligt een afgesproken prijs **onder de kostprijs**, dan is de marge altijd rood — ook zonder grenzen — en staat
boven de regels *Onder de kostprijs: 1 regel. Kijk de afgesproken prijs na.* Bewaren blijft mogelijk: soms is
dat precies wat u afsprak.

### Eén prijs per artikel per dag

Een artikel kan op één dag maar **één** afgesproken prijs hebben voor dezelfde klant. Twee afspraken met hetzelfde
artikel in een overlappende periode weigert Nimble bij het bewaren, met de naam van de andere afspraak erbij. Pas
dan de periode aan, of haal het artikel uit een van beide.

Twee afspraken met **verschillende** artikelen mogen wel tegelijk gelden.

## Inlezen uit Excel

Een lange prijslijst typt u niet over. Onderaan de afspraak staat **Inlezen uit Excel**.

1. Klik op **Sjabloon downloaden**. U krijgt een Excel-bestand met de huidige regels van de afspraak: artikelcode,
   omschrijving, eenheid, standaardprijs, afgesproken prijs en hoofdstuk.
2. Vul het aan of pas het aan. Enkel de kolommen **Artikelcode**, **Afgesproken prijs** en **Hoofdstuk** worden
   gelezen; de andere staan er ter informatie.
3. Sleep het bestand in het vak, of klik erop om het te kiezen.
4. Nimble toont elke regel van het bestand. Kijk ze na en klik op **Overnemen**. Klik daarna op **Bewaren**.

!!! warning "Het bestand vervangt de regels"
    Wat niet in het bestand staat, verdwijnt uit de afspraak. Daarom begint u best van het sjabloon: daar staan
    de huidige regels al in.

Een regel met een fout houdt het overnemen tegen, zodat er geen post stil verloren gaat. Bij elke regel staat wat
er mis is:

| Melding | Wat u doet |
|---|---|
| *Geen artikelcode.* | Vul de code in, of maak de regel leeg |
| *Geen actief artikel met code …* | Kijk de code na. Een artikel dat niet actief is of in de prullenbak staat, telt niet |
| *Dit artikel staat al op regel …* | Elk artikel maar één keer |
| *De prijs '…' is geen getal.* | Typ een getal: 38,00 of 38.00. Laat de cel leeg voor een post zonder prijs |
| *Een negatieve prijs.* | Een prijs is nul of meer |
| *Het hoofdstuk is langer dan 200 tekens.* | Kort het hoofdstuk in |

Verbeter het bestand en lees het opnieuw in. **Niet overnemen** laat de regels van de afspraak zoals ze waren.

## Een nieuwe periode

Loopt een afspraak af en gaat ze verder aan nieuwe prijzen, klik dan onderaan op **Kopiëren naar een nieuwe
periode**. Er opent een nieuwe afspraak met dezelfde regels:

- ze begint de dag na de einddatum en duurt even lang — een afspraak van 01/01 tot 31/12 wordt er een van 01/01
  tot 31/12 van het jaar erop;
- staat het jaartal in de naam, dan krijgt de kopie het nieuwe jaartal;
- een artikel dat niet meer actief is, gaat niet mee. Het scherm zegt hoeveel regels er wegvielen.

Pas de prijzen aan en klik op **Bewaren**. Tot dan is er niets bewaard. De oude afspraak blijft staan, met de
status **Verlopen** zodra haar periode voorbij is.

!!! note "Een afspraak zonder einddatum"
    Zonder einddatum is er geen periode die volgt. Geef de oude afspraak eerst een einddatum: anders overlappen de
    twee, en weigert Nimble het bewaren.

## Op een offerte

Maakt u een [offerte](quotes.md) voor een klant met een prijsafspraak die op de **offertedatum** geldt, dan staat
boven de regels *Voor deze klant geldt op de offertedatum een prijsafspraak:* met per afspraak een knop
**'…' inladen**.

- **Inladen** zet alle posten van de afspraak op de offerte, met de afgesproken prijs en **hoeveelheid 0**, elk
  onder zijn hoofdstuk. Vul de hoeveelheden in en verwijder de posten die niet van toepassing zijn.
- Kiest u een artikel met **+ artikel**, dan krijgt het ook de afgesproken prijs.
- Een regel met een afgesproken prijs draagt het kenmerk **Prijsafspraak**. Wijzigt u de prijs met de hand, dan
  verdwijnt het kenmerk.
- Een afspraak die op de offertedatum niet geldt — verlopen of nog niet begonnen — wordt niet aangeboden. Wijzigt u
  de klant of de offertedatum, dan past de balk zich aan.

Drukt u de offerte af of mailt u ze terwijl er nog regels met hoeveelheid 0 op staan, dan waarschuwt Nimble:
*Hoeveelheid 0 op … — vul ze in of verwijder ze als ze niet van toepassing zijn.* Afdrukken en mailen blijven
mogelijk.

!!! info "Een offerte houdt haar prijzen"
    De prijs op een offerte is een kopie. Wijzigt u later de afspraak, of verwijdert u ze, dan veranderen de
    offertes die al bestaan niet.

## Verwijderen

Klik op de afspraak op **Verwijderen**. Ze gaat naar de [prullenbak](../administration/recycle-bin.md), waar u
ze kunt terughalen — tenzij er intussen een andere afspraak met dezelfde artikelen in dezelfde periode geldt.

## Zie ook

- [Offertes](quotes.md) — waar de afgesproken prijzen terechtkomen
- [Relaties](../relations.md) — de klantenfiche met het tabblad Prijsafspraken
- [Artikelen](../inventory/articles.md) — de standaard- en de kostprijs
- [Bedrijfsfiche](../settings/company-profile.md) — de margegrenzen

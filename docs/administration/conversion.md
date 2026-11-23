# Conversie

!!! info "Voor ADM-operators"
    Dit scherm is voorbehouden aan medewerkers van ADM-Concept. Als klant van Nimble ziet u het niet.

Op het scherm **Conversie** zet u de gegevens van de **actieve tenant** over uit de databank van het vorige
pakket (Firebird) naar Nimble (PostgreSQL). Eén routine converteert alles in de juiste volgorde; ze is
herhaalbaar en maakt geen dubbels.

## Het scherm openen

1. Klik onderaan in de zijbalk op **Platformbeheer**.
2. Kies de juiste tenant: tegel **Tenants** in de groep **ADM-beheer** → **Gebruiken →**.
3. Ga terug naar **Platformbeheer** en klik in de groep **ADM-beheer** op de tegel **Conversie**.

Bovenaan staat **Actieve tenant:** met de code van de tenant. Is er geen gekozen, dan staat er **geen — kies er
eerst één bij Tenants**, met de melding **Kies eerst een tenant (Platformbeheer → Tenants → Gebruiken) en stel
zijn Firebird-bron in.**

![Het bovenste deel van het conversiescherm voor tenant demo: het blok Legacy Firebird-bron zonder pad, de knop Converteer deze tenant, en daaronder de blokken Legacy-gebruikers importeren en Aanmaakdatums bijwerken. De andere blokken volgen lager op het scherm.](../images/conversie-scherm.png)

## Legacy Firebird-bron

Dit blok toont of Nimble de Firebird-databank van de actieve tenant kan lezen:

- **Controleren…** — de test loopt.
- **Verbonden (read-only)** — de bron is bereikbaar. Erachter staat het aantal rijen in `CRM_ACCOUNTS`.
- **Geen Firebird-pad geconfigureerd voor deze tenant (Platformbeheer → Tenants → Firebird-bron).** — stel
  eerst het pad in op het scherm [Tenants](tenants.md).
- Een rode foutmelding — de bron is ingesteld maar niet bereikbaar.

**Opnieuw testen** voert de test opnieuw uit.

Nimble leest de Firebird-databank **alleen-lezen**. Het vorige pakket blijft de enige schrijver zolang de
migratie loopt.

## Conversie starten

Klik op **Converteer deze tenant**. De knop werkt enkel wanneer de bron **Verbonden** is. Tijdens het werk
staat er **Bezig met converteren…**.

Na afloop ziet u per onderdeel:

| Kolom | Betekenis |
|---|---|
| **Onderdeel** | Welk stuk data, bv. *Relaties (CRM_ACCOUNTS)* of *Offertes (FIN_SALES_QUOTES_HEADER)* |
| **Aantal** | Hoeveel rijen verwerkt zijn |
| **Status** | **OK** in het groen, of de foutmelding in het rood |

Onder de tabel staat het totaal: **Klaar — … rijen verwerkt in totaal.**

De onderdelen omvatten onder meer de bedrijfsfiche, relaties met hun website, gsm en opmerkingen, leveranciers, contactpersonen, contactfuncties,
taken, afspraken en notities, artikelgroepen en artikelen met hun leverancier, fabrikant en EAN-code, btw-codes, offertes en offerteregels, facturen en
factuurregels, vorderingsstaten, inkoopfacturen, projecten met hun fases, materialen en artikelen, ploegen, en
de keuzelijsten productiestatus, pipeline-status en projecttypes.

!!! tip "Herhaalbaar"
    U mag de conversie gerust opnieuw starten, bijvoorbeeld na nieuwe gegevens in Firebird. Er ontstaan geen
    dubbels.

!!! warning "Een klant die al in Nimble werkt"
    Een volledige conversie zet bestaande gegevens opnieuw op de waarde uit Firebird: wat de klant intussen in Nimble
    aanpaste (fasen, datums, statussen, planning), wordt overschreven. Voor zo'n klant is de conversie **vergrendeld**:
    er staat een melding boven de knop, de knop is uitgeschakeld en Nimble converteert niets. De blokken
    **Aanmaakdatums bijwerken**, **Leveranciers per artikel overnemen**, **Relatiegegevens aanvullen** en
    **Aankoopcreditnota's markeren** hieronder werken wél: ze overschrijven niets wat de klant in Nimble instelde.
    Ook **Offertes bijwerken** werkt: het slaat elke offerte over waaraan in Nimble al iets gebeurde.

## Legacy-gebruikers importeren

Met **Importeer / synchroniseer gebruikers** zet u de actieve backoffice-gebruikers uit Firebird om naar
aanmeldingen voor deze tenant.

- Bestaande aanmeldingen worden gesynchroniseerd: naam, rol en koppeling met ADM One. Hun wachtwoord blijft
  ongewijzigd.
- Enkel nieuwe aanmeldingen krijgen een tijdelijk wachtwoord uit de serverinstellingen.
- Na afloop ziet u hoeveel gebruikers aangemaakt, bijgewerkt en overgeslagen zijn, met eventueel een lijst
  meldingen.

Ook deze knop werkt enkel wanneer de bron **Verbonden** is.

## Aanmaakdatums bijwerken

Dit blok neemt voor de overgezette projecten en artikels de aanmaakdatum over uit Firebird. Er wijzigt niets
anders, en wat in Nimble zelf aangemaakt is, blijft onaangeroerd.

1. Klik **Nakijken**. Nimble leest enkel en toont per onderdeel (**Projecten**, **Artikels**) wat er zou
   gebeuren. Daaronder staat bijvoorbeeld *639 aanmaakdatums zouden wijzigen. Er is nog niets geschreven.*
2. Vond het nakijken iets te wijzigen, dan gaat **Bijwerken** aan. Klik erop.
3. Klik daarna opnieuw **Nakijken**: alles hoort dan onder **Al juist** te staan.

| Kolom | Betekenis |
|---|---|
| **Overgezet** | Hoeveel projecten of artikels uit Firebird komen |
| **Te wijzigen** / **Gewijzigd** | Hoeveel aanmaakdatums zouden veranderen, of na **Bijwerken**: veranderd zijn |
| **Al juist** | Hoeveel er al overeenkomen met Firebird |
| **Bron zonder datum** | Firebird kent voor dit record geen datum; het blijft zoals het is |
| **Niet in de bron** | Firebird draagt dit record niet (meer); het blijft zoals het is |

Elke fiche waarvan de datum verandert, krijgt een regel **Gewijzigd** in haar logboek.

## Leveranciers per artikel overnemen

Dit blok koppelt de leverancier uit Firebird aan elk artikel dat in Nimble **nog geen** leverancier heeft. Als
prijs geldt de huidige aankoopprijs in Nimble, zodat de kostprijs van geen enkel artikel verschuift. Artikels
die al een leverancier hebben, blijven onaangeroerd.

1. Klik **Nakijken**. Nimble leest enkel en toont wat er zou gebeuren.
2. Is er iets te koppelen, dan gaat **Koppelen** aan. Klik erop.
3. Klik daarna opnieuw **Nakijken**: alles hoort dan onder **Had al een leverancier** te staan.

| Kolom | Betekenis |
|---|---|
| **Met leverancier in de bron** | Hoeveel artikels in Firebird een leverancier hebben |
| **Te koppelen** / **Gekoppeld** | Hoeveel artikels een leverancier zouden krijgen, of na **Koppelen**: gekregen hebben |
| **Had al een leverancier** | Artikels die in Nimble al een leverancier hebben; ze blijven zoals ze zijn |
| **Artikel niet in Nimble** | Het artikel uit Firebird bestaat niet in Nimble |
| **Leverancier niet in Nimble** | De leverancier uit Firebird bestaat niet als relatie in Nimble |

De volledige conversie hierboven koppelt de leveranciers ook, maar met de prijs en de code uit Firebird.
Zie [Artikelen](../inventory/articles.md#leveranciers-van-een-artikel) voor wat een leverancier op een artikel
betekent.

## Relatiegegevens aanvullen

Dit blok neemt voor de overgezette relaties de **website**, de **gsm** en de **opmerkingen** over uit Firebird, maar
enkel waar Nimble nog niets heeft. Een veld dat al ingevuld is, blijft zoals het is, ook als Firebird iets anders
zegt. De opmerkingen worden een notitie *Opmerkingen* op de relatie, gedateerd op de dag waarop de relatie in
Firebird het laatst gewijzigd werd.

1. Klik **Nakijken**. Nimble leest enkel en toont per gegeven (**Website**, **Gsm**, **Opmerkingen**) wat er zou
   gebeuren.
2. Is er iets aan te vullen, dan gaat **Aanvullen** aan. Klik erop.
3. Klik daarna opnieuw **Nakijken**: alles hoort dan onder **Al ingevuld** te staan.

| Kolom | Betekenis |
|---|---|
| **In de bron** | Hoeveel relaties dit gegeven in Firebird hebben |
| **Aan te vullen** / **Aangevuld** | Hoeveel er zouden worden ingevuld, of na **Aanvullen**: ingevuld zijn |
| **Al ingevuld** | Nimble heeft al een waarde of al een notitie; die blijft zoals ze is |
| **Relatie niet in Nimble** | De relatie uit Firebird bestaat niet in Nimble |
| **Bron zonder datum** | Enkel bij de opmerkingen: Firebird kent geen wijzigingsdatum, dus komt er geen notitie |

Staat de gsm al als telefoonnummer op de relatie, dan wordt ze niet nog eens ingevuld. Een notitie die u in Nimble
verwijderde, komt niet terug. Elke relatie waarvan de website of gsm verandert, krijgt een regel in haar logboek.

## Aankoopcreditnota's markeren

Uw vorige pakket bewaarde een creditnota van een leverancier als aankoopfactuur met een **negatief bedrag**. Dit
blok geeft elke overgezette aankoopfactuur met een negatief bedrag de soort **Creditnota**. Het bedrag, de
goedkeuring en de betaalstatus blijven zoals ze zijn. Het blok leest enkel Nimble, niet de Firebird-databank.

1. Klik **Nakijken**. Nimble telt wat er zou gebeuren.
2. Is er iets te markeren, dan gaat **Markeren** aan. Klik erop.
3. Klik daarna opnieuw **Nakijken**: alles hoort dan onder **Al creditnota** te staan.

| Kolom | Betekenis |
|---|---|
| **Overgezette aankoopfacturen** | Hoeveel aankoopfacturen uit Firebird komen |
| **Te markeren** / **Gemarkeerd** | Hoeveel er een negatief bedrag hebben en nog als factuur staan, of na **Markeren**: gemarkeerd zijn |
| **Al creditnota** | Negatieve stukken die al de soort Creditnota hebben |

Een volledige conversie zet de soort voortaan zelf. Zie [Aankoopfacturen](../purchasing/purchase-invoices.md#creditnotas).

## Leveranciers aanvullen

Zet de leveranciers over die in het vorige pakket bijkwamen sinds de laatste volledige conversie. Een leverancier die
al in Nimble staat, blijft zoals hij is. Doe dit vóór **Aankoopfacturen aanvullen**: een aankoopfactuur kan pas over
als haar leverancier in Nimble staat.

1. Klik **Nakijken**. Nimble telt wat er zou gebeuren en noemt de nieuwe leveranciers.
2. Zijn er nieuwe leveranciers, dan gaat **Aanvullen** aan. Klik erop.
3. Klik daarna opnieuw **Nakijken**: er hoort niets nieuws meer te zijn.

| Kolom | Betekenis |
|---|---|
| **In de bron** | Hoeveel leveranciers het vorige pakket bevat |
| **Al in Nimble** | Daarvan hoeveel er al overgezet zijn |
| **Nieuw** / **Toegevoegd** | Hoeveel er bijkomen, of na **Aanvullen**: bijgekomen zijn |
| **Al met de hand in Nimble** | Leveranciers met een btw-nummer dat al bij een met de hand ingebrachte leverancier staat; er komt geen tweede bij |
| **Zonder naam** | Leveranciers zonder naam; ook de volledige conversie slaat ze over |

Staat een leverancier onder **Al met de hand in Nimble**, dan noemt Nimble hem met de leverancier die al in Nimble
staat. Zijn facturen kunnen dan niet automatisch over: breng ze met de hand in.

Daarna kunt u ook **Relatiegegevens aanvullen** en **Leveranciers per artikel overnemen**: die vinden de nieuwe
leveranciers ook.

## Aankoopfacturen aanvullen

Zet de aankoopfacturen over die in het vorige pakket binnenkwamen sinds de laatste volledige conversie. Een
aankoopfactuur die al in Nimble staat, blijft zoals ze is: overgezet, met de hand ingebracht of via Peppol ontvangen.
De scans van de nieuwe facturen koppelt daarna het blok **Documenten overzetten**.

1. Klik **Nakijken**. Nimble telt wat er zou gebeuren.
2. Zijn er nieuwe facturen, dan gaat **Aanvullen** aan. Klik erop.
3. Klik daarna opnieuw **Nakijken**: er hoort niets nieuws meer te zijn.

| Kolom | Betekenis |
|---|---|
| **In de bron** | Hoeveel aankoopfacturen het vorige pakket bevat |
| **Al in Nimble** | Daarvan hoeveel er al overgezet zijn |
| **Nieuw** / **Toegevoegd** | Hoeveel er bijkomen, of na **Aanvullen**: bijgekomen zijn |
| **Leverancier niet in Nimble** | Facturen die niet over kunnen, omdat hun leverancier niet in Nimble staat |
| **Al ingebracht in Nimble** | Facturen die al met de hand of via Peppol in Nimble staan; ze worden overgeslagen |

Kan een factuur niet over omdat haar leverancier ontbreekt, dan toont Nimble onder de telling een lijst: de
leverancier zoals hij in het vorige pakket heet, het nummer, de datum, het totaal en of de factuur goedgekeurd of
betaald is. Staat er een naam, vul die leverancier dan aan met **Leveranciers aanvullen** hierboven en klik daarna
opnieuw **Nakijken**. Staat er **Verwijderd of onbekend**, dan is die leverancier in het vorige pakket verwijderd en
komt hij niet over: maak hem aan in Nimble of breng de factuur met de hand in.

## Vorderingsstaten aanvullen

Brengt de staten uit het vorige pakket bij. De staten die sinds de laatste volledige conversie gemaakt zijn, komen
erbij; een staat die er al stond, volgt wat het vorige pakket nu zegt (status, bedrag en lijnen); een staat die daar
verwijderd is, gaat ook uit Nimble. Ze blijven alleen-lezen, met de status **Oude toepassing**. Een staat die in
Nimble gemaakt is, blijft zoals hij is.

1. Klik **Nakijken**. Nimble telt wat er zou gebeuren en schrijft nog niets.
2. Is er iets te doen, dan gaat **Aanvullen** aan. Klik erop.
3. Klik daarna opnieuw **Nakijken**: er hoort niets meer te doen te zijn.

| Kolom | Betekenis |
|---|---|
| **In de bron** | Hoeveel staten het vorige pakket bevat |
| **Ongewijzigd** | Staten van een project in Nimble die er al staan zoals het vorige pakket ze nu draagt |
| **Nieuw** / **Toegevoegd** | Staten die erbij komen, of na **Aanvullen**: bijgekomen zijn |
| **Bij te werken** / **Bijgewerkt** | Staten waarvan de status, het bedrag of de lijnen veranderden |
| **Project niet in Nimble** | Staten van een project dat niet in Nimble staat: ze komen niet over |
| **Te wissen** / **Gewist** | Staten die in het vorige pakket verwijderd zijn |

Onder de telling staan drie lijsten:

- **Projecten in Nimble met staten uit de oude toepassing**: per project de laatste staat, wat er al gefactureerd is
  en hoeveel daarvan Nimble herkent in de aanvaarde offerte. Dat laatste bepaalt hoeveel **Overnemen uit de vorige
  toepassing** straks invult op de eerste staat in Nimble (zie [Vorderingsstaten](../sales/progress-reports.md)).
- **Staten van projecten die niet in Nimble staan**: met het projectnummer uit het vorige pakket en de referentie van
  de laatste staat. Moet zo'n project in Nimble verder, dan maakt u eerst het project en zijn offerte aan.
- **Verwijderd in de oude toepassing**: de staten die **Aanvullen** uit Nimble wist, met hun bedrag en status.

Leest Nimble geen enkele staat in het vorige pakket, dan wist het niets. Zou het meer dan de helft van de staten in
Nimble moeten wissen, dan weigert het, met de reden erbij: dat wijst eerder op een leesfout dan op wat u deed.

## Offertes bijwerken

Voor een klant die na de laatste volledige conversie nog offertes in het vorige pakket afwerkte. Een overgezette
offerte die in Nimble niet aangeraakt is, volgt wat het vorige pakket nu zegt: kop, regels en bedragen. Een offerte
waaraan in Nimble al iets gebeurde, wordt **niet** overschreven. Offertes die nog niet in Nimble staan, komen erbij met
hun eigen nummer. Een offerte die in het vorige pakket verwijderd is, blijft in Nimble staan.

1. Klik **Nakijken**. Nimble vergelijkt elke offerte en schrijft nog niets.
2. Is er iets te doen, dan gaat **Aanvullen** aan. Klik erop.
3. Klik daarna opnieuw **Nakijken**: er hoort niets meer bij te werken te zijn.

| Kolom | Betekenis |
|---|---|
| **In de bron** | Hoeveel offertes het vorige pakket bevat |
| **Ongewijzigd** | Offertes die al in Nimble staan zoals het vorige pakket ze nu draagt |
| **Bij te werken** / **Bijgewerkt** | Offertes die in Nimble niet aangeraakt zijn en waarvan iets veranderde |
| **Nieuw** / **Toegevoegd** | Offertes die nog niet in Nimble stonden |
| **Bewerkt in Nimble** | Offertes die verschillen, maar waaraan in Nimble al iets gebeurde: ze blijven zoals ze zijn |
| **Verwijderd in de bron** | Offertes die in het vorige pakket verwijderd zijn: ze blijven in Nimble staan |

Onder de telling staan de lijsten per offerte, met het bedrag in Nimble en in het vorige pakket, de status, en wat er
verschilt (kop, secties of regels).

**Wanneer is een offerte bewerkt in Nimble?** Als ze in Nimble verstuurd, online aangeboden, ter ondertekening
gestuurd of gefactureerd is, als er een nieuwe versie van gemaakt is, of als iemand er na de laatste conversie iets aan
wijzigde. Dat laatste leest Nimble uit het logboek. Een conversie herkent het aan de honderden wijzigingen in dezelfde
minuut; de lijn onder de telling toont wanneer de laatste was. Bij zo'n offerte staat in de kolom **Waarom niet** wat
er gebeurde, en wanneer en door wie. Spreek met de klant af welke versie geldt.

**Klanten die nog niet in Nimble stonden.** Staat de klant van een nieuwe offerte niet in Nimble, dan zoekt Nimble een
klant met hetzelfde btw-nummer of dezelfde naam. Vindt het er geen, dan komt de klant mee uit het vorige pakket. Is de
klant daar gewist, dan komt de offerte niet over, zoals bij een volledige conversie. De lijst **Klanten van nieuwe
offertes** toont wat er met elke klant gebeurt.

Zou Nimble meer dan een kwart van de overgezette offertes moeten bijwerken, dan weigert het, met de reden erbij: dat
wijst eerder op een fout in de bron of in het logboek dan op wat de klant deed.

## Betaalstatus overnemen

Gebruik dit **één keer**, op het moment dat uw boekhouding van het vorige pakket naar Nimble overstapt. Het neemt uit
het vorige pakket over welke aankoopfacturen **goedgekeurd** en **betaald** zijn, voor de aankoopfacturen die al in
Nimble staan. Zo ziet u in Nimble geen factuur als te betalen die u in het vorige pakket al betaalde.

Het werkt enkel vooruit: wat in Nimble al goedgekeurd of betaald is, blijft zo. Een betaalde factuur wordt ook
goedgekeurd. Facturen via Peppol of met de hand ingebracht blijven buiten schot.

1. Klik **Nakijken**. Nimble telt wat er zou gebeuren en noemt de facturen die als betaald gezet worden.
2. Is er iets over te nemen, dan gaat **Overnemen** aan. Klik erop.
3. Klik daarna opnieuw **Nakijken**: er hoort niets meer over te nemen te zijn. Onder de tabel staat dan op welke datum de
   betaalstatus overgenomen is.

**Overnemen kan één keer.** Na de eerste geslaagde overname blijft de knop uit, en Nimble meldt de datum waarop het
gebeurde: vanaf dan bepaalt het vorige pakket niets meer. Werkt een klant definitief in Nimble, dan blijft **Overnemen**
ook uit. **Nakijken** kan altijd: dat leest enkel en verandert niets.

| Kolom | Betekenis |
|---|---|
| **In de bron** | Hoeveel aankoopfacturen het vorige pakket bevat |
| **In Nimble gevonden** | Daarvan hoeveel er al in Nimble staan |
| **Goed te keuren** / **Goedgekeurd** | Hoeveel er goedgekeurd worden, of na **Overnemen**: goedgekeurd zijn |
| **Als betaald te zetten** / **Als betaald gezet** | Hoeveel er als betaald gezet worden, of na **Overnemen**: gezet zijn |

Daarna duidt u betalingen aan in Nimble zelf. Zie [Aankoopfacturen](../purchasing/purchase-invoices.md#een-betaling-aanduiden).

## Land aanvullen

Een e-factuur via Peppol vertrekt niet zonder het land van de klant. Ontbreekt het bij veel relaties, dan vult deze stap
het in, zodat u niet bij elke factuur eerst de relatiefiche moet aanvullen.

De stap vult het land van uw **bedrijfsfiche** in (meestal België) op elke relatie die nog geen land heeft, als haar
postcode in dat land kan liggen of leeg is. Een relatie met een andere postcode, bijvoorbeeld een Duitse leverancier
met postcode 49767, krijgt het niet: die staat in een lijst om met de hand na te kijken. Een relatie die al een land
heeft, blijft zoals ze is. De stap leest enkel Nimble, en kan dus ook wanneer de volledige conversie vergrendeld is.

1. Klik **Nakijken**. Nimble telt de relaties zonder land en toont welke het land niet krijgen.
2. Is er iets aan te vullen, dan gaat **Aanvullen** aan. Klik erop.
3. Vul het land van de relaties in de lijst zelf in op hun relatiefiche.

| Kolom | Betekenis |
|---|---|
| **Zonder land** | Hoeveel relaties nog geen land hebben |
| **Krijgen BE** / **Kregen BE** | Hoeveel er het land krijgen, of na **Aanvullen**: kregen |
| **Met de hand nakijken** | Hoeveel er een postcode hebben die niet bij het land past |

U kunt de stap later opnieuw draaien: ze vindt dan enkel de relaties die er intussen zonder land bijkwamen. Een nieuwe
relatie krijgt het land van de bedrijfsfiche al bij het aanmaken.

## Demo-gegevens genereren

Dit blok staat enkel op de tenant **demo**. **Genereer demo-gegevens** vult die tenant met verzonnen maar
realistische gegevens: stamlijsten, artikelen, relaties, contactpersonen, leads, medewerkers en projecten.
Wat er al staat, blijft staan. Na afloop toont een tabel per onderdeel hoeveel records **Nieuw** zijn en
hoeveel er **Stond er al**.

## Veelgemaakte fouten

!!! warning
    - **Geen tenant gekozen** — kies eerst een tenant bij **Tenants → Gebruiken →**.
    - **Geen Firebird-pad** — vul het pad in bij de tenant op het scherm **Tenants** en klik op **Bewaren**.
    - **Verbinding mislukt** — controleer of de Firebird-server bereikbaar is en het pad klopt, en klik op
      **Opnieuw testen**.

## Zie ook

- [Tenants](tenants.md) — de tenant kiezen en het Firebird-pad instellen
- [Gebruikers](users.md)
- [Relaties](../relations.md) — het scherm waar de geïmporteerde relaties verschijnen

# Offertes

Een offerte is uw prijsvoorstel aan een klant. U bouwt ze op uit **blokken** met daarin regels — werken,
materialen en uren. Daarna volgt u op of de klant ze aanvaardt, en maakt u er een factuur van.

## Het scherm openen

Klik in de zijbalk op **Verkoop → Offertes**.

## De lijst en het bord

Links bovenaan kiest u tussen twee weergaven: **Lijst** en **Bord**. Uw keuze wordt bewaard: opent u het
scherm later opnieuw, dan staat het op de weergave die u het laatst gebruikte.

### Lijst

![De offertelijst met de kolommen Nummer, Klant, Datum, Geldig tot, Bedrag en Status. Twee verstuurde
offertes zijn over hun geldigheidsdatum: de kolom Geldig tot toont in het rood hoelang al.](../images/offertes-lijst.png)

| Kolom | Wat u ziet |
|---|---|
| **Nummer** | Het offertenummer. Varianten en versies dragen een achtervoegsel, zoals `-A` of `-v2` |
| **Klant** | Voor wie de offerte is |
| **Datum** | De datum van het voorstel |
| **Geldig tot** | Tot wanneer de prijs geldt. Is een verstuurde offerte over die datum, dan staat er in het rood hoelang al — *10 dagen*, *2 maanden* |
| **Bedrag** | Het totaal inclusief btw |
| **Status** | Klad, Verstuurd, Aanvaard, Geweigerd of Vervangen |

Naast de weergaveknoppen staat een keuzelijst om snel af te bakenen: **Klad**, **Verstuurd**, **Aanvaard**,
**Geweigerd**, **Vervangen** of **Verlopen**, telkens met het aantal erachter. Een keuze die nergens voorkomt, staat er
niet bij. Rechts staan **Nieuwe offerte**, **Exporteren** en het zoekveld.

**Dubbelklik** een rij om de offerte te openen.

Rechts van de lijst staat de smalle balk **Journaal**. Klapt u die open, dan ziet u de taken, notities,
bijlagen en het logboek van de offerte die u in de lijst aangeklikt hebt, zonder ze te openen.

### Bord

![Het offertebord met de vier statuskolommen Klad, Verstuurd, Aanvaard en Geweigerd.](../images/offertes-bord.png)

Het bord verdeelt dezelfde offertes over vier kolommen: **Klad**, **Verstuurd**, **Aanvaard** en
**Geweigerd**. Elke kaart toont de klant, het nummer, het bedrag, de datum en tot wanneer de offerte geldig
is. Is de geldigheid van een verstuurde offerte verstreken, dan staat er *Geldigheid verstreken*.

Een **vervangen** versie staat niet op het bord: het bord toont wat nog moet gebeuren. U vindt ze in de
lijst, met de keuze **Vervangen**.

- **Klik** een kaart om de offerte te openen.
- **Sleep** een kaart naar een andere kolom om de status te wijzigen. Mag die wissel niet, dan leest u
  waarom en blijft de kaart staan.

## Een nieuwe offerte

Klik op **Nieuwe offerte**. U vult eerst het blok **Offertegegevens** in:

| Veld | Betekenis |
|---|---|
| **Nummer** | Verplicht. Wordt automatisch toegekend (`OFF-2026-0001`); u mag het aanpassen. Het moet uniek blijven |
| **Klant** | Verplicht. Kies uit uw [relaties](../relations.md) |
| **Project** | Optioneel. Hangt de offerte aan een project, dan hoort ze bij het dossier van dat project |
| **Datum** | Verplicht. De datum van het voorstel; staat standaard op vandaag |
| **Geldig tot** | Optioneel. Tot wanneer uw prijs geldt |

Klik daarna op **Bewaren**.

!!! info "Eerst bewaren, dan blokken en regels"
    Blokken en regels horen bij een bewaarde offerte. Zolang ze niet bewaard is, staat er *Bewaar eerst de
    offerte; daarna kunt u blokken en regels toevoegen.*

Ontbreekt er een verplicht veld, dan staat bovenaan de fiche welk. Hebt u iets gewijzigd en nog niet bewaard,
dan staat *Niet bewaard* naast het nummer.

## De offertefiche

Bovenaan staan het nummer, de klant en de datum. Rechtsboven staat het **Totaal incl. btw**; dat blijft
staan wanneer u naar beneden scrolt.

De fiche heeft de tabbladen **Offerte**, **Taken**, **Notities**, **Bijlagen** en **Logboek**. Hoe die
laatste vier werken, leest u in [Werken met een fiche](../fiches.md).

Is de offerte gemaild of online voorgelegd, dan staan er in het blok Offertegegevens extra regels:

- **Verstuurd op** — wanneer en naar welk adres de offerte gemaild is.
- **Online voorgelegd** — de link die de klant krijgt, met de datum tot wanneer ze geldig is. U kunt die
  link kopiëren en zelf doorsturen.

## Blokken en regels

Een offerte is een **document**, geen boodschappenlijstje. U verdeelt het werk in blokken met een kop
erboven — "Voorbereidende werken", "Dakbedekking", "Afwerking" — zodat de klant leest wat hij koopt.

- **+ Blok toevoegen** (onder het laatste blok) maakt een nieuw blok.
- De **kop** van het blok typt u bovenin. Laat u die leeg, dan toont de offerte geen kop.
- **subtotaal** aanvinken toont het totaal van dat blok onder de regels, als *Subtotaal blok*.
- Het rode ✕ naast de kop verwijdert het blok met zijn regels. Die knop staat er zodra er meer dan één blok
  is.

Per blok hebt u twee manieren om een regel toe te voegen:

- **+ regel** — een lege regel die u zelf beschrijft.
- **+ artikel** — kies een artikel uit uw [catalogus](../inventory/articles.md). Omschrijving, eenheid en
  verkoopprijs komen mee. De regel komt in dát blok terecht.

![Het venster Artikel kiezen, met nummer, omschrijving, familie en prijs.](../images/offerte-artikelzoeker.png)

!!! tip "Zoek op nummer of op omschrijving"
    In het venster **Artikel kiezen** typt u een artikelnummer, een deel van de omschrijving, of allebei.
    "DIE weekend" vindt het artikel `DIE-9002 — Werkuur installateur — weekend`.

### De regelvelden

| Veld | Betekenis |
|---|---|
| **Omschrijving** | Wat de klant leest. Vrij aanpasbaar, ook bij een artikel uit de catalogus |
| **optie** | De regel staat mét prijs op de offerte maar telt **niet** mee in het totaal |
| **+ toelichting** | Een extra tekst onder de omschrijving, bijvoorbeeld een merk of een voorwaarde |
| **Aantal** | Mag decimalen bevatten (0,25 uur) |
| **Eenh.** | Stuks, uren, meter — komt mee met het artikel |
| **Btw** | De [btw-code](../administration/vat-codes.md) van deze regel. De open lijst toont wat elke code betekent |
| **Prijs** | De eenheidsprijs |
| **Netto** | Aantal × prijs, berekend |

Met de pijltjes ↑ en ↓ verplaatst u een regel binnen zijn blok. Het rode ✕ verwijdert ze. Een regel
*— witregel —* is enkel witruimte op het document; ook die kunt u verplaatsen of verwijderen.

!!! tip "Een nieuwe regel krijgt de btw van de vorige"
    Een nieuwe regel krijgt de btw-code van de laatste regel op de offerte. Werkt u met medecontractant, dan
    hoeft u dat dus niet op elke regel opnieuw te kiezen. Op een lege offerte krijgt de eerste regel de
    eerste code uit uw lijst met btw-codes.

## De totalen

Onder de blokken staat de opsplitsing:

- **Totaal excl. btw**.
- Eén regel per btw-tarief, met het bedrag waarover die btw berekend is — bijvoorbeeld *Btw 6% (over
  € 2.418,00)*.
- **Totaal incl. btw**.
- Daaronder de wettelijke vermelding die bij een btw-code hoort, zoals de tekst bij verlegde btw. Die
  vermelding staat ook op het document.

Rekent een btw-code 0 % zonder wettelijke vermelding, dan staat er een waarschuwing. Kijk dan na of dat
klopt: bij verlegde btw, een intracommunautaire levering of uitvoer hoort de reden op het document te staan.

Staan er optieregels op de offerte, dan komt daar **Opties (incl. btw, niet in het totaal)** onder. Twee
dingen om te weten bij dat bedrag:

- Het telt **niet** mee in het totaal erboven. Kiest de klant de optie, dan komt het bedrag er nog bij.
- Het is **inclusief btw**, terwijl de optieregel zelf haar bedrag exclusief btw toont — net als elke
  andere regel. De twee getallen horen dus te verschillen.

## De knoppen onderaan

Welke knoppen er staan, hangt af van de status van de offerte en van uw rechten. Van links naar rechts:

| Knop | Wanneer | Wat ze doet |
|---|---|---|
| **Bewaren** | Klad en Verstuurd | Bewaart uw wijzigingen |
| **Afdrukvoorbeeld** | Altijd | Toont het document zoals de klant het krijgt |
| **Mailen** | Altijd | Opent het verzendvenster |
| **Online voorleggen** | Klad en Verstuurd | Zet de offerte online, zodat de klant ze kan aanvaarden of weigeren |
| **Online intrekken** | Zodra de offerte online staat | Haalt de online versie weg |
| **Markeren als verstuurd** | Klad en Geweigerd | Zet enkel de status om; er vertrekt niets |
| **Markeren als aanvaard** · **Weigeren** | Verstuurd | Legt het antwoord van de klant vast |
| **Factureren** | Aanvaard | Maakt een kladfactuur met de regels van de offerte |
| **Nieuwe versie** | Aanvaard, Geweigerd en Vervangen | Maakt een bewerkbare kopie |
| **Annuleren** | Klad en Verstuurd | Laat uw wijzigingen vallen |
| **Verwijderen** | Klad, Verstuurd en Geweigerd | Verplaatst de offerte na bevestiging naar de prullenbak. Een aanvaarde, vervangen of gefactureerde offerte kan niet weg |

Afdrukvoorbeeld kan iedereen die offertes mag bekijken. Alle andere knoppen vragen het recht om offertes te
bewerken.

!!! info "In de knoppen staat het woord van uw bedrijf"
    De knoppen *Markeren als …* gebruiken de statusnamen die u zelf instelt onder
    [Offertestatus](../administration/quote-status.md).

## De offerte afdrukken

Klik op **Afdrukvoorbeeld**. U ziet het document zoals de klant het krijgt. Met de werkbalk boven het
document bladert u door de bladzijden, zoomt u in en drukt u af. Bovenaan het venster staan **Downloaden**
— de offerte belandt als PDF in uw downloadmap — en **Doorsturen per mail**.

<!-- AFBEELDING: het venster Afdrukvoorbeeld met de offerte erin — NIET automatisch te maken: een
     headless browser heeft geen PDF-viewer en toont "Couldn't load plugin" in plaats van het document.
     Dit beeld moet met de hand uit een echte browser komen. -->

Bovenaan het document staan uw eigen gegevens — naam, adres, telefoon, btw-nummer en uw logo. Die komen uit
de [bedrijfsfiche](../settings/company-profile.md) in het platformbeheer. Briefhoofd, aanhef en voorwaarden
stelt u in bij [Documentsjablonen](../settings/document-templates.md).

!!! info "De offerte volgt de taal van de klant"
    Het document wordt opgemaakt in de taal die op de klantenfiche bij **Documenttaal** staat, niet in de
    taal waarin u zelf werkt. Is dat veld leeg, dan volgt de offerte de taal van uw bedrijf.

Kopregels en witregels komen op het blad als tussentitel en als witruimte, zonder aantal of bedrag. Per blok
staat het subtotaal eronder, en onderaan de opsplitsing.

Lukt het afdrukken niet, dan opent het venster *De afdruk kon niet gemaakt worden* met de technische
oorzaak. Geef die tekst door wanneer u hulp vraagt.

## De offerte mailen

Klik op **Mailen**. Hebt u nog onbewaarde wijzigingen, dan vraagt Nimble u eerst te bewaren: wat u mailt,
moet ook in het dossier staan.

Het venster **Offerte mailen** staat al ingevuld:

| Veld | Inhoud |
|---|---|
| **Aan** | Verplicht. Het e-mailadres van de klant |
| **Onderwerp** | Verplicht. Met uw offertenummer erin |
| **Bericht** | Een begeleidende tekst, aan te passen |
| **Bijlage** | De offerte als PDF, met de grootte erbij |

Alles is aanpasbaar vóór u op **Versturen** klikt. De mail vertrekt in de taal van de klant, net als de
offerte zelf.

Na het versturen gebeuren er drie dingen:

- Stond de offerte op **Klad**, dan gaat ze vanzelf naar **Verstuurd**.
- Een kopie van de verstuurde PDF komt bij de **Bijlagen** van de offerte, met het adres erbij.
- Op de fiche verschijnt **Verstuurd op**, met datum en adres.

!!! tip "Zelf al bezorgd? Gebruik Markeren als verstuurd"
    Hebt u de offerte per post of vanuit uw eigen mailprogramma bezorgd, gebruik dan **Markeren als
    verstuurd**. Die knop zet alleen de status om en stuurt niets.

!!! warning "Te grote offerte"
    Boven 10 MB weigert Nimble te versturen. Daarboven zou de mail vertrekken zónder offerte. Liever een
    offerte die niet vertrekt dan een die leeg aankomt.

## De offerte online voorleggen

Met **Online voorleggen** zet Nimble de offerte op een eigen pagina. De klant kan ze daar bekijken en
aanvaarden of weigeren. Onbewaarde wijzigingen worden eerst bewaard.

- De link staat daarna op de fiche bij **Online voorgelegd**. Stuur ze zelf door.
- De link geldt tot de datum bij **Geldig tot**. Staat daar niets, dan geldt ze dertig dagen.
- Ligt **Geldig tot** in het verleden, dan weigert Nimble de offerte online te zetten en leest u waarom.
- Aanvaardt of weigert de klant online, dan past Nimble de status van de offerte aan. Hebt u de offerte
  intussen zelf al op Aanvaard of Geweigerd gezet, dan blijft uw beslissing staan.

**Online intrekken** haalt de pagina weg. De link werkt dan niet meer.

## De offerte opvolgen

| Status | Wat u kunt doen |
|---|---|
| **Klad** | Aanpassen, mailen, online voorleggen, of **Markeren als verstuurd** |
| **Verstuurd** | Nog aanpassen, of het antwoord vastleggen met **Markeren als aanvaard** of **Weigeren** |
| **Aanvaard** | **Factureren**, of een **Nieuwe versie** maken |
| **Geweigerd** | **Markeren als verstuurd** als de klant toch terugkomt, of een **Nieuwe versie** maken |
| **Vervangen** | Niets meer: een nieuwere versie van dezelfde offerte is aanvaard. Ze blijft bewaard om na te kijken wat de klant eerder kreeg |

!!! warning "Een aanvaarde of geweigerde offerte is afgesloten"
    Zodra de klant geantwoord heeft, staat het document vast. Bovenaan staat *Deze offerte is afgesloten en
    kan niet meer gewijzigd worden.* Velden, blokken en regels zijn niet aan te passen, en in plaats van
    Annuleren staat er **← Terug naar offertes**. Dat is met opzet: de klant heeft een prijs gekregen, en die
    hoort niet stilzwijgend te veranderen.

    Moet er toch iets wijzigen, klik dan op **Nieuwe versie**. U krijgt een kopie met de regels van nu, in
    Klad, één versienummer hoger en dertig dagen geldig. De oude versie blijft bestaan, zodat u kunt nakijken
    wat de klant gekregen heeft.

    Het nummer volgt op de hoogste versie, ook als die gearchiveerd is: haar nummer wordt niet opnieuw
    gebruikt. Na `…-v2` en een gearchiveerde v3 krijgt u dus `…-v4`.

Een aanvaarde offerte wisselt niet van status, ook niet op het bord. Een geweigerde wel: die zet u
terug met **Markeren als verstuurd**.

## Factureren

Op een aanvaarde offerte maakt **Factureren** een kladfactuur met de regels van de offerte, en opent die
meteen. Het factuurnummer komt pas wanneer u de factuur definitief maakt — zie [Facturen](invoices.md).

Kan het niet, dan staat de knop grijs en staat de reden ernaast:

- *Deze offerte is al gefactureerd.*
- *Deze offerte bevat geen enkele factureerbare regel.* — bijvoorbeeld wanneer er enkel optieregels op
  staan.

## Versies en varianten

Hoort de offerte bij een reeks, dan staan er bovenaan het tabblad Offerte knoppen met de bedragen naast
elkaar. Klik er één aan om naar die offerte te gaan; de offerte die u bekijkt, is ingekleurd.

- **Versies** (v1, v2, v3) zijn opeenvolgende voorstellen voor dezelfde vraag. De hoogste is de geldige en
  draagt de vermelding *actueel*.
- **Varianten** zijn verschillende antwoorden op dezelfde vraag — bijvoorbeeld "A — inloopdouche" naast
  "B — ligbad". Elke variant heeft haar eigen versienummers, en dus haar eigen *actueel*.

Elke knop toont ook de status van die versie.

### Wanneer een nieuwe versie aanvaard wordt

Er is maar één geldig akkoord per offerte. Wordt een nieuwe versie aanvaard — met de knop, of door de klant
online — dan springt de vorige aanvaarde versie van dezelfde variant op **Vervangen**. Ze blijft bestaan,
maar telt niet meer mee in het bedrag *Afgesproken* op het project, en ze kan niet gefactureerd worden.

!!! warning "Is een vorige versie al gefactureerd, dan kan een nieuwe niet aanvaard worden"
    Nimble weigert dan met de melding *Versie … van deze offerte is al gefactureerd.* Een wijziging na de
    facturatie hoort in een [meerwerk](../work/extra-work.md) of een creditnota, niet in een nieuwe versie —
    anders factureert u hetzelfde werk twee keer.

    Aanvaardt de klant zo'n versie online, dan wordt dat niet toegepast. U vindt het terug in het
    actielogboek als *Aanvaarding tegengehouden*.

![De versieknoppen boven een offerte, met de bedragen per versie en de vermelding actueel bij de hoogste.](../images/offerte-versies.png)

## Veelgemaakte fouten

!!! warning
    - **Een regel zonder btw-code** rekent 0 % btw. Controleer dat de
      [btw-codes](../administration/vat-codes.md) in Platformbeheer ingevuld zijn.
    - **Een optieregel meetellen in het totaal** — dat gebeurt niet, en dat is de bedoeling. Wilt u het
      bedrag wél in het totaal, haal dan het vinkje **optie** weg.
    - **Een aanvaarde offerte willen aanpassen** — maak een nieuwe versie in plaats van de oude te
      wijzigen.
    - **Een aanvaarde offerte willen verwijderen** — dat kan niet: de klant heeft ze aanvaard. Klopt ze
      niet meer, maak dan een nieuwe versie; de oude wordt *Vervangen* zodra de nieuwe aanvaard is.
    - **Twee keer hetzelfde nummer** — past u het nummer met de hand aan, kies dan iets dat nog niet
      bestaat.

## Zie ook

- [Facturen](invoices.md) — wat er na een aanvaarde offerte komt
- [Artikelen](../inventory/articles.md) — de catalogus waaruit u regels kiest
- [Relaties](../relations.md) — uw klanten en hun documenttaal
- [Btw-codes](../administration/vat-codes.md) — de tarieven en hun wettelijke vermelding
- [Offertestatus](../administration/quote-status.md) — de tekst van de vier statussen aanpassen
- [Documentsjablonen](../settings/document-templates.md) — briefhoofd, aanhef en voorwaarden
- [Werken met een fiche](../fiches.md) — tabbladen, bewaren en verwijderen
- [Lijsten filteren](../lijsten-filteren.md) — de trechterknop en de filterbouwer

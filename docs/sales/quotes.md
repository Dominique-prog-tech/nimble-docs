# Offertes

Een offerte is uw prijsvoorstel aan een klant. U bouwt ze op uit **blokken** met daarin regels — werken,
materialen en uren — en volgt daarna op of de klant ze aanvaardt.

## Het scherm openen

**Verkoop → Offertes**. U kiest links bovenaan tussen twee weergaven:

- **Lijst** — de offertes in een tabel, met zoeken, filteren en exporteren. Naast **Geldig tot** staat bij
  een verstuurde offerte waarvan de geldigheid verstreken is in het rood hoelang dat al zo is — *10 dagen*,
  *2 maanden*. Zo ziet u in één oogopslag wat te lang blijft liggen.
- **Bord** — dezelfde offertes verdeeld over vier kolommen: Klad, Verstuurd, Aanvaard, Geweigerd. Elke kaart
  toont de klant, het nummer, het bedrag en de datum. U kunt een kaart naar een andere kolom slepen om de
  status te wijzigen.

Uw keuze wordt bewaard: opent u het scherm morgen opnieuw, dan staat het op de weergave die u het laatst
gebruikte.

Boven de lijst staat een keuzelijst waarmee u snel afbakent: **Klad**, **Verstuurd**, **Aanvaard**,
**Geweigerd** of **Verlopen**, telkens met het aantal erachter. Een soort die nergens voorkomt, staat er
niet bij.

![De offertelijst. Twee verstuurde offertes zijn over hun geldigheidsdatum: de kolom Geldig tot toont in
het rood hoelang al.](../images/offertes-lijst.png)

![Het offertebord met de vier statuskolommen.](../images/offertes-bord.png)

Dubbelklik een rij of klik een kaart om de offerte te openen.

## Een nieuwe offerte

Klik op **Nieuwe offerte**. U vult eerst de kop in:

| Veld | Betekenis |
|---|---|
| **Nummer** | Verplicht. Wordt automatisch toegekend (`OFF-2026-0001`); u mag het aanpassen |
| **Klant** | Verplicht. Kies uit uw [relaties](../relations.md) |
| **Datum** | De datum van het voorstel |
| **Geldig tot** | Tot wanneer uw prijs geldt. Staat standaard op dertig dagen later |

!!! info "Eerst bewaren, dan regels toevoegen"
    Klik op **Opslaan** voordat u regels invoert. Regels horen bij een bewaarde offerte; zolang die er niet
    is, ziet u de melding *Bewaar eerst de offerte*.

## Blokken en regels

Een offerte is een **document**, geen boodschappenlijstje. U verdeelt het werk in blokken met een kop
erboven — "Voorbereidende werken", "Dakbedekking", "Afwerking" — zodat de klant leest wat hij koopt.

- **+ Blok toevoegen** (onderaan) maakt een nieuw blok.
- De **naam** van het blok typt u bovenin. Laat u die leeg, dan toont de offerte geen kop.
- **Subtotaal** aanvinken toont het totaal van dat blok onder de regels.

Per blok hebt u twee manieren om een regel toe te voegen:

- **+ regel** — een lege regel die u zelf beschrijft.
- **+ artikel** — kies een artikel uit uw [catalogus](../inventory/articles.md). Omschrijving, eenheid en
  verkoopprijs komen mee.

![Het venster om een artikel te kiezen, met nummer, omschrijving, familie en prijs.](../images/offerte-artikelzoeker.png)

!!! tip "Zoek op nummer of op omschrijving"
    In het zoekvenster typt u een artikelnummer, een deel van de omschrijving, of allebei. "DIE weekend"
    vindt het artikel `DIE-9002 — Werkuur installateur — weekend`.

### De regelvelden

| Veld | Betekenis |
|---|---|
| **Omschrijving** | Wat de klant leest. Vrij aanpasbaar, ook bij een artikel uit de catalogus |
| **+ toelichting** | Een extra regel tekst onder de omschrijving, bijvoorbeeld een merk of een voorwaarde |
| **optie** | De regel staat mét prijs op de offerte maar telt **niet** mee in het totaal |
| **Aantal** | Mag decimalen bevatten (0,25 uur). Zowel de komma als de punt werkt |
| **Eenh.** | Stuks, uren, meter — komt mee met het artikel |
| **Btw** | De [btw-code](../administration/vat-codes.md) van deze regel |
| **Prijs** | De eenheidsprijs |
| **Netto** | Aantal × prijs, berekend |

Met de pijltjes ↑ en ↓ verplaatst u een regel binnen zijn blok. Het rode ✕ verwijdert ze.

!!! tip "De btw van de vorige regel wordt overgenomen"
    Een nieuwe regel krijgt de btw-code van de regel erboven. Werkt u met medecontractant, dan hoeft u dat
    dus niet op elke regel opnieuw te kiezen.

## De totalen

Rechtsboven staat het **totaal inclusief btw**, ook wanneer u naar beneden scrolt. Onderaan vindt u de
opsplitsing: exclusief btw, het btw-bedrag en het totaal.

Staan er optieregels op de offerte, dan komt daar **Opties (incl. btw, niet in het totaal)** onder. Twee
dingen om te weten bij dat bedrag:

- Het telt **niet** mee in het totaal erboven. Kiest de klant de optie, dan komt het bedrag er nog bij.
- Het is **inclusief btw**, terwijl de optieregel zelf haar bedrag exclusief btw toont — net als elke
  andere regel. De twee getallen horen dus te verschillen.

## De offerte afdrukken

Klik op **Afdrukvoorbeeld** onderaan een bewaarde offerte. U ziet het document zoals de klant het krijgt,
en u kunt het van daaruit downloaden.

<!-- AFBEELDING: het venster Afdrukvoorbeeld met de offerte erin — NIET automatisch te maken: een
     headless browser heeft geen PDF-viewer en toont "Couldn't load plugin" in plaats van het document.
     Dit beeld moet met de hand uit een echte browser komen. -->

Bovenaan staan uw eigen gegevens — naam, adres, telefoon, btw-nummer en uw logo. Die komen uit de
[bedrijfsfiche](../settings/company-profile.md) in het platformbeheer; staat daar nog geen logo, dan
zet u het daar en komt het vanzelf op elke offerte.

!!! info "De offerte volgt de taal van de klant"
    Het document wordt opgemaakt in de taal die op de klantenfiche bij **Documenttaal** staat, niet in de
    taal waarin u zelf werkt. Staat die op Frans, dan krijgt u een Frans document ook al werkt u in het
    Nederlands. Is het veld leeg, dan volgt de offerte uw eigen taal.

Kopregels en witregels komen op het blad als tussentitel en als witruimte, zonder aantal of bedrag. Per blok
staat het subtotaal eronder, en onderaan de opsplitsing.

## De offerte opvolgen

De knoppen onderaan volgen de status van de offerte:

| Status | Wat u kunt doen |
|---|---|
| **Klad** | **Versturen** — de offerte gaat naar *Verstuurd* |
| **Verstuurd** | **Aanvaard** of **Weigeren**, naargelang het antwoord van de klant |
| **Aanvaard** of **Geweigerd** | De offerte is afgesloten en niet meer te wijzigen |

!!! warning "Een afgesloten offerte wijzigt u niet"
    Zodra de klant geantwoord heeft, staat het document vast: velden en knoppen zijn niet meer beschikbaar.
    Dat is met opzet — de klant heeft een prijs gekregen en die hoort niet stilzwijgend te veranderen.

    Moet er toch iets wijzigen, klik dan op **Nieuwe versie**. U krijgt een kopie met de regels van nu, in
    Klad, en één versienummer hoger. De oude versie blijft bestaan zodat u kunt nakijken wat de klant
    gekregen heeft.

## Versies en varianten

Bovenaan een offerte die deel uitmaakt van een reeks staan knoppen met de bedragen naast elkaar:

- **Versies** (v1, v2, v3) zijn opeenvolgende voorstellen voor dezelfde vraag. De hoogste is de geldige en
  draagt de vermelding *actueel*.
- **Varianten** zijn verschillende antwoorden op dezelfde vraag — bijvoorbeeld "A — inloopdouche" naast
  "B — ligbad". Elke variant heeft haar eigen versienummers.

![De versieknoppen boven een offerte, met de bedragen per versie.](../images/offerte-versies.png)

## Veelgemaakte fouten

!!! warning
    - **Een offerte zonder btw-codes** rekent 0% btw op elke regel, zonder waarschuwing. Controleer dat de
      [btw-codes](../administration/vat-codes.md) in Platformbeheer ingevuld zijn.
    - **Een optieregel meetellen in het totaal** — dat gebeurt niet, en dat is de bedoeling. Wilt u het
      bedrag wél in het totaal, haal dan het vinkje **optie** weg.
    - **Een aanvaarde offerte willen aanpassen** — maak een nieuwe versie in plaats van de oude te
      wijzigen.
    - **Twee keer hetzelfde nummer** — het nummer wordt automatisch toegekend en moet uniek blijven. Past u
      het met de hand aan, kies dan iets dat nog niet bestaat.

## Zie ook

- [Artikelen](../inventory/articles.md) — de catalogus waaruit u regels kiest
- [Relaties](../relations.md) — uw klanten
- [Btw-codes](../administration/vat-codes.md) — de tarieven en hun betekenis op een factuur
- [Offertestatus](../administration/quote-status.md) — de tekst van de vier statussen aanpassen
- [Werken met een fiche](../fiches.md) — tabbladen, opslaan en archiveren
- [Lijsten filteren](../lijsten-filteren.md) — de trechterknop en de filterbouwer

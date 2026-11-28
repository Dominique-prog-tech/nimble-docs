# Aanmaningen

Welke openstaande facturen een aanmaning verdienen. Drie aanmaningen, en daarna de aankondiging van een
incasso.

## Het scherm openen

Klik in de zijbalk op **Verkoop → Aanmaningen**. Het scherm vraagt het recht om facturen te bewerken.

![Het scherm Aanmaningen met bovenaan een gekleurde balk die meldt dat er één aanmaning klaarstaat, daaronder de zin over de termijnen, en twee facturen: één met het label Tweede aanmaning, de vermelding dat de eerste al verstuurd is, en de knoppen Versturen…, Alleen optekenen en Uitsluiten van aanmaningen, en één met Volgende vanaf.](../images/rappels-overzicht.png)

!!! warning "Er vertrekt niets vanzelf"
    Nimble verstuurt **geen enkele** aanmaning automatisch. Bovenaan het scherm staat hoeveel er klaarstaan,
    en datzelfde getal staat in het menu naast **Verkoop**. Zo ziet u het ook zonder dit scherm te openen —
    want wat niemand ziet, gebeurt niet.

Onder die melding staat hoe uw termijnen ingesteld zijn, bijvoorbeeld *De eerste aanmaning volgt 14 dagen na
de vervaldag; elke volgende 14 dagen na de vorige.*

## Wat een kaart toont

Elke openstaande factuur heeft een eigen kaart. Een klad, een creditnota en een volledig betaalde factuur
staan er niet bij.

- Het **factuurnummer** en de klant. Klik het nummer om de factuur te openen.
- De **vervaldatum**, en hoeveel dagen de factuur al vervallen is.
- **Al verstuurd:** met de laatste aanmaning die vertrok.
- Rechts het **openstaande bedrag**, en het label van de aanmaning die nu klaarstaat.

Staat er niets klaar, dan zegt de kaart waarom:

| Tekst | Betekenis |
|---|---|
| **Volgende vanaf** met een datum | Nog niet aan de beurt; vanaf die dag staat de volgende aanmaning klaar |
| **Uitgesloten van aanmaningen** | U hebt de factuur opzijgezet |
| **Geen vervaldag** | Er is niets om vanaf te tellen. Vul de vervaldag aan op de factuur |
| **Alles verstuurd, tot en met de incasso** | De keten is doorlopen |

## De vier stappen

| Stap | Toon |
|---|---|
| **Eerste aanmaning** | Vriendelijk: wellicht is de factuur aan uw aandacht ontsnapt |
| **Tweede aanmaning** | Met het aantal dagen erbij, en de vraag of er iets niet in orde is |
| **Laatste aanmaning** | Kondigt aan dat het dossier anders voor invordering overgaat |
| **Ingebrekestelling — overdracht incasso** | De overdracht zelf, met de kosten ten laste van de schuldenaar |

Er staat er altijd maar **één** klaar. De volgende wordt pas verschuldigd nadat het interval verstreken is,
en dat telt vanaf de vorige aanmaning — niet vanaf de vervaldag. Een klant die drie maanden niet betaalde,
krijgt dus geen drie mails op één dag.

## De twee termijnen instellen

Op de **Bedrijfsfiche** (Platformbeheer → Bedrijfsfiche) staan twee getallen naast elkaar:

| Veld | Wat het bepaalt |
|---|---|
| **Eerste aanmaning na (dagen)** | Hoelang u een klant na de vervaldag met rust laat |
| **Daarna elke (dagen)** | Het tempo daarna: tussen de eerste en de tweede aanmaning, en tussen elke volgende |

Dat zijn twee verschillende beslissingen. Met één getal zou u coulance en tempo tegen elkaar moeten
afwegen: kort betekent dan meteen ook opjagen, lang betekent dat de tweede aanmaning weken op zich laat
wachten.

Laat u een veld leeg, dan geldt daar veertien dagen. Leeg betekent dus niet: geen aanmaningen.

## Versturen

**Versturen…** opent het venster **Aanmaning versturen** met de mail uit het [mailsjabloon](../settings/mail-templates.md)
van die stap — elke stap heeft een eigen sjabloon:

- **Van** — de afzender van dat sjabloon, of uw standaardafzender;
- **Aan** — het e-mailadres van de klant;
- **Onderwerp** — uit het sjabloon, met het factuurnummer;
- **Tekst** — de mail zoals ze vertrekt, in de taal van de klant.

![Het venster Aanmaning versturen voor factuur F-2026-0001: Van noreply@adm-concept.be, Aan het adres van De Wilde Interieur BV, het onderwerp met het factuurnummer, de tekst van de tweede aanmaning met het openstaande bedrag van € 2.474,55, de knop Tekst aanpassen, de zin dat de factuur niet als bijlage meegaat, en onderaan Versturen en optekenen en Annuleren.](../images/rappel-versturen-venster.png)

Wie zijn klant kent, schrijft de eerste aanmaning anders. Met **Tekst aanpassen** zet u de mail in een
editor; wat u daar wijzigt, geldt enkel voor deze aanmaning. Wilt u het voor elke aanmaning anders, pas dan
het sjabloon aan. Klik op **Versturen en optekenen**. Nimble verstuurt de mail en tekent op dát de aanmaning
vertrokken is, met de datum. Dat is wat de volgende stap uitstelt. De mail staat daarna bij **Mails** op de
factuur.

!!! warning "De factuur gaat niet mee als bijlage"
    Verwijs in uw tekst naar het factuurnummer. Het staat standaard al in de tekst.

Heeft de klant geen e-mailadres, dan staat **Versturen…** grijs en leest u: *Deze klant heeft geen
e-mailadres. Verstuur de aanmaning buiten Nimble en teken ze hier op.*

**Alleen optekenen** gebruikt u wanneer u de klant buiten Nimble aansprak — per telefoon of per post. De
keten schuift dan gewoon door.

!!! info "Verstuurd maar niet opgetekend"
    Vertrekt de mail maar lukt het optekenen niet, dan zegt Nimble dat. De aanmaning staat dan straks
    opnieuw in de lijst. Verstuur ze in dat geval geen tweede keer.

## Een creditnota eerst verrekenen

Staat er op een factuur een uitgereikte creditnota die nog niet verrekend is, dan kan de aanmaning niet
vertrekken. Op de kaart staat in het rood:

> *Op deze factuur staat een creditnota van … die nog niet verrekend is. Verreken ze eerst: registreer op de
> factuur én op de creditnota een betaling met betaalwijze Verrekend. Tot dan kan deze aanmaning niet
> vertrekken.*

**Versturen…** en **Alleen optekenen** staan dan grijs. Een creditnota wordt namelijk niet vanzelf van de
factuur afgetrokken: zonder verrekening zou de aanmaning geld vragen dat de klant niet meer verschuldigd is.

Zo verrekent u:

1. Open de factuur (klik het nummer op de kaart) en klik op **Betaling registreren**. Vul het bedrag van de
   creditnota in en kies betaalwijze **Verrekend**.
2. Open de creditnota via het blok **Creditnota's** en registreer daar ook een betaling **Verrekend**. Het
   bedrag staat al ingevuld.

Daarna toont de kaart het verminderde openstaande bedrag, en kunt u de aanmaning versturen. Meer uitleg staat
bij [Facturen](invoices.md).

## Een factuur uitsluiten van aanmaningen

Loopt er een betwisting of een afbetalingsplan, dan zet **Uitsluiten van aanmaningen** die factuur
opzij. Ze telt niet meer mee en verschijnt niet in de teller. **Terug opnemen in de aanmaningen** draait
dat om.

!!! warning "Een factuur zonder vervaldag krijgt nooit een aanmaning"
    Er is dan niets om vanaf te tellen, en Nimble verzint geen termijn. Zo'n factuur staat wél in de lijst,
    met die reden erbij — zodat u de vervaldag kunt aanvullen op de factuur zelf.

## Een ingehouden borg

Hield de klant een borg in, dan telt die borg niet mee tot de datum waarop hij vrijkomt. Staat er naast de
borg nog iets open, dan vermeldt de aanmaning enkel dat deel. Staat er enkel nog de borg open, dan staat de
factuur niet in de lijst. Na de vrijgavedatum telt de borg weer gewoon mee. Zie
[Een ingehouden borg](invoices.md#een-ingehouden-borg).

## Zie ook

- [Facturen](invoices.md) — betalingen registreren en creditnota's verrekenen
- [Bedrijfsfiche](../settings/company-profile.md) — de twee termijnen
- [Wanneer uw account beperkt is](../getting-started/account-restricted.md) — wanneer een aanmaning versturen niet kan

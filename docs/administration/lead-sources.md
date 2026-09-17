# Leadbronnen

**Leadbronnen** geven aan waar een lead vandaan komt: Google, de website, mond-tot-mondreclame, een werfbord … Deze lijst gebruikt u om leads te rapporteren per herkomst.

## Het scherm openen

1. Klik onderaan in de zijbalk op **Platformbeheer**.
2. Klik in de groep **Leads** op de tegel **Leadbronnen**.

## De lijst

| Kolom | Betekenis |
|---|---|
| **Volgorde** | Bepaalt de volgorde in de keuzelijsten (laag = bovenaan) |
| **Code** | Korte, unieke code |
| **Naam (NL)** | Nederlandstalige naam |
| **Naam (FR)** | Franstalige naam |

![De lijst met leadbronnen, met bovenaan twee bronnen die Nimble zelf aanmaakte uit een websiteformulier.](../images/leadbronnen-lijst.png)

Dubbelklik op een rij om ze te bewerken, of klik op **Nieuwe waarde**. Met **Exporteren** haalt u de lijst binnen in een bestand.

## Een leadbron aanmaken of bewerken

Er opent een venster **Nieuwe waarde** of **Bewerken**.

1. De **Volgorde** wordt automatisch voorgesteld (hoogste + 10); pas ze aan om de waarde te verplaatsen.
2. Vul de **Code** in — verplicht.
3. Vul de naam in de **basistaal van uw bedrijf** in — verplicht. De andere taal draagt het label **optioneel**.
4. Klik op **Bewaren**, of op **Annuleren** om het venster te sluiten zonder te bewaren.

!!! tip "Stappen van 10"
    De volgorde springt standaard met 10 (10, 20, 30 …). Zo kunt u later makkelijk een waarde tussenvoegen zonder alles te hernummeren.

## Bronnen die Nimble zelf aanmaakt

Komt er een aanvraag binnen via een formulier op uw website, dan zoekt Nimble de leadbron van dat formulier.
Bestaat die nog niet, dan maakt Nimble ze zelf aan:

- de **naam** is de naam van het formulier, bijvoorbeeld *contactformulier hoofdsite*;
- de **code** is diezelfde naam in kleine letters met koppeltekens, bijvoorbeeld `contactformulier-hoofdsite`;
- de **volgorde** staat op 0, dus bovenaan de lijst, en de Franse naam is leeg.

U mag zo'n bron gerust netjes maken: geef ze een duidelijke naam, vul de andere taal in en kies een volgorde.
Nimble herkent de bron aan haar **code**. Een nieuwe naam levert dus geen tweede bron op.

Komt een aanvraag binnen zonder formuliernaam, dan krijgt de lead de bron **Website**.

## Verwijderen

Open de leadbron en klik rechts in het venster op **Verwijderen**. Na bevestiging komt de bron in de [prullenbak](recycle-bin.md); bestaande leads die ze gebruiken blijven behouden. Terughalen kan via de prullenbak.

!!! info "Eén bron kunt u niet verwijderen: **Website**"
    Bij die bron staat geen knop **Verwijderen**, en haar code kunt u niet wijzigen. Onder het veld staat
    **Deze rij gebruikt Nimble zelf — de code kan niet wijzigen. De naam wel.** Nimble zoekt die code zelf op
    wanneer er een aanvraag via uw website binnenkomt. De **naam** mag u wel aanpassen: zet er gerust "Onze
    website" of uw domeinnaam.

## Veelgemaakte fouten

!!! warning
    - **De code wijzigen van een bron die Nimble zelf aanmaakte** — Nimble herkent de bron dan niet meer aan haar code. Hebt u ook de naam gewijzigd, dan maakt Nimble bij de volgende aanvraag via dat formulier een nieuwe bron aan. Pas de naam aan, niet de code.
    - **Naam in de andere taal vergeten** — gebruikers in die taal zien dan de naam in de basistaal.
    - **Bronnen verwijderen die nog in gebruik zijn** — bestaande leads behouden hun bron, maar nieuwe leads kunnen ze niet meer kiezen.

## Zie ook

- [Platformbeheer](platform-management.md)
- [Types aanvraag](lead-request-types.md)
- [Leadfases](lead-status.md)
- [Leads](../crm/leads.md)

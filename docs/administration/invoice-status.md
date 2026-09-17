# Factuurstatus

De vier statussen van een factuur dragen een tekst die u zelf kunt kiezen. Het **aantal** statussen en hun
**betekenis** liggen vast — daar hangt het gedrag van het factuurscherm aan — maar hoe ze heten, bepaalt u.

## Het scherm openen

1. Klik onderaan in de zijbalk op **Platformbeheer**.
2. Klik in de groep **Verkoop** op de tegel **Factuurstatus**.

<!-- AFBEELDING: de lijst Factuurstatus in tenant demo met de vier statussen Klad, Uitgereikt, Betaald en Geannuleerd in beide talen -->

## De lijst

De lijst toont per status de **Naam (NL)** en de **Naam (FR)**. Er is geen knop om een status toe te voegen:
de vier statussen liggen vast. Met **Exporteren** haalt u de lijst binnen in een bestand.

| Status | Standaardtekst | Wanneer een factuur hier staat |
|---|---|---|
| Klad | **Klad** | U bent ze aan het opmaken; ze heeft nog geen nummer |
| Uitgereikt | **Uitgereikt** | U klikte op **Definitief maken**: het nummer is toegekend en de factuur staat open |
| Betaald | **Betaald** | De ingeboekte betalingen dekken het volledige bedrag. Valt er een betaling weg, dan gaat ze terug naar Uitgereikt |
| Geannuleerd | **Geannuleerd** | Ze is ingetrokken en telt niet meer mee |

## Een tekst aanpassen

1. Dubbelklik op de status. Er opent een venster **Bewerken**.
2. Vul de **Naam (NL)** en de **Naam (FR)** in. De naam in de basistaal van uw bedrijf is verplicht; de andere
   taal draagt het label *optioneel*.
3. Klik op **Bewaren**, of op **Annuleren** om het venster te sluiten zonder te bewaren.

Die tekst verschijnt in de statuskolom van de facturenlijst en naast het nummer op de factuurfiche.

!!! tip "Gebruik uw eigen woorden"
    Noemt u een uitgereikte factuur intern "Openstaand", zet dat er dan. De app volgt uw taal, niet andersom.

!!! warning "Vul beide talen in"
    Blijft het veld in de andere taal leeg, dan valt de app terug op de basistaal. Een Franstalige gebruiker
    ziet dan "Klad" staan tussen verder Franse schermteksten — dat leest als een vertaalfout terwijl het een
    leeg veld is.

## Uitgereikt is niet hetzelfde als verstuurd

De status **Uitgereikt** zegt dat het **factuurnummer toegekend** is — niet dat het document bij de klant ligt.

Dat laatste tekent u apart op met de knop **Markeren als verstuurd** op de fiche van een uitgereikte factuur.
Daar noteert u wanneer de factuur vertrokken is, naar wie, en langs welke weg — afgedrukt en gepost, per
e-mail, of via Peppol. Zonder die registratie is er geen datum om een aanmaning vanaf te tellen.

!!! note "Een registratie, geen verzending"
    **Markeren als verstuurd** verstuurt zelf niets. Wat u daar opschrijft is wat ú weet — de app controleert
    niet of de e-mail aankwam of het Peppol-netwerk de factuur aanvaardde.

Zie [Facturen](../sales/invoices.md) voor de hele weg van een factuur.

## Zie ook

- [Facturen](../sales/invoices.md)
- [Offertestatus](quote-status.md) — hetzelfde scherm, voor offertes
- [Platformbeheer](platform-management.md)

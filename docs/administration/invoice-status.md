# Factuurstatus

De vier statussen van een factuur dragen een tekst die u zelf kunt kiezen. Het **aantal** statussen en hun
**betekenis** liggen vast — daar hangt het gedrag van het factuurscherm aan — maar hoe ze heten, bepaalt u.

!!! info "De facturen zelf zijn nog in voorbereiding"
    U kunt deze teksten al nakijken en aanpassen, zodat ze goed staan zodra het factuurscherm opengaat. Ze
    zijn vandaag nog nergens zichtbaar buiten dit scherm.

## Het scherm openen

**Platformbeheer → Factuurstatus**.

## Wat u kunt aanpassen

| Status | Standaardtekst | Wanneer een factuur hier staat |
|---|---|---|
| Draft | **Klad** | U bent ze aan het opmaken |
| Sent | **Uitgereikt** | Het nummer is toegekend; ze staat open |
| Paid | **Betaald** | De betaling is binnen en afgepunt |
| Cancelled | **Geannuleerd** | Ze is ingetrokken en telt niet meer mee |

U vult per status een **Naam (NL)** en een **Naam (FR)** in. Die tekst verschijnt straks in de statuskolom
van de facturenlijst en op de factuur zelf.

!!! warning "Uitgereikt is niet hetzelfde als verstuurd"
    Deze status zegt dat het **factuurnummer toegekend** is — niet dat het document bij de klant ligt. Dat
    laatste tekent u apart op met **Markeren als verstuurd** op de factuurfiche. Tot september 2026 stond
    hier "Verstuurd", en dat was onwaar: een factuur heette verstuurd zodra u op *Definitief maken* klikte,
    ook als ze nog op uw bureau lag.

## Het verzendspoor

Op de fiche van een uitgereikte factuur staat de knop **Markeren als verstuurd**. Daar noteert u wanneer de
factuur vertrokken is, naar wie, en langs welke weg — afgedrukt en gepost, per e-mail, of via Peppol.

Waarom dat er apart bij staat: de meeste facturen vertrekken buiten de app om. In uw oude systeem gingen er
277 van de 306 zo de deur uit. Zonder deze registratie is er geen datum om een aanmaning vanaf te tellen, en
zegt de status niets over waar het document is.

!!! note "Een registratie, geen bewijs"
    Nimble verstuurt vandaag zelf nog niets. Wat u hier opschrijft is wat ú weet — de app controleert niet of
    de e-mail aankwam of het Peppol-netwerk de factuur aanvaardde.

!!! tip "Gebruik uw eigen woorden"
    Noemt u een verstuurde factuur intern "Openstaand", zet dat er dan. De app volgt uw taal, niet andersom.

!!! warning "Vul beide talen in"
    Blijft het Franse veld leeg, dan valt de app terug op het Nederlands. Een Franstalige gebruiker ziet dan
    "Klad" staan tussen verder Franse schermteksten — dat leest als een vertaalfout terwijl het een leeg veld
    is.

## Zie ook

- [Offertestatus](quote-status.md) — hetzelfde scherm, voor offertes
- [Platformbeheer](platform-management.md)

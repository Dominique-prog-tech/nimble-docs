# Leadstatus

Op dit scherm hertaalt u de tekst van de vaste pijplijnstatussen van leads (bv. Nieuw, Gekwalificeerd …). Het **aantal** en de **betekenis** van de statussen liggen vast — u past enkel de weergegeven tekst aan.

## Het scherm openen

1. Klik onderaan in de zijbalk op **Platformbeheer**.
2. Klik in de groep **Leads** op de tegel **Leadstatus**.

![De leadstatuslijst met de vaste sleutels en de volgorde op het bord.](../images/leadstatus-lijst.png)

## De lijst

| Kolom | Betekenis |
|---|---|
| **Sleutel (vast)** | Technische naam van de status — niet aanpasbaar |
| **Naam (NL)** | Nederlandstalige tekst die de status toont |
| **Naam (FR)** | Franstalige tekst die de status toont |
| **Volgorde** | Positie van de status op het leadbord |
| **Op het bord** | **Zichtbaar** of **Verborgen** — bepaalt of de status als kolom op het leadbord staat |

Dubbelklik op een rij om de tekst te bewerken.

## De tekst aanpassen

1. Dubbelklik op de gewenste status.
2. Pas de naam aan in de **basistaal van uw kantoor** — dat veld is verplicht; de andere taal is optioneel.
3. Klik op **Opslaan**.

Statussen kunnen hier niet toegevoegd of verwijderd worden: de pijplijn zelf ligt vast, enkel de weergavetekst is aanpasbaar.

## Volgorde en zichtbaarheid op het bord

Naast de naam stelt u per status ook in hoe hij op het **leadbord** (de kanban-weergave op het
Leads-scherm) verschijnt:

<!-- AFBEELDING: het bewerkvenster met de Volgorde-spinner en het vinkje Tonen op het bord -->

1. Dubbelklik op de gewenste status.
2. Stel de **Volgorde op het bord** in — een spinner met de positie van de kolom (laag = meest links).
3. Vink **Tonen op het bord** aan of uit en klik op **Opslaan**.

Een status **verbergen** haalt de kolom van het bord, maar de status zelf blijft volledig bestaan: alle
regels en cijfers (rapportage, filters in de lijstweergave) blijven kloppen. Enkel de kolom verdwijnt.

!!! tip "Veiligheidsklep"
    Een verborgen status waar op dit moment nog leads in staan, blijft tóch zichtbaar op het bord — met
    die leads erin. Zo verdwijnt een lead nooit stilletjes uit beeld zodra iemand een kolom verbergt.
    Pas wanneer de laatste lead uit die status weg is, verdwijnt de kolom ook effectief.

## Veelgemaakte fouten

!!! warning
    - **Franse naam vergeten** — Franstalige gebruikers zien dan de andere taal als terugval.
    - **Sleutel verwarren met de weergavenaam** — de sleutel is enkel technisch en niet zichtbaar voor eindgebruikers; pas de naam aan, niet de sleutel (die staat trouwens alleen-lezen).
    - **Verbergen verward met verwijderen** — een verborgen status blijft bestaan en telt nog mee in rapportage; hij verdwijnt enkel als kolom op het bord.

## Zie ook

- [Platformbeheer](platform-management.md)
- [Leadbronnen](lead-sources.md)
- [Types aanvraag](lead-request-types.md)
- [Leads](../crm/leads.md)

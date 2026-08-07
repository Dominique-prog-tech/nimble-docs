# Relaties

Op het scherm **Relaties** beheert u de klanten en leveranciers van uw bedrijf. Eén relatie kan **klant**, **leverancier**, of beide tegelijk zijn.

## Het scherm openen

Klik in de zijbalk op **Relaties**.

!!! note "Actieve tenant"
    Zonder gekozen tenant ziet u een waarschuwing. Kies eerst een tenant via **Beheer → Tenants → Gebruiken**.

## De lijst

De tabel toont per relatie: **naam**, **btw-nummer**, **gemeente** en **type** (badges Klant / Leverancier).

- **Zoeken en filteren** — gebruik de rasterzoekfunctie om snel een relatie te vinden.
- **Exporteren** — exporteer de lijst naar Excel of CSV.
- **Nieuw** — klik op **Nieuwe relatie**.
- **Bewerken** — **dubbelklik** een rij om de fiche te openen.

## Een relatie toevoegen of bewerken

Vul in het venster de gegevens in:

| Veld | Uitleg |
|---|---|
| **Naam** | Verplicht. Bedrijfsnaam of weergavenaam. |
| **Relatienummer** | Optioneel intern nummer. |
| **Btw-nummer** | Ondernemingsnummer (bv. BE0123456789). |
| **Adres** | Straat, nummer, postcode, gemeente, land (standaard BE). |
| **E-mail / telefoon** | Contactgegevens. |
| **Klant / Leverancier** | Vink aan wat van toepassing is — beide mag. |
| **Actief** | Uitvinken verbergt de relatie niet automatisch uit alle lijsten; gebruik dit als statusmarkering. |

Klik op **Opslaan** om te bewaren, of **Annuleren** om te sluiten zonder wijzigingen.

## Verwijderen

In het bewerkvenster klikt u op **Verwijderen**. De relatie wordt **gearchiveerd** (soft-delete) en belandt in de **Prullenbak**, waar u ze kunt herstellen vóór definitieve verwijdering.

## Gegevens uit de legacy

Heeft u een bestaande Firebird-databank? Via **Beheer → Conversie** importeert u de actieve `CRM_ACCOUNTS` als relaties. De conversie is herhaalbaar: bestaande rijen worden bijgewerkt op basis van de legacy-sleutel, zonder dubbels.

## Zie ook

- [Conversie](administration/conversion.md) — Firebird → PostgreSQL overzetten

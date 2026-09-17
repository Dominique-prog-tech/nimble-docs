# Tenants

!!! info "Voor ADM-operators"
    Dit scherm is voorbehouden aan medewerkers van ADM-Concept. Als klant van Nimble ziet u het niet.

Het scherm **Tenants** is het register van alle klanten die op het Nimble-platform draaien. Elke klant — een
*tenant* — heeft een eigen databank. Hier maakt u een nieuwe tenant aan, legt u per tenant vast waar zijn
gegevens uit het vorige pakket staan, en kiest u in welke tenant u zelf werkt.

## Het scherm openen

1. Klik onderaan in de zijbalk op **Platformbeheer**.
2. Klik in de groep **ADM-beheer** op de tegel **Tenants**.

## Een tenant aanmaken

Bovenaan staan twee velden en een knop:

| Veld | Wat u invult |
|---|---|
| **Code** | De korte sleutel van deze tenant, bv. `klant-a`. Verplicht |
| **Naam** | De volledige naam van de klant, bv. `Klant A NV`. Verplicht |

Klik op **Nieuwe tenant**. Nimble maakt een eigen databank aan, zet de structuur ervan klaar en registreert de
tenant. Ontbreekt de code of de naam, dan noemt een melding bovenaan welk veld nog leeg is.

Na afloop verschijnt een groene melding met de code en de databank van de nieuwe tenant. Bestond de tenant al,
dan zegt de melding dat ook; er wordt dan niets overschreven. Lukt het niet, dan verschijnt een rode melding
die begint met **Provisioning mislukt:** en de reden noemt.

Is er nog geen enkele tenant, dan leest u **Nog geen tenants. Maak er hierboven één aan.**

## De lijst

| Kolom | Wat u ziet of doet |
|---|---|
| **Code** | De sleutel van de tenant |
| **Naam** | De naam van de klant |
| **Firebird-bron (pad)** | Het pad naar de databank van deze klant in het vorige pakket, bv. `D:\Firebird\klant-a.fdb`. Klik op **Bewaren** in dezelfde rij; bovenaan verschijnt **Firebird-bron bewaard.** |
| *(actie)* | **Gebruiken →** maakt deze tenant actief in uw eigen sessie |

Het Firebird-pad is nodig voor de [Conversie](conversion.md).

## In een tenant werken

- **Gebruiken →** maakt deze tenant de actieve tenant. Alle beheerschermen en lijsten tonen daarna de
  gegevens van die klant.
- **Geen tenant meer**, onder de lijst, zet de actieve tenant weer af. U werkt daarna zonder actieve tenant;
  beheerschermen die er een nodig hebben, blijven leeg.

Wilt u gegevens uit het vorige pakket overzetten, kies dan eerst de tenant met **Gebruiken →** en ga daarna
naar **Platformbeheer → Conversie**.

## Veelgemaakte fouten

!!! warning
    - **De code verkeerd kiezen.** Op dit scherm kunt u de code van een bestaande tenant niet wijzigen.
      Controleer ze dus vóór u op **Nieuwe tenant** klikt.
    - **Het Firebird-pad intypen en niet bewaren.** Het pad telt pas na een klik op **Bewaren** in die rij.

!!! tip
    Vergeet na **Gebruiken →** niet **Geen tenant meer** te kiezen wanneer u weer platformbreed wilt werken. U
    kijkt anders naar de gegevens van één klant terwijl u denkt het geheel te zien.

## Zie ook

- [Gebruikers](users.md) — wie mag aanmelden bij deze tenant
- [Rollen](roles.md) — wat die gebruikers mogen
- [Conversie](conversion.md) — de gegevens uit het vorige pakket inlezen

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

![Het conversiescherm voor tenant demo: het blok Legacy Firebird-bron zonder pad, de knop Converteer deze tenant, en daaronder de blokken Legacy-gebruikers importeren en Demo-gegevens genereren.](../images/conversie-scherm.png)

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

De onderdelen omvatten onder meer de bedrijfsfiche, relaties, leveranciers, contactpersonen, contactfuncties,
taken, afspraken en notities, artikelgroepen en artikelen, btw-codes, offertes en offerteregels, facturen en
factuurregels, vorderingsstaten, inkoopfacturen, projecten met hun fases, materialen en artikelen, ploegen, en
de keuzelijsten productiestatus, pipeline-status en projecttypes.

!!! tip "Herhaalbaar"
    U mag de conversie gerust opnieuw starten, bijvoorbeeld na nieuwe gegevens in Firebird. Er ontstaan geen
    dubbels.

## Legacy-gebruikers importeren

Met **Importeer / synchroniseer gebruikers** zet u de actieve backoffice-gebruikers uit Firebird om naar
aanmeldingen voor deze tenant.

- Bestaande aanmeldingen worden gesynchroniseerd: naam, rol en koppeling met ADM One. Hun wachtwoord blijft
  ongewijzigd.
- Enkel nieuwe aanmeldingen krijgen een tijdelijk wachtwoord uit de serverinstellingen.
- Na afloop ziet u hoeveel gebruikers aangemaakt, bijgewerkt en overgeslagen zijn, met eventueel een lijst
  meldingen.

Ook deze knop werkt enkel wanneer de bron **Verbonden** is.

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

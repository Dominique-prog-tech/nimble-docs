# Platformbeheer

Op het scherm **Platformbeheer** vindt u de gedeelde instellingen en stamgegevens van uw bedrijf, gegroepeerd in tegels: de bedrijfsfiche, artikelfamilies, eenheden, de keuzelijsten voor projecten, relaties, verkoop en leads, en het beheer van rollen en verwijderde gegevens.

## Het scherm openen

Klik onderaan in de zijbalk op **Platformbeheer**.

![De hub Platformbeheer met de tegelgroepen Bedrijf, Artikelen, Projecten, Relaties, Verkoop, Leads en Gegevens en toegang. Onderaan staat ook de groep ADM-beheer.](../images/platformbeheer-hub.png)

!!! info "Rechten"
    U ziet enkel de tegels waarvoor u rechten hebt. Ziet u een tegel niet, vraag dan uw beheerder om het bijbehorende recht toe te kennen via **Platformbeheer → Rollen**.

## De groepen

| Groep | Tegels |
|---|---|
| **Bedrijf** | [Bedrijfsfiche](../settings/company-profile.md) |
| **Artikelen** | [Artikelfamilies](article-families.md), [Eenheden](units.md) |
| **Projecten** | [Productiestatus](production-statuses.md), [Pipeline-status](pipeline-statuses.md), [Projecttypes](project-types.md) |
| **Relaties** | [Klantcategorieën](account-categories.md), [Contactfuncties](contact-functions.md) |
| **Verkoop** | [Offertestatus](quote-status.md), [Factuurstatus](invoice-status.md), [Btw-codes](vat-codes.md), [Documentsjablonen](../settings/document-templates.md) |
| **Leads** | [Leadbronnen](lead-sources.md), [Types aanvraag](lead-request-types.md), [Leadfases](lead-status.md), [Leadopvolging](lead-follow-up.md) |
| **Gegevens en toegang** | [Rollen](roles.md), [Prullenbak](recycle-bin.md), [Actielogboek](audit-log.md) (enkel voor ADM-operators) |
| **ADM-beheer** | [Tenants](tenants.md), [Gebruikers](users.md), [Conversie](conversion.md) — enkel voor ADM-operators; u ziet deze groep niet |

Elke tegel opent een beheerscherm. Bovenaan elk scherm brengt **← Terug naar platformbeheer** u terug naar deze hub.

Onder **Platformbeheer** staat in de zijbalk ook **Klantenportaal**. Dat is geen tegel maar een aparte ingang; zie [Klantenportaal](../getting-started/customer-portal.md).

## Een rode melding bovenaan

Bij het starten werkt Nimble de structuur van elke databank bij. Lukt dat voor één databank niet, dan staat
bovenaan deze pagina een rode melding **Databank-migraties niet doorgelopen**, met de databank, het onderdeel
en de reden.

Schermen die op die structuur rekenen, kunnen dan stuklopen — soms pas dagen later, wanneer iemand toevallig
het juiste scherm opent. Geef de tekst van de melding door aan uw beheerder; die bevat de oorzaak. Zelf hoeft
u niets te doen.

Staat er geen melding, dan zijn alle databanken bij.

## Veelgemaakte fouten

!!! warning
    - **Geen tenant gekozen** (enkel operators) — kies eerst een tenant via **Platformbeheer → Tenants → Gebruiken**; zonder actieve tenant kunt u geen stamgegevens beheren.
    - **Tegel ontbreekt** — u mist het recht voor dat onderdeel; dit is geen fout in de toepassing.

## Zie ook

- [Bedrijfsfiche](../settings/company-profile.md)
- [Stamgegevens (keuzelijsten)](master-data.md)
- [Klantenportaal](../getting-started/customer-portal.md)

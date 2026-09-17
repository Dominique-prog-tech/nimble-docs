# Binnengekomen documenten

Facturen die uw leveranciers u via het **Peppol**-netwerk stuurden. ADM One ontvangt ze voor u; op dit
scherm maakt u er een aankoopfactuur van.

## Het scherm openen

Klik in de zijbalk op **Inkoop → Binnengekomen documenten**.

<!-- AFBEELDING: de lijst Binnengekomen documenten met minstens twee documenten — kan pas wanneer de demo-inbox documenten bevat; vandaag is ze leeg -->

## De lijst

| Kolom | Wat het zegt |
|---|---|
| **Ontvangen** | De dag waarop het document binnenkwam |
| **Leverancier** | De naam uit het document. Staat er *niet uit de UBL gelezen*, dan kon die naam niet uit het document gehaald worden — open het dan om te zien van wie het komt |
| **Nummer** | Het factuurnummer van de leverancier |
| **Totaal** | Het totaalbedrag, met de munt ervoor |

Achteraan elke rij staan de knoppen **Bekijken** en **Verwerken**. Staat er niets, dan leest u
*Geen binnengekomen documenten.*

## Een document bekijken

**Bekijken** opent het originele document zoals de leverancier het verstuurde. Dat is het stuk waarop u
zich bij een discussie beroept — niet wat Nimble ervan gemaakt heeft.

## Een document verwerken

**Verwerken** maakt er een aankoopfactuur van. Nimble zoekt de leverancier op zijn **btw-nummer**. Punten,
spaties en koppeltekens spelen daarbij geen rol, hoofdletters evenmin. Enkel relaties die als leverancier
gemarkeerd zijn, komen in aanmerking.

Lukt het, dan verschijnt de factuur bij [Aankoopfacturen](purchase-invoices.md) met *Wacht op goedkeuring*.
In haar **Nota** staat aan welke leverancier en op welk btw-nummer ze gekoppeld werd. Het document verdwijnt
uit deze lijst.

Het scherm maakt geen factuur en zegt waarom wanneer:

| Geval | Wat u doet |
|---|---|
| Het document draagt **geen btw-nummer** | Open het om te zien van wie het komt, en breng het in met **Nieuwe aankoopfactuur** op het scherm Aankoopfacturen |
| **Geen enkele relatie** draagt dat btw-nummer | Maak de leverancier aan, of vul het btw-nummer aan op de bestaande relatie |
| **Twee of meer relaties** dragen hetzelfde btw-nummer | Zet dat eerst recht — dan is niet uit te maken welke bedoeld is |
| Het document draagt **geen factuurnummer of geen totaalbedrag** | Open het en breng het met de hand in |
| Het document is **al verwerkt** | De melding noemt de factuur die eruit ontstond |

!!! warning "Hetzelfde document twee keer verwerken kan niet"
    Nimble onthoudt uit welk document een factuur ontstond — ook wanneer die factuur later in de prullenbak
    belandt. Zou dat niet zo zijn, dan stond dezelfde schuld twee keer in uw boeken.

!!! info "Al met de hand ingebracht?"
    Een factuurnummer is uniek per leverancier. Hebt u dezelfde factuur al met de hand ingebracht, dan
    weigert Nimble het document met een melding.

!!! info "Factuur gemaakt, maar het document blijft staan"
    Kon ADM One de verwerking niet bevestigen, dan staat de factuur er wél, maar blijft het document in deze
    lijst. De melding zegt dat. Een tweede poging maakt geen tweede factuur.

## Wanneer ADM One niet bereikbaar is

Dan toont het scherm geen lijst, maar een kader met de melding dat ADM One op dit moment niet bereikbaar is
en de knop **Opnieuw proberen**.

Een lege lijst betekent dus altijd dat er niets binnenkwam. Staat het kader er, dan weet u niet wat er
binnenkwam: sluit uw dag dan niet af op dit scherm.

## Zie ook

- [Aankoopfacturen](purchase-invoices.md)

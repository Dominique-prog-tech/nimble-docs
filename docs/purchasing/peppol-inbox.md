# Binnengekomen documenten

Facturen die uw leveranciers u via het **Peppol**-netwerk stuurden. ADM One ontvangt ze voor u; op dit
scherm maakt u er een aankoopfactuur van.

## Het scherm openen

Klik in de zijbalk op **Inkoop → Binnengekomen documenten**.

## Een melding in het belletje

Staat er iets te verwerken, dan meldt het **belletje** rechtsboven het: *3 nieuwe Peppol-documenten om te
verwerken*. Een klik brengt u naar dit scherm. U ziet die melding als u aankoopfacturen mag verwerken.

Hebt u de melding gelezen en komt er een document bij, dan verschijnt ze opnieuw — met het nieuwe aantal. De
melding kan tot een minuut achterlopen op dit scherm.

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

**Bekijken** opent het originele document zoals de leverancier het verstuurde, in een venster boven de lijst.
Sluit het venster en u staat weer in de lijst. Dat document is het stuk waarop u
zich bij een discussie beroept — niet wat Nimble ervan gemaakt heeft.

## Een document verwerken

**Verwerken** maakt er een aankoopfactuur van. Nimble zoekt de leverancier op zijn **btw-nummer** en op zijn
**ondernemingsnummer**. Punten, spaties en koppeltekens spelen daarbij geen rol, hoofdletters evenmin. Een
Belgisch ondernemingsnummer en het btw-nummer met BE ervoor horen bij dezelfde onderneming: `0429.001.603` vindt
ook een leverancier met `BE0429001603`, en omgekeerd. Enkel relaties die als leverancier gemarkeerd zijn, komen
in aanmerking.

Lukt het, dan verschijnt de factuur bij [Aankoopfacturen](purchase-invoices.md) met *Wacht op goedkeuring*.
Is het document een **creditnota**, dan wordt het een aankoopfactuur van de soort *Creditnota*.
In haar **Nota** staat aan welke leverancier en op welk nummer ze gekoppeld werd. Het document verdwijnt
uit deze lijst.

Nimble neemt daarbij ook over wat in het document staat: het bedrag excl. btw, de btw per tarief en de
factuurregels. De pdf van de leverancier en het Peppol-bestand zelf (UBL) komen onder **Bijlagen** van de
factuur. Draagt een regel of een btw-tarief in het document geen leesbaar bedrag, dan neemt Nimble de regels en
de btw per tarief niet over en meldt het dat. Zo staat er nooit een bedrag van nul waar de leverancier niets
stuurde. De pdf en het Peppol-bestand komen dan wel bij de factuur. Zie [Een factuur uit Peppol](purchase-invoices.md#een-factuur-uit-peppol).

## Een leverancier die Nimble niet kent

Vindt Nimble geen leverancier met het nummer uit het document, of draagt het document geen nummer, dan opent het
venster **Leverancier van dit document**. Bovenaan staat waarom. Dat gebeurt bijvoorbeeld bij een eerste factuur
van een nieuwe leverancier, of bij een verzekeraar: die is vrijgesteld van btw en heeft enkel een
ondernemingsnummer.

Bij **Wat wilt u doen?** kiest u:

- **Nieuwe leverancier aanmaken.** Het venster toont wat Nimble uit het document overneemt: de naam, het
  btw-nummer (of het ondernemingsnummer), het adres, het e-mailadres en het telefoonnummer. Klik op
  **Verwerken**: de leverancier komt bij [Relaties](../relations.md) en de factuur wordt meteen
  gemaakt. Wilt u iets aanvullen of verbeteren, dan doet u dat daarna op de relatiefiche.
- **Bestaande leverancier kiezen.** Kies de leverancier in de lijst en klik op **Verwerken**. Gebruik dit
  wanneer de leverancier er al staat, maar zonder nummer of met een ander nummer.

Een leverancier zonder btw-nummer krijgt zijn ondernemingsnummer in het veld **Btw-nummer**, zonder BE ervoor.
Zo vindt Nimble hem bij zijn volgende factuur vanzelf terug.

In de **Nota** van de factuur staat of de leverancier uit het document aangemaakt werd, of met de hand gekozen.

!!! info "Mag u geen relaties aanmaken?"
    Dan opent het venster bij **Bestaande leverancier kiezen**. Staat de leverancier er nog niet, vraag dan
    een collega die relaties mag bewerken om hem aan te maken.

!!! warning "Een nummer dat al bestaat"
    Wijst het nummer uit het document naar een leverancier die er al staat, dan maakt Nimble geen tweede aan.
    Kies dan die leverancier bij **Bestaande leverancier kiezen**.

## Wanneer het scherm geen factuur maakt

Het scherm maakt geen factuur en zegt waarom wanneer:

| Geval | Wat u doet |
|---|---|
| **Twee of meer relaties** dragen hetzelfde nummer | Zet dat eerst recht — dan is niet uit te maken welke bedoeld is |
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

!!! info "Staat uw account op alleen-lezen?"
    **Verwerken** blijft werken: wat uw leveranciers sturen, komt altijd binnen. De aankoopfactuur goedkeuren
    of wijzigen kan pas wanneer de beperking is opgeheven. Zie
    [Wanneer uw account beperkt is](../getting-started/account-restricted.md).

## Enkel uw eigen documenten

U ziet enkel de documenten die voor uw bedrijf bestemd zijn. Is uw omgeving nog niet aan uw bedrijf in ADM One
gekoppeld, dan staat er bovenaan een melding en blijft de lijst leeg: zonder die koppeling is niet uit te maken
welke documenten van u zijn. Neem dan contact op met ADM-Concept.

## Wanneer ADM One niet bereikbaar is

Dan toont het scherm geen lijst, maar een kader met de melding dat ADM One op dit moment niet bereikbaar is
en de knop **Opnieuw proberen**.

Een lege lijst zonder melding erboven betekent dus dat er niets binnenkwam. Staat het kader er, dan weet u niet wat er
binnenkwam: sluit uw dag dan niet af op dit scherm.

## Zie ook

- [Aankoopfacturen](purchase-invoices.md)

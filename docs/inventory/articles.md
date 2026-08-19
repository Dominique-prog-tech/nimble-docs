# Artikelen

Op het scherm **Artikelen** staat alles wat u levert of plaatst: de omschrijving, de prijzen en de familie
waarin het hoort. Het is de lijst waaruit u straks offertes en werkbonnen samenstelt.

## Het scherm openen

Klik in de zijbalk op **Voorraad → Artikelen**.

## De lijst

| Kolom | Wat het is |
|---|---|
| **Nummer** | Uw eigen artikelnummer |
| **Naam** | Korte benaming |
| **Familie** | De groep waarin het artikel hoort |
| **Eenheid** | Stuk, meter, m², uur … |
| **Stock** | De huidige voorraad — zie de opmerking onderaan |
| **Verkoopprijs** | Prijs per eenheid |
| **Actief** | Een vinkje bij artikelen die u nog gebruikt |

U kunt zoeken, sorteren, filteren en exporteren zoals in de andere lijsten. Dubbelklik een rij om het
artikel te openen.

## Een artikel aanmaken of bewerken

Klik **Nieuw artikel**, of dubbelklik een bestaande rij.

| Veld | Opmerking |
|---|---|
| **Nummer** | Verplicht |
| **Naam** | Verplicht |
| **Familie** | Verplicht — beheerd via [Artikelfamilies](../administration/article-families.md) |
| **Eenheid** | Verplicht — beheerd via [Eenheden](../administration/units.md) |
| **Verkoopprijs** | Wat de klant betaalt |
| **Aankoopprijs** | Wat u zelf betaalt |
| **Omschrijving** | Langere tekst, bv. voor op een offerte |
| **Actief** | Zet dit uit voor artikelen die u niet meer gebruikt; ze blijven bestaan op oude documenten |

!!! info "Familie en eenheid zijn verplicht"
    Een artikel zonder familie is in geen enkele lijst terug te vinden, en zonder eenheid weet niemand of
    "10" tien stuks of tien meter betekent. Vandaar dat beide moeten. Ontbreekt de familie of eenheid die u
    nodig hebt, maak ze dan eerst aan via Platformbeheer.

## De rail Stock

Klik rechts op **Stock** om het paneel open te klappen. Kies een artikel in de lijst en u ziet de huidige
stand en de bewegingen van dat artikel.

!!! warning "De voorraad wordt voorlopig nog in uw huidige pakket bijgehouden"
    Zolang u met beide pakketten werkt, houdt uw **oude pakket** de voorraad bij. Nimble toont hier al het
    nieuwe stockregister, maar dat vult zich pas bij de overstap — daarom staat er nu overal 0.

    Dat is bewust: als twee systemen tegelijk voorraad bijhouden, lopen ze gegarandeerd uit elkaar, en dat
    merkt u pas bij de eerste telling. Er is dus één plek die telt, en dat is voorlopig uw oude pakket.

    Boekingen kunnen daarom nog niet gedaan worden. Bij de overstap wordt de beginstand overgenomen en gaat
    het hier verder.

## Veelgemaakte fouten

!!! warning
    - **Denken dat de voorraad fout staat** omdat er 0 staat — zie de opmerking hierboven; die stand komt
      pas bij de overstap.
    - **Een artikel verwijderen dat op oude documenten staat** — zet het op **niet actief** in plaats van
      het te verwijderen. Dan verdwijnt het uit de keuzelijsten maar blijft het leesbaar op wat er al was.
    - **Twee keer hetzelfde nummer** — het nummer is uw eigen sleutel; houd het uniek.

## Zie ook

- [Artikelfamilies](../administration/article-families.md)
- [Eenheden](../administration/units.md)
- [Lijsten filteren](../lijsten-filteren.md) — de trechterknop, de filterbouwer en de filterbalk

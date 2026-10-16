// De handleidingfilms van Nimble — de motor staat in adm-appkit/tools/filmgenerator (zie daar LEESMIJ.md).
//
//   node tools/films.mjs --stem=say                 alle films, NL en FR, met de macOS-stem (plaatshouder)
//   node tools/films.mjs --meet --stem=say          repetitie: elke scène op haar merkteken, niets opgenomen
//   node tools/films.mjs --droog                    enkel de stem maken en de duur tonen
//   node tools/films.mjs --inhoud                   het draaiboek als structuur
//
// ⚠️ De app moet lokaal draaien op 5145 (de preview), tenant demo. ⚠️ De film "van-aanvraag-tot-offerte" BEWAART een
// offerte voor Residentie Parkzicht VME — ruim ze na de ronde op (zie het draaiboek).
process.argv.push('--instellingen=' + new URL('./films-instellingen.mjs', import.meta.url).pathname);
await import('/Users/dominique/projects/adm-appkit/tools/filmgenerator/films.mjs');

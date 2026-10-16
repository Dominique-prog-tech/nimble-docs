// ── HET DRAAIBOEK VAN NIMBLE (proeffilm, 16/10/2026) ─────────────────────────────────────────────────────
//
// Eén film, van begin tot eind, om de pijplijn op Nimble te proberen: "Van aanvraag tot offerte" — de keten
// lead → klant → offerte, met een prijsafspraak. Stem: macOS `say` (plaatshouder), op vraag van Dominique.
//
// ⚠️ Elk merkteken bewijst DATA, niet enkel het scherm (schrijfregels §4b): een lead- of klantnaam uit de demo,
// een offertenummer, de naam van de prijsafspraak. Een paginatitel staat ook boven een lege lijst.
//
// ⚠️ ER WORDT ÉÉN OFFERTE BEWAARD PER TAAL. Scène 'nieuw' bewaart een nieuwe offerte voor Residentie Parkzicht VME — de
// balk met de prijsafspraak verschijnt pas boven de regels, en die zijn er pas na het eerste bewaren. Het inladen
// daarna wordt NIET bewaard. Na de opname opruimen: de offertes, hun blok, record_history, de auditregels in
// nimble_control en de teller in crm.number_series (een nieuwe offerte openen verbruikt al een nummer).

import { BASIS } from './aansturing.mjs';
import { beweegNaar, klik, tabblad } from '/Users/dominique/projects/adm-appkit/tools/schermmachinerie/browser.mjs';

// De weergave Bord of Lijst kiezen bovenaan een lijst met twee weergaven (Leads, Offertes).
const weergave = async (p, patroon) => {
  const knop = p.getByText(patroon).first();
  await knop.waitFor({ state: 'visible', timeout: 15000 });
  await klik(p, knop);
  await p.waitForTimeout(1200);
};

// Een rij in een lijst openen op een tekst die erin staat (dubbelklik, zoals een gebruiker).
const openRij = async (p, tekst) => {
  const rij = p.locator('.dxbl-grid-table tbody tr:visible', { hasText: tekst }).first();
  await rij.waitFor({ state: 'visible', timeout: 15000 });
  await beweegNaar(p, rij);
  await rij.dblclick();
  await p.waitForSelector('.adm-fiche', { timeout: 15000 });
  await p.waitForTimeout(1200);
};

// Zoeken in de lijst, letter per letter — de kijker ziet de lijst krimpen.
const zoek = async (p, tekst) => {
  const z = p.locator('input[type="search"]:visible, input[placeholder*="oek" i]:visible, input[placeholder*="echerch" i]:visible').first();
  await klik(p, z);
  await z.fill('');
  await z.type(tekst, { delay: 90 });
  await p.waitForTimeout(1500);
};

export const FILMS = [
  ['van-aanvraag-tot-offerte', {
    pagina: 'sales/quotes',
    titel: {
      nl: 'Van aanvraag tot offerte — lead, klant en offerte in Nimble',
      fr: 'De la demande au devis — lead, client et devis dans Nimble',
    },
    omschrijving: {
      nl: 'De keten van een aanvraag tot een offerte: het leadbord, een gewonnen lead die klant wordt, het '
        + 'offertebord, een offerte met haar blokken en regels, en een prijsafspraak met een klant die u in één '
        + 'klik op een nieuwe offerte zet.',
      fr: "La chaîne de la demande au devis : le tableau des leads, un lead gagné qui devient client, le tableau "
        + "des devis, un devis avec ses blocs et ses lignes, et un accord de prix avec un client que vous placez en "
        + 'un clic dans un nouveau devis.',
    },
    uitvoeringen: { handleiding: { stem: true } },
    scenes: [
      { naam: 'leadbord', kop: { nl: 'Het leadbord', fr: 'Le tableau des leads' },
        doe: async (p) => {
          await p.goto(`${BASIS}/crm/leads`); await p.waitForLoadState('networkidle');
          await weergave(p, /^(Bord|Tableau)$/);
        },
        merk: /Nathalie Provoost|Bert Van Craen/i,
        nl: 'Elke offerte begint bij een aanvraag. Op het leadbord staat elke lead in de fase waarin hij zit, van het eerste contact tot gewonnen of verloren.',
        fr: "Chaque devis commence par une demande. Sur le tableau des leads, chaque lead figure dans la phase où il se trouve, du premier contact jusqu'à gagné ou perdu." },

      { naam: 'klant', kop: { nl: 'Van lead naar klant', fr: 'Du lead au client' },
        doe: async (p) => {
          await p.goto(`${BASIS}/relaties`); await p.waitForLoadState('networkidle');
          await zoek(p, 'Warande');
          await openRij(p, 'Warande');
          const blok = p.locator('.adm-card', { hasText: /Afkomstig van een lead|Issu d'un lead/ }).first();
          await beweegNaar(p, blok);
        },
        merk: /Afkomstig van een lead|Issu d'un lead/i,
        nl: 'Is een lead gewonnen, dan zet u hem om naar een klant. De klantenfiche onthoudt waar hij vandaan kwam: onderaan staan de gegevens van de aanvraag.',
        fr: "Quand un lead est gagné, vous le convertissez en client. La fiche client garde la trace de son origine : les données de la demande figurent en bas." },

      { naam: 'offertebord', kop: { nl: 'Het offertebord', fr: 'Le tableau des devis' },
        doe: async (p) => {
          await p.goto(`${BASIS}/verkoop/offertes`); await p.waitForLoadState('networkidle');
          await weergave(p, /^(Bord|Tableau)$/);
        },
        merk: /Hotel Zeezicht|Van Hoof Metaal/i,
        nl: 'Op het offertebord staat elke offerte in een van vier kolommen: klad, verstuurd, aanvaard of geweigerd. Een kaart naar een andere kolom slepen, wijzigt de status.',
        // ⚠️ ElevenLabs verhaspelde "offertebord" (Dominique, 16/10/2026: "spreekt Offerteoverzicht verkeerd uit of zo").
        //    Enkel de STEM krijgt het streepje; de ondertitels schrijven het woord zoals het hoort.
        uitspraak: { nl: 'Op het offerte-bord staat elke offerte in een van vier kolommen: klad, verstuurd, aanvaard of geweigerd. Een kaart naar een andere kolom slepen, wijzigt de status.' },
        fr: "Sur le tableau des devis, chaque devis figure dans l'une des quatre colonnes : brouillon, envoyé, accepté ou refusé. Glisser une carte vers une autre colonne change son statut." },

      { naam: 'offerte', kop: { nl: 'Een offerte', fr: 'Un devis' },
        doe: async (p) => {
          await weergave(p, /^(Lijst|Liste)$/);
          const rij = p.locator('.dxbl-grid-table tbody tr:visible')
            .filter({ has: p.getByText('OFF-2026-0003', { exact: true }) }).first();
          await rij.waitFor({ state: 'visible', timeout: 15000 });
          await beweegNaar(p, rij); await rij.dblclick();
          await p.waitForSelector('table.offerte-regels', { timeout: 20000 });
          await p.waitForTimeout(1200);
          await beweegNaar(p, p.locator('table.offerte-regels').first());
        },
        merk: /De Wilde Interieur/i,
        nl: 'Een offerte bestaat uit blokken met een kop, en daaronder de regels: werken, materialen en uren. Onderaan rekent Nimble de totalen uit.',
        fr: 'Un devis se compose de blocs avec un titre, et en dessous les lignes : travaux, matériaux et heures. En bas, Nimble calcule les totaux.' },

      { naam: 'afspraken', kop: { nl: 'Prijsafspraken met een klant', fr: 'Les accords de prix avec un client' },
        doe: async (p) => {
          await p.goto(`${BASIS}/relaties`); await p.waitForLoadState('networkidle');
          await zoek(p, 'Parkzicht');
          await openRij(p, 'Residentie Parkzicht VME');
          await klik(p, tabblad(p, /^(Prijsafspraken|Accords de prix)/));
          await p.locator('.dxbl-grid-table tbody tr:visible', { hasText: /Onderhoud gemeenschappelijke delen/ }).first()
            .waitFor({ state: 'visible', timeout: 15000 });
        },
        merk: /Onderhoud gemeenschappelijke delen/i,
        nl: 'Spreekt u met een klant vaste prijzen af, dan legt u ze vast op zijn fiche, onder Prijsafspraken: voor een reeks artikelen en voor een periode.',
        fr: "Si vous convenez de prix fixes avec un client, vous les enregistrez sur sa fiche, sous Accords de prix : pour une série d'articles et pour une période." },

      { naam: 'afspraak', kop: { nl: 'Eén prijsafspraak', fr: 'Un accord de prix' },
        doe: async (p) => {
          const rij = p.locator('.dxbl-grid-table tbody tr:visible', { hasText: /Onderhoud gemeenschappelijke delen/ }).first();
          await beweegNaar(p, rij); await rij.dblclick();
          await p.waitForFunction(() => [...document.querySelectorAll('[data-kolom="marge"]')].some(m => /%/.test(m.textContent)),
            null, { timeout: 15000 });
          await beweegNaar(p, p.locator('[data-tab="prijsafspraak-regels"]').first());
        },
        merk: /DIE-9001/,
        nl: 'Per artikel staat de afgesproken prijs naast de standaardprijs. Wie de financiële cijfers mag zien, ziet ook de kostprijs en de marge. Een lange prijslijst leest u in uit Excel.',
        fr: "Pour chaque article, le prix convenu figure à côté du prix standard. Qui peut consulter les chiffres financiers voit aussi le prix de revient et la marge. Une longue liste de prix s'importe depuis Excel." },

      { naam: 'nieuw', kop: { nl: 'Een nieuwe offerte', fr: 'Un nouveau devis' },
        aanloop: 1.3,
        doe: async (p) => {
          await p.goto(`${BASIS}/verkoop/offertes/new`); await p.waitForLoadState('networkidle');
          await p.waitForTimeout(1500);
          // De klant kiezen in AdmLookup: typen en de eerste treffer nemen.
          // Op de plaatshouder van het klantveld: het eerste combobox van de pagina is niet per se de klant.
          const veld = p.getByPlaceholder(/kies een klant|choisissez un client/i).first();
          await klik(p, veld);
          await veld.type('Parkzicht', { delay: 90 });
          const treffer = p.locator('[role="option"]:visible', { hasText: 'Residentie Parkzicht VME' }).first();
          await treffer.waitFor({ state: 'visible', timeout: 10000 });
          await klik(p, treffer);
          await p.waitForTimeout(800);
          // ⚠️ Een nieuwe offerte toont enkel de kop tot ze bewaard is ("Bewaar eerst de offerte; daarna kunt u blokken en
          //    regels toevoegen") — de balk staat boven de regels. Dus bewaren, zoals een gebruiker. Dit MAAKT een offerte in
          //    demo: na de opname opruimen (offerte, blok, historiek, auditregel, teller).
          await klik(p, p.getByRole('button', { name: /^(Bewaren|Enregistrer)$/ }).first());
          await p.locator('[data-prijsafspraak="balk"]').first().waitFor({ state: 'visible', timeout: 15000 });
          await beweegNaar(p, p.locator('[data-prijsafspraak="balk"]').first());
        },
        merk: /geldt op de offertedatum een prijsafspraak|s'applique à ce client à la date du devis/i,
        nl: 'Maakt u een offerte voor die klant en bewaart u ze, dan biedt Nimble de afspraak aan die op de offertedatum geldt.',
        uitspraak: { nl: 'Maakt u een offerte voor die klant en bewaart u ze, dan biedt Nimble de afspraak aan die op de offerte-datum geldt.' },
        fr: "Quand vous créez un devis pour ce client et l'enregistrez, Nimble propose l'accord qui s'applique à la date du devis." },

      { naam: 'inladen', kop: { nl: 'De afspraak inladen', fr: "Charger l'accord" },
        doe: async (p) => {
          const knop = p.locator('[data-prijsafspraak="balk"] button').first();
          await klik(p, knop);
          await p.waitForTimeout(1500);
          await beweegNaar(p, p.locator('table.offerte-regels').first());
        },
        merk: /ingeladen|chargé/i,
        nl: 'Inladen zet alle posten op de offerte, met de afgesproken prijs en hoeveelheid nul. U vult enkel nog de hoeveelheden in, en verwijdert wat niet van toepassing is.',
        fr: "Charger place tous les postes dans le devis, au prix convenu et avec la quantité zéro. Il ne vous reste qu'à compléter les quantités et à supprimer ce qui ne s'applique pas." },
    ],
  }],
];

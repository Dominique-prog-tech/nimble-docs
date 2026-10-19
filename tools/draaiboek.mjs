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
  // ── AAN DE SLAG (16/10/2026, op vraag van Dominique) ─────────────────────────────────────────────────────
  // De eerste rondleiding: wat iedereen ziet die Nimble voor het eerst opent. Er wordt NIETS bewaard — scène 'bewaren' wijzigt
  // een veld enkel om de vraag "Toch weggaan?" te tonen; de film eindigt op die fiche zonder te bewaren.
  ['aan-de-slag', {
    pagina: 'getting-started/dashboard',
    titel: {
      nl: 'Aan de slag met Nimble — het scherm, de lijsten, de fiches en de hulp',
      fr: 'Premiers pas avec Nimble — l’écran, les listes, les fiches et l’aide',
      en: 'Getting started with Nimble — the screen, lists, records and help',
    },
    omschrijving: {
      nl: 'De eerste rondleiding: het dashboard met uw kerncijfers en wat aandacht vraagt, het menu, werken in een lijst '
        + '(zoeken, filteren, exporteren), een fiche met haar journaal, wat er gebeurt met niet-bewaarde wijzigingen, de hulp '
        + 'bij elk scherm, de assistent en uw eigen voorkeuren.',
      fr: 'La première visite guidée : le tableau de bord avec vos chiffres clés et ce qui demande attention, le menu, le travail '
        + 'dans une liste (rechercher, filtrer, exporter), une fiche et son journal, ce qui se passe avec des modifications non '
        + 'enregistrées, l’aide sur chaque écran, l’assistant et vos préférences.',
      en: 'A first tour of Nimble: the dashboard with your key figures and what needs attention, the menu, working in a '
        + 'list (search, filter, export), a record with its journal, help on every screen and your own preferences.',
    },
    uitvoeringen: {
      handleiding: { stem: true },
      // Websiteversie voor de startpagina van nimble-website (content-hub, 19/10/2026). Zonder stem: de site speelt gedempt in een lus, de zin staat in beeld.
      // Het Engels toont het NEDERLANDSE scherm (de app spreekt geen Engels) met Engelse tekst in beeld.
      website: { stem: false, scenes: ['dashboard', 'aandacht', 'menu', 'lijst', 'fiche', 'journaal'],
        talen: [{ ui: 'nl-BE', tekst: 'nl' }, { ui: 'fr-BE', tekst: 'fr' }, { ui: 'nl-BE', tekst: 'en' }] },
    },
    scenes: [
      { naam: 'dashboard', kop: { nl: 'Het dashboard', fr: 'Le tableau de bord', en: 'The dashboard' },
        website: { nl: 'Uw kerncijfers zodra u Nimble opent.', fr: 'Vos chiffres clés dès l’ouverture de Nimble.', en: 'Your key figures the moment you open Nimble.' },
        doe: async (p) => { await p.goto(`${BASIS}/dashboard`); await p.waitForLoadState('networkidle'); },
        merk: /WO-2026-004/,
        nl: 'Na het aanmelden opent Nimble op het dashboard. Bovenaan staan uw kerncijfers: het orderboek, het onderhanden werk, en wat er bij klanten openstaat.',
        fr: "Après la connexion, Nimble s'ouvre sur le tableau de bord. En haut figurent vos chiffres clés : le carnet de commandes, les travaux en cours, et l'encours clients." },

      { naam: 'aandacht', kop: { nl: 'Wat aandacht vraagt', fr: 'Ce qui demande attention', en: 'What needs attention' },
        website: { nl: 'Wat vandaag aandacht vraagt, staat er meteen onder.', fr: 'Ce qui demande votre attention aujourd’hui, juste en dessous.', en: 'What needs attention today, right below.' },
        doe: async (p) => { await beweegNaar(p, p.getByText('F-2026-0011').first()); },
        merk: /F-2026-0011/,
        nl: 'Daaronder ziet u wat vandaag aandacht vraagt: werven die nog niet startklaar zijn, vervallen facturen, en artikelen onder hun minimumvoorraad.',
        fr: "En dessous, vous voyez ce qui demande attention aujourd'hui : les chantiers pas encore prêts, les factures échues, et les articles sous leur stock minimum." },

      { naam: 'menu', kop: { nl: 'Het menu', fr: 'Le menu', en: 'The menu' },
        website: { nl: 'CRM, verkoop, werk, inkoop en voorraad in één pakket.', fr: 'CRM, ventes, travail, achats et stock dans un seul logiciel.', en: 'CRM, sales, work, purchasing and stock in one package.' },
        doe: async (p) => { // "VERKOOP" staat in hoofdletters door de opmaak; in de pagina staat "Verkoop".
          await beweegNaar(p, p.locator('.sidebar').getByText(/^(Verkoop|Ventes)$/i).first());
          await p.waitForTimeout(900);
          // Op het dashboard zijn alle groepen dicht: CRM openklappen, zodat de volgende scène Relaties kan kiezen.
          await klik(p, p.locator('.sidebar').getByText(/^CRM$/i).first());
          await p.locator('.sidebar').getByRole('link', { name: /^(Relaties|Relations)$/ }).first().waitFor({ state: 'visible', timeout: 10000 }); },
        merk: /F-2026-0012/,
        nl: 'Links staat het menu, gegroepeerd zoals u werkt: CRM, verkoop, werk, inkoop en voorraad. Een getal naast een groep zegt wat er op u wacht.',
        fr: "À gauche se trouve le menu, regroupé comme vous travaillez : CRM, ventes, travail, achats et stock. Un chiffre à côté d'un groupe indique ce qui vous attend." },

      { naam: 'lijst', kop: { nl: 'Zoeken in een lijst', fr: 'Rechercher dans une liste', en: 'Searching a list' },
        website: { nl: 'Typ, en elke lijst filtert terwijl u typt.', fr: 'Tapez, et chaque liste se filtre au fur et à mesure.', en: 'Type, and every list filters as you go.' },
        doe: async (p) => {
          await klik(p, p.locator('.sidebar').getByRole('link', { name: /^(Relaties|Relations)$/ }).first());
          await p.locator('.dxbl-grid-table tbody tr:visible').first().waitFor({ state: 'visible', timeout: 15000 });
          await p.waitForTimeout(800);
          // De cursor staat al in het zoekveld (EW-43): typen zonder eerst te klikken — precies wat de zin belooft.
          await p.keyboard.type('Vandersteen', { delay: 110 });
          await p.waitForTimeout(1500);
        },
        merk: /Vandersteen Bouwprojecten/,
        nl: 'Elke lijst werkt hetzelfde. De cursor staat meteen in het zoekveld: u typt, en de lijst krimpt terwijl u typt.',
        fr: 'Toutes les listes fonctionnent de la même façon. Le curseur est déjà dans le champ de recherche : vous tapez, et la liste se réduit au fur et à mesure.' },

      { naam: 'werkbalk', kop: { nl: 'Filteren en exporteren', fr: 'Filtrer et exporter' },
        doe: async (p) => {
          await beweegNaar(p, p.getByTitle(/Uitgebreid filteren|Filtres avancés/).first());
          await p.waitForTimeout(900);
          await beweegNaar(p, p.getByTitle(/Kolommen kiezen|Choisir les colonnes/).first());
          await p.waitForTimeout(900);
          await beweegNaar(p, p.getByText(/^(Exporteren|Exporter)$/).first());
        },
        merk: /Vandersteen Bouwprojecten/,
        nl: 'Bovenaan de lijst filtert u op elke kolom, kiest u welke kolommen u ziet, en neemt u de lijst mee naar Excel.',
        fr: 'En haut de la liste, vous filtrez sur chaque colonne, choisissez les colonnes affichées, et emportez la liste dans Excel.' },

      { naam: 'fiche', kop: { nl: 'Een fiche', fr: 'Une fiche', en: 'A record' },
        website: { nl: 'Alles over een klant op één fiche.', fr: 'Tout sur un client dans une seule fiche.', en: 'Everything about a customer on one record.' },
        doe: async (p) => {
          const rij = p.locator('.dxbl-grid-table tbody tr:visible', { hasText: 'Vandersteen Bouwprojecten' }).first();
          await beweegNaar(p, rij); await rij.dblclick();
          await p.waitForSelector('.adm-fiche', { timeout: 15000 });
          await p.waitForTimeout(1200);
        },
        merk: /Identificatie|Identification/,
        nl: 'Een dubbelklik opent de fiche, als een volledige pagina. Links staan de gegevens in tabbladen, rechts het journaal van deze klant.',
        fr: 'Un double-clic ouvre la fiche, en pleine page. À gauche, les données en onglets ; à droite, le journal de ce client.' },

      { naam: 'journaal', kop: { nl: 'Het journaal', fr: 'Le journal', en: 'The journal' },
        website: { nl: 'Taken, notities, mails en historiek: iedereen weet hetzelfde.', fr: 'Tâches, notes, e-mails et historique : chacun en sait autant.', en: 'Tasks, notes, emails and history: everyone stays informed.' },
        doe: async (p) => { await klik(p, tabblad(p, /^(Notities|Notes)/)); await p.waitForTimeout(1500); },
        merk: /Offerte besproken/,
        nl: 'In het journaal staan de taken, de notities, de bijlagen, de mails en de historiek van wie wat wijzigde. Zo weet iedereen hetzelfde over de klant.',
        fr: "Le journal regroupe les tâches, les notes, les pièces jointes, les e-mails et l'historique de qui a modifié quoi. Ainsi, chacun en sait autant sur le client." },

      { naam: 'bewaren', kop: { nl: 'Bewaren', fr: 'Enregistrer' },
        doe: async (p) => {
          await klik(p, p.getByRole('tab', { name: 'Fiche', exact: true }).first());
          await p.waitForTimeout(800);
          // Een wijziging zonder te bewaren — enkel om de vraag te tonen. Er wordt NIETS bewaard.
          const naam = p.locator('.adm-fiche input:visible').first();
          await klik(p, naam); await p.keyboard.press('End'); await p.keyboard.type(' ', { delay: 100 });
          await p.waitForTimeout(600);
          await klik(p, p.getByText(/^(Naar de lijst|Vers la liste)$/).first());   // een link, geen knop
        },
        merk: /Toch weggaan|quand même/i,
        nl: 'Onderaan bewaart u. Gaat u weg met wijzigingen die nog niet bewaard zijn, dan vraagt Nimble het eerst. Er gaat niets ongemerkt verloren.',
        fr: "En bas, vous enregistrez. Si vous quittez avec des modifications non enregistrées, Nimble vous le demande d'abord. Rien ne se perd sans que vous le sachiez." },

      { naam: 'hulp', kop: { nl: 'Hulp bij elk scherm', fr: 'De l’aide sur chaque écran' },
        doe: async (p) => {
          await klik(p, p.getByRole('button', { name: /^(Blijven|Rester)$/ }).first());
          await p.waitForTimeout(700);
          await klik(p, p.getByTitle(/Hulp bij dit scherm|Aide pour cet écran/).first());
          await p.locator('.help-panel').first().waitFor({ state: 'visible', timeout: 10000 });
        },
        merk: /Al uw klanten en leveranciers|Tous vos clients/,
        nl: 'Rechtsboven staat het vraagteken. Het opent de uitleg bij precies dit scherm, met een link naar de volledige handleiding.',
        fr: "En haut à droite, le point d'interrogation ouvre l'explication de cet écran précis, avec un lien vers le manuel complet." },

      { naam: 'assistent', kop: { nl: 'Vraag het de handleiding', fr: 'Demander au manuel' },
        doe: async (p) => {
          await klik(p, p.locator('.help-panel button').first());   // de hulp sluiten
          await p.waitForTimeout(600);
          await klik(p, p.getByTitle(/Vraag het de handleiding|Demander au manuel/).first());
          await p.waitForTimeout(1200);
        },
        merk: /op basis van de handleiding|du manuel/i,
        nl: 'Met het sterretje ernaast stelt u een vraag in uw eigen woorden. De assistent antwoordt op basis van de handleiding.',
        fr: "Avec l'étoile à côté, vous posez une question avec vos propres mots. L'assistant répond sur la base du manuel." },

      { naam: 'voorkeuren', kop: { nl: 'Uw voorkeuren', fr: 'Vos préférences' },
        doe: async (p) => {
          await klik(p, p.locator('.help-panel button').first());   // de assistent sluiten
          await p.waitForTimeout(600);
          await klik(p, p.getByTitle(/Voorkeuren & account|Préférences et compte/).first());
          await p.waitForTimeout(1200);
        },
        merk: /Tweestapsverificatie|Vérification en deux étapes/,
        nl: 'Onder uw initialen kiest u uw eigen voorkeuren: een accentkleur, de grootte van het scherm, en uw taal. Daar stelt u ook de tweestapsverificatie in.',
        fr: "Sous vos initiales, vous choisissez vos préférences : une couleur d'accent, la taille de l'écran, et votre langue. C'est aussi là que vous activez la vérification en deux étapes." },

      { naam: 'meldingen', kop: { nl: 'Meldingen', fr: 'Notifications' },
        doe: async (p) => {
          // Het voorkeurenpaneel sluit niet met Escape: met zijn kruisje.
          await klik(p, p.getByRole('button', { name: /^(Sluiten|Fermer)$/ }).locator('visible=true').first());
          await p.waitForTimeout(500);
          await beweegNaar(p, p.getByTitle(/^(Meldingen|Notifications)$/).first());
          await p.waitForTimeout(1000);
          await beweegNaar(p, p.getByTitle(/Een melding sturen|Signaler quelque chose/).first());
        },
        merk: /Vandersteen Bouwprojecten/,
        nl: 'Het belletje toont wat er voor u binnenkwam. Met de ballon ernaast stuurt u ons een vraag of een probleem. Zo vindt u uw weg in Nimble.',
        fr: "La cloche affiche ce qui est arrivé pour vous. Avec la bulle à côté, vous nous envoyez une question ou un problème. Voilà comment trouver votre chemin dans Nimble." },
    ],
  }],
  // ── VAN OFFERTE TOT WERF (19/10/2026, op vraag van Dominique: "Akkoord, schrijf het draaiboek") ─────────────────
  // Het vervolg op "Van aanvraag tot offerte": een aanvaarde offerte, het project, de overdracht en de voorbereiding,
  // de werkorder, het planbord, een werkbon met meerwerk, en de lijst Meerwerken. Er wordt NIETS bewaard — de hele film
  // loopt over bestaande demogegevens rond P2026-001 (Vandersteen, 12 appartementen). Zo hoeft er na de opname niets
  // opgeruimd te worden. De knop "Project maken" staat enkel op een aanvaarde offerte ZONDER project; in demo heeft de
  // enige aanvaarde offerte er al een, dus de film toont de knop niet en de tekst belooft hem niet.
  // Het projectdossier (een PDF) zit er bewust niet in: de PDF-weergave verschilt lokaal en op productie.
  // ⚠️ Het planbord opent op de week van VANDAAG. Scène 'planbord' meet de waarschuwing "niet startklaar", niet de blokken.
  ['van-offerte-tot-werf', {
    pagina: 'work/projects',
    titel: {
      nl: 'Van offerte tot werf — project, werkorder, planning en werkbon in Nimble',
      fr: 'Du devis au chantier — projet, ordre de travail, planning et bon de travail dans Nimble',
    },
    omschrijving: {
      nl: 'Wat er gebeurt na een aanvaarde offerte: het project met zijn financiële stand, de overdracht aan de '
        + 'projectleiding, de werfvoorbereiding tot het project startklaar is, de werkorder, het planbord per ploeg, '
        + 'een werkbon met uren en meerwerk, en het overzicht van alle meerwerk dat nog beslist moet worden.',
      fr: "Ce qui se passe après un devis accepté : le projet et sa situation financière, la transmission à la direction "
        + 'de projet, la préparation du chantier jusqu’à ce que le projet soit prêt à démarrer, l’ordre de travail, le '
        + 'planning par équipe, un bon de travail avec les heures et les travaux supplémentaires, et l’aperçu de tous '
        + 'les travaux supplémentaires encore à décider.',
    },
    uitvoeringen: { handleiding: { stem: true } },
    scenes: [
      { naam: 'offerte', kop: { nl: 'Een aanvaarde offerte', fr: 'Un devis accepté' },
        doe: async (p) => {
          await p.goto(`${BASIS}/verkoop/offertes`); await p.waitForLoadState('networkidle');
          await weergave(p, /^(Lijst|Liste)$/);
          await openRij(p, 'OFF-2026-0001');
          // Het label, niet de waarde: de projectnaam staat in een invulveld, en daar vindt getByText niets.
          await beweegNaar(p, p.getByText(/^(Project|Projet)$/).first());
        },
        merk: /Vandersteen Bouwprojecten/,
        nl: 'Is een offerte aanvaard, dan begint het werk. Deze offerte van Vandersteen hangt aan haar project: de nieuwbouw van twaalf appartementen.',
        fr: 'Quand un devis est accepté, le travail commence. Ce devis de Vandersteen est rattaché à son projet : la construction de douze appartements.' },

      { naam: 'project', kop: { nl: 'Het project', fr: 'Le projet' },
        doe: async (p) => {
          await p.goto(`${BASIS}/werk/projecten`); await p.waitForLoadState('networkidle');
          await weergave(p, /^(Lijst|Liste)$/);
          await openRij(p, 'P2026-001');
          await beweegNaar(p, p.getByText(/^(Werf|Chantier)$/).first());
        },
        // ⚠️ Niet het werfadres: dat staat in een INVULVELD, en het merkteken leest enkel tekst. De werkorder onderaan wél.
        merk: /Sanitaire leidingen appartementen/,
        nl: 'Op de projectfiche staat alles over de werf: de klant, wie het opvolgt, de periode, het budget en het werfadres.',
        fr: 'La fiche du projet rassemble tout sur le chantier : le client, qui le suit, la période, le budget et l’adresse du chantier.' },

      { naam: 'financieel', kop: { nl: 'Wat er afgesproken en gefactureerd is', fr: 'Ce qui est convenu et facturé' },
        doe: async (p) => {
          const blok = p.locator('.adm-card', { hasText: /^(Financieel|Financier)/ }).first();
          await blok.waitFor({ state: 'visible', timeout: 15000 });
          await beweegNaar(p, blok);
        },
        merk: /4\.933,24|4 933,24|4 933,24/,
        nl: 'Daaronder rekent Nimble mee: wat er in aanvaarde offertes afgesproken is, wat er al gefactureerd is, en wat er nog te factureren valt.',
        fr: 'En dessous, Nimble fait les comptes : ce qui est convenu dans les devis acceptés, ce qui est déjà facturé, et ce qui reste à facturer.' },

      { naam: 'overdracht', kop: { nl: 'De overdracht', fr: 'La transmission' },
        // ⚠️ Zonder $: een tabblad van de projectfiche draagt zijn naam TWEE keer ("Overdracht\n Overdracht", DevExpress).
        doe: async (p) => {
          await klik(p, tabblad(p, /^\s*(Overdracht|Transmission)/)); await p.waitForTimeout(1200);
          await beweegNaar(p, p.getByRole('button', { name: /^(Overdragen aan de projectleiding|Transmettre à la direction de projet)$/ }).first());
        },
        // De projectleider staat in een invulveld; de knop van dit tabblad is tekst en staat nergens anders.
        merk: /Overdragen aan de projectleiding|Transmettre à la direction de projet/,
        nl: 'Op het tabblad Overdracht geeft verkoop het dossier door aan de projectleiding. Vanaf die datum is de projectleider verantwoordelijk.',
        fr: 'Dans l’onglet Transmission, les ventes transmettent le dossier à la direction de projet. À partir de cette date, le chef de projet en est responsable.' },

      { naam: 'voorbereiding', kop: { nl: 'De werfvoorbereiding', fr: 'La préparation du chantier' },
        doe: async (p) => { await klik(p, tabblad(p, /^\s*(Voorbereiding|Préparation)/)); await p.waitForTimeout(1200); },
        merk: /24\/09\/2026/,
        nl: 'Bij Voorbereiding staat wat klaar moet zijn vóór de werf start, en wie ervoor zorgt. Pas als alle verplichte punten afgevinkt zijn, is het project startklaar.',
        fr: 'Dans Préparation figure ce qui doit être prêt avant le début du chantier, et qui s’en charge. Le projet n’est prêt à démarrer que lorsque tous les points obligatoires sont cochés.' },

      { naam: 'werkorder', kop: { nl: 'De werkorder', fr: 'L’ordre de travail' },
        doe: async (p) => {
          await p.goto(`${BASIS}/werk/werkorders`); await p.waitForLoadState('networkidle');
          await openRij(p, 'WO-2026-002');
          await beweegNaar(p, p.locator('.adm-card', { hasText: /^(Uitvoering|Exécution)/ }).first());
        },
        merk: /56,5/,
        nl: 'Het werk zelf staat in werkorders: wat er moet gebeuren, door welke ploeg, en wanneer. Onder Uitvoering telt Nimble de gewerkte uren, de werkbonnen en het meerwerk.',
        fr: 'Le travail lui-même figure dans les ordres de travail : ce qu’il faut faire, par quelle équipe, et quand. Sous Exécution, Nimble compte les heures travaillées, les bons de travail et les travaux supplémentaires.' },

      { naam: 'planbord', kop: { nl: 'Het planbord', fr: 'La planification' },
        doe: async (p) => {
          await p.goto(`${BASIS}/werk/planning`); await p.waitForLoadState('networkidle');
          await p.waitForTimeout(1500);
          await beweegNaar(p, p.getByRole('link', { name: /^WO-2026-00\d$/ }).first());
        },
        merk: /WO-2026-00[34]/,
        nl: 'Op het planbord ziet u per ploeg wie wanneer waar staat. U sleept een werf naar een dag. Bovenaan waarschuwt Nimble voor werven die binnenkort starten maar nog niet startklaar zijn.',
        fr: 'La planification montre, par équipe, qui est où et quand. Vous glissez un chantier vers un jour. En haut, Nimble signale les chantiers qui démarrent bientôt mais ne sont pas encore prêts.' },

      { naam: 'werkbon', kop: { nl: 'Een werkbon', fr: 'Un bon de travail' },
        doe: async (p) => {
          await p.goto(`${BASIS}/werk/werkbonnen`); await p.waitForLoadState('networkidle');
          const rij = p.locator('.dxbl-grid-table tbody tr:visible', { hasText: '28/09/2026' })
            .filter({ hasText: 'WO-2026-002' }).first();
          await rij.waitFor({ state: 'visible', timeout: 15000 });
          await beweegNaar(p, rij); await rij.dblclick();
          await p.waitForSelector('.adm-fiche', { timeout: 15000 });
          await p.waitForTimeout(1200);
          await beweegNaar(p, p.locator('.adm-card', { hasText: /^(Voortgang en meerwerk|Avancement et travaux)/ }).first());
        },
        // De vervolgactie staat in een invulveld; de kop van de werkbon is tekst.
        merk: /WO-2026-002 — 28\/09\/2026/,
        nl: 'Elke werkdag krijgt een werkbon: de uren per medewerker, een dagrapport, en hoe de dag eindigde. Stelt de ploeg werk vast dat niet in de offerte stond, dan noteert ze het als meerwerk.',
        fr: 'Chaque journée de travail a son bon de travail : les heures par collaborateur, un rapport journalier, et la fin de journée. Si l’équipe constate un travail absent du devis, elle le note comme travail supplémentaire.' },

      { naam: 'meerwerken', kop: { nl: 'Meerwerk opvolgen', fr: 'Suivre les travaux supplémentaires' },
        doe: async (p) => {
          await p.goto(`${BASIS}/werk/meerwerken`); await p.waitForLoadState('networkidle');
          await p.locator('.dxbl-grid-table tbody tr:visible').first().waitFor({ state: 'visible', timeout: 15000 });
          await p.waitForTimeout(800);
          await beweegNaar(p, p.locator('.dxbl-grid-table tbody tr:visible', { hasText: 'Kernboring' }).first());
        },
        merk: /Kernboring door de dragende balk/,
        nl: 'Onder Meerwerken komt al het meerwerk samen, met wat nog beslist moet worden, wat goedgekeurd is en wat al gefactureerd is. Zo blijft er geen meerwerk liggen dat u vergeet aan te rekenen.',
        fr: 'Sous Travaux supplémentaires, tout est réuni : ce qui reste à décider, ce qui est approuvé et ce qui est déjà facturé. Ainsi, aucun travail supplémentaire n’est oublié à la facturation.' },
    ],
  }],
  ['van-aanvraag-tot-offerte', {
    pagina: 'sales/quotes',
    titel: {
      nl: 'Van aanvraag tot offerte — lead, klant en offerte in Nimble',
      fr: 'De la demande au devis — lead, client et devis dans Nimble',
      en: 'From request to quote — leads, customers and quotes in Nimble',
    },
    omschrijving: {
      nl: 'De keten van een aanvraag tot een offerte: het leadbord, een gewonnen lead die klant wordt, het '
        + 'offertebord, een offerte met haar blokken en regels, en een prijsafspraak met een klant die u in één '
        + 'klik op een nieuwe offerte zet.',
      fr: "La chaîne de la demande au devis : le tableau des leads, un lead gagné qui devient client, le tableau "
        + "des devis, un devis avec ses blocs et ses lignes, et un accord de prix avec un client que vous placez en "
        + 'un clic dans un nouveau devis.',
      en: 'The chain from a request to a quote: the lead board, a won lead that becomes a customer, the quote board, a '
        + 'quote with its sections and lines, and a price agreement with a customer that you load onto a new quote in one click.',
    },
    uitvoeringen: {
      handleiding: { stem: true },
      // Websiteversie voor de functiepagina /offertes/ van nimble-website (content-hub, 19/10/2026). Zonder 'nieuw' en 'inladen': die bewaren een offerte.
      // Zonder 'klant': die opname duurde 60 s (richtduur 30–45); zoeken + fiche openen kostte 12 s, en die scène is CRM, niet offertes. Zonder stem: de site speelt gedempt in een lus, de zin staat in beeld.
      // Het Engels toont het NEDERLANDSE scherm (de app spreekt geen Engels) met Engelse tekst in beeld.
      website: { stem: false, scenes: ['leadbord', 'offertebord', 'offerte', 'afspraken', 'afspraak'],
        talen: [{ ui: 'nl-BE', tekst: 'nl' }, { ui: 'fr-BE', tekst: 'fr' }, { ui: 'nl-BE', tekst: 'en' }] },
    },
    scenes: [
      { naam: 'leadbord', kop: { nl: 'Het leadbord', fr: 'Le tableau des leads', en: 'The lead board' },
        website: { nl: 'Elke aanvraag op één bord, van eerste contact tot gewonnen.', fr: 'Chaque demande sur un seul tableau, du premier contact à l’affaire conclue.', en: 'Every request on one board, from first contact to won.' },
        doe: async (p) => {
          await p.goto(`${BASIS}/crm/leads`); await p.waitForLoadState('networkidle');
          await weergave(p, /^(Bord|Tableau)$/);
        },
        merk: /Nathalie Provoost|Bert Van Craen/i,
        nl: 'Elke offerte begint bij een aanvraag. Op het leadbord staat elke lead in de fase waarin hij zit, van het eerste contact tot gewonnen of verloren.',
        fr: "Chaque devis commence par une demande. Sur le tableau des leads, chaque lead figure dans la phase où il se trouve, du premier contact jusqu'à gagné ou perdu." },

      { naam: 'klant', kop: { nl: 'Van lead naar klant', fr: 'Du lead au client', en: 'From lead to customer' },
        website: { nl: 'Een gewonnen lead wordt een klant, met zijn voorgeschiedenis.', fr: 'Un lead gagné devient client, avec son historique.', en: 'A won lead becomes a customer, history included.' },
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

      { naam: 'offertebord', kop: { nl: 'Het offertebord', fr: 'Le tableau des devis', en: 'The quote board' },
        website: { nl: 'Al uw offertes in één oogopslag: klad, verstuurd, aanvaard.', fr: 'Tous vos devis d’un coup d’œil : brouillon, envoyé, accepté.', en: 'All your quotes at a glance: draft, sent, accepted.' },
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

      { naam: 'offerte', kop: { nl: 'Een offerte', fr: 'Un devis', en: 'A quote' },
        website: { nl: 'Offertes in blokken en regels; Nimble rekent de totalen.', fr: 'Des devis en blocs et lignes ; Nimble calcule les totaux.', en: 'Quotes in sections and lines; Nimble does the totals.' },
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

      { naam: 'afspraken', kop: { nl: 'Prijsafspraken met een klant', fr: 'Les accords de prix avec un client', en: 'Price agreements with a customer' },
        website: { nl: 'Vaste prijzen per klant, voor een periode.', fr: 'Des prix fixes par client, pour une période.', en: 'Fixed prices per customer, for a set period.' },
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

      { naam: 'afspraak', kop: { nl: 'Eén prijsafspraak', fr: 'Un accord de prix', en: 'One price agreement' },
        website: { nl: 'Afgesproken prijs, kostprijs en marge naast elkaar.', fr: 'Prix convenu, prix de revient et marge côte à côte.', en: 'Agreed price, cost price and margin side by side.' },
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

# Gebruikers

!!! info "Voor ADM-operators"
    Dit scherm is voorbehouden aan medewerkers van ADM-Concept. Als klant van Nimble ziet u het niet.

Op dit scherm beheert u de aanmeldingen van Nimble, over alle tenants heen. U maakt gebruikers aan, wijst ze
toe aan een tenant, kiest hun rol en helpt iemand weer op weg wanneer het aanmelden mislukt.

Een gebruiker met een tenant komt na het aanmelden automatisch en enkel in zijn eigen tenant. Een gebruiker
zonder tenant is een operator: die mag van tenant wisselen en het beheer doen.

## Het scherm openen

1. Klik onderaan in de zijbalk op **Platformbeheer**.
2. Klik in de groep **ADM-beheer** op de tegel **Gebruikers**.

## De lijst

| Kolom | Wat u ziet |
|---|---|
| **Gebruiker** | De gebruikersnaam waarmee de persoon zich aanmeldt |
| **Naam** | De weergavenaam |
| **Tenant** | De tenant waartoe de gebruiker behoort, of **operator** |
| **ADM One** | **Gekoppeld** of **Niet gekoppeld** aan het centrale ADM One-register |
| **Rol** | De rol, als keuzelijst — zie hieronder |
| **Status** | **Actief**, **Gedeactiveerd** of **Vergrendeld** |
| *(acties)* | De knop **⋯** met de acties voor die gebruiker |

- **Actief** — de gebruiker kan zich aanmelden.
- **Gedeactiveerd** — het account bestaat nog, maar aanmelden lukt niet.
- **Vergrendeld** — er waren te veel mislukte aanmeldpogingen na elkaar.

Uw eigen rij draagt **— jijzelf —** in plaats van de knop **⋯**; op uw eigen account zijn de acties
uitgeschakeld.

Boven de lijst staan **Koppelingen controleren**, **Nieuwe gebruiker**, **Exporteren** en een zoekvak.

## Een gebruiker aanmaken

Klik op **Nieuwe gebruiker**. Er opent een venster:

| Veld | Wat u invult |
|---|---|
| **Gebruikersnaam** | De naam waarmee de persoon zich aanmeldt, meestal het e-mailadres, bv. `jan@klant.be` |
| **Weergavenaam** | De naam die in het scherm verschijnt, bv. `Jan Tester` |
| **Wachtwoord** | Het eerste wachtwoord |
| **Tenant** | De klant waartoe deze gebruiker behoort. **— Operator (geen) —** maakt een operator |
| **Rol** | **Gebruiker** of **Beheerder** |

Klik op **Gebruiker aanmaken**. Die knop werkt pas wanneer **Gebruikersnaam** en **Wachtwoord** ingevuld
zijn. Met **Annuleren** sluit u het venster.

## De rol wijzigen

Kies in de kolom **Rol** een andere rol uit de keuzelijst. De wijziging geldt vanaf de volgende aanmelding
van die gebruiker. Uw eigen rol kunt u hier niet wijzigen.

Draagt iemand een rol die dit scherm niet beheert, dan staat er geen keuzelijst maar een label met de naam
van die rol.

Welke rechten een rol geeft, stelt u in bij [Rollen](roles.md).

## De acties

Klik op **⋯** in de rij van de gebruiker:

- **Wachtwoord** — u stelt zelf een nieuw wachtwoord in. De gebruiker kan er meteen mee aanmelden.
- **Tijdelijk** — Nimble maakt een leesbaar tijdelijk wachtwoord dat u met **Kopiëren** naar het klembord
  haalt en doorgeeft.
- **Reset-link** — u krijgt een herstel-link die de gebruiker zelf een wachtwoord laat kiezen. De link werkt
  één keer.
- **Koppelen** — enkel bij een gebruiker die nog niet aan ADM One gekoppeld is.
- **Ontgrendelen** — enkel bij een vergrendelde gebruiker; heft de vergrendeling op.
- **Deactiveren** / **Activeren** — sluit iemand uit of laat hem weer binnen. Deactiveren vraagt eerst een
  bevestiging; lopende sessies van die gebruiker vervallen meteen.

Er is geen actie om een gebruiker te verwijderen. Wie vertrekt, deactiveert u.

## Koppelingen controleren

**Koppelingen controleren** vraagt aan ADM One of elke opgeslagen koppeling daar echt bestaat. Onder de lijst
verschijnt daarna een melding met de uitkomst. Een gebruiker die nog niet gekoppeld is, koppelt u met
**⋯ → Koppelen**.

## Veelgemaakte fouten

!!! warning
    - **Een tenant-gebruiker als operator aanmaken.** Kiest u **— Operator (geen) —**, dan ziet die persoon
      alle tenants. Kies bij een klantmedewerker altijd de juiste tenant.
    - **Een wachtwoord via e-mail doorgeven.** Geef een wachtwoord of reset-link liefst door via een ander
      kanaal, waar u de persoon herkent.

!!! tip
    Een tijdelijk wachtwoord of een reset-link toont Nimble maar één keer. Kopieer hem meteen.

## Zie ook

- [Rollen](roles.md) — wat een rol precies toestaat
- [Tenants](tenants.md) — de klanten waaraan u gebruikers toewijst
- [Actielogboek](audit-log.md) — wie heeft wat gedaan

# React test workshop

Nå ska vi lære oss at teste React-kode!

## Kom i gang

Det finnes en tilhørende [presentasjon](https://joakimgy.github.io/react-test-workshop/#/) som kan være til hjelp med at komme igang med denne workshop. Ellers er det bare å følge trinnene nedenfor for å komme i gang!

1. Last ned repoet ved å kjøre `git clone https://github.com/joakimgy/react-test-workshop.git` i terminalen.
2. Navigere til root-folderen i terminalen.
3. Starte backend gjennom kommandoen `node server.js`.
4. I en annen terminal, starte frontend gjennom kommandoet `yarn` og deretter `yarn start`.
5. I en tredje terminal kjør `yarn test` for at kjøre igang testene i watch mode.
6. Åpne koden, navigere til `src/__tests__/` og følg instruksjonene derifra!

## Nyttige lenker

- [Jest dokumentasjon](https://jestjs.io/docs/en/getting-started) - Jest brukes som testing framwork i denne workshop.
- [React testing library](https://testing-library.com/docs/react-testing-library/intro) - En verktøy for testing av React-komponenter.
- [Queries cheat sheet](https://testing-library.com/docs/react-testing-library/cheatsheet) - oversikt av alle queries som blir eksponert av render.
- [user-event dokumentasjon](https://github.com/testing-library/user-event) - oversikt av alle user-events som kan brukes for at endre på DOM:en (f.eks. at klikke på en knappe i et test)
- [expect dokumentasjon](https://jestjs.io/docs/en/expect) - Forskellige funksjoner for at sjekke at testet gjer forventet resultat.

## Frontend

Applikasjonen er skriven i React og typescript. Åpne `App.tsx` for at se på applikasjonen.

## Backend

For at lagre todo-listen bruker vi en veldig simpel express server. Denne kan startes gjennom at kjøre `node server.js`.

## Scripts

Her beskriver vi noen scripts som går at kjøre i terminalen hvis når man er i root directory (der man finner ´package.json´ ).

### `yarn`

Installerer alle dependencies som trengs for at kjøre applikasjonen lokalt.

### `yarn start`

Starter applikasjonen som kan vises gjennom at åpne [http://localhost:3000](http://localhost:3000) i nettleseren. Hjemmesiden vil automatisk bli oppdatert når man gjør en endring i koden.

### `node server.js`

Starter opp en express-backend som trengs for at bruke applikasjonen.

### `yarn test`

Kjører alle tester i watch mode. Ved å trykke på `a`-tasten kjører alle tester. Når testene blir oppdatert vil testene kjøres automatisk.

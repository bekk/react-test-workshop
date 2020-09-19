# React test workshop

Nå ska vi lære oss å teste React-kode!

## Kom i gang

Det finnes en tilhørende [presentasjon](https://joakimgy.github.io/react-test-workshop/#/) som kan være grei å se gjennom for å komme i gang med denne workshopen. Ellers er det bare å følge trinnene nedenfor for å komme i gang!

### Dette må du ha før du starter

For å komme i gang med workshopen må du ha `node` og `npm` installert. Her en noen guides som viser deg hvordan du installerer dette, om du ikke har gjort det alt:

- [Installer node og npm på mac](https://treehouse.github.io/installation-guides/mac/node-mac.html)
- [Installer node og npm på windows](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
- [Installer node og npm på linux (ubuntu)](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04)

### Starte applikasjonen

1. Last ned repoet ved å kjøre `git clone https://github.com/joakimgy/react-test-workshop.git` i terminalen.
2. Navigere til root-folderen i terminalen med `cd react-test-workshop`
3. Starte backend gjennom kommandoen `node server.js`.
4. I et annet terminalvindu, start frontend gjennom kommandoet `npm install` og deretter `npm start`.
5. I et tredje terminalvindu, kjør `npm test` for å kjøre igang testene i såkalt "watch mode" (at de kjøres på nytt hver gang du endrer noe).
6. Åpne koden i din favoritteditor, naviger til `src/__tests__/` og følg instruksjonene derifra!

## Nyttige lenker

- [Jest dokumentasjon](https://jestjs.io/docs/en/getting-started) - Jest er testrammeverket vi bruker i denne workshopen.
- [React testing library](https://testing-library.com/docs/react-testing-library/intro) - Et verktøy for testing av React-komponenter
- [Queries cheat sheet](https://testing-library.com/docs/react-testing-library/cheatsheet) - Oversikt av alle queries som blir eksponert av render-funksjonen.
- [user-event dokumentasjon](https://github.com/testing-library/user-event) - Oversikt av alle user-events som kan brukes for å endre på DOMen (f.eks. å klikke på en knapp i en test)
- [expect dokumentasjon](https://jestjs.io/docs/en/expect) - Forskellige funksjoner for å sjekke at testen gir forventet resultat.

## Frontend

Applikasjonen er skrevet i React og TypeScript. Åpne `App.tsx` for å se på applikasjonen.

## Backend

For å lagre todo-listen bruker vi en veldig enkel express server. Denne kan startes gjennom å kjøre `node server.js`.

## Scripts

Her beskriver vi noen scripts som går å kjøre i terminalen hvis når man er i rotmappen (der man finner ´package.json´ ).

### `npm install`

Installerer alle avhengigheter som trengs for å kjøre applikasjonen lokalt.

### `npm start`

Starter applikasjonen på adressen [http://localhost:3000](http://localhost:3000). Siden vil automatisk bli oppdatert når man gjør en endring i koden.

### `node server.js`

Starter opp en express-backend som trengs for at bruke applikasjonen.

### `npm test`

Kjører alle tester i "watch mode". Ved å trykke på `a`-tasten kjører alle tester. Når testene blir oppdatert vil testene kjøres automatisk.

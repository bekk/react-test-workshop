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

# Oppgaver

💡 La applikasjonen kjøre mens jobber på oppgavene, [som beskrevet i denne seksjonen](#starte-applikasjonen). Vær oppmerksom på output i konsolen. Der vil du som regel få informasjon om det som eventuelt ikke fungerer.

💡 Har du spørsmål? Stuck i oppgaven? Ta kontakt på Slack

## Oppgave 1: Testing React komponenter

💡 Test-filene som brukes i oppgave 1 finner du i mappen `__tests__/basics/`.

### Oppgave 1a)

🏆 Lage et test som bruker [render](https://testing-library.com/docs/react-testing-library/api#render) fra `@testing-library/react` for at teste at HTML-elementet `paragraph`. Bruk [getByText](https://testing-library.com/docs/react-testing-library/cheatsheet#text-match-options) for a finne paragraph-elementet som blir laget av `render` og sjekk at det finnes i documentet gjenom at bruke `expect(element).toBeInDocument()`.

<details>
 <summary>🚨 Løsning</summary>

```js
test("paragraph renders with some text", () => {
  const { getByText } = render(
    <p>All code is guilty, until proven innocent.</p>
  );
  const paragraph = getByText(/code/i);
  expect(paragraph).toBeInTheDocument();
}),

```

</details>

### Oppgave 1b)

🏆 Bruk `render` for å teste en HTML-`button`. På samme måte som for paragraph, bruk en query (f.eks. `getByText`) for å sjekke at knappen har en tekst.

💡 [Her](https://testing-library.com/docs/guide-which-query) kan du lese litt om hvilke queries skaperne bak DOM testing library rekommenderer at man bruker.

<details>
 <summary>🚨 Løsning</summary>

```js
test("button renders with some text", () => {
  const { getByText, getByRole } = render(<button>Klikk!</button>);

  // `getByText`
  const buttonByText = getByText(/klikk/i);
  expect(buttonByText).toBeInTheDocument();
  // `getByRole`
  const buttonByRole = getByRole("button", { name: /klikk/i });
  expect(buttonByRole).toBeInTheDocument();
});
```

</details>

### Oppgave 1c)

🏆 Sjekk at `button` sin `onClick`-property fungerer. Når man klikker på knappen skal telleren `counter` øke med et.

💡 For at simulere et klikk på knappen kan man bruke `fireEvent.click(element)` eller `userEvent.click(element)`.

<details>
 <summary>🚨 Løsning</summary>

```js
test("button should call onClick when clicked", () => {
  let counter = 0;
  function increment() {
    counter++;
  }
  const { getByText } = render(<button onClick={increment}>increment</button>);

  const button = getByText(/increment/i);
  expect(counter).toBe(0);

  fireEvent.click(button);
  expect(counter).toBe(1);

  userEvent.click(button);
  expect(counter).toBe(2);
});
```

</details>

### Oppgave 1d)

🏆 Bruk `render` for å teste et `input`-element. Sjekk at standardverdien til `value` er en tom string og at `value` blir oppdatert hvis man skriver noet i input-feltet.

💡 `userEvent.type(element, tekst)` kan brukes for at skrive en tekst i feltet.

💡 `expect(element).toHaveValue()` kan brukes for at sjekke at `value` er som forventet.

<details>
 <summary>🚨 Løsning</summary>

```js
test("typing in the input should change its value", () => {
  const { getByRole } = render(<input />);
  const input = getByRole("textbox");

  expect(input).toHaveValue("");
  userEvent.type(input, "I'm not a robot!");
  expect(input).toHaveValue("I'm not a robot!");
});
```

</details>

### Oppgave 1e)

🏆 Bruk `jest-axe` for å sjekke at input-feltet er UU-vennlig (accessible). Hvis noet er feil, fiks feilen!

<details>
 <summary>🚨 Løsning</summary>

```js
expect.extend(toHaveNoViolations);
test("input should be accessible", async () => {
  const { container } = render(
    <div>
      <label htmlFor="my-input">An accessible input :D</label>
      <input id="my-input" />
    </div>
  );
  const result = await axe(container);
  expect(result).toHaveNoViolations();
});
```

</details>

### Oppgave 1f)

🏆 Teste den UU-vennlige label+input-komponenten fra steget øver med `render`. Bruk `getByLabelText` for at sjekke at label er koblet sammen med input.

<details>
 <summary>🚨 Løsning</summary>

```js
test("input should be connected to a label", () => {
  const { getByLabelText } = render(
    <div>
      <label htmlFor="my-input">
        This label is connected to the input below
      </label>
      <input id="my-input" />
    </div>
  );

  const input = getByLabelText(/finish/i);
  expect(input).toBeInTheDocument();
});
```

</details>

## Oppgave 2: Mock en modul med `jest.mock`

## Oppgave 3: Mock nettverk kall med `fetch-mock`

I denne oppgaven skal du lære å "mocke" nettverk kall. Se gjerne på "Mocking" i tilhørende [presentasjon](https://joakimgy.github.io/react-test-workshop/#/) om du ikke har gjort det enda.
Målet her er å lage en mock som skal være god nok slik at vi kan kjøre applikasjonen lokalt uten noen andre avhengigheter.

## Oppgave 4: Lage en mock modul for å kjøre applikasjon lokalt uten avhengigheter

Noen ganger vil vi bare kjøre applikasjonen og se "hvordan ting ser ut". Enten for å sjekke visuelt hvordan komponentene henger sammen eller bare for å ha en oversikt over slutt resultat.

For å slippe å være avhengig av en eller en annen _third party_ kan vi spesifisere hvordan den tjenesten vi er avhengig av skal oppføre seg (våre forventninger).
Det er akkurat det vi skal gjøre her. Vi skal skrive kode som beskriver våre forventninger til backend tjenester som håndterer vår data (_todos_ og _statistics_)

Vi har skrevet koden som gjør at alle kall til nettverk i vår applikasjon som bruker `fetch` skal gå gjennom `fetch-mock` bibliotek. `fetch-mock` skal _hijacke_ alle kall til nettverk (request og response). Vår oppgave blir da å skrive de responsene vi ønsker applikasjonen vår skal motta av nettverket.

I denne oppgaven skal du bare jobbe i denne filen: `source/mocking/mock.ts`

Men først litt om hvordan ting henger sammen:

For å aktivere mocking av nettverk må vi fortelle applikasjonen å ta i bruk koden i `mock.ts`.
Vi gjør det ved å sette den `REACT_APP_MOCK` _environment variable_ til `true` i det applikasjonen starter. Da skal `mock.ts` bli aktivert og alle kall til nettverk går gjennom `fetch-mock`. Se gjerne på koden som aktiverer mock i `index.tsx` og kommandoen som starter applikasjonen i `package.json`

Stop og start applikasjon på nytt ved å gjøre som følgende

- Gå til terminalen hvor du startet applikasjon med kommandoen `npm start`
  Bruk `Ctrl + c` for å stoppe prosessen
  Start applikasjon i mock modus ved å kjøre `npm run mock`

Etter at applikasjonen kjører med mock aktivert trenger vi ikke lenger den lokale backend du har startet med `node server.js`. Gå til terminalen hvor backend kjører og bruk `Ctrl + c` for å stoppe prosessen.

Nå kan vi dele oppgaven i bitter

#### Oppgave 4a) Mocke GET `/todolist`

🏆 Når applikasjonen starter sendes en GET request til `/todolist` som returnerer en liste av todos. Vi starter med å legge til flere todos i den todo lista.

💡 Åpne `source/mocking/mock.ts`. Legg til flere todos i lista. Da skal alle todos du har lagt til dukke opp i applikasjonen.

<details>
  <summary>🚨Løsning</summary>

```js
fetchMock.get(
  "express:/todolist",
  (url) => {
    return {
      todoList: [
        { text: "Hello I'm MOCK", id: 1 },
        { text: "Another mock todo", id: 2 },
        { text: "3 todos should be enough", id: 3 },
      ],
    };
  },
  {
    delay: 1000 * delayfactor,
  }
);
```

</details>
<br/>

#### Oppgave 4b) Mocke POST `/create/todo`

🏆 Hvis du nå prøver å legge til eller fjerne en todd i applikasjonen vil det ikke fungere. Årsaken er at applikasjonen bruker flere endepunkter, og vi har ikke skrevet koden i `mock.ts` for å håndtere disse kallene enda. Dette skal vi gjøre nå.

OBS: alle nettverk kall applikasjonen gjør finnes i `src/api/api.ts`. Se gjerne på koden for å finne ut hvilket endepunkt er tatt i brukt for å opprette eller slette en todo.

💡 Vi jobber fortsatt i `source/mocking/mock.ts`. Skriv koden som håndterer den POST request til `/create/todo` som skal til for å legge til en todo. Test din mock ved å bruke `add` knappen i applikasjon.
💡 For å kunne ta imot POST requests på `/create/todo` må vi bruke `post` metode i `fetch-mock`. Denne har en `opts` parameter som inneholder request body. Denne skal vi _parse_ for å hente data.

```js
fetchMock.post(
    "express:/create/todo",
    (url, opts) => {
        const jsonObj = JSON.parse(opts.body as string);
        // her kan du konvertere jsonObj til en Todo
        return {
            // her kan du returnere en Todolist som inneholder den samme Todo som du fikk i POST request
        }
        },
    {
        delay: 1000 * delayfactor,
    }
);
```

<details>
  <summary>🚨Løsning</summary>

```js
import { Todo } from "../domain/Todo";

fetchMock.post(
    "express:/create/todo",
    (url, opts) => {
        const jsonObj = JSON. parse(opts.body as string);
        const todoToBeCreated: Todo = jsonObj.todo;

        return {
            todoList: [
                {
                    text: todoToBeCreated.text,
                    id: todoToBeCreated.id
                }],
        };
    },
    {
        delay: 1000 * delayfactor,
    }
);
```

</details>
<br/>

#### Oppgave 4c) Lage en litt smartere mock

🏆 Hittil har vi hardkodet response GET og POST. Man hva kan vi gjøre for å gjøre applikasjonen enda mer brukbar med `mock.ts`

💡 Du kan bruke en global variabel `todolist` som oppdateres ved GET og POST og initialiseres slik:

```js
const todolistResponse: Todolist = {
  todoList: [{ text: "Hello I'm MOCK", id: 1 }],
};
```

<details>
  <summary>🚨Løsning</summary>

```js
fetchMock.get(
  "express:/todolist",
  (url) => {
    return todolistResponse;
  },
  {
    delay: 1000 * delayfactor,
  }
);

fetchMock.post(
    "express:/create/todo",
    (url, opts) => {
        const jsonObj = JSON.parse(opts.body as string);
        const todoToBeCreated: Todo = jsonObj.todo;

        todolistResponse.todoList.push({
            text: todoToBeCreated.text,
            id: todoToBeCreated.id
        });

        return todolistResponse;
    },
    {
        delay: 1000 * delayfactor,
    }
);
```

</details>
<br/>

#### Oppgave 4d) Implementere mock for de endepunkter vi mangler

🏆 Nå kan vi lage ferdig `mock.ts` ved å implementere mock _response_ for de endepunktene som gjenstår.

- POST `/delete/todo`
- GET `/statistic/created`
- GET `/statistic/deleted`

💡 Fortsett å bruke den globale variabelen `todolist` som du oppdaterer etter mock mottar POST `/delete/todo`.
Sjekk visuelt at mock oppfører seg som forventet og fjerner todo-en fra lista i applikasjonen.

<details>
  <summary>🚨Løsning</summary>

```js
fetchMock.post(
    "express:/delete/todo",
    (url, opts) => {
        const jsonObj = JSON.parse(opts.body as string);
        const todoIdToDelete: number = jsonObj.id;

        todolistResponse.todoList = todolistResponse.todoList.filter(function (todo) {
            return todo.id !== todoIdToDelete;
        });
        nbOfDeletedTodos++;

        return todolistResponse;
    },
    {
        delay: 1000 * delayfactor,
    }
);
```

</details>
<br/>

💡 Til `/statistic/*` endepunktene skal du opprette andre globale variaber, som `nbOfCreatedTodos` og `nbOfDeletedTodos`

<details>
  <summary>🚨Løsning</summary>

```js
fetchMock.get(
  "express:/stats/created",
  (url) => {
    return { value: nbOfCreatedTodos };
  },
  {
    delay: 1000 * delayfactor,
  }
);

fetchMock.get(
  "express:/stats/deleted",
  (url) => {
    return { value: nbOfDeletedTodos };
  },
  {
    delay: 1000 * delayfactor,
  }
);
```

</details>
<br/>

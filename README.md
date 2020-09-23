# React test workshop

Nå ska vi lære oss å teste React-komponenter!

## Kom i gang

Det finnes en tilhørende [presentasjon](https://bekk.github.io/react-test-workshop/#/) som det kan være greit å se gjennom for å komme i gang med denne workshopen. Ellers er det bare å følge trinnene nedenfor for å komme i gang!

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

💡 La applikasjonen kjøre mens du jobber på oppgavene, [som beskrevet i denne seksjonen](#starte-applikasjonen). Vær oppmerksom på output i konsollen. Der vil du som regel få informasjon om det som eventuelt ikke fungerer.

💡 Har du spørsmål? Stuck i oppgaven? Ta kontakt på Slack!

## Oppgave 1: Testing av React komponenter

💡 Test-filene som brukes i oppgave 1 finner du i mappen `__tests__/basics/`.

### Oppgave 1a)

🏆 Lage en test som bruker [render](https://testing-library.com/docs/react-testing-library/api#render) fra `@testing-library/react` for å teste at HTML-elementet `p` finnes i DOMen. Bruk [getByText](https://testing-library.com/docs/react-testing-library/cheatsheet#text-match-options) for å finne p-elementet som blir laget av `render` og sjekk at det finnes i dokumentet gjennom å bruke `expect(element).toBeInDocument()`.

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

💡 [Her](https://testing-library.com/docs/guide-which-query) kan du lese litt om hvilke queries skaperne bak DOM testing library anbefaler at man bruker.

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

🏆 Sjekk at `button` sin `onClick`-property fungerer. Når man klikker på knappen skal telleren `counter` øke med én.

💡 For å simulere et klikk på knappen kan man bruke `fireEvent.click(element)` eller `userEvent.click(element)`. Disse to importerer man med `import { fireEvent, userEvent } from '@testing-library/react'`. Her anbefalles `userEvent` da API:en er mer leslig.

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

🏆 Bruk `render` for å teste et `input`-element. Sjekk at standardverdien til `value` er `""` og at `value` blir oppdatert hvis man skriver noe i input-feltet.

💡 `userEvent.type(element, tekst)` kan brukes for å skrive en tekst i feltet.

💡 `expect(element).toHaveValue("some value")` kan brukes for å sjekke at `value` er som forventet.

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

🏆 Bruk `jest-axe` for å sjekke at input-feltet er universelt utformet. Hvis noe er feil, fiks feilen!

💡 Du kan lese om jest-axe i [dokumentasjonen](https://github.com/nickcolley/jest-axe)

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

🏆 Teste den UU-vennlige label+input-komponenten fra steget over med `render`. Bruk `getByLabelText` for å sjekke at label er koblet sammen med input.

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

## Oppgave 2: Test komponenter fra Todo-list

💡 Komponentene som skal testes finner du i mappen `src/components`.

💡 Functional components kan bli testet med `render(<MyComponent prop={prop}/>)`

### Oppgave 2a)

🏆 Sjekk at komponenten `AddTodo` innholder en header, label og et input-felt.

💡 Querien `getByLabelText` kan brukes for å sjekke at både `label` og `input`-feltene blir rendered. Hvis noe mangler vil querien gi error.

<details>
 <summary>🚨 Løsning</summary>

```js
test("AddTodo should render title, label and input", () => {
  const { getByLabelText, getByText } = render(<AddTodo onSubmit={() => {}} />);

  const title = getByText(/add item/i);
  expect(title).toBeInTheDocument();

  const input = getByLabelText(/new item/i);
  expect(input).toBeInTheDocument();
});
```

</details>

### Oppgave 2b)

🏆 Sjekk at `AddTodo` innholder et input-felt og at verdiet blir oppdatert hvis man skriver noe i feltet.

💡 Når man har funnet input-elementet med en query går det an å bruke `fireEvent.change()` eller `userEvent.type()` for å skrive noe i input-feltet.

💡 `expect().toHaveValue` kan brukes for å sjekke verdien i input-feltet.

<details>
 <summary>🚨 Løsning</summary>

```js
test("AddTodo should change its value when the user types something", () => {
  const { getByLabelText } = render(<AddTodo onSubmit={() => {}} />);

  const input = getByLabelText(/new item/i);
  expect(input).toHaveValue("");

  userEvent.type(input, "I should do this!");
  expect(input).toHaveValue("I should do this!");
});
```

</details>

### Oppgave 2c)

🏆 Sjekk at `AddTodo` er universelt utformet med `jest-axe`.

<details>
 <summary>🚨 Løsning</summary>

```js
expect.extend(toHaveNoViolations);
test("AddTodo should be accessible", async () => {
  const { container } = render(<AddTodo onSubmit={() => {}} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

</details>

### Oppgave 2d)

🏆 Sjekk at en tom `TodoList` innholder en header og en tekst som sier at listen er tom.

💡 Bruk `render(<TodoList todoList={[]} deleteTodo={() => {}} />);` for å vise en tom TodoList. Funksjonen `deleteTodo` trenger vi ikke å gjøre noe med.

<details>
 <summary>🚨 Løsning</summary>

```js
test("TodoList should render with the title 'List'", () => {
  const { getByText } = render(
    <TodoList todoList={[]} deleteTodo={() => {}} />
  );
  const title = getByText(/list/i);
  expect(title).toBeInTheDocument();

  const text = getByText(/you've finished all your tasks/i);
  expect(text).toBeInTheDocument();
});
```

</details>

### Oppgave 2e)

🏆 Sjekk at `TodoList` er universelt utformet med `jest-axe` og fiks eventuelle feil.

💡 I stedet for `todoList={[]`, bruk følgende liste som props `todoList={list}`:

```js
const list: Todo[] = [
  { text: "input 1", id: 1 },
  { text: "input 2", id: 2 },
];
```

<details>
 <summary>🚨 Løsning</summary>

```js
expect.extend(toHaveNoViolations);
test("TodoList is accessible", async () => {
  const list: Todo[] = [
    { text: "input 1", id: 1 },
    { text: "input 2", id: 2 },
  ];
  const { container } = render(
    <TodoList todoList={list} deleteTodo={() => {}} />
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

</details>

### Oppgave f)

🏆 Sjekk at `TodoList` viser riktig antall elementer i listen.

💡 Bruk samme liste som i steget over ved render av `TodoList`. Querien `getAllByRole("listitem")` kan brukes for å hente alle `<li>`-elementer i containeren.

<details>
 <summary>🚨 Løsning</summary>

```js
test("TodoList should show the list given as input", () => {
  const list: Todo[] = [
    { text: "input 1", id: 1 },
    { text: "input 2", id: 2 },
  ];
  const { getByText, getAllByRole } = render(
    <TodoList todoList={list} deleteTodo={() => {}} />
  );

  const item1 = getByText(/input 1/i);
  expect(item1).toBeInTheDocument();
  const item2 = getByText(/input 2/i);
  expect(item2).toBeInTheDocument();

  const items = getAllByRole("listitem");
  expect(items).toHaveLength(2);
});
```

</details>

## Oppgave 2: Mock en modul med `jest.mock`

Se gjerne på "Mocking" i tilhørende [presentasjon](https://bekk.github.io/react-test-workshop/#/) om du ikke har gjort det enda.

Koden vi skriver er noen gang avhengig av ressurser vi ikke har kontroll på (uforutsigtbar) eller ikke kan få lett tak i (verdi av CPU bruk, dato, en fil, ...)

En måte å teste koden som bruker en sånn ressurs er å _mocke_ den. Det vil si at vi erstatter den ressursen vi trenger med kode som oppfører seg likt.

🏆 Funksjonen `getWeeklyWorkloadStatus(completionRate: number)` i `src/utils/weekly-workload-utils` returnerer en enkel tekst som på en veldig naiv måte (for oppgavensskyld) indikerer ukens arbeidsmengde i forhold til ukedag og antall _todos_ du har laget og fullført. Vi skal skrive en test som sjekker returverdi, uten å være avhengig av hvilken dag testen kjører.

💡 `getWeeklyWorkloadStatus` som vi vil teste bruker `getTodaysDate` i `src/utils/date-utils` for å hente ut dagens dato. Bruk `jest.mock` for å ta kontroll over hele `date-utils` modulen og mock `getTodaysDate()` funksjonen.
`jest.mock` skal brukes i test modulen `src/__tests__/mocking/weekly-workload-utils-mock-tests.ts` før den første testen.

Testen er allerede skrevet (og ikke aktivert med kommentar `/* */`). Når du fjerner kommentar skal den feile hvis du ikke kjører den på en mandag.
For å få testen til å fungere, skal vi mocke `getTodaysDate` i `src/utils/date-utils` slik at den alltid returnerer "Monday".

💡 Tips: `jest.mock` fungerer slik:

```js
// OBS: skal skrives FØR testene
jest.mock("relative/path/to/the/modul/you/want/to/control", () => {
  return {
    nameOfFunctionToMock: jest.fn((parameterIfAny: type) => "return value"),
  };
});
```

<details>
  <summary>🚨Løsning</summary>

```js
jest.mock("../../utils/date-utils", () => {
  return {
    getTodaysDate: jest.fn(() => "Monday"),
  };
});
```

</details>
<br/>

## Oppgave 3: Mock nettverk kall med `fetch-mock`

I denne oppgaveserien skal vi lære å "mocke" nettverkskall. Se gjerne på "Mocking" i tilhørende [presentasjon](https://bekk.github.io/react-test-workshop/#/) om du ikke har gjort det enda.

### Oppgave 3a: skriv ferdig testen som sjekker `getCompletionRate()`

🏆 Funksjonen `getCompletionRate()` i `src/utils/completion-utils` beregner en _completion rate_ av todos. Beregning er enkel: antall slettet / antall opprettet \* 100

Funksjonen bruker to API-kall for å hente `nbOfCreatedTodos` og `nbOfDeletedTodos`. Vi skal skrive en test som sjekker at beregningen er riktig.

💡 i `src/__tests__/mocking/completion-utils-fetchmock-tests.ts`, legg til kode som mocker de to API-kallene til `/stats/created` og `/stats/deleted` endepunktene slik at de returnerer en verdi som passer testens forventninger

💡 Bruk `fetch-mock` for å mocke hvert api kall. Biblioteket fungerer slik:

```js
// fetch-mock brukes direkte i selve testen
fetchMock.get(`/url/to/mock/endpoint`, bodyResponseAsJSON);
```

💡 En enkel måte å kode innhold til response er å bruke `JSON.stringify()`, som f.eks `JSON.stringify({ aFieldName: "a value" })`

<details>
  <summary>🚨Løsning</summary>

```js
import { getCompletionRate } from "../../utils/completion-utils";
import fetchMock from "fetch-mock";

describe("Tests for getCompletionRate() function", () => {
  test("getCompletionRate() computes completion rate in percent based on nb of created vs nb of deleted todos", async () => {
    fetchMock.get(`/stats/created`, JSON.stringify({ value: 100 }));
    fetchMock.get(`/stats/deleted`, JSON.stringify({ value: 50 }));

    const completion = await getCompletionRate();

    expect(completion).toBe(50);
  });
});
```

</details>

### Oppgave 3b: skriv en ny test som forbedrer implementasjon av `getCompletionRate()`

Hvis ingen todo er opprettet enda, returnerer `getCompletionRate()` **NaN**. Vi ønsker å forbedre denne funksjonen slik at den returnerer **0** dersom `nbOfCreatedTodo` er `null`.

Vi skal bruke _Test Driven Development_ -metodikken og skrive testen før vi skriver implementasjonen. Testen skal først feile. Men etter vi legger til riktig implementasjon da skal være testen _grønn_.

💡 I `src/__tests__/mocking/completion-utils-fetchmock-tests.ts`, legg til en test som sjekker at `getCompletionRate()` returnerer **0** dersom både kall til `/stats/created` og `/stats/deleted` returnerer **0**. Testen skal feile.

<details>
  <summary>🚨Løsning</summary>

```js
describe("Tests for getCompletionRate() function", () => {
  // etter testen vi skrev i 3a)
  test("getCompletionRate() returns 0 when no todos has been created or deleted", async () => {
    fetchMock.get(`/stats/created`, JSON.stringify({ value: 0 }));
    fetchMock.get(`/stats/deleted`, JSON.stringify({ value: 0 }));

    const completion = await getCompletionRate();

    expect(completion).toBe(0);
  });
});
```

</details>

💡 I `src/utils/completion-utils.ts`, oppdater `getCompletionRate()` så testen blir _grønn_

<details>
  <summary>🚨Løsning</summary>

```js
// ...
if (restStatisticNbOfCreatedTasks.data.value === 0) {
  return 0;
}
```

</details>
<br/>

## Oppgave 4: Lage en mock modul for å kjøre applikasjon lokalt uten avhengigheter

Noen ganger vil vi bare kjøre applikasjonen og se "hvordan ting ser ut". Enten for å sjekke visuelt hvordan komponentene henger sammen eller bare for å ha en oversikt over slutt resultat.

For å slippe å være avhengig av en eller en annen _tredjepart_ kan vi spesifisere hvordan den tjenesten vi er avhengig av skal oppføre seg (våre forventninger).
Det er akkurat det vi skal gjøre her. Vi skal skrive kode som beskriver våre forventninger til backend tjenester som håndterer vår data (_todos_ og _statistics_)

Vi har skrevet koden som gjør at alle kall til nettverk i vår applikasjon som bruker `fetch` skal gå gjennom `fetch-mock` bibliotek. `fetch-mock` skal _hijacke_ alle kall til nettverk (request og response). Vår oppgave blir da å skrive de responsene vi ønsker applikasjonen vår skal motta av nettverket.

I denne oppgaven skal du bare jobbe i denne filen: `source/mocking/mock.ts`

Men først litt om hvordan ting henger sammen:

For å aktivere mocking av nettverk må vi fortelle applikasjonen å ta i bruk koden i `mock.ts`.
Vi gjør det ved å sette den `REACT_APP_MOCK` _miljøvariabelen_ til `true` i det applikasjonen starter. Da skal `mock.ts` bli aktivert og alle kall til nettverket går gjennom `fetch-mock`. Se gjerne på koden som aktiverer mock i `index.tsx` og kommandoen som starter applikasjonen i `package.json`

Stopp og start applikasjon på nytt ved å gjøre følgende:

- Gå til terminalen hvor du startet applikasjon med kommandoen `npm start`
- Bruk `Ctrl + c` for å stoppe prosessen
- Start applikasjon i mock modus ved å kjøre `npm run mock`

Etter at applikasjonen kjører med mock aktivert trenger vi ikke lenger den lokale backend du har startet med `node server.js`. Gå til terminalen hvor backend kjører og bruk `Ctrl + c` for å stoppe prosessen.

Nå kan vi dele oppgaven i biter:

#### Oppgave 4a) Mocke GET `/todolist`

🏆 Når applikasjonen starter sendes en GET request til `/todolist` som returnerer en liste av todos. Vi starter med å legge til flere todos i den todo-lista.

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

🏆 Hvis du nå prøver å legge til eller fjerne en todo i applikasjonen vil det ikke fungere. Årsaken er at applikasjonen bruker flere endepunkter, og vi har ikke skrevet koden i `mock.ts` for å håndtere disse kallene enda. Dette skal vi gjøre nå.

OBS: alle nettverkskall applikasjonen gjør finnes i `src/api/api.ts`. Se gjerne på koden for å finne ut hvilket endepunkt er tatt i brukt for å opprette eller slette en todo.

💡 Vi jobber fortsatt i `source/mocking/mock.ts`. Skriv koden som håndterer POST requests til `/create/todo` for å legge til en todo. Test mocken din ved å bruke `add`-knappen i applikasjonen.
💡 For å kunne ta imot POST requests på `/create/todo` må vi bruke `post` metode i `fetch-mock`. Denne har en `opts` parameter som inneholder request body. Denne skal vi _parse_ for å hente data.

```js
fetchMock.post(
    "express:/create/todo",
    (url, opts) => {
        const jsonObj = JSON.parse(opts.body as string);
        // her kan du konvertere jsonObj til en Todo
        return {
            // her kan du returnere en Todolist som inneholder den samme Todo som du fikk i POST requestet
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

        return todolistResponse;
    },
    {
        delay: 1000 * delayfactor,
    }
);
```

</details>
<br/>

💡 Til `/statistic/*` endepunktene skal du opprette andre globale variaber, som `nbOfCreatedTodos` og `nbOfDeletedTodos`.

OBS:

- init verdi til `nbOfCreatedTodos` skal matche antall _todos_ i `todoList` ved init.
- husk å inkrementere `nbOfCreatedTodos` i den mock som håndterer `/create/todo` og `nbOfDeletedTodos` i den mock som håndterer `/delete/todo`

<details>
  <summary>🚨Løsning</summary>

```js
const todolistResponse: Todolist = {
  todoList: [{ text: "Hello I'm MOCK", id: 1 }],
};

let nbOfCreatedTodos = 1;
let nbOfDeletedTodos = 0;

// her kommer de andre mock du allerede har laget 👆for GET /todolist, POST create/todo og POST delete/todo
//  legg til nbOfCreatedTodos++ i den mock for POST create/todo
//  og nbOfDeletedTodos++ i den mock for POST delete/todo mock

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

# React testing workshop 🧪

Bekk React faggruppe - September 2020

---

## Plan for workshop 📋

- Unit-testing med Jest ❌
- Testing av React-komponenter ✅
- End-to-end testing ❌
- Mocking ✅

Note: Jest, react testing library og mocking med jest.mock + fetch-mock

---

### Hva er en god test?

- Rask
- Isolert
- Forutsigtbar og repeterbar
- Uavhengig av implementasjon
- Self-Checking (suksess ✅ eller feil ❌)

Note: enklere å refaktorere kode, dytter deg mot beste praksis for universell utforming, fokuserer på brukeren. Bibliotek som `@testing-library/react` hjelper deg med å skrive gode tester, og gjør det vanskelig å skrive dårlige tester

---

### React testing library 🤩

- Basert på DOM testing library
- Tvinger brukeren til å teste på en høy nivå
- Tester DOM i stedet for implementasjon
- Henter ut HTMl-elementer fra DOM med queries
- Lettere å refaktorer

Note: Bruker queries for å hente ut HTML-elementer på samme måte som en bruker (finn input med hjelp av label, knapp og lenke med hjelp av tekst og type).

---

### Et eksempel

En enkel tellere:

```JSX
function Counter() = {
  const [count, setCount] = useState(0);
  return {
    <div>
      <p>Current count: {count}</p>
      <button onClick={setCount(count+1)} >+</button>
    </div>
  }
}

```

Test:

```JSX
test("standardverdi for telleren er 0", () => {
  const { getByText } = render(Counter);
  const count = getByText("Current count: 0");
  expect(count).toBeInTheDocument();
});
```

Note: toBeInTheDocument() trengs ikke, men gjer mye bedre feilmelding (getByTexct throwar error hvis det ikke finnes)

---

### Et annet eksempel

En enkel tellere:

```JSX
function Counter() = {
  const [count, setCount] = useState(0);
  return {
    <div>
      <p>Current count: {count}</p>
      <button onClick={setCount(count+1)} >+</button>
    </div>
  }
}

```

Test:

```JSX
test("telleren skal øke med en når den klikkes", () => {
  const { getByText, getByRole } = render(Counter);
  expect(getByText("Current count: 0")).toBeInTheDocument();

  const button = getByRole("button", {name: "+"});
  userEvent.click(button);
  expect(getByText("Current count: 1")).toBeInTheDocument();
});
```

---

### Noen viktige funksjoner

- `render`
- `userEvent`
- `expect`

```JSX
test("sjekk at teksten vinker", () => {
  const { getByText } = render(<p>Hej!👋</p>); // <-- render
  const tekst = getByText(/hej/i); // <-- query eksponert av render
  userEvent.click(tekst); // <-- userEvent
  expect(tekst).toBeInTheDocument(); // <-- expect
});
```

---

### render

```JSX
import { render } from "@testing-library/react";

const { container, getByText, etc... } = render(Component):
```

- render eksponerer alle queries som kan brukes for å finne elementer i `document.body`.

```jsx
const { getByText, getByRole, ... } = render(Component):
const input = getByRole("input");
const button = getByRole("button", {name: /klikk her/i});
const listElements = getAllByRole("listitem");
const label = getByText("Vem er du?");
const input = getByLabelText("Vem er du?");
```

- og `container` som er en referens til DOM-noden der komponenten finnes

- etc..

---

### jest expect

- Brukes for å evaluere at resultatet er some forventet

- Testene feile og gi en god tilbakemelding hvis expect ikke innholder forventet verdi

- Bruk ikke bare `.toBe` uten test å finne ut korrekt "matcher"

```JSX
expect(result).toBe(expected);
expect(result).not.toBe(expected);
expect(element).toBeInTheDocument();

expect(result.value).toBe(expected);  ❌
expect(result).toHaveValue(expected); ✅

expect(result.length).toBe(expected);  ❌
expect(result).toHaveLength(expected); ✅

```

---

### user Event 👴

- `userEvent` simulerer noen som bruker komponenten

```JSX
test("typing in the input should change its value", () => {
  const { getByRole } = render(<input type="checkbox" />);

  const checkbox = getByRole("checkbox");
  expect(checkbox).toBeChecked();

  userEvent.click(checkbox);
  exect(checkbox).not.toBeChecked();
});
```

API:

```JSX
userEvent.click(element)
userEvent.type(element, text)
userEvent.clear(element)
etc...
```

---

### Component testing Sammenfattet

```JSX
test("her tester jeg noe", () => {
  // Legg til komponenten til document.body med render
  // hent ut queries du trenger
  const {debug, queries} = render(MinKomponent)
  // Bruk debug() for å printe ut DOM:en når du skriver tester
  debug()
  // bruk en query, vanligvis getByRole, for at finne et element
  const knapp = getByRole("button", {name: /knappenavn/i})
  // Bruk userEvent for å samhandle med en del av komponenten
  userEvent.click(knapp);
  // Sjekk at resultatet er som forventet
  // i dette tilfellet skulle noen tekst komme opp ved klikk
  const tekst = getByText("Du vant da du klikket på knappen!")
  expect(tekst).toBeInTheDocument();
})
```

---

## Mocking 🦸‍♀️

---

### Hvorofor trenger vi mock? 🤔

En applikasjon er ofte avhengig av eksterne ressurser. Det kan være et API som nås over nettverket, en fil på filsystem eller en system ressurs (f.eks. dagensdato)

Disse eksterne ressursene skaper uforutsigtbarhet ved testing. Vi vil ikke at testene våre feiler fordi en ekstern ressurs ikke er tilgjengelig når testen kjører.

---

> Mocking is the action of creating objects that mimic the behavior of real objects in controlled ways

<span style="font-family:serif; font-style:italic; font-size:0.5em;">Kilde: "Mock object" - Wikipedia</span>

---

### Mocking med jest

👉 Vi bruker `jest.mock` for å mocke funksjoner av en modul med uforutsigtbare avhengigheter

For eksempel: en funksjon `getTodaysDate()` som ligger i en modul `date-utils` og henter system dato

---

Kode 🧑🏿‍💻

```js
// Her oppretter vi en mock av getTodaysDate()
// og spesifiserer hva den skal returnere
jest.mock("../../utils/date-utils", () => {
  return {
    getTodaysDate: jest.fn(() => "Monday"),
  };
});
// functionToTest() har avhengighet til getTodaysDate()
// og kommer til å bruke mock 👆i neste instruksjonen
const result = functionToTest();

// da kan vi skrive en forutsigtbar test
// som sjekker verdi av "result"
```

---

### Mocke http kall med fetch-mock 🛠

Før vi ser på kode som bruker `fetch-mock` skal vi vise noen illustrasjoner som beskriver hvordan en React app interagerer med nettverket.

💡 På siste illustrasjon viser vi hvor vi kan posisjonere en mock for å kunne kjøre applikasjon uten backend

---

##### Hvordan fungerer en React-app med en backend?

![Skjema av en real-world React app](https://github.com/bekk/react-test-workshop/raw/master/presentasjon/img/mocking-schema-1.png)
En React app med avhengigheter til et eksternt API

---

##### Hvordan kjøres applikasjon lokalt?

![Skjema av en real-world React app](https://github.com/bekk/react-test-workshop/raw/master/presentasjon/img/mocking-schema-2.png)
Todo-list sammen med _server.js_

---

##### Hvordan kan vi kjøre lokalt med en mock?

![Skjema av en real-world React app](https://github.com/bekk/react-test-workshop/raw/master/presentasjon/img/mocking-schema-3.png)
Todo-list med mock

---

### fetch-mock 🛠

> The fetch-mock library will let you simulate and manage interactions with other applications by intercepting all API calls done with fetch

```JSX
import fetchMock from "fetch-mock";

fetchMock.get(
  "express:/todolist",
  (url) => {
    return {
      todoList: [{ text: "Hello I'm MOCK", id: "1" }],
    };
  }
);
```

---

### bruk av fetch-mock i oppgaver

Vi bruker vi `fetch-mock` for to forskjellige hensikt i denne workshoppen

👉 i **_oppgave 4_** skal du bruke `fetch-mock` for å kunne teste en funksjon som sender request til backend

👉 i **_oppgave 5_** ønsker vi å kjøre applikasjon lokalt uten `server.js`. Da skal du kode en mock med `fetch-mock` som "oppfører seg" som backend

---

## Lykke til med testing! 👊

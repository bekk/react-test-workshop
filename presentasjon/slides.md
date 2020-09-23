# React testing workshop 🧪

Bekk React faggruppe - September 2020

---

## Plan for workshop 📋

- testing av React-komponenter
- jest
- react testing library
- mocking med jest.mock og fetch-mock

---

### Hva er en god test?

Egenskaper av en god test

- Rask
- Isolert
- Forutsigtbar og repeterbar
- Uavhengig av implementasjon i koden som testes
- Self-Checking (suksess ✅ eller feil ❌)

---

## Testing av React komponenter

---

### React testing library

> The @testing-library family of packages helps you test UI components in a user-centric way.

```JSX
import React from "react";
import { render } from "@testing-library/react";

test("paragraph renders text", () => {
  const { getByText } = render(
    <p>Välkommen!</p>
  );
  const paragraph = getByText(/välkommen/i);
  expect(paragraph).toBeInTheDocument();
});

```

Note: speaker notes FTW!

---

### render

```JSX
const {/\* \*/} = render(Component):
```

- all the queries from DOM Testing Library

  - ByText
  - ByLabelText
  - ByPlaceholderText
  - ByTestId
  - ...

- container reference to the DOM node where the component is mounted

---

### jest expect

- test

- `expect(result).toBe(expected)`

---

### fire event

---

## Mocking 🦸‍♀️

---

### Hvorofor trenger vi mock? 🤔

En applikasjon er ofte avhengig av eksterne ressurser. Det kan være et API som nås over nettverket, en fil på filsystem eller en system ressurs (f.eks. dagensdato)

Disse eksterne ressursene skaper uforutsigtbarhet ved testing. Vi vil ikke at testene våre feiler fordi en ekstern ressurs ikke er tilgjengelig når testen kjører.

---

> Mocking is the action of creating objects that mimic the behavior of real objects in controlled ways

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

👉 i **_oppgave 3_** skal du bruke `fetch-mock` for å kunne teste en funksjon som sender request til backend

👉 i **_oppgave 4_** ønsker vi å kjøre applikasjon lokalt uten `server.js`. Da skal du kode en mock med `fetch-mock` som "oppfører seg" som backend

---

## Åpne spørsmål

- Hvordan tester ni frontend på projekt idag?

- Test driven development?

- Si noe om testing on commit

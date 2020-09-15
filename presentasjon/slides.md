## React testing workshop

- testing av React-komponenter
- jest
- react testing library
- mocking med Jest | fetch-mock 

---

## React testing library

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

## render

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

## jest expect

---

## fire event

---

## Mock
> The fetch-mock library will let you simulate and manage interactions with other applications by intercepting all API calls done with fetch

```JSX
import fetchMock from "fetch-mock";

let delayfaktor = 1;

fetchMock.get(
  "express:/todolist",
  (url) => {
    return {
      todoList: [{ text: "Hello I'm MOCK", id: "9876543210" }],
    };
  },
  {
    delay: 1000 * delayfaktor,
  }
);
```
---

## Åpne spørsmål

- Hvordan tester ni frontend på projekt idag?

- Test driven development?

- Si noe om testing on commit

import React, { useState } from "react";

function App() {
  const [list, setList] = useState<string[]>([
    "item1...",
    "item2...",
    "item3...",
    "item4...",
  ]);

  return (
    <>
      <h1>Simple to-do list</h1>
      Add things that you need to do here, and then remove them when you've
      solved them!
      <h2>List:</h2>
      <ul>
        {list.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
      <form>
        <h2>Add item</h2>
        <input type="text" />
        <button>Add</button>
      </form>
    </>
  );
}

export default App;

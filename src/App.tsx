import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    console.log(query);
  };
  return (
    <>
      <h1>Google Search</h1>

      <input
        type="text"
        placeholder="Введите ключевую фразу"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <button
        type="button"
        onClick={handleSearch}
      >
        Найти
      </button>
    </>
  );
}

export default App;

import React, { useState, useEffect, useMemo, useCallback } from "react";

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setnewTech] = useState("");

  const handleAdd = useCallback(
    () => {
      setTech([...tech, newTech]);
      setnewTech("");
    },
    [newTech, tech],
    tech
  );

  const techSize = useMemo(() => tech.length, [tech.length]);

  useEffect(() => {
    const localTech = localStorage.getItem("tech");

    setTech(JSON.parse(localTech));
  }, []);
  useEffect(() => {
    localStorage.setItem("tech", JSON.stringify(tech));
  }, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={e => setnewTech(e.target.value)}
      />
      <strong>Voce tem {techSize} tecnologias</strong>
      <br />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;

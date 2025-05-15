import { useState } from "react";

export default function Home() {
  const [imie, setImie] = useState("");
  const [okazja, setOkazja] = useState("");
  const [pokazWiadomosc, setPokazWiadomosc] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // zapobiega przeładowaniu strony
    setPokazWiadomosc(true);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🎬 Filmy z Kamilem</h1>
      <p>Wpisz imię i okazję, a przygotujemy specjalne życzenia!</p>

      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="Imię"
          value={imie}
          onChange={(e) => setImie(e.target.value)}
          style={{ padding: "0.5rem", marginRight: "1rem" }}
        />
        <input
          type="text"
          placeholder="Okazja"
          value={okazja}
          onChange={(e) => setOkazja(e.target.value)}
          style={{ padding: "0.5rem", marginRight: "1rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Wyślij
        </button>
      </form>

      {pokazWiadomosc && (
        <div style={{ marginTop: "2rem" }}>
          <img
            src="/celebryta.jpg"
            alt="celebryta"
            style={{ width: "200px", marginBottom: "1rem" }}
          />
          <h2>Cześć {imie}! 🎉</h2>
          <p>Wszystkiego najlepszego z okazji: {okazja}!</p>
        </div>
      )}
    </div>
  );
}

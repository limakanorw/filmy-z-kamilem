import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// 🔑 TU WSTAW SWOJE DANE Z SUPABASE
const supabaseUrl = 'https://kpazcytrntskvhldogmb.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwYXpjeXRybnRza3ZobGRvZ21iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMDI2MTksImV4cCI6MjA2Mjg3ODYxOX0.pMXpOX1BVHJDaANKhdsnBQnptUp-e0Z98ktYz6O7VLc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  const [imie, setImie] = useState("");
  const [okazja, setOkazja] = useState("");
  const [pokazWiadomosc, setPokazWiadomosc] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("🔄 Wysyłam dane do Supabase:", imie, okazja);

    const { data, error } = await supabase.from("zamowienia").insert([
      {
        imie: imie,
        okazja: okazja,
      },
    ]);

    if (error) {
      console.error("❌ Błąd z Supabase:", error);
      alert("❌ Błąd podczas zapisu: " + error.message);
    } else {
      console.log("✅ Zapisane dane:", data);
      setPokazWiadomosc(true);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🎬 Filmy z Kamilem</h1>
      <p>Wpisz imię i okazję, a zapiszemy Twoje zamówienie!</p>

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

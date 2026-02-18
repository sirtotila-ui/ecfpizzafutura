import { useState, useEffect } from "react";

const SECTIONS = ["home", "storia", "menu", "recensioni", "specialita", "come", "asporto", "faq", "contatti"];
const NAV_L = { home: "Home", storia: "La Storia", menu: "Menù", recensioni: "Recensioni", specialita: "Specialità", come: "Come Ordini", asporto: "Asporto", faq: "FAQ", contatti: "Contatti" };

function Navbar() {
  const [m, setM] = useState(false);
  const [a, setA] = useState("home");
  useEffect(() => { const f = () => { const o = SECTIONS.map(id => { const e = document.getElementById(id); return e ? { id, top: e.offsetTop - 100 } : null; }).filter(Boolean); for (let i = o.length - 1; i >= 0; i--) { if (window.scrollY >= o[i].top) { setA(o[i].id); break; } } }; window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => { document.body.style.overflow = m ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [m]);
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setM(false); };
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, background: "rgba(44,30,22,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(200,140,60,0.15)", padding: "0 28px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: 22, color: "#F5E6D0" }}>🍕 NomePizzeria</div>
      <div style={{ display: "flex", gap: 2 }} className="pt-dsk">{SECTIONS.map(id => (<button key={id} onClick={() => go(id)} style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 10px", fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: a === id ? 600 : 400, color: a === id ? "#C88C3C" : "rgba(245,230,208,0.4)", textTransform: "uppercase", letterSpacing: 1.2, transition: "all .2s" }}>{NAV_L[id]}</button>))}</div>
      <button onClick={() => setM(!m)} className="pt-ham" style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 5, padding: 8, zIndex: 1001 }}>
        <span style={{ width: 24, height: 2, background: m ? "#C88C3C" : "#F5E6D0", transition: "all .3s", transform: m ? "rotate(45deg) translate(5px,5px)" : "none" }} /><span style={{ width: 24, height: 2, background: "#F5E6D0", transition: "all .3s", opacity: m ? 0 : 1 }} /><span style={{ width: 24, height: 2, background: m ? "#C88C3C" : "#F5E6D0", transition: "all .3s", transform: m ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
      </button>
      {m && <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 999, background: "#2C1E16", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>{SECTIONS.map(id => (<button key={id} onClick={() => go(id)} style={{ background: "none", border: "none", cursor: "pointer", padding: "16px", fontFamily: "'Playfair Display', serif", fontSize: 22, color: a === id ? "#C88C3C" : "rgba(245,230,208,0.4)", width: "80%", textAlign: "center" }}>{NAV_L[id]}</button>))}</div>}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500;600;700&display=swap');.pt-ham{display:none!important}@media(max-width:900px){.pt-dsk{display:none!important}.pt-ham{display:flex!important}}`}</style>
    </nav>
  );
}

function SH({ label, title, sub, light }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 52 }}>
      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600, color: "#C88C3C", textTransform: "uppercase", letterSpacing: 5, marginBottom: 14 }}>{label}</div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4.5vw, 46px)", fontWeight: 600, color: light ? "#F5E6D0" : "#2C1E16", lineHeight: 1.15, marginBottom: sub ? 12 : 0 }}>{title}</h2>
      {sub && <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: light ? "rgba(245,230,208,0.45)" : "#A08060", maxWidth: 480, margin: "0 auto", fontWeight: 400 }}>{sub}</p>}
      <div style={{ width: 40, height: 2, background: "#C88C3C", margin: "18px auto 0", borderRadius: 1 }} />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(170deg, #2C1E16 0%, #3D2A1C 50%, #2C1E16 100%)", padding: "100px 28px 60px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "40%", right: "10%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,140,60,0.07) 0%, transparent 65%)" }} />
      <div style={{ position: "absolute", bottom: "20%", left: "5%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,100,40,0.05) 0%, transparent 65%)" }} />
      <div style={{ position: "absolute", top: 100, left: "12%", fontFamily: "'Playfair Display', serif", fontSize: 140, color: "rgba(200,140,60,0.04)", fontWeight: 700 }}>🍕</div>
      <div style={{ maxWidth: 700, textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, color: "#C88C3C", textTransform: "uppercase", letterSpacing: 6, marginBottom: 28 }}>— Pizzeria Artigianale —</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px, 7vw, 68px)", fontWeight: 700, color: "#F5E6D0", lineHeight: 1.1, margin: "0 0 24px" }}>La Pizza Come<br /><span style={{ fontStyle: "italic", color: "#C88C3C" }}>Una Volta</span></h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(14px, 2vw, 17px)", color: "rgba(245,230,208,0.45)", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.85, fontWeight: 400 }}>Impasto a lunga lievitazione, ingredienti freschi, forno a legna. Come la tradizione insegna, dal 1985.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{ background: "#C88C3C", color: "#2C1E16", border: "none", padding: "16px 40px", borderRadius: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer", letterSpacing: 0.5 }}>Ordina Ora</button>
          <button style={{ background: "transparent", color: "#C88C3C", border: "1.5px solid rgba(200,140,60,0.3)", padding: "16px 40px", borderRadius: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>Vedi il Menù</button>
        </div>
        <div style={{ display: "flex", gap: 48, justifyContent: "center", marginTop: 52, flexWrap: "wrap" }}>
          {[["4.8★", "Google"], ["40+", "Anni"], ["Forno", "a Legna"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#C88C3C" }}>{n}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(245,230,208,0.3)", textTransform: "uppercase", letterSpacing: 2, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Storia() {
  return (
    <section id="storia" style={{ padding: "100px 28px", background: "#FBF6EF" }}>
      <div style={{ maxWidth: 650, margin: "0 auto", textAlign: "center" }}>
        <SH label="La Nostra Storia" title={<>Tradizione e Passione<br />dal <span style={{ color: "#C88C3C" }}>1985</span></>} />
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "#8A7060", lineHeight: 2, margin: "0 auto", maxWidth: 540 }}>Tre generazioni di pizzaioli con un'unica ossessione: la pizza perfetta. Impasto lievitato 72 ore, pomodoro San Marzano, mozzarella di bufala campana. Ogni pizza è fatta a mano, cotta nel nostro forno a legna, e servita con amore.</p>
      </div>
    </section>
  );
}

function Menu() {
  const [cat, setCat] = useState("classiche");
  const items = {
    classiche: [
      { name: "Margherita", price: "€7", desc: "Pomodoro San Marzano, mozzarella fior di latte, basilico fresco" },
      { name: "Marinara", price: "€6", desc: "Pomodoro, aglio, origano, olio EVO" },
      { name: "Diavola", price: "€9", desc: "Pomodoro, mozzarella, salame piccante, peperoncino" },
      { name: "Quattro Formaggi", price: "€10", desc: "Mozzarella, gorgonzola, parmigiano, fontina" },
    ],
    speciali: [
      { name: "Tartufo e Burrata", price: "€14", desc: "Crema di tartufo, burrata, rucola, scaglie di parmigiano" },
      { name: "Pistacchio", price: "€13", desc: "Crema di pistacchio, mortadella, stracciatella, granella" },
      { name: "Bufala DOP", price: "€12", desc: "Pomodorini freschi, bufala campana DOP, basilico" },
      { name: "Porcini e Salsiccia", price: "€12", desc: "Mozzarella, funghi porcini, salsiccia artigianale" },
    ]
  };
  return (
    <section id="menu" style={{ padding: "100px 28px", background: "#2C1E16" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <SH label="Il Menù" title="Le Nostre Pizze" sub="Impasto a lunga lievitazione 72h, forno a legna." light />
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 40 }}>
          {["classiche", "speciali"].map(c => (
            <button key={c} onClick={() => setCat(c)} style={{ background: cat === c ? "#C88C3C" : "transparent", color: cat === c ? "#2C1E16" : "rgba(245,230,208,0.4)", border: cat === c ? "none" : "1px solid rgba(200,140,60,0.2)", padding: "10px 28px", borderRadius: 6, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, cursor: "pointer", textTransform: "uppercase", letterSpacing: 1.5 }}>{c}</button>
          ))}
        </div>
        {items[cat].map((item, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "20px 0", borderBottom: i < items[cat].length - 1 ? "1px solid rgba(200,140,60,0.08)" : "none" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 600, color: "#F5E6D0", marginBottom: 4 }}>{item.name}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(245,230,208,0.35)", lineHeight: 1.6, fontWeight: 400 }}>{item.desc}</div>
            </div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#C88C3C", marginLeft: 20, whiteSpace: "nowrap" }}>{item.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Recensioni() {
  const t = [
    { n: "Marco R.", t: "La migliore pizza della zona, senza discussioni. L'impasto è incredibile — leggero, digeribile, e si sente che è lievitato come si deve." },
    { n: "Giulia P.", t: "Ci venivamo con i miei genitori da bambina, e ora ci porto i miei figli. La qualità non è mai calata. Margherita perfetta." },
    { n: "Luca B.", t: "La pizza al pistacchio è una bomba. Ingredienti che si sentono, forno a legna vero, e porzioni generose. Top." }
  ];
  return (
    <section id="recensioni" style={{ padding: "100px 28px", background: "#FBF6EF" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SH label="Recensioni" title="Cosa Dicono i Nostri Clienti" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {t.map((r, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "32px 24px", border: "1px solid rgba(200,140,60,0.1)" }}>
              <div style={{ color: "#C88C3C", fontSize: 14, marginBottom: 12 }}>★★★★★</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#8A7060", lineHeight: 1.85, margin: "0 0 20px", fontStyle: "italic" }}>"{r.t}"</p>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 13, color: "#2C1E16" }}>{r.n}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Specialita() {
  const s = [
    { name: "Forno a Legna", desc: "Cottura tradizionale a 450°C per una pizza croccante fuori e morbida dentro." },
    { name: "Ingredienti DOP", desc: "Solo materie prime certificate: San Marzano, Bufala Campana, Olio EVO italiano." },
    { name: "Lievitazione 72h", desc: "Il segreto della nostra pizza: 72 ore di lievitazione per un impasto leggero e digeribile." },
    { name: "Fatto a Mano", desc: "Ogni pizza è stesa a mano dal nostro pizzaiolo. Niente macchine, solo tradizione." }
  ];
  return (
    <section id="specialita" style={{ padding: "100px 28px", background: "#2C1E16" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SH label="Perché Noi" title="Cosa Ci Rende Diversi" light />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {s.map((item, i) => (
            <div key={i} style={{ background: "rgba(200,140,60,0.04)", border: "1px solid rgba(200,140,60,0.1)", borderRadius: 12, padding: "32px 24px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, color: "rgba(200,140,60,0.15)", fontWeight: 700, marginBottom: 12 }}>0{i + 1}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 600, color: "#F5E6D0", marginBottom: 8 }}>{item.name}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(245,230,208,0.4)", lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Come() {
  const steps = [
    { t: "Scegli", d: "Guarda il menù e scegli le tue pizze preferite." },
    { t: "Ordina", d: "Chiama, scrivi su WhatsApp o ordina direttamente al banco." },
    { t: "Gusta", d: "Ritira l'asporto o siediti al tavolo. Buon appetito!" }
  ];
  return (
    <section id="come" style={{ padding: "100px 28px", background: "#FBF6EF" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <SH label="Come Ordinare" title="Semplice e Veloce" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 0, justifyContent: "center" }}>
          {steps.map((s, i) => (
            <div key={i} style={{ flex: "1 1 200px", textAlign: "center", padding: "32px 24px" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: i === 0 ? "#C88C3C" : "#fff", border: i === 0 ? "none" : "1.5px solid rgba(200,140,60,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: i === 0 ? "#2C1E16" : "#C88C3C" }}>{i + 1}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: "#2C1E16", marginBottom: 8 }}>{s.t}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#A08060", lineHeight: 1.75, margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Asporto() {
  return (
    <section id="asporto" style={{ padding: "100px 28px", background: "#2C1E16" }}>
      <div style={{ maxWidth: 460, margin: "0 auto", textAlign: "center" }}>
        <SH label="Asporto & Consegna" title="La Nostra Pizza a Casa Tua" light />
        <div style={{ border: "1.5px solid rgba(200,140,60,0.2)", borderRadius: 16, padding: "40px 32px", background: "rgba(200,140,60,0.03)" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 700, color: "#C88C3C", textTransform: "uppercase", letterSpacing: 4, marginBottom: 12 }}>Consegna gratuita</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 700, color: "#F5E6D0", marginBottom: 4 }}>GRATIS</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(245,230,208,0.4)", marginBottom: 28 }}>Per ordini sopra €20</div>
          {["Asporto sempre disponibile", "Consegna in 30-40 minuti", "Ordina via WhatsApp o telefono", "Menù completo disponibile", "Pagamento alla consegna o online"].map((f, i) => (
            <div key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(245,230,208,0.5)", padding: "11px 0", borderBottom: i < 4 ? "1px solid rgba(200,140,60,0.06)" : "none", textAlign: "left", display: "flex", gap: 12, alignItems: "center" }}>
              <span style={{ color: "#C88C3C", fontSize: 10 }}>✦</span> {f}
            </div>
          ))}
          <button style={{ marginTop: 28, width: "100%", background: "#C88C3C", color: "#2C1E16", border: "none", padding: "16px", borderRadius: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Ordina su WhatsApp</button>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [o, setO] = useState(null);
  const f = [
    { q: "Fate asporto?", a: "Sì! Puoi ordinare via telefono o WhatsApp e ritirare al banco, oppure consegniamo noi gratis per ordini sopra €20." },
    { q: "Avete opzioni senza glutine?", a: "Sì, offriamo impasto senza glutine per tutte le pizze del menù. Avvisaci quando ordini." },
    { q: "Si può prenotare il tavolo?", a: "Certo, consigliamo la prenotazione soprattutto il venerdì e sabato sera. Chiama o scrivi su WhatsApp." },
    { q: "Fate pizze per celiaci?", a: "Sì, con farine certificate e preparazione in ambiente controllato per evitare contaminazioni." },
    { q: "Qual è il vostro orario?", a: "Siamo aperti tutti i giorni dalle 18:00 alle 23:00. Sabato e domenica anche a pranzo dalle 12:00." }
  ];
  return (
    <section id="faq" style={{ padding: "100px 28px", background: "#FBF6EF" }}>
      <div style={{ maxWidth: 650, margin: "0 auto" }}>
        <SH label="FAQ" title="Domande Frequenti" />
        {f.map((item, i) => (
          <div key={i} style={{ borderBottom: "1px solid rgba(200,140,60,0.1)" }}>
            <button onClick={() => setO(o === i ? null : i)} style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", textAlign: "left" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600, color: "#2C1E16" }}>{item.q}</span>
              <span style={{ color: "#C88C3C", transition: "transform .3s", transform: o === i ? "rotate(45deg)" : "none", flexShrink: 0, marginLeft: 16, fontSize: 18 }}>+</span>
            </button>
            {o === i && <div style={{ padding: "0 0 20px", fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#A08060", lineHeight: 1.85 }}>{item.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <section id="contatti" style={{ padding: "100px 28px", background: "linear-gradient(180deg, #2C1E16, #1E140E)", textAlign: "center" }}>
      <div style={{ maxWidth: 540, margin: "0 auto" }}>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, fontWeight: 600, color: "#C88C3C", textTransform: "uppercase", letterSpacing: 5, marginBottom: 20 }}>Contatti</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 5vw, 46px)", fontWeight: 700, color: "#F5E6D0", marginBottom: 16 }}>Vieni a Trovarci</h2>
        <div style={{ width: 40, height: 2, background: "#C88C3C", margin: "0 auto 28px" }} />
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(245,230,208,0.4)", marginBottom: 40, lineHeight: 1.8 }}>Prenota il tavolo o ordina l'asporto. Ti aspettiamo!</p>
        <button style={{ background: "#C88C3C", color: "#2C1E16", border: "none", padding: "16px 44px", borderRadius: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>Chiama Ora</button>
        <div style={{ marginTop: 52, display: "flex", gap: 44, justifyContent: "center", flexWrap: "wrap" }}>
          {[["Telefono", "+39 XXX XXX XXXX"], ["Indirizzo", "Via Roma 1, Città"], ["Orari", "18:00 - 23:00"]].map(([l, t]) => (
            <div key={t} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, color: "rgba(200,140,60,0.4)", textTransform: "uppercase", letterSpacing: 3, marginBottom: 6 }}>{l}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(245,230,208,0.5)" }}>{t}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 52, paddingTop: 24, borderTop: "1px solid rgba(200,140,60,0.08)", fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(245,230,208,0.15)" }}>© 2026 NomePizzeria. Tutti i diritti riservati.</div>
      </div>
    </section>
  );
}

export default function PizzeriaTradizionale() {
  return (<div style={{ margin: 0, padding: 0 }}><Navbar /><Hero /><Storia /><Menu /><Recensioni /><Specialita /><Come /><Asporto /><FAQ /><Footer /></div>);
}

import { useMemo, useState } from "react";
import { demoTitles, type MediaType, type Title } from "./data/demoTitles";

type Page = "home" | "library" | "bookmarks" | "admin";

const categories = ["Semua", "Manga", "Manhwa", "Manhua", "Novel"] as const;

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [category, setCategory] = useState<(typeof categories)[number]>("Semua");
  const [query, setQuery] = useState("");
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [selected, setSelected] = useState<Title | null>(null);

  const filtered = useMemo(() => {
    return demoTitles.filter((item) => {
      const categoryMatch = category === "Semua" || item.type === category;
      const queryMatch = `${item.name} ${item.genre} ${item.type}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const bookmarkMatch = page !== "bookmarks" || bookmarks.includes(item.id);
      return categoryMatch && queryMatch && bookmarkMatch;
    });
  }, [category, query, page, bookmarks]);

  function toggleBookmark(id: string) {
    setBookmarks((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  function navigate(next: Page) {
    setPage(next);
    setSelected(null);
    if (next === "bookmarks") setCategory("Semua");
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => navigate("home")} aria-label="MioWeb home">
          <span className="brand-mark">m.</span>
          <span>Mio<span className="brand-light">Web</span></span>
        </button>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          <button className={page === "home" ? "nav-active" : ""} onClick={() => navigate("home")}>Beranda</button>
          <button className={page === "library" ? "nav-active" : ""} onClick={() => navigate("library")}>Jelajahi</button>
          <button className={page === "bookmarks" ? "nav-active" : ""} onClick={() => navigate("bookmarks")}>Bookmark</button>
          <button className={page === "admin" ? "nav-active" : ""} onClick={() => navigate("admin")}>Admin</button>
        </nav>
        <button className="login-button" onClick={() => alert("Login akan dihubungkan ke Supabase pada tahap berikutnya.")}>Masuk</button>
      </header>

      <main>
        {selected ? (
          <section className="detail-view">
            <button className="back-button" onClick={() => setSelected(null)}>← Kembali ke katalog</button>
            <div className="detail-layout">
              <img className="detail-cover" src={selected.cover} alt={`Cover ${selected.name}`} />
              <div className="detail-copy">
                <span className="eyebrow">{selected.type} · {selected.genre}</span>
                <h1>{selected.name}</h1>
                <p className="muted">{selected.status} · Update: {selected.latest}</p>
                <p>{selected.description}</p>
                <button className="primary-button" onClick={() => alert("Reader chapter akan dibuat pada tahap berikutnya.")}>Mulai membaca ↗</button>
                <button className="secondary-button" onClick={() => toggleBookmark(selected.id)}>
                  {bookmarks.includes(selected.id) ? "✓ Tersimpan" : "+ Tambah bookmark"}
                </button>
                <div className="chapter-panel">
                  <h3>Daftar chapter</h3>
                  <button onClick={() => alert("Reader akan tersedia pada tahap berikutnya.")}>Chapter terbaru — {selected.latest} <span>→</span></button>
                  <button onClick={() => alert("Reader akan tersedia pada tahap berikutnya.")}>Chapter 1 <span>→</span></button>
                </div>
              </div>
            </div>
          </section>
        ) : page === "admin" ? (
          <section className="admin-placeholder">
            <span className="eyebrow">AREA ADMIN</span>
            <h1>Kelola katalog MioWeb</h1>
            <p className="muted">Dashboard admin akan dihubungkan ke database dan sistem hak akses pada tahap backend.</p>
            <div className="admin-stats">
              <div><strong>{demoTitles.length}</strong><span>Demo judul</span></div>
              <div><strong>{bookmarks.length}</strong><span>Bookmark lokal</span></div>
              <div><strong>0</strong><span>Konten terbit</span></div>
            </div>
            <p className="notice">Ini masih tampilan prototipe. Jangan gunakan halaman ini untuk mengelola konten sungguhan sebelum autentikasi admin diterapkan.</p>
          </section>
        ) : (
          <>
            {page === "home" && (
              <section className="hero">
                <div className="hero-content">
                  <span className="eyebrow">YOUR NEXT STORY STARTS HERE</span>
                  <h1>Temukan cerita<br /><span>yang kamu suka.</span></h1>
                  <p>Jelajahi manga, manhwa, manhua, dan novel dalam satu tempat.</p>
                  <button className="primary-button" onClick={() => navigate("library")}>Jelajahi koleksi <span>↗</span></button>
                </div>
                <div className="hero-art" aria-hidden="true">
                  <div className="art-card art-back">STORIES<br />BEYOND</div>
                  <div className="art-card art-front"><span>m.</span><small>READ<br />SOMETHING<br />NEW</small></div>
                  <div className="art-orbit" />
                </div>
              </section>
            )}

            <section className="catalog-section">
              <div className="section-heading">
                <div>
                  <span className="eyebrow">{page === "bookmarks" ? "YOUR COLLECTION" : "BROWSE LIBRARY"}</span>
                  <h2>{page === "bookmarks" ? "Bookmark kamu" : page === "library" ? "Jelajahi koleksi" : "Pilihan untukmu"}</h2>
                </div>
                <label className="search-box">
                  <span>⌕</span>
                  <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari judul atau genre..." />
                </label>
              </div>

              <div className="category-row">
                {categories.map((item) => (
                  <button key={item} className={category === item ? "chip chip-active" : "chip"} onClick={() => setCategory(item)}>
                    {item}
                  </button>
                ))}
              </div>

              {filtered.length ? (
                <div className="title-grid">
                  {filtered.map((item) => (
                    <article className="title-card" key={item.id}>
                      <button className="cover-button" onClick={() => setSelected(item)} aria-label={`Lihat ${item.name}`}>
                        <img src={item.cover} alt={`Cover ${item.name}`} loading="lazy" />
                        <span className="type-tag">{item.type}</span>
                      </button>
                      <div className="title-info">
                        <button className="title-name" onClick={() => setSelected(item)}>{item.name}</button>
                        <p>{item.genre} · {item.status}</p>
                        <div className="card-bottom">
                          <span>{item.latest}</span>
                          <button className={bookmarks.includes(item.id) ? "save-button saved" : "save-button"} onClick={() => toggleBookmark(item.id)} aria-label="Toggle bookmark">
                            {bookmarks.includes(item.id) ? "♥" : "♡"}
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <span>✳</span>
                  <h3>Belum ada judul di sini</h3>
                  <p>Coba kata pencarian atau kategori lain.</p>
                </div>
              )}
            </section>
          </>
        )}
      </main>

      <footer><span className="footer-brand">m. MioWeb</span><span>Temukan cerita berikutnya.</span><span>© 2026 MioWeb · Prototype</span></footer>
      <nav className="mobile-nav" aria-label="Navigasi mobile">
        <button onClick={() => navigate("home")} className={page === "home" ? "mobile-active" : ""}>⌂<small>Beranda</small></button>
        <button onClick={() => navigate("library")} className={page === "library" ? "mobile-active" : ""}>⌕<small>Jelajahi</small></button>
        <button onClick={() => navigate("bookmarks")} className={page === "bookmarks" ? "mobile-active" : ""}>♡<small>Bookmark</small></button>
        <button onClick={() => navigate("admin")} className={page === "admin" ? "mobile-active" : ""}>▦<small>Admin</small></button>
      </nav>
    </div>
  );
}
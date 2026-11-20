export type MediaType = "Manga" | "Manhwa" | "Manhua" | "Novel";

export type Title = {
  id: string;
  name: string;
  type: MediaType;
  genre: string;
  status: "Ongoing" | "Completed";
  description: string;
  cover: string;
  latest: string;
};

export const demoTitles: Title[] = [
  {
    id: "moonlit-archive",
    name: "The Moonlit Archive",
    type: "Manhwa",
    genre: "Fantasy",
    status: "Ongoing",
    description: "Seorang penjaga perpustakaan menemukan arsip misterius yang menyimpan kisah dari dunia lain.",
    cover: "https://placehold.co/420x600/28243b/f4efff?text=Moonlit%0AArchive",
    latest: "Chapter 18"
  },
  {
    id: "paper-kingdom",
    name: "Paper Kingdom",
    type: "Manga",
    genre: "Adventure",
    status: "Completed",
    description: "Petualangan di negeri yang seluruh kotanya dibangun dari kertas dan tinta.",
    cover: "https://placehold.co/420x600/3b3027/fff1dc?text=Paper%0AKingdom",
    latest: "Chapter 42"
  },
  {
    id: "jade-signal",
    name: "Jade Signal",
    type: "Manhua",
    genre: "Mystery",
    status: "Ongoing",
    description: "Sebuah sinyal kuno membawa seorang penjelajah pada rahasia yang terlupakan.",
    cover: "https://placehold.co/420x600/233b36/e8fff5?text=Jade%0ASignal",
    latest: "Chapter 9"
  },
  {
    id: "quiet-orbit",
    name: "Quiet Orbit",
    type: "Novel",
    genre: "Sci-Fi",
    status: "Ongoing",
    description: "Catatan seorang teknisi muda yang menjaga stasiun kecil di ujung tata surya.",
    cover: "https://placehold.co/420x600/26364b/edf5ff?text=Quiet%0AOrbit",
    latest: "Chapter 12"
  },
  {
    id: "winter-postcard",
    name: "Winter Postcard",
    type: "Manhwa",
    genre: "Drama",
    status: "Completed",
    description: "Dua sahabat lama saling berkirim surat setelah bertahun-tahun berpisah.",
    cover: "https://placehold.co/420x600/39414b/f5f7fa?text=Winter%0APostcard",
    latest: "Chapter 30"
  },
  {
    id: "small-worlds",
    name: "Small Worlds",
    type: "Manga",
    genre: "Slice of Life",
    status: "Ongoing",
    description: "Kisah-kisah sederhana dari orang-orang yang tinggal di satu kota kecil.",
    cover: "https://placehold.co/420x600/494035/fff5e8?text=Small%0AWorlds",
    latest: "Chapter 6"
  }
];
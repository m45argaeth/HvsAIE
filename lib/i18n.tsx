"use client"

import * as React from "react"
export type Locale = "id" | "en"
export const LOCALES: Locale[] = ["id", "en"]
export const DEFAULT_LOCALE: Locale = "id"
const STORAGE_KEY = "hvsai-locale"

/* ------------------------------------------------------------------ */
/*  English dictionary                                                 */
/* ------------------------------------------------------------------ */

const en = {
  header: { playground: "Playground", tryNow: "Try Now" },
  hero: {
    badge: "An educational playground for how humans and AI perceive the world differently",
    title: "Human vs AI Explorer",
    subtitle:
      "Discover the fascinating gap between human perception and AI analysis. See how a cat is a 'cute animal' to you but 'numerical features' to a machine — all in your browser.",
    tryNow: "Try Now",
    randomExample: "Random Example",
    tagline: "Humans See Meaning, AI Sees Numbers",
    mono: "Humans feel context. AI reads data.",
  },
  features: {
    heading: "Two worlds, one content.",
    subtitle:
      "Every piece of media is interpreted differently by humans and AI. Explore the contrast.",
    humanView: {
      title: "Human View",
      formula: "perception → meaning → emotion",
      body: "Humans interpret content through experience, culture, and emotion. A cat photo triggers feelings of warmth and cuteness. A song evokes memories and moods.",
    },
    aiView: {
      title: "AI View",
      formula: "input → features → vectors",
      body: "AI breaks down content into numerical features — tokens for text, pixels for images, waveforms for audio. It sees patterns in numbers, not meaning in context.",
    },
    comparison: {
      title: "Side-by-Side",
      formula: "human(A) ≠ AI(A)",
      body: "Place human interpretation next to AI analysis. See exactly where perception diverges from computation.",
    },
  },
  how: {
    heading: "How it works",
    subtitle: "Four media types, each transformed differently.",
    steps: [
      {
        title: "1. Choose media type",
        body: "Text, Image, Audio, or Video — each requires a different AI pipeline to process.",
      },
      {
        title: "2. See the transformation",
        body: "Watch how raw content is decomposed into tokens, pixels, waveforms, or frames, then converted to numerical features.",
      },
      {
        title: "3. Compare perspectives",
        body: "View human interpretation alongside AI analysis. Understand why AI 'sees' things differently than we do.",
      },
    ],
  },
  cta: {
    heading: "Ready to see the world through AI's eyes?",
    subtitle:
      "No sign-up, no server calls. Just you, your curiosity, and the fascinating gap between human and machine perception.",
    button: "Open the Playground",
  },
  playground: {
    title: "The Playground",
    subtitle:
      "Explore how humans and AI interpret the same content differently. Everything runs locally in your browser.",
    intro: {
      title: "Welcome to the Human vs AI Explorer",
      body: "This playground lets you compare how humans perceive media content versus how AI systems analyze it. Choose a media type below, explore examples, and discover the fascinating differences.",
    },
  },
  tabs: {
    text: "Text",
    image: "Image",
    audio: "Audio",
    video: "Video",
  },
  humanView: {
    title: "How Humans See It",
    subtitle: "Perception through experience and emotion",
    cat: "A cute animal — brings feelings of warmth, comfort, companionship",
    music: "Sound that moves us — evokes emotions, memories, moods",
    photo: "A captured moment — triggers memories, feelings, stories",
    text: "Words that convey meaning — understood through context and culture",
  },
  aiView: {
    title: "How AI Sees It",
    subtitle: "Analysis through numerical features",
    tokens: "Tokens",
    pixels: "Pixels",
    waveforms: "Waveforms",
    embeddings: "Embeddings",
    numericalFeatures: "Numerical Features",
    tokenDesc: "Words broken into subword units, each mapped to a vector",
    pixelDesc: "Grid of RGB values, each pixel a triplet of numbers (0-255)",
    waveformDesc: "Amplitude values over time, sampled at thousands of points per second",
    embeddingDesc: "High-dimensional vectors capturing semantic meaning",
    featureDesc: "Extracted numerical characteristics used for classification",
  },
  comparison: {
    title: "Side-by-Side Comparison",
    subtitle: "Human vs AI — see the contrast",
    human: "Human",
    ai: "AI",
  },
  pipeline: {
    title: "Transformation Pipeline",
    subtitle: "How each media type is processed by AI",
    textPipeline: ["Text Input", "Tokenizer", "Token IDs", "Embedding Layer", "Vector Representation"],
    imagePipeline: ["Image Input", "Pixel Extraction", "RGB Values", "Feature Extraction", "Embedding Vector"],
    audioPipeline: ["Audio Input", "Waveform", "Spectrogram", "Feature Extraction", "Audio Embedding"],
    videoPipeline: ["Video Input", "Frame Extraction", "Frame Features", "Temporal Aggregation", "Video Embedding"],
  },
  insights: {
    heading: "Did you know?",
    items: {
      id: [
        "Manusia memproses gambar dalam 13 milidetik — lebih cepat dari kedipan mata, namun AI membutuhkan waktu untuk menghitung setiap piksel.",
        "Sebuah foto kucing bisa jadi 'lucu' bagi manusia, tapi bagi AI itu adalah kumpulan 192.000 piksel dengan nilai RGB spesifik.",
        "AI memecah teks menjadi 'token' — subkata yang masing-masing direpresentasikan sebagai vektor angka.",
        "Manusia mendengar musik dan merasakan emosi. AI mendengar gelombang suara dan mengekstraksi fitur numerik.",
        "Video untuk AI adalah ratusan gambar per detik, masing-masing dianalisis secara independen lalu digabungkan.",
        "Embedding memungkinkan AI menangkap makna — 'king' dan 'queen' dekat dalam ruang vektor meski berbeda kata.",
        "Manusia menggunakan konteks budaya untuk memahami humor. AI hanya melihat pola statistik dalam teks.",
        "Warna merah bisa berarti 'bahaya' atau 'cinta' bagi manusia. Bagi AI, itu hanya nilai RGB (255, 0, 0).",
      ],
      en: [
        "Humans process images in 13 milliseconds — faster than a blink — but AI needs time to calculate every pixel.",
        "A cat photo can be 'cute' to humans, but to AI it's a collection of 192,000 pixels with specific RGB values.",
        "AI breaks text into 'tokens' — sub-word units each represented as a vector of numbers.",
        "Humans hear music and feel emotions. AI hears sound waves and extracts numerical features.",
        "Video for AI is hundreds of images per second, each analyzed independently then combined.",
        "Embeddings let AI capture meaning — 'king' and 'queen' are close in vector space despite being different words.",
        "Humans use cultural context to understand humor. AI only sees statistical patterns in text.",
        "The color red can mean 'danger' or 'love' to humans. To AI, it's just RGB values (255, 0, 0).",
      ],
    },
  },
  share: {
    copyResult: "Copy result",
    copied: "Copied!",
    shareLink: "Share link",
    linkCopied: "Link copied!",
    exportPng: "Export PNG",
  },
  footer: {
    tagline: "Human vs AI Explorer — discover how humans and AI perceive the world differently.",
    home: "Home",
    playground: "Playground",
    madeWith: "Made with ❤️ by",
  },
}

/* ------------------------------------------------------------------ */
/*  Indonesian dictionary                                              */
/* ------------------------------------------------------------------ */

const id: typeof en = {
  header: { playground: "Playground", tryNow: "Coba Sekarang" },
  hero: {
    badge: "Playground edukasi tentang bagaimana manusia dan AI mempersepsikan dunia secara berbeda",
    title: "Human vs AI Explorer",
    subtitle:
      "Temukan kesenjangan menarik antara persepsi manusia dan analisis AI. Lihat bagaimana foto kucing adalah 'hewan lucu' bagimu tapi 'fitur numerik' bagi mesin — semuanya di browser-mu.",
    tryNow: "Coba Sekarang",
    randomExample: "Contoh Acak",
    tagline: "Manusia Melihat Makna, AI Melihat Angka",
    mono: "Manusia merasakan konteks. AI membaca data.",
  },
  features: {
    heading: "Dua dunia, satu konten.",
    subtitle:
      "Setiap media diinterpretasikan berbeda oleh manusia dan AI. Jelajahi kontrasnya.",
    humanView: {
      title: "Perspektif Manusia",
      formula: "persepsi → makna → emosi",
      body: "Manusia menginterpretasi konten melalui pengalaman, budaya, dan emosi. Foto kucing memicu perasaan hangat dan keakraban. Lagu membangkitkan memori dan suasana hati.",
    },
    aiView: {
      title: "Perspektif AI",
      formula: "input → fitur → vektor",
      body: "AI memecah konten menjadi fitur numerik — token untuk teks, piksel untuk gambar, gelombang untuk audio. AI melihat pola dalam angka, bukan makna dalam konteks.",
    },
    comparison: {
      title: "Perbandingan Side-by-Side",
      formula: "manusia(A) ≠ AI(A)",
      body: "Letakkan interpretasi manusia di sebelah analisis AI. Lihat persis di mana persepsi berbeda dari komputasi.",
    },
  },
  how: {
    heading: "Cara kerjanya",
    subtitle: "Empat tipe media, masing-masing ditransformasi secara berbeda.",
    steps: [
      {
        title: "1. Pilih tipe media",
        body: "Teks, Gambar, Audio, atau Video — masing-masing membutuhkan pipeline AI yang berbeda untuk diproses.",
      },
      {
        title: "2. Lihat transformasinya",
        body: "Saksikan bagaimana konten mentah didekomposisi menjadi token, piksel, gelombang, atau frame, lalu dikonversi ke fitur numerik.",
      },
      {
        title: "3. Bandingkan perspektif",
        body: "Lihat interpretasi manusia berdampingan dengan analisis AI. Pahami mengapa AI 'melihat' hal-hal berbeda dari kita.",
      },
    ],
  },
  cta: {
    heading: "Siap melihat dunia melalui mata AI?",
    subtitle:
      "Tanpa daftar, tanpa panggilan server. Hanya kamu, rasa ingin tahumu, dan kesenjangan menarik antara persepsi manusia dan mesin.",
    button: "Buka Playground",
  },
  playground: {
    title: "Playground",
    subtitle:
      "Jelajahi bagaimana manusia dan AI menginterpretasi konten yang sama secara berbeda. Semuanya berjalan lokal di browser-mu.",
    intro: {
      title: "Selamat Datang di Human vs AI Explorer",
      body: "Playground ini memungkinkanmu membandingkan bagaimana manusia mempersepsikan konten media versus bagaimana sistem AI menganalisisnya. Pilih tipe media di bawah, jelajahi contoh, dan temukan perbedaan menariknya.",
    },
  },
  tabs: {
    text: "Teks",
    image: "Gambar",
    audio: "Audio",
    video: "Video",
  },
  humanView: {
    title: "Bagaimana Manusia Melihatnya",
    subtitle: "Persepsi melalui pengalaman dan emosi",
    cat: "Hewan lucu — membawa perasaan hangat, nyaman, kebersamaan",
    music: "Suara yang menggerakkan — membangkitkan emosi, memori, suasana hati",
    photo: "Momen yang tertangkap — memicu memori, perasaan, cerita",
    text: "Kata-kata yang menyampaikan makna — dipahami melalui konteks dan budaya",
  },
  aiView: {
    title: "Bagaimana AI Melihatnya",
    subtitle: "Analisis melalui fitur numerik",
    tokens: "Token",
    pixels: "Piksel",
    waveforms: "Gelombang",
    embeddings: "Embedding",
    numericalFeatures: "Fitur Numerik",
    tokenDesc: "Kata dipecah menjadi unit subkata, masing-masing dipetakan ke vektor",
    pixelDesc: "Grid nilai RGB, setiap piksel adalah triplet angka (0-255)",
    waveformDesc: "Nilai amplitudo dari waktu ke waktu, disampling ribuan titik per detik",
    embeddingDesc: "Vektor dimensi tinggi yang menangkap makna semantik",
    featureDesc: "Fitur numerik yang diekstrak untuk klasifikasi",
  },
  comparison: {
    title: "Perbandingan Side-by-Side",
    subtitle: "Manusia vs AI — lihat kontrasnya",
    human: "Manusia",
    ai: "AI",
  },
  pipeline: {
    title: "Pipeline Transformasi",
    subtitle: "Bagaimana setiap tipe media diproses oleh AI",
    textPipeline: ["Input Teks", "Tokenizer", "ID Token", "Embedding Layer", "Representasi Vektor"],
    imagePipeline: ["Input Gambar", "Ekstraksi Piksel", "Nilai RGB", "Ekstraksi Fitur", "Vektor Embedding"],
    audioPipeline: ["Input Audio", "Gelombang", "Spektrogram", "Ekstraksi Fitur", "Embedding Audio"],
    videoPipeline: ["Input Video", "Ekstraksi Frame", "Fitur Frame", "Agregasi Temporal", "Embedding Video"],
  },
  insights: {
    heading: "Tahukah kamu?",
    items: {
      id: [
        "Manusia memproses gambar dalam 13 milidetik — lebih cepat dari kedipan mata, namai AI membutuhkan waktu untuk menghitung setiap piksel.",
        "Sebuah foto kucing bisa jadi 'lucu' bagi manusia, tapi bagi AI itu adalah kumpulan 192.000 piksel dengan nilai RGB spesifik.",
        "AI memecah teks menjadi 'token' — subkata yang masing-masing direpresentasikan sebagai vektor angka.",
        "Manusia mendengar musik dan merasakan emosi. AI mendengar gelombang suara dan mengekstraksi fitur numerik.",
        "Video untuk AI adalah ratusan gambar per detik, masing-masing dianalisis secara independen lalu digabungkan.",
        "Embedding memungkinkan AI menangkap makna — 'king' dan 'queen' dekat dalam ruang vektor meski berbeda kata.",
        "Manusia menggunakan konteks budaya untuk memahami humor. AI hanya melihat pola statistik dalam teks.",
        "Warna merah bisa berarti 'bahaya' atau 'cinta' bagi manusia. Bagi AI, itu hanya nilai RGB (255, 0, 0).",
      ],
      en: [
        "Humans process images in 13 milliseconds — faster than a blink — but AI needs time to calculate every pixel.",
        "A cat photo can be 'cute' to humans, but to AI it's a collection of 192,000 pixels with specific RGB values.",
        "AI breaks text into 'tokens' — sub-word units each represented as a vector of numbers.",
        "Humans hear music and feel emotions. AI hears sound waves and extracts numerical features.",
        "Video for AI is hundreds of images per second, each analyzed independently then combined.",
        "Embeddings let AI capture meaning — 'king' and 'queen' are close in vector space despite being different words.",
        "Humans use cultural context to understand humor. AI only sees statistical patterns in text.",
        "The color red can mean 'danger' or 'love' to humans. To AI, it's just RGB values (255, 0, 0).",
      ],
    },
  },
  share: {
    copyResult: "Salin hasil",
    copied: "Tersalin!",
    shareLink: "Bagikan tautan",
    linkCopied: "Tautan tersalin!",
    exportPng: "Ekspor PNG",
  },
  footer: {
    tagline: "Human vs AI Explorer — temukan bagaimana manusia dan AI mempersepsikan dunia secara berbeda.",
    home: "Beranda",
    playground: "Playground",
    madeWith: "Dibuat dengan ❤️ oleh",
  },
}

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

export type Dict = typeof en

const DICTS: Record<Locale, Dict> = { en, id }

interface I18nContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  t: Dict
}

const I18nContext = React.createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(DEFAULT_LOCALE)

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === "id" || stored === "en") setLocaleState(stored)
    } catch {
      /* ignore */
    }
  }, [])

  React.useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = locale
  }, [locale])

  const setLocale = React.useCallback((l: Locale) => {
    setLocaleState(l)
    try {
      window.localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }, [])

  const value = React.useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: DICTS[locale],
    }),
    [locale, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = React.useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within an I18nProvider")
  return ctx
}

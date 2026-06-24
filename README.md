# 🧠 Human vs AI Explorer

> **Humans See Meaning, AI Sees Numbers**

An educational playground that reveals the fascinating gap between human perception and AI analysis. See how a cat is a "cute animal" to you but "numerical features" to a machine.

## 🌐 Live Demo

**[hvsai-playground.vercel.app](https://hvsai-playground.vercel.app)**

## ✨ Features

- **4 Media Types**: Text, Image, Audio, and Video — each transformed differently
- **Human View**: See how humans interpret content through emotion and context
- **AI View**: Discover how AI breaks down the same content into numerical features
- **Side-by-Side Comparison**: Place human and AI interpretations next to each other
- **Transformation Pipelines**: Visualize how each media type is processed by AI
- **Educational Insights**: Learn fascinating facts about human vs AI perception
- **i18n Support**: Available in English and Indonesian

## 🎯 What You'll Learn

- Why AI "sees" a cat photo as RGB pixel values instead of a cute animal
- How text becomes tokens, then embedding vectors
- Why music is sound waves to AI but emotion to humans
- How video frames are analyzed independently by machines
- The fundamental difference between human meaning and machine computation

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui (Radix primitives)
- **Icons**: Lucide React
- **Theming**: next-themes (dark/light mode)
- **i18n**: Custom React Context (English + Indonesian)

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🌍 EBN Universe

This project is **#11** in the [EBN Universe](https://sinigajelasin.vercel.app) series of educational AI playgrounds:

| # | Playground | URL | Status |
|---|-----------|-----|--------|
| 1 | Everything Becomes Numbers | [ebn-playground.vercel.app](https://ebn-playground.vercel.app) | ✅ Live |
| 2 | Text To Binary | [ttb-playground.vercel.app](https://ttb-playground.vercel.app) | ✅ Live |
| 3 | Video Frame Explorer | [vfe-playground.vercel.app](https://vfe-playground.vercel.app) | ✅ Live |
| 4 | Token Explorer | [te-playground.vercel.app](https://te-playground.vercel.app) | ✅ Live |
| 5 | Embedding Explorer | [ee-playground.vercel.app](https://ee-playground.vercel.app) | ✅ Live |
| 6 | Human vs AI Explorer | [hvsai-playground.vercel.app](https://hvsai-playground.vercel.app) | ✅ Live |
| 7 | Prompt Explorer | — | 🚧 Coming Soon |
| 8 | Hallucination Explorer | — | 🚧 Coming Soon |
| 9 | Compression Explorer | — | 🚧 Coming Soon |
| 10 | Internet Packet Explorer | — | 🚧 Coming Soon |

### Human Mind Universe

| # | Playground | URL | Status |
|---|-----------|-----|--------|
| 1 | Bias Detector | [bd-playground-snowy.vercel.app](https://bd-playground-snowy.vercel.app) | ✅ Live |
| 2 | Memory Explorer | — | 🚧 Coming Soon |
| 3 | False Memory Explorer | — | 🚧 Coming Soon |
| 4 | Attention Explorer | — | 🚧 Coming Soon |
| 5 | Dopamine Explorer | — | 🚧 Coming Soon |

## 📁 Project Structure

```
HvsAIE/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles
│   └── playground/
│       ├── page.tsx        # Playground page (server component)
│       └── playground-inner.tsx  # Client-side playground
├── components/
│   ├── landing/
│   │   ├── hero.tsx        # Hero section with tagline
│   │   ├── feature-sections.tsx  # Feature cards
│   │   ├── how-it-works.tsx # How it works steps
│   │   └── cta.tsx         # Call to action
│   ├── playground/
│   │   ├── playground-intro.tsx  # Welcome card
│   │   ├── human-view.tsx  # Human perspective
│   │   ├── ai-view.tsx     # AI perspective
│   │   ├── side-by-side-comparison.tsx  # Split comparison
│   │   ├── transformation-pipeline.tsx  # Pipeline visualization
│   │   ├── educational-insights.tsx  # Learning insights
│   │   └── share-features.tsx  # Share/copy functionality
│   ├── ui/                 # shadcn/ui components
│   ├── site-header.tsx     # Navigation header
│   ├── site-footer.tsx     # Footer with series links
│   ├── language-toggle.tsx # EN/ID language switch
│   ├── theme-toggle.tsx    # Dark/light mode toggle
│   └── theme-provider.tsx  # Theme context provider
├── lib/
│   ├── comparisons.ts      # Media types, examples, pipelines
│   ├── i18n.tsx            # Internationalization
│   ├── site-config.ts      # Site identity & series config
│   ├── utils.ts            # Utility functions
│   ├── format.ts           # Number formatting
│   └── share.ts            # Share/copy helpers
├── tailwind.config.ts      # Tailwind configuration
├── next.config.mjs         # Next.js configuration
└── package.json
```

## 📝 License

Created by [Ga | Curious About Everything 🔍](https://x.com/sinigajelasin)

Part of the EBN Universe — educational playgrounds exploring how AI works.

"use client"

import Link from "next/link"
import { ArrowRight, Shuffle, Eye, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"
import { randomExample } from "@/lib/comparisons"

export function Hero() {
  const { t } = useI18n()

  const handleRandom = () => {
    const example = randomExample()
    window.location.href = `/playground?type=${example.type}&example=${example.id}`
  }

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container relative flex flex-col items-center py-24 text-center sm:py-32">
        <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
          {t.hero.badge}
        </div>

        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-bold tracking-tight sm:text-7xl">
          {t.hero.title}
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
          {t.hero.subtitle}
        </p>

        {/* Human vs AI visual tagline */}
        <div className="mt-8 flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full bg-muted/60 px-4 py-2">
            <Eye className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium">Human</span>
          </div>
          <span className="text-lg font-bold text-muted-foreground">vs</span>
          <div className="flex items-center gap-2 rounded-full bg-muted/60 px-4 py-2">
            <Cpu className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium">AI</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/playground">
              {t.hero.tryNow}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" onClick={handleRandom}>
            <Shuffle className="h-4 w-4" />
            {t.hero.randomExample}
          </Button>
        </div>

        <p className="mt-8 font-mono text-sm text-muted-foreground">
          {t.hero.mono}
        </p>
      </div>
    </section>
  )
}

"use client"

import { Eye, Cpu, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"
import type { ComparisonExample } from "@/lib/comparisons"

interface SideBySideComparisonProps {
  example: ComparisonExample
}

export function SideBySideComparison({ example }: SideBySideComparisonProps) {
  const { t } = useI18n()

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-lg">{t.comparison.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{t.comparison.subtitle}</p>
      </CardHeader>
      <CardContent className="p-6">
        {/* Split view */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Human Side */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white">
                <Eye className="h-4 w-4" />
              </div>
              <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                {t.comparison.human}
              </h3>
            </div>

            {/* Example visual */}
            <div className="flex h-24 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
              <span className="text-5xl">{example.emoji}</span>
            </div>

            {/* Human interpretation */}
            <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-950/30">
              <p className="font-medium text-foreground">{example.human.summary}</p>
              <p className="mt-2 text-sm text-muted-foreground">{example.human.details}</p>
              {example.human.emotion && (
                <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                  💭 {example.human.emotion}
                </p>
              )}
            </div>
          </div>

          {/* Center divider */}
          <div className="hidden md:flex md:col-span-2 md:justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="h-px w-px flex-1 bg-border" />
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted shadow-sm">
                <ArrowRight className="h-5 w-5 rotate-90 text-muted-foreground md:rotate-0" />
              </div>
              <div className="h-px w-px flex-1 bg-border" />
            </div>
          </div>

          {/* AI Side */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-white">
                <Cpu className="h-4 w-4" />
              </div>
              <h3 className="font-semibold text-orange-600 dark:text-orange-400">
                {t.comparison.ai}
              </h3>
            </div>

            {/* AI representation visual */}
            <div className="flex h-24 items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30">
              <div className="grid grid-cols-5 gap-1">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-3 w-3 rounded-sm bg-gradient-to-br from-orange-400 to-red-400"
                    style={{ opacity: 0.2 + Math.random() * 0.8 }}
                  />
                ))}
              </div>
            </div>

            {/* AI features */}
            <div className="rounded-xl bg-orange-50 p-4 dark:bg-orange-950/30">
              <p className="text-sm text-muted-foreground">{example.ai.summary}</p>
              <div className="mt-3 space-y-2">
                {example.ai.features.slice(0, 3).map((feature, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{feature.name}</span>
                    <span className="font-mono text-xs text-orange-600 dark:text-orange-400">
                      {feature.value.length > 25
                        ? feature.value.slice(0, 25) + "…"
                        : feature.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom insight */}
        <div className="mt-6 rounded-xl border bg-muted/30 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">The Gap: </span>
            The same content creates <span className="font-medium text-blue-600 dark:text-blue-400">meaning and emotion</span> in
            humans, but <span className="font-medium text-orange-600 dark:text-orange-400">numbers and patterns</span> in AI.
            This fundamental difference shapes how each "understands" the world.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

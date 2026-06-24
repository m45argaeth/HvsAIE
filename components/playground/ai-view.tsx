"use client"

import { Cpu, Hash, Binary, Box, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"
import type { ComparisonExample } from "@/lib/comparisons"

interface AiViewProps {
  example: ComparisonExample
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Tokens: Hash,
  "Token IDs": Binary,
  "Embedding Dim": Box,
  Resolution: Box,
  "Pixel Values": Hash,
  "Object Detection": Activity,
  "Sample Rate": Activity,
  Waveform: Activity,
  "Frame Rate": Activity,
}

export function AiView({ example }: AiViewProps) {
  const { t } = useI18n()

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
            <Cpu className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-lg">{t.aiView.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{t.aiView.subtitle}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {/* Visual representation */}
        <div className="mb-6 flex items-center justify-center">
          <div className="relative">
            <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-100 to-red-100 shadow-lg dark:from-orange-900/30 dark:to-red-900/30">
              <div className="grid grid-cols-4 gap-1">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-4 w-4 rounded bg-gradient-to-br from-orange-400 to-red-400 opacity-80"
                    style={{
                      opacity: 0.3 + Math.random() * 0.7,
                      animationDelay: `${i * 50}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white shadow-md">
              <Binary className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-xl bg-orange-50 p-4 dark:bg-orange-950/30">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {example.ai.summary}
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {example.ai.features.map((feature, i) => {
            const Icon = iconMap[feature.name] || Hash
            return (
              <div
                key={i}
                className="animate-fade-in rounded-xl border p-4 transition-all hover:shadow-md"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium">{feature.name}</span>
                </div>
                <p className="mt-1 font-mono text-xs text-orange-600 dark:text-orange-400">
                  {feature.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Key insight */}
        <div className="mt-6 rounded-xl border border-dashed border-orange-200 p-4 dark:border-orange-800">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Key Insight: </span>
            AI processes content as <span className="font-medium">numbers</span>. Every pixel,
            every sound wave, every word becomes a numerical feature. The AI captures{" "}
            <span className="font-medium">patterns in data</span>, not{" "}
            <span className="font-medium">meaning in context</span>.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

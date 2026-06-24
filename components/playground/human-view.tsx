"use client"

import { Eye, Heart, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n"
import type { ComparisonExample } from "@/lib/comparisons"

interface HumanViewProps {
  example: ComparisonExample
}

export function HumanView({ example }: HumanViewProps) {
  const { t } = useI18n()

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white">
            <Eye className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-lg">{t.humanView.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{t.humanView.subtitle}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {/* Visual representation */}
        <div className="mb-6 flex items-center justify-center">
          <div className="relative">
            <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 text-6xl shadow-lg dark:from-blue-900/30 dark:to-purple-900/30">
              {example.emoji}
            </div>
            <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white shadow-md">
              <Heart className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-950/30">
          <div className="flex items-start gap-3">
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
            <div>
              <p className="font-medium text-foreground">{example.human.summary}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {example.human.details}
              </p>
            </div>
          </div>
        </div>

        {/* Emotion tag */}
        {example.human.emotion && (
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Emotion:</span>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
              {example.human.emotion}
            </Badge>
          </div>
        )}

        {/* Key insight */}
        <div className="mt-6 rounded-xl border border-dashed border-blue-200 p-4 dark:border-blue-800">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Key Insight: </span>
            Humans process content through <span className="font-medium">experience</span>,{" "}
            <span className="font-medium">emotion</span>, and{" "}
            <span className="font-medium">cultural context</span>. A single image can evoke
            memories, feelings, and stories that are deeply personal.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

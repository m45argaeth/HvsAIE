"use client"

import { ArrowRight, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"
import { MediaType, PIPELINE_DATA } from "@/lib/comparisons"

interface TransformationPipelineProps {
  type: MediaType
}

const typeColors: Record<MediaType, { bg: string; border: string; text: string; icon: string }> = {
  [MediaType.TEXT]: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-600 dark:text-blue-400",
    icon: "bg-blue-500",
  },
  [MediaType.IMAGE]: {
    bg: "bg-green-50 dark:bg-green-950/30",
    border: "border-green-200 dark:border-green-800",
    text: "text-green-600 dark:text-green-400",
    icon: "bg-green-500",
  },
  [MediaType.AUDIO]: {
    bg: "bg-purple-50 dark:bg-purple-950/30",
    border: "border-purple-200 dark:border-purple-800",
    text: "text-purple-600 dark:text-purple-400",
    icon: "bg-purple-500",
  },
  [MediaType.VIDEO]: {
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-200 dark:border-red-800",
    text: "text-red-600 dark:text-red-400",
    icon: "bg-red-500",
  },
}

const typeEmojis: Record<MediaType, string> = {
  [MediaType.TEXT]: "📝",
  [MediaType.IMAGE]: "🖼️",
  [MediaType.AUDIO]: "🎵",
  [MediaType.VIDEO]: "🎬",
}

export function TransformationPipeline({ type }: TransformationPipelineProps) {
  const { t } = useI18n()
  const pipeline = PIPELINE_DATA.find((p) => p.type === type)
  const colors = typeColors[type]

  if (!pipeline) return null

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors.icon} text-white`}>
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-lg">{t.pipeline.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{t.pipeline.subtitle}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {/* Pipeline visualization */}
        <div className="mb-6">
          <p className={`mb-4 text-center text-sm font-medium ${colors.text}`}>
            {pipeline.description}
          </p>

          {/* Visual pipeline */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {pipeline.steps.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className={`animate-fade-in rounded-xl border ${colors.border} ${colors.bg} px-4 py-3 text-center transition-all hover:shadow-md`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="text-2xl">{typeEmojis[type]}</div>
                  <p className="mt-1 text-xs font-medium">{step}</p>
                </div>
                {i < pipeline.steps.length - 1 && (
                  <ArrowRight className={`h-5 w-5 ${colors.text} animate-fade-in`} style={{ animationDelay: `${i * 100 + 50}ms` }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Detailed breakdown */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pipeline.steps.map((step, i) => (
            <div
              key={i}
              className="animate-fade-in rounded-xl border p-4 transition-all hover:shadow-sm"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-2">
                <div className={`flex h-6 w-6 items-center justify-center rounded-full ${colors.icon} text-xs font-bold text-white`}>
                  {i + 1}
                </div>
                <span className="text-sm font-medium">{step}</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {i === 0 && "Raw input content is received by the system."}
                {i === 1 && "Content is decomposed into analyzable components."}
                {i === 2 && "Components are converted to numerical representations."}
                {i === 3 && "Features are extracted using neural networks."}
                {i === 4 && "Final high-dimensional vector captures meaning."}
              </p>
            </div>
          ))}
        </div>

        {/* Technical note */}
        <div className={`mt-6 rounded-xl border ${colors.border} ${colors.bg} p-4`}>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Technical Note: </span>
            {type === MediaType.TEXT && "Text tokenization uses BPE (Byte-Pair Encoding) or WordPiece. Each token maps to a learned embedding vector."}
            {type === MediaType.IMAGE && "Images are processed through CNN layers. Early layers detect edges, middle layers detect shapes, deep layers detect objects."}
            {type === MediaType.AUDIO && "Audio is converted to spectrograms (time-frequency representation) before feature extraction with mel-frequency cepstral coefficients."}
            {type === MediaType.VIDEO && "Video combines spatial features (from each frame) with temporal features (motion between frames) using 3D convolutions or transformers."}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

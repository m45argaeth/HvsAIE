"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { useI18n } from "@/lib/i18n"
import { MediaType, randomExample, randomExampleExcept, EXAMPLES_BY_TYPE } from "@/lib/comparisons"
import { PlaygroundIntro } from "@/components/playground/playground-intro"
import { HumanView } from "@/components/playground/human-view"
import { AiView } from "@/components/playground/ai-view"
import { SideBySideComparison } from "@/components/playground/side-by-side-comparison"
import { TransformationPipeline } from "@/components/playground/transformation-pipeline"
import { EducationalInsights } from "@/components/playground/educational-insights"
import { ShareFeatures } from "@/components/playground/share-features"

export function PlaygroundInner() {
  const { t } = useI18n()
  const searchParams = useSearchParams()

  const [activeType, setActiveType] = React.useState<MediaType>(MediaType.TEXT)
  const [activeExample, setActiveExample] = React.useState(() => randomExample(MediaType.TEXT))
  const [activeTab, setActiveTab] = React.useState("comparison")

  React.useEffect(() => {
    const urlType = searchParams.get("type") as MediaType | null
    const urlExample = searchParams.get("example")

    if (urlType && Object.values(MediaType).includes(urlType)) {
      setActiveType(urlType)
      if (urlExample) {
        const examples = EXAMPLES_BY_TYPE[urlType]
        const found = examples.find((e) => e.id === urlExample)
        if (found) {
          setActiveExample(found)
          return
        }
      }
      setActiveExample(randomExample(urlType))
    }
  }, [searchParams])

  const handleTypeChange = (type: MediaType) => {
    setActiveType(type)
    setActiveExample(randomExample(type))
  }

  const handleRandom = () => {
    setActiveExample(randomExampleExcept(activeExample.id, activeType))
  }

  return (
    <>
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.playground.title}
        </h1>
        <p className="mt-4 text-muted-foreground">{t.playground.subtitle}</p>
      </div>

      <div className="mx-auto mt-8 max-w-5xl space-y-8">
        <PlaygroundIntro />

        {/* Media Type Tabs */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-medium text-muted-foreground">
                {t.playground.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {(Object.values(MediaType) as MediaType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => handleTypeChange(type)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      activeType === type
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {type === "text" && "📝 "}
                    {type === "image" && "🖼️ "}
                    {type === "audio" && "🎵 "}
                    {type === "video" && "🎬 "}
                    {t.tabs[type]}
                  </button>
                ))}
              </div>
            </div>
            <ShareFeatures example={activeExample} />
          </div>

          {/* Example Selector */}
          <div className="flex flex-wrap gap-2">
            {EXAMPLES_BY_TYPE[activeType].map((example) => (
              <button
                key={example.id}
                onClick={() => setActiveExample(example)}
                className={`rounded-lg border px-3 py-2 text-sm transition-all ${
                  activeExample.id === example.id
                    ? "border-primary bg-primary/10 text-foreground shadow-sm"
                    : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:bg-muted/50"
                }`}
              >
                <span className="mr-1.5">{example.emoji}</span>
                {example.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="-mx-4 flex justify-start overflow-x-auto px-4 pb-2 sm:mx-0 sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
            <TabsList className="flex-nowrap">
              <TabsTrigger value="comparison">{t.comparison.title}</TabsTrigger>
              <TabsTrigger value="human">{t.humanView.title}</TabsTrigger>
              <TabsTrigger value="ai">{t.aiView.title}</TabsTrigger>
              <TabsTrigger value="pipeline">{t.pipeline.title}</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="comparison" id="comparison">
            <SideBySideComparison example={activeExample} />
          </TabsContent>

          <TabsContent value="human" id="human">
            <HumanView example={activeExample} />
          </TabsContent>

          <TabsContent value="ai" id="ai">
            <AiView example={activeExample} />
          </TabsContent>

          <TabsContent value="pipeline" id="pipeline">
            <TransformationPipeline type={activeType} />
          </TabsContent>
        </Tabs>

        <EducationalInsights />
      </div>
    </>
  )
}

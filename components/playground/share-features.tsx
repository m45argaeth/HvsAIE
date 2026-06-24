"use client"

import * as React from "react"
import { Check, Copy, Link2 } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { copyToClipboard, buildShareUrl } from "@/lib/share"
import type { ComparisonExample } from "@/lib/comparisons"

interface ShareFeaturesProps {
  example: ComparisonExample | null
}

type Status = "idle" | "copied" | "linked"

export function ShareFeatures({ example }: ShareFeaturesProps) {
  const { t } = useI18n()
  const [status, setStatus] = React.useState<Status>("idle")
  const disabled = !example

  React.useEffect(() => {
    if (status === "idle") return
    const tm = setTimeout(() => setStatus("idle"), 1800)
    return () => clearTimeout(tm)
  }, [status])

  const copyResult = async () => {
    if (!example) return
    const payload = `Human vs AI Explorer\n\nExample: ${example.label}\n\nHuman: ${example.human.summary}\n\nAI: ${example.ai.summary}\n\nExplore at: ${buildShareUrl(example.type, example.id)}`
    const ok = await copyToClipboard(payload)
    if (ok) setStatus("copied")
  }

  const shareLink = async () => {
    if (!example || typeof window === "undefined") return
    const url = buildShareUrl(example.type, example.id)
    const ok = await copyToClipboard(url)
    if (ok) setStatus("linked")
    else window.location.href = `/playground?type=${example.type}&example=${example.id}`
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" size="sm" onClick={copyResult} disabled={disabled}>
        {status === "copied" ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        {status === "copied" ? t.share.copied : t.share.copyResult}
      </Button>
      <Button variant="outline" size="sm" onClick={shareLink} disabled={disabled}>
        {status === "linked" ? (
          <Check className="h-4 w-4" />
        ) : (
          <Link2 className="h-4 w-4" />
        )}
        {status === "linked" ? t.share.linkCopied : t.share.shareLink}
      </Button>
    </div>
  )
}

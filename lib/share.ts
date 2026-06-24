/**
 * Share / copy helpers for the Human vs AI Explorer.
 */

/** Copy text to clipboard, returning success boolean. */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

/** Build a share URL for a specific media type. */
export function buildShareUrl(mediaType: string, exampleId: string): string {
  if (typeof window === "undefined") return ""
  return `${window.location.origin}/playground?type=${encodeURIComponent(mediaType)}&example=${encodeURIComponent(exampleId)}`
}

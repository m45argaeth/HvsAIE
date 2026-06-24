/**
 * Media type definitions, comparison examples, and pipeline data
 * for the Human vs AI Explorer.
 */

export enum MediaType {
  TEXT = "text",
  IMAGE = "image",
  AUDIO = "audio",
  VIDEO = "video",
}

export interface HumanInterpretation {
  summary: string
  details: string
  emotion?: string
}

export interface AIFeature {
  name: string
  value: string
  description: string
}

export interface ComparisonExample {
  id: string
  type: MediaType
  label: string
  emoji: string
  human: HumanInterpretation
  ai: {
    features: AIFeature[]
    summary: string
  }
}

export interface AnalysisStep {
  label: string
  description: string
  icon: string
}

export interface PipelineData {
  type: MediaType
  steps: string[]
  description: string
}

/* ------------------------------------------------------------------ */
/*  Examples per media type                                            */
/* ------------------------------------------------------------------ */

export const TEXT_EXAMPLES: ComparisonExample[] = [
  {
    id: "cat-text",
    type: MediaType.TEXT,
    label: '"The cat sat on the mat"',
    emoji: "🐱",
    human: {
      summary: "A cute animal — brings feelings of warmth, comfort, companionship",
      details:
        "You imagine a cozy scene, perhaps your own pet. The words evoke sensory memories: soft fur, gentle purring, a peaceful afternoon. This is how humans process language — through lived experience and emotion.",
      emotion: "Warmth, comfort, nostalgia",
    },
    ai: {
      features: [
        { name: "Tokens", value: '["The", "cat", "sat", "on", "the", "mat"]', description: "Words broken into subword units" },
        { name: "Token IDs", value: "[464, 3797, 3332, 319, 262, 2603]", description: "Numeric IDs from vocabulary lookup" },
        { name: "Embedding Dim", value: "768", description: "Dimensions per token vector" },
        { name: "Position Encoding", value: "Sinusoidal", description: "Captures word order" },
        { name: "Attention Pattern", value: "cat→sat, mat→on", description: "Which words relate to each other" },
      ],
      summary:
        "A sequence of 6 tokens, each mapped to a 768-dimensional vector. The AI captures syntactic relationships (subject-verb-object) but has no concept of 'cuteness' or warmth.",
    },
  },
  {
    id: "love-text",
    type: MediaType.TEXT,
    label: '"I love you"',
    emoji: "❤️",
    human: {
      summary: "Deep emotional connection — one of the most powerful phrases in any language",
      details:
        "These three words carry immense emotional weight. Depending on context, they can express romantic love, familial bonds, or deep friendship. The meaning is deeply personal and contextual.",
      emotion: "Love, vulnerability, connection",
    },
    ai: {
      features: [
        { name: "Tokens", value: '["I", "love", "you"]', description: "3 subword tokens" },
        { name: "Token IDs", value: "[40, 1842, 345]", description: "Vocabulary indices" },
        { name: "Sentiment Score", value: "0.92 (positive)", description: "Classified as strongly positive" },
        { name: "Embedding Similarity", value: '≈ "I adore you"', description: "Close vectors in embedding space" },
        { name: "Frequency Rank", value: "Top 0.1%", description: "Extremely common phrase" },
      ],
      summary:
        "3 tokens with high positive sentiment score. The AI knows this phrase is positive and common, but cannot feel the emotion behind it.",
    },
  },
  {
    id: "storm-text",
    type: MediaType.TEXT,
    label: '"The storm raged outside"',
    emoji: "⛈️",
    human: {
      summary: "Nature's raw power — can feel exciting, dangerous, or cozy depending on your shelter",
      details:
        "You might feel the primal awe of a storm, or the comfort of being warm inside while rain hammers the windows. The word 'raged' personifies the storm, giving it human-like anger.",
      emotion: "Awe, excitement, or coziness",
    },
    ai: {
      features: [
        { name: "Tokens", value: '["The", "storm", "raged", "outside"]', description: "4 tokens" },
        { name: "Semantic Category", value: "weather_event", description: "Classified as weather phenomenon" },
        { name: "Verb Intensity", value: "0.87 (high)", description: "'raged' scored as high-intensity action" },
        { name: "Context Window", value: "narrative/literary", description: "Detected literary writing style" },
        { name: "Related Concepts", value: "thunder, wind, rain", description: "Nearest semantic neighbors" },
      ],
      summary:
        "4 tokens classified as weather narrative. The AI detects high verb intensity and literary style, but doesn't feel the storm's power.",
    },
  },
]

export const IMAGE_EXAMPLES: ComparisonExample[] = [
  {
    id: "cat-photo",
    type: MediaType.IMAGE,
    label: "Photo of a cat",
    emoji: "📸",
    human: {
      summary: "A cute animal — brings feelings of warmth, comfort, companionship",
      details:
        "You instantly recognize a cat, feel drawn to its expressiveness, perhaps think of your own pet. You notice the pose, the lighting, the mood. Humans see meaning, emotion, and story in images.",
      emotion: "Adoration, tenderness, joy",
    },
    ai: {
      features: [
        { name: "Resolution", value: "1920×1080", description: "2,073,600 pixels total" },
        { name: "Pixel Values", value: "RGB (0-255) per pixel", description: "3 numbers per pixel = 6.2M values" },
        { name: "Object Detection", value: "cat (0.94)", description: "94% confidence it's a cat" },
        { name: "Embedding Dim", value: "2048", description: "Visual feature vector size" },
        { name: "Color Histogram", value: "warm-dominant", description: "Statistical color distribution" },
      ],
      summary:
        "A grid of 2M+ pixels, each an RGB triplet. Object detection found a 'cat' with 94% confidence, but the AI has no concept of cuteness.",
    },
  },
  {
    id: "sunset-photo",
    type: MediaType.IMAGE,
    label: "Sunset over the ocean",
    emoji: "🌅",
    human: {
      summary: "A breathtaking moment — evokes peace, wonder, and the beauty of nature",
      details:
        "Sunsets trigger deep emotional responses. You might remember a specific sunset, feel gratitude for beauty, or contemplate the passage of time. Colors evoke warmth and tranquility.",
      emotion: "Wonder, peace, gratitude",
    },
    ai: {
      features: [
        { name: "Resolution", value: "3840×2160", description: "8.3 million pixels" },
        { name: "Dominant Colors", value: "orange, red, blue gradient", description: "Color clustering analysis" },
        { name: "Scene Classification", value: "sunset/ocean (0.91)", description: "91% confidence" },
        { name: "Edge Detection", value: "horizon line detected", description: "Strong horizontal feature" },
        { name: "Brightness Profile", value: "gradient: bright→dark", description: "Top-to-bottom luminance analysis" },
      ],
      summary:
        "8.3M pixels with orange-red-blue color gradient. Scene classified as sunset/ocean with 91% confidence. The AI detects beauty as color statistics.",
    },
  },
  {
    id: "face-photo",
    type: MediaType.IMAGE,
    label: "Portrait of a person",
    emoji: "🧑",
    human: {
      summary: "A human face — instantly triggers social cognition, empathy, and identity recognition",
      details:
        "Humans are hardwired to recognize faces. You immediately assess emotion, age, gender, attractiveness, and trustworthiness. You might feel connection, curiosity, or empathy.",
      emotion: "Recognition, empathy, connection",
    },
    ai: {
      features: [
        { name: "Face Detection", value: "1 face found", description: "Bounding box: [120,80,400,520]" },
        { name: "Landmark Points", value: "68 keypoints", description: "Eyes, nose, mouth, jawline" },
        { name: "Expression", value: "neutral (0.72)", description: "Facial expression classification" },
        { name: "Age Estimate", value: "28±4 years", description: "Regression-based age prediction" },
        { name: "Embedding", value: "512-dim vector", description: "Face recognition feature vector" },
      ],
      summary:
        "68 facial landmarks detected, age estimated at 28±4. The AI quantifies a face but cannot feel the humanity behind it.",
    },
  },
]

export const AUDIO_EXAMPLES: ComparisonExample[] = [
  {
    id: "piano-audio",
    type: MediaType.AUDIO,
    label: "Piano melody",
    emoji: "🎹",
    human: {
      summary: "Sound that moves us — evokes emotions, memories, moods",
      details:
        "A piano melody can make you cry, dance, or reminisce. You hear harmony, rhythm, and emotional arc. Music connects to memory in powerful ways — a song can transport you to another time and place.",
      emotion: "Nostalgia, joy, melancholy",
    },
    ai: {
      features: [
        { name: "Sample Rate", value: "44,100 Hz", description: "Sound samples per second" },
        { name: "Waveform", value: "Amplitude over time", description: "Raw audio signal" },
        { name: "Spectrogram", value: "256 frequency bands", description: "Time-frequency representation" },
        { name: "MFCC Features", value: "13 coefficients", description: "Mel-frequency cepstral coefficients" },
        { name: "Tempo", value: "120 BPM", description: "Beats per minute detection" },
      ],
      summary:
        "Sampled at 44,100 points/second. MFCC features extract 13 frequency characteristics. The AI hears waves, not music.",
    },
  },
  {
    id: "voice-audio",
    type: MediaType.AUDIO,
    label: "Human voice speaking",
    emoji: "🗣️",
    human: {
      summary: "Communication through voice — tone, emotion, and meaning intertwined",
      details:
        "When you hear a voice, you process not just words but tone, pitch, speed, and emotion. A trembling voice conveys fear. A warm tone conveys kindness. Voice is deeply human.",
      emotion: "Trust, understanding, empathy",
    },
    ai: {
      features: [
        { name: "Transcription", value: '"Hello, how are you?"', description: "Speech-to-text output" },
        { name: "Phonemes", value: "12 phonetic units", description: "Speech sound segments" },
        { name: "Pitch (F0)", value: "180 Hz average", description: "Fundamental frequency" },
        { name: "Energy Envelope", value: "RMS amplitude", description: "Volume over time" },
        { name: "Speaker Embedding", value: "256-dim vector", description: "Voice identity representation" },
      ],
      summary:
        "Speech converted to text and phonemes. Pitch and energy analyzed numerically. The AI transcribes but doesn't listen.",
    },
  },
  {
    id: "nature-audio",
    type: MediaType.AUDIO,
    label: "Rain on a rooftop",
    emoji: "🌧️",
    human: {
      summary: "Nature's soundtrack — can be soothing, atmospheric, or melancholic",
      details:
        "Rain sounds are deeply calming for many people. You might feel cozy, reflective, or peaceful. The randomness of rain has a meditative quality that humans find soothing.",
      emotion: "Peace, comfort, reflection",
    },
    ai: {
      features: [
        { name: "Classification", value: "rain (0.88)", description: "Environmental sound class" },
        { name: "Frequency Range", value: "200-8000 Hz", description: "Broadband noise signature" },
        { name: "Amplitude Pattern", value: "Stochastic", description: "Random amplitude distribution" },
        { name: "Duration", value: "45.2 seconds", description: "Total audio length" },
        { name: "SNR", value: "12 dB", description: "Signal-to-noise ratio" },
      ],
      summary:
        "Classified as 'rain' with 88% confidence. Broadband stochastic noise pattern. The AI categorizes but doesn't feel the peace.",
    },
  },
]

export const VIDEO_EXAMPLES: ComparisonExample[] = [
  {
    id: "dance-video",
    type: MediaType.VIDEO,
    label: "Person dancing",
    emoji: "💃",
    human: {
      summary: "Movement that expresses joy — rhythm, grace, and human expression in motion",
      details:
        "Watching someone dance triggers mirror neurons. You feel the rhythm, appreciate the skill, and might even want to move yourself. Dance is one of the oldest forms of human expression.",
      emotion: "Joy, admiration, urge to move",
    },
    ai: {
      features: [
        { name: "Frame Rate", value: "30 fps", description: "Frames per second" },
        { name: "Total Frames", value: "1,800", description: "For 60-second video" },
        { name: "Pose Keypoints", value: "17 joints × 30 frames", description: "Body pose per frame" },
        { name: "Optical Flow", value: "Dense motion vectors", description: "Pixel movement between frames" },
        { name: "Action Class", value: "dancing (0.86)", description: "Temporal action recognition" },
      ],
      summary:
        "1,800 frames analyzed, each with 17 body keypoints. Motion vectors track movement. The AI sees poses, not grace.",
    },
  },
  {
    id: "nature-video",
    type: MediaType.VIDEO,
    label: "Nature documentary clip",
    emoji: "🌿",
    human: {
      summary: "The beauty of the natural world — wonder, education, and connection to Earth",
      details:
        "Nature documentaries inspire awe and curiosity. You learn about ecosystems, feel connected to wildlife, and appreciate the complexity of nature. It's educational and emotional.",
      emotion: "Wonder, curiosity, appreciation",
    },
    ai: {
      features: [
        { name: "Frame Rate", value: "24 fps", description: "Cinematic frame rate" },
        { name: "Scene Changes", value: "12 cuts detected", description: "Visual transition points" },
        { name: "Object Tracking", value: "8 objects per frame", description: "Consistent entity tracking" },
        { name: "Audio-Visual Sync", value: "0.92 correlation", description: "Sound-image alignment score" },
        { name: "Topic Classification", value: "nature/wildlife (0.94)", description: "Content categorization" },
      ],
      summary:
        "24 frames/second with scene change detection and object tracking. Classified as nature/wildlife. The AI catalogs but doesn't wonder.",
    },
  },
  {
    id: "cooking-video",
    type: MediaType.VIDEO,
    label: "Cooking tutorial",
    emoji: "🍳",
    human: {
      summary: "Learning through watching — practical knowledge mixed with sensory anticipation",
      details:
        "Watching cooking videos engages multiple senses mentally. You imagine smells, tastes, and textures. You learn techniques and get inspired to cook. It's both educational and appetizing.",
      emotion: "Hunger, inspiration, learning",
    },
    ai: {
      features: [
        { name: "Action Sequence", value: "chop→stir→season→plate", description: "Temporal action ordering" },
        { name: "Object Detection", value: "knife, pan, ingredients", description: "Per-frame object recognition" },
        { name: "Text Overlays", value: "3 ingredient labels", description: "OCR text extraction" },
        { name: "Pacing Analysis", value: "2.3s average per step", description: "Step duration measurement" },
        { name: "Classification", value: "cooking tutorial (0.91)", description: "Video genre classification" },
      ],
      summary:
        "Actions sequenced: chop→stir→season→plate. Objects detected and text extracted. The AI follows steps but doesn't taste the food.",
    },
  },
]

/* ------------------------------------------------------------------ */
/*  Combined examples                                                 */
/* ------------------------------------------------------------------ */

export const ALL_EXAMPLES: ComparisonExample[] = [
  ...TEXT_EXAMPLES,
  ...IMAGE_EXAMPLES,
  ...AUDIO_EXAMPLES,
  ...VIDEO_EXAMPLES,
]

export const EXAMPLES_BY_TYPE: Record<MediaType, ComparisonExample[]> = {
  [MediaType.TEXT]: TEXT_EXAMPLES,
  [MediaType.IMAGE]: IMAGE_EXAMPLES,
  [MediaType.AUDIO]: AUDIO_EXAMPLES,
  [MediaType.VIDEO]: VIDEO_EXAMPLES,
}

/* ------------------------------------------------------------------ */
/*  Pipeline visualization data                                        */
/* ------------------------------------------------------------------ */

export const PIPELINE_DATA: PipelineData[] = [
  {
    type: MediaType.TEXT,
    steps: ["Text Input", "Tokenizer", "Token IDs", "Embedding Layer", "Vector"],
    description: "Text → Tokens → Embeddings",
  },
  {
    type: MediaType.IMAGE,
    steps: ["Image Input", "Pixel Extraction", "RGB Values", "Feature Extraction", "Embedding Vector"],
    description: "Image → Pixels → Numbers → Embeddings",
  },
  {
    type: MediaType.AUDIO,
    steps: ["Audio Input", "Waveform", "Spectrogram", "Feature Extraction", "Audio Embedding"],
    description: "Audio → Waveform → Features → Embeddings",
  },
  {
    type: MediaType.VIDEO,
    steps: ["Video Input", "Frame Extraction", "Frame Features", "Temporal Aggregation", "Video Embedding"],
    description: "Video → Frames → Features → Embeddings",
  },
]

/* ------------------------------------------------------------------ */
/*  Random example helper                                             */
/* ------------------------------------------------------------------ */

export function randomExample(type?: MediaType): ComparisonExample {
  const pool = type ? EXAMPLES_BY_TYPE[type] : ALL_EXAMPLES
  return pool[Math.floor(Math.random() * pool.length)]
}

export function randomExampleExcept(currentId: string, type?: MediaType): ComparisonExample {
  const pool = type ? EXAMPLES_BY_TYPE[type] : ALL_EXAMPLES
  const filtered = pool.filter((e) => e.id !== currentId)
  if (filtered.length === 0) return pool[0]
  return filtered[Math.floor(Math.random() * filtered.length)]
}

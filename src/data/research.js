// Published work. `slug` anchors each entry on /research.

export const papers = [
  {
    slug: `keystroke-aligned-body-motion`,
    title: `Keystroke-Aligned Body Motion Patterns for Short-Burst Continuous Smartphone Authentication: A Proof-of-Concept Study Using Motion Capture`,
    authors: [
      `N. Cariello`,
      `L. Nguyen`,
      `R. Gallagher`,
      `I. Kurtzer`,
      `K. S. Balagani`,
      `P. Gasti`,
    ],
    me: `L. Nguyen`,
    role: `Co-author`,
    venue: `IEEE Transactions on Biometrics, Behavior, and Identity Science`,
    venueShort: `IEEE T-BIOM`,
    year: `2026`,
    doi: `10.1109/TBIOM.2026.3674400`,
    url: `https://ieeexplore.ieee.org/document/11435144`,
    // The gap the paper opens with.
    problem: `Continuous authentication using keystroke dynamics works well over long windows — 20 to 120 seconds, and 5 to 10 in recent work. But a great deal of real phone use is far shorter: typing a URL, entering a search query, firing off a one-line reply. Those bursts last one or two seconds, which is where the state of the art stops being usable.`,
    approach: `Keystroke dynamics combined with laboratory-grade 3D motion capture and smartphone motion, using keystroke events as temporal anchors for feature extraction — extending earlier work that paired body motion with swipe-based biometrics.`,
    findings: [
      `A 1.5% equal error rate over 1-second authentication windows when all available features are used.`,
      `Keystroke-only approaches reach 9.5% to 11.9% EER under the same conditions, so adding phone and body motion cuts the error several times over.`,
      `Evaluated on a publicly available dataset of 42 users.`,
      `Identifies which body regions and feature types carry the most signal in short windows, as a roadmap for doing this with phone sensors and wearables rather than a motion capture lab.`,
    ],
    // Measured in the paper, not projections.
    metric: {
      label: `Equal error rate over a 1-second window`,
      baselineLabel: `Keystroke dynamics alone`,
      baseline: `9.5–11.9%`,
      resultLabel: `With phone and body motion`,
      result: `1.5%`,
    },
    keywords: [
      `Behavioral biometrics`,
      `Continuous authentication`,
      `Keystroke dynamics`,
      `Motion capture`,
      `Multimodal authentication`,
      `Smartphone security`,
    ],
    tools: [`Python`, `NumPy`, `Pandas`, `Matplotlib`, `scikit-learn`, `Jupyter`],
  },
  {
    slug: `posture-and-body-movement`,
    title: `Posture and Body Movement Effects on Behavioral Biometrics for Continuous Smartphone Authentication`,
    authors: [`L. Nguyen`],
    me: `L. Nguyen`,
    role: `Assistant Researcher`,
    venue: `IEEE Transactions on Biometrics, Behavior, and Identity Science`,
    venueShort: `IEEE T-BIOM`,
    year: `2024`,
    detail: `vol. 10, pp. 1–1`,
    url: `https://ieeexplore.ieee.org/document/10547465`,
    problem: `How posture and body movement affect the behavioral biometrics used for continuous smartphone authentication.`,
    findings: [],
    keywords: [
      `Behavioral biometrics`,
      `Continuous authentication`,
      `Smartphone security`,
    ],
    tools: [`Python`, `NumPy`, `Pandas`, `Matplotlib`, `scikit-learn`, `Jupyter`],
  },
]

export const featuredPaper = papers[0]

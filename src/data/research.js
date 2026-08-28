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
    role: `Research Assistant`,
    venue: `IEEE Transactions on Biometrics, Behavior, and Identity Science`,
    venueShort: `IEEE T-BIOM`,
    year: `2024`,
    detail: `vol. 10, pp. 1–1`,
    url: `https://ieeexplore.ieee.org/document/10547465`,
    problem: `Continuous authentication re-checks who you are at intervals after login, using features that capture how you behave. Its usual cost is latency: behavioural features have to be gathered for 45 to 120 seconds before error rates become acceptable, which means an attacker is already well inside the session before anything is detected.`,
    approach: `3D motion capture data turned into an extensive set of body motion and posture features, aimed at low error rates at 1 to 5 second latencies. Data came from 39 users performing smartphone tasks in a motion capture studio — 41 IR-reflective markers on the body and 3 on the phone, tracked by motion capture cameras, with subjects either sitting or walking a set path.`,
    findings: [
      `A 6.4% equal error rate at 1-second latency, and 5.4% at 5 seconds.`,
      `Swipe and phone-movement features alone reached only 15.7% EER, and needed a 60-second window to do it.`,
      `Collected from 39 users, with the dataset released publicly.`,
      `The intent is to capture these features with ordinary smartphone sensors and consumer wearables rather than a motion capture studio.`,
      `Shifts continuous authentication from reactive to proactive — detection at the start of an attack rather than well into it.`,
    ],
    metric: {
      label: `Equal error rate, and how long it takes to get there`,
      baselineLabel: `Swipe and phone movement · 60-second window`,
      baseline: `15.7%`,
      resultLabel: `Body motion and posture · 1-second window`,
      result: `6.4%`,
    },
    keywords: [
      `Behavioral biometrics`,
      `Continuous authentication`,
      `Body motion`,
      `Posture`,
      `Motion capture`,
      `Smartphone security`,
    ],
    tools: [`Python`, `NumPy`, `Pandas`, `Matplotlib`, `scikit-learn`, `Jupyter`],
  },
]

export const featuredPaper = papers[0]

Concept: "Northern Signal"
The idea is that something is emerging from the dark Nordic winter — a faint signal, not yet fully revealed. Visitors should feel like they've stumbled onto something before it's ready, like seeing the first flicker of aurora on the horizon.
Visual direction:
The scene should be almost entirely dark — deep black (#050508 range) with a single slow-moving 3D element as the focal point. Think an abstract geometric form (an icosahedron or a cluster of connected nodes) that slowly rotates and breathes with subtle light. The geometry should feel like a constellation or a network forming — hinting at "connections" and "strategy" without saying it.
Color palette should be extremely restrained: muted Nordic green (#7eb8a2) as the only accent against near-black, with maybe faint warm white for text. The green appears only on the 3D object's edges/wireframe and the pulsing dot.
Typography:
A serif for "Lykky.co" (something like Instrument Serif or Playfair Display) to feel confident and established. A lightweight sans-serif for the tagline "GTM Nordic Toolkit" in all-caps, widely spaced, almost whispered.
Layout elements:
The four corners carry quiet metadata — Oulu coordinates (65°01'N), the year, "Coming Soon", and maybe a founder count "4 founders" — like interface chrome from a sci-fi terminal. Thin lines extend from the edges toward center, framing the 3D object.
The text hierarchy:

Lykky.co — large, centered, mix-blend-mode difference so it interacts with the 3D behind it
A thin gradient divider line
GTM Nordic Toolkit — small, spaced, faded
A pulsing green dot + "Launching from Oulu, Finland"

Tech stack for Vercel:
Next.js or plain Vite project, Three.js (or React Three Fiber if you prefer React) for the 3D object, and deploy straight to Vercel. The whole thing is one page, no routing needed. Add a subtle film grain overlay and a radial vignette in CSS for that cinematic depth.
Interaction:
The 3D object should respond gently to mouse movement (parallax) — giving the feeling that the visitor is "discovering" it. On mobile, it responds to device orientation or just auto-rotates.
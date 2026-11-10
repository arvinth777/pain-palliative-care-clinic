---
name: Salem Pain Clinic
description: A professional clinic showcase built around pain relief, trust and clear care information.
colors:
  clinic-paper: "rgb(255 255 255)"
  clinic-ink: "rgb(21 43 68)"
  clinic-muted: "rgb(71 91 112)"
  clinic-accent: "rgb(23 84 167)"
  clinic-accent-strong: "rgb(15 59 122)"
  clinic-tint: "rgb(234 243 252)"
  clinic-line: "#c5d5e5"
typography:
  tamil:
    fontFamily: "Noto Sans Tamil, IBM Plex Sans, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.9
  display:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "clamp(2.65rem, 4.8vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.09
    letterSpacing: "-.025em"
  headline:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "clamp(2rem, 3.25vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.09
    letterSpacing: "-.025em"
  title:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "clamp(1.3rem, 2vw, 1.65rem)"
    fontWeight: 500
    lineHeight: 1.09
    letterSpacing: "-.025em"
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  control: "8px"
  topic: "12px"
  image: "16px"
  circle: "50%"
  pill: "999px"
spacing:
  compact: "8px"
  inline: "12px"
  inset: "16px"
  item: "20px"
  group: "24px"
  grid: "32px"
  section: "clamp(56px, 6.5vw, 96px)"
components:
  button-primary:
    backgroundColor: "{colors.clinic-accent}"
    textColor: "{colors.clinic-paper}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.clinic-accent-strong}"
  text-link:
    textColor: "{colors.clinic-accent}"
  contact-field:
    backgroundColor: "{colors.clinic-paper}"
    textColor: "{colors.clinic-ink}"
    rounded: "{rounded.control}"
    padding: "4px 12px"
    height: "36px"
  contact-panel:
    backgroundColor: "{colors.clinic-tint}"
    rounded: "{rounded.image}"
    padding: "clamp(24px, 3vw, 40px)"
  credential:
    textColor: "{colors.clinic-accent-strong}"
    typography: "{typography.label}"
  carousel-control:
    textColor: "{colors.clinic-paper}"
    rounded: "{rounded.circle}"
    size: "44px"
  next-page:
    backgroundColor: "{colors.clinic-accent-strong}"
    textColor: "{colors.clinic-paper}"
    padding: "32px 0"
---

# Design System: Salem Pain Clinic

## Overview

**Creative North Star: "A clear path to care"**

Salem Pain Clinic is a professional clinic showcase: calm, approachable and focused on pain relief and trust. Blue-and-white surfaces, real doctor portraits and photographic care illustrations make the practice and its areas of care easy to understand.

The visual rhythm moves between generous image-led sections, concise explanations and practical clinic information. Credentials, training and the care process establish confidence without invented outcomes or promotional proof.

### Motion direction

Use Emil Kowalski's installed animation guidance for a clinic that responds clearly to exploration. The opening image frame is the focal gesture; the pain explorer is the main recurring interaction. Do not move every text section or add scroll hijacking, parallax, bouncing controls or an animation dependency.

| Element | Role | Starts | Duration | Motion | Relationship |
| --- | --- | --- | --- | --- | --- |
| Hero image frame | Lead | Page entry | 700ms | Rounded aperture opens, 14px settle | Establish the care imagery first |
| Hero heading | Support | 80ms after entry | 550ms | 12px settle with opacity | Overlaps the image entrance |
| Hero introduction / scope | Support | 140ms / 220ms | 500ms / 400ms | Small settle / opacity | Completes the introduction within 700ms |
| Pain explorer image | Feedback | Selected image is loaded | 360ms / 550ms | Crossfade with 1.025-to-1 scale | Selected thumbnail responds immediately; keep the previous image during loading |
| Doctor and treatment photo frames | Continuity | First viewport entry | 650ms | Shallow aperture and 18px settle | Once per route visit; nearby copy stays still |
| Menu / FAQ / chat | Feedback | Pointer activation | 220ms; menu and chat exit 150ms | Anchored reveal / expansion / scale .97-to-1 | Reversible; never queue rapid input |
| Pressable controls | Feedback | Pointer down | 160ms | Scale .97 | No waiting before the action |

The logo, navigation labels, doctor credentials and body copy outside the hero intentionally remain still. There are no count-up credentials or animated clinical claims. The carousel retains its pause button, five-second cadence and offscreen/background pause behavior.

Keyboard-triggered disclosures and pain selections update immediately. Reduced motion removes spatial transitions and the opening sequence; it also disables automatic carousel advancement. Image-frame reveals progressively enhance visible content, so a script failure cannot leave a page concealed. Shared curves and durations live in `app/clinic-design.css`.

Feel check: the first image and headline should read as one introduction; pain selections should respond before the hand leaves the control; FAQ expansion should keep the answer attached to its question. Inspect the opening and selection at normal speed, then with reduced motion, on desktop and a narrow Tamil viewport.

**Key Characteristics:**

- Blue-and-white surfaces with dark blue care and navigation bands.
- IBM Plex Sans, short headings and readable plain-language descriptions.
- Rounded clinical imagery, open layouts and thin informational dividers.
- Quiet motion with explicit pause and accessible manual controls.

This refresh records `app/clinic-design.css`, `app/home.css`, the current public pages and shared header, footer and carousel. The desktop reference is `.impeccable/review/home-desktop.png`. CSS and component behavior are the implementation source of truth; the frontmatter records their reusable values. RGB channel variables are resolved into equivalent CSS `rgb()` colors here.

## Colors

The palette combines clean white, pale clinical blue and confident dark blue. Red belongs to localized pain highlights inside artwork, rather than the interface palette.

### Primary

- **Clinic blue** (`clinic-accent`): emphasized headline words, links, active navigation and primary actions on the contact route.
- **Deep clinic blue** (`clinic-accent-strong`): care bands, the next-page footer, credentials and hover states.

### Neutral

- **White paper** (`clinic-paper`): reading surfaces and fields.
- **Navy ink** (`clinic-ink`): headings, navigation and strong text.
- **Slate text** (`clinic-muted`): supporting explanations and practical details.
- **Pale blue** (`clinic-tint`): hero, care-process, form and footer surfaces.
- **Blue-grey line** (`clinic-line`): dividers that group related facts without enclosing every item.

## Typography

Use locally hosted IBM Plex Sans for English and Noto Sans Tamil for Tamil, with `sans-serif` fallback. The font files and their OFL licenses live in `public/fonts/`. Tamil uses normal tracking and generous line height instead of condensed display styling.

- **Display, headline and title:** the frontmatter hierarchy applies to page and section headings. Use medium weight, balanced wrapping and tight tracking. Large page headings use a slightly condensed width (90%).
- **Body:** normal width, generous line height and muted text. Introductory copy is larger (`clamp(1.12rem, 1.55vw, 1.35rem)`) with a tighter line height (1.55).
- **Label:** credentials and supporting facts use semibold emphasis. Navigation uses medium weight; avoid turning every sentence into a bold label.
- Keep hero headings around 17 characters wide and introductory paragraphs around 44–48 characters wide where the existing layouts establish those limits.

## Layout

The shared shell is `min(100% - 96px, 1248px)`. At 960px it uses 28px side gutters; at 760px it uses 20px gutters. Major sections use the fluid section spacing in the frontmatter. Two-column image/text sections and three-step care layouts become one column at 760px.

The homepage sequence is the compact pain carousel and relief headline, interactive pain explorer, dark care band, doctor and training, three care steps, then location. It has no booking action. The footer continues to the next site page. Treatments uses readable image/text stories; About expands the portrait, qualifications and approach.

The pain explorer pairs five thumbnail selectors with a large crossfading image and its description. Below 760px the selectors become a native horizontally scrolling strip above the image. Mobile treatment stories place the image above the explanation. Navigation switches to a disclosure menu at 1100px; narrow footer and qualification layouts simplify again at 420px.

## Elevation & Depth

The showcase uses tonal changes, space and thin dividers for hierarchy. Content images and informational groups do not use decorative card shadows. The floating chat trigger has a functional shadow (`0 7px 22px rgb(var(--clinic-ink-rgb) / .24)`); the existing form input keeps its small shadow (`0 1px 2px 0 rgb(0 0 0 / .05)`). The sidecar records these exceptions and motion values.

## Shapes

Use the image radius for the carousel, gallery, doctor portraits, editorial photos, map and contact panel (16px). Primary route actions and form fields use the control radius (8px); FAQ topic tiles use 12px. The logo and carousel control are circular, and the floating chat trigger is a pill. Open informational groups use a straight top divider without a surrounding card outline.

## Components

### Navigation and page continuation

Keep **Home**, Treatments, About, FAQs and Visit & contact in the shared navigation. The current page is blue and underlined. The logo links home. Use the refined transparent seal (`public/images/clinic-logo-refined.png`) with `object-fit: contain`, without enlargement or clipping. The header reserves 64px for it, reducing to 56px at 420px and below. The mobile menu uses a labelled disclosure button and closes on route selection. At the end of each main route, a full-width deep-blue link continues to the next page; the last route returns to Home. Footer phone and address details remain practical secondary information.

### Compact pain carousel

The hero carousel is capped at 460px, uses a 1.65:1 frame and presents five pain images without visible captions, pagination or previous/next arrow buttons. A circular 44px pause/play control remains visible. It advances every five seconds while playing, visible in the viewport and in an active document. Hover pauses rotation temporarily; keyboard focus and manual navigation pause it until resumed.

Arrow keys on the pause/play control navigate slides. A deliberate horizontal swipe navigates without capturing normal vertical scrolling or pinch zoom. Reduced motion disables automatic rotation on preference detection and removes the blend; users can explicitly resume. The next image loads before replacing the visible frame, with a 650ms custom ease-out fade when motion is allowed. Image alt text identifies the pain area; live announcements are polite during manual viewing and off during autoplay.

### Conditions, credentials and care steps

Condition entries pair an image, a short title and one plain-language sentence. Doctor sections use the supplied portrait, full name, recorded degrees and training. Qualifications and care steps are open groups divided by rules; numbered care steps show assessment, options and review. Keep headings and facts separate from descriptive paragraphs so they remain easy to scan.

### Buttons, links and forms

Primary route actions are blue with white text, semibold type and 12px × 20px padding; their minimum height is 48px. Hover deepens the blue. Text links are blue and underlined. Shared links use a visible two-pixel blue focus outline with a five-pixel offset; the next-page band uses a white inset outline.

The consultation form lives on Visit & contact. Its pale-blue panel contains white, rounded fields with blue-grey borders, explicit labels and required/optional indicators. Preserve the existing field focus ring, disabled styling, request progress, error and confirmation states. A submitted request becomes an appointment only after the clinic confirms a date and time.

### Imagery and internal provenance

| Asset family | Source and intended use |
| --- | --- |
| Doctor identity | The supplied `public/images/WhatsApp Image 2025-11-30 at 20.40.39.jpeg` on Home and existing `public/images/dr-kirupakaran.jpg` on About are the authentic doctor profile sources. Keep identity anchored to these photographs. |
| Pain and procedure scenes | `public/images/pain-carousel/*-clinical.webp` are ImageGen edits of the original carousel material. Treat them as illustrative educational/stock-style artwork, not records of actual patients or procedures at this clinic. |
| Exterior | `public/images/clinic-gallery/salem-clinic-exterior.webp` is an edited version of a supplied clinic exterior. The archived prompt required the existing architecture and signs to be preserved; it is not an unedited documentary original. |
| Ultrasound care | `public/images/clinic-gallery/ultrasound-care.webp` is a generated illustrative care scene, not evidence of a real facility, clinician or patient. |

Keep source distinctions here, without adding public AI labels. Public descriptions should identify the visible subject without implying a treatment result. Preserve local red pain highlights, natural-looking anatomy and uncluttered blue/white settings. Original prompts are archived below; their historical caption and aspect-ratio instructions do not override the current components.

### Care language and factual sources

Use plain-language descriptions of assessment, possible treatment options and review. General wording about understanding pain history, daily impact and treatment options is supported by [NHS: How to get NHS help for your pain](https://www.nhs.uk/Live-well/pain/how-to-get-nhs-help-for-your-pain/). Descriptions of symptom support, quality of life and family needs during serious illness are supported by [WHO: Palliative care](https://www.who.int/news-room/fact-sheets/detail/palliative-care). These references explain care concepts; they do not verify this clinic’s services, credentials or results. Clinic-specific identity and training remain tied to the existing supplied content and `lib/constants.js`.

## Do's and Don'ts

### Do:

- Do use the shared clinic palette and locally hosted IBM Plex Sans.
- Do keep care imagery legible at mobile sizes and preserve the image radius.
- Do use the authentic doctor sources for identity and recorded training for credentials.
- Do preserve Home navigation, the next-page footer and the homepage’s exploration-first flow.
- Do retain visible focus, labelled controls, pause, swipe, keyboard and reduced-motion behavior.
- Do describe care options conditionally and keep factual claims tied to their source.

### Don't:

- Don’t reintroduce square photographs, visible carousel captions or previous/next arrow buttons.
- Don’t add a booking action to the homepage.
- Don’t present stock, generated or edited care scenes as actual patients, facilities or treatment results.
- Don’t fabricate testimonials, success rates, verified outcomes, credentials or medical guarantees.
- Don’t add public AI labels to the artwork; keep provenance in this internal document.

## Appendix: Original asset prompts (verbatim)

The following eight prompts preserve the earlier asset-generation record. They are historical provenance, not current layout or caption requirements. The carousel assets were edited from supplied originals with built-in ImageGen; the gallery prompts distinguish the supplied exterior edit from the newly generated care scene.

### Carousel artwork

<details>
<summary>Image editing prompts</summary>

**`back-clinical.webp`**

```text
Edit the supplied original carousel image directly. Preserve the adult's rear-facing pose with a hand resting on the lower back, and the translucent lumbar-spine overlay with a clearly visible red-orange hotspot just above the waist. Refine the overlay to fine, lightly translucent anatomy with the strongest red concentrated at the lumbar point. Remove the black pointer arrow. Keep the cropped torso, waist and hands anatomically natural. Retain the source's clinical photographic style and recognizable composition, using a softly lit real-looking treatment room, subdued blue and white, natural color and texture, and fewer background distractions. Professional healthcare editorial photography, never a painted illustration or a waxy 3D render. Keep the central subject fully legible in a 1.82:1 landscape carousel and leave breathing room at the edges. No added words, arrows, or new brand marks.
```

**`knee-clinical.webp`**

```text
Edit the supplied original carousel image directly. Preserve the close-up of two knees of one seated adult in a clinic, one postoperative knee and the other with a translucent view of the knee joint. Keep the surgery reference subtle and healed-looking, with no blood or open wound. Keep clear localized vermilion red around the two knee joints, and refine the visible kneecap, tibia and femur to a fine translucent educational overlay. Remove loose red and blue props from the background so the knees are the focus. Retain the source's clinical photographic style and recognizable composition, using a softly lit real-looking treatment room, subdued blue and white, natural color and texture, and fewer background distractions. Professional healthcare editorial photography, never a painted illustration or a waxy 3D render. Keep the central subject fully legible in a 1.82:1 landscape carousel and leave breathing room at the edges. No added words, arrows, or new brand marks.
```

**`ultrasound-clinical.webp`**

```text
Edit the supplied original carousel image directly. Preserve the seated patient, gloved clinician holding an ultrasound probe against the upper shoulder, and the ultrasound console in frame. Show the cable and probe with a natural grip and unambiguous skin contact; do not add needles. Keep this a treatment scene without a red hotspot. Remove the banner caption from the composition; the website supplies the title separately. Retain the source's clinical photographic style and recognizable composition, using a softly lit real-looking treatment room, subdued blue and white, natural color and texture, and fewer background distractions. Professional healthcare editorial photography, never a painted illustration or a waxy 3D render. Keep the central subject fully legible in a 1.82:1 landscape carousel and leave breathing room at the edges. No added words, arrows, or new brand marks.
```

**`neck-clinical.webp`**

```text
Edit the provided neck pain image. Match its exact tight camera crop and scale: a centered close-up from directly behind, hair and ears visible at the top, neck filling the middle, tops of both shoulders stretching across the bottom edge. Do not show anything below the shoulders. Preserve the translucent cervical spine and a clear, localized red highlight at the base of the neck. Remove the two black arrows and soften the broad red wash. Match natural skin texture and the clean, softly blurred pale-blue clinic background. Landscape 1.82:1. No words or new marks.
```

**`sciatica-clinical.webp`**

```text
Edit the supplied original clinic carousel image directly. Preserve the rear-facing patient in navy shorts and the educational visualization from the lower back through one buttock and down the back of one leg. Keep the red highlight slender and easy to trace, and the pelvis overlay subtle. Remove the text label and pointer line. Center the subject with enough leg visible to read the path. Match the other slides in this set: realistic healthcare editorial photography, soft natural lighting, pale blue and white exam rooms, natural skin texture, and carefully localized red pain overlays. Avoid neon, overly glossy skin, clutter, branding, or additional text. Landscape around 1.82:1, with key details clear at mobile sizes.
```

**`nerve-clinical.webp`**

```text
Edit the supplied original clinic carousel image directly. Preserve the original three-panel concept: a clinician checking a foot, a patient with facial pain, and a clinician examining a forearm and hand. Rework the cartoon into a three-panel series of plausible clinical photographs. Use a restrained localized red overlay on the foot in the first panel, one cheek in the second, and the forearm and hand in the third. Remove all in-image headings, leader lines, and insets. Use narrow white separators. Keep all three gestures centered vertically so a slightly wider crop preserves them. Match the other slides in this set: realistic healthcare editorial photography, soft natural lighting, pale blue and white exam rooms, natural skin texture, and carefully localized red pain overlays. Avoid neon, overly glossy skin, clutter, branding, or additional text. Landscape around 1.82:1, with key details clear at mobile sizes.
```

</details>

### Clinic gallery artwork

**salem-clinic-exterior.webp**

Edit the supplied Salem Pain Clinic exterior into a high-resolution editorial architecture photograph for a professional clinic website. Preserve actual identifying features, two existing signs with their exact spelling and colors, entrance position and approach, existing building geometry, white walls, blue structural accents, rust cladding, street and mature trees. Keep the real scene recognizable. Correct mild perspective and improve crispness and soft neutral early-morning light, improve shadow detail. Use a subtle eye-level three-quarter framing, only modest perspective correction so no unseen part is invented. Landscape 3:2, editorial architectural photography, believable Salem street. No invented architecture or signage, no people, no added words or graphics. Preserve branding faithfully.

**ultrasound-care.webp**

Create a new wide landscape editorial photograph inspired by this ultrasound pain care reference, shot from slightly above and over the shoulder of a clinician in navy scrubs. A gloved hand holds a realistic ultrasound probe against the upper shoulder of an adult wearing a blue clinical gown, with a muted ultrasound screen visible behind. Soft window daylight, cool blue and white hospital tones, genuine documentary quality, no faces clearly visible, no needles, no logo, no text. Frame the contact between probe and shoulder with breathing room, landscape 3:2. This is an illustrative care scene, not a claim about a real facility.

### English and Tamil

The visible header language switch stays outside the mobile menu. English uses the existing URLs; Tamil uses `/ta` and `/ta/...`. The URL determines the language for visitors and crawlers, independently of cookies. Navigation preserves the selected language. Public pages, page titles, navigation, image descriptions, form states and chatbot controls use the shared Tamil dictionary. Server rendering sets the document language before the page appears. Switching languages preserves contact fields and existing chat messages. Each page has a self-referencing canonical URL and reciprocal English/Tamil language links.

Tamil uses locally hosted Noto Sans Tamil with its SIL Open Font License. Use normal tracking, generous line height and smaller display sizes to accommodate Tamil letterforms. Qualifications and phone numbers retain their original notation. The chat recognises common Tamil clinic questions, replies in Tamil when selected or detected, and checks emergency wording before routine answers.


### Logo refinement

Created with the built-in image generation tool from `public/images/logo.png`; the original remains available. The selected transparent PNG is `public/images/clinic-logo-refined.png` (1254 × 1254). It preserves the bird, caring hand, circular blue band, white lettering and single star. The header and clinic-logo metadata use the refined asset.

Final generation prompt:

```text
Use case: precise-object-edit / logo-brand. Input image 1 is the existing official Salem Pain Clinic logo to faithfully clean up, not an inspiration for a new identity. Create one production-quality, flat, vector-like raster master of EXACTLY this same circular seal. Keep the right-facing dove rising above the open caring hand, their recognisable silhouette and placement, the blue circular band, white serif uppercase lettering on the band, and the single white five-point star at the bottom. Exact complete wording around the ring: "SALEM PAIN & PALLIATIVE CARE CLINIC". Preserve the original clockwise text arrangement and all words, including the ampersand. Improve only the drawing precision: a perfectly circular concentric ring, smooth clean silhouette edges, consistent flat deep clinic blue close to #0C4E90, clean evenly spaced letters that stay wholly inside the blue band with comfortable padding on both edges. Keep the central disk opaque white, the lettering and star opaque white, and the region OUTSIDE the circular seal genuinely transparent. Center the entire uncut seal on a square canvas with a small even transparent margin of 3% on every side. High-resolution sharp master suitable for a website header and printed stationery. NO new symbol, no cross, no additional star, no new tagline, no extra wording, no mockup, no presentation board, no perspective, no shadows, no gradients, no texture, no glow. Preserve the existing clinic identity very closely.
```

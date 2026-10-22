# Public DOM PDF export evidence

Exported from this repository's own built index/JSON through the existing creative-resume scripts/export-pdf.mjs, never from the pit artifact or fetch script. No career facts or contact flags changed. Page count: 5; size: 275355; SHA256: 4d02f769d85c34c8e6a70200f715b399a7fa9ddc3e71d73259fb0250b9007ac0.

Native PDFKit selectable extraction contains all19experience bullets verbatim (whitespace/Unicode normalization), all education/publication identity fields, and no private phone digits. Email remains absent, as SHOW_EMAIL=false; SHOW_PHONE=false retained. Creative retains its existing hidden-project presentation flag; legacy retains its own visible project facts. These source snapshots remain distinct; no authority overwrite.

Print uses readable10.5ptbody, staticArial/Georgia fallbacks to keep native extraction readable, thin rules, preserved source headings and publicskills. Canonical exporter formats existing public skill DOM into a semantic text list and suppresses analytics/externalrequests during export. Full record length is deliberate; this is not a claim of one-page targeting or ATS certification. Final page rendering inspected with nativeCoreGraphics direct draw plus PDFKit extraction; Ghostscript independently confirms the canonical late skill page is complete. PDFKit thumbnail optimization showed clipping artifacts not present in directdraw/Ghostscript; no release claim relies on those thumbnails.

Approved Chromium browser QA captured390/768/1440/320, keyboard focus, CSS200%zoom/reflow, public navigation/downloads, consent/theme interactions and noJSerrors. Actual reference/capture comparison in design-qa.md. Final build copies this exact publicPDF into dist; no upstream PDF fetch.

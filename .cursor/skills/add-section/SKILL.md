---
name: add-section
description: Add a new portfolio section to the single-page app. Use when the user asks to add a section, create section-five, or extend the homepage with a new scroll section.
---

# Add Portfolio Section

## Checklist

```
- [ ] Create section component
- [ ] Add CSS Module styles if needed
- [ ] Import in app/page.tsx
- [ ] Decide server vs client boundary
- [ ] Run lint and format
```

## Step 1: Create the component

Create `app/_components/sections/section-five.tsx` (or next number).

Follow existing section patterns:
- Server Component by default
- Add `"use client"` only if using hooks, scroll listeners, or Chart.js
- Use `interface XProps` for props if the component accepts any
- Default export function component

For scroll-triggered animations, copy the pattern from `section-three.tsx`:
- `useRef` guard to fire once
- `useCallback` for trigger function
- `useEffect` with scroll listener and cleanup

## Step 2: Add styles

If the section needs themed layout, add a class to `app/page.module.css`:

```css
.sectionFive {
  /* section-specific styles */
}
```

Import styles in the section:

```tsx
import styles from "@/app/page.module.css";
```

Combine with global classes in JSX:

```tsx
<section id="section-five" className={`${styles.sectionFive} section-container`}>
```

Use Tailwind utilities directly for layout and spacing.

## Step 3: Register in page

Import and add to `app/page.tsx`:

```tsx
import SectionFive from "@/app/_components/sections/section-five";

// Inside Home():
<SectionFive />
```

Place in the desired order among existing sections.

## Step 4: Client boundary decision

| Needs | Action |
|-------|--------|
| Only static content and images | Server Component (no directive) |
| useState, useEffect, scroll, Chart.js | Add `"use client"` at top of file |
| Shared animation logic | Extract to `hooks/` |
| Pure TS helper (no React) | Extract to `lib/` |
| Reusable chart/widget | Put in `components/` |

## Step 5: Verify

```bash
npm run lint
npm run format:check
```

Fix any ESLint or Prettier issues before finishing.

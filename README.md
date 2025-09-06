## Repository Overview

This repository contains the source code and assets for **Diwanag 2025**, the official art folio web application of Atenews, Ateneo de Davao University's student publication. The project is built with Next.js and TypeScript, and is organized to showcase visual artworks and stories across multiple themed chapters.

---

### Structure

- `diwanag-2025-app/`  
  Main Next.js application containing all source code, components, pages, layouts, and public assets.
  - `app/`  
    Application routes, chapters, layouts, and gallery logic.
  - `public/`  
    Static assets such as artwork images and JSON data.
  - `scripts/`  
    Utility scripts for managing assets and data.
  - Configuration files (`next.config.ts`, `tsconfig.json`, etc.)
- `.next/`  
  Build output and cache (auto-generated).
- `README.md`  
  Project documentation and usage instructions.

---

### Features

- Dynamic gallery pages for each chapter, with unique layouts and styles.
- Individual artwork pages generated from JSON data.
- Strict image filename conventions for reliable asset loading.
- Table of contents for easy navigation across chapters and artworks.

---

### Purpose

Diwanag 2025 serves as a digital platform to celebrate and archive the creative works of the Atenews community, allowing users to explore themed collections of art and stories in an interactive and visually engaging format.

---

## Artwork Image Filename Convention

### How `slugify` Works

The `slugify` function generates image filenames by:

- Converting the artwork title and author to lowercase.
- Replacing spaces and special characters with hyphens.
- Concatenating as: `{artTitle}-by-{author}.png`

**Example:**

- `"artTitle": "Underneath The Cloudless Sky"`
- `"author": "The Third Man"`
- Result: `underneath-the-cloudless-sky-by-the-third-man.png`

### File Naming Requirement

All image files in `public/artworks/chap-1-photos/` must strictly follow the filename format produced by the `slugify` function:

- All lowercase.
- Spaces and special characters replaced with hyphens.
- Format: `{artTitle}-by-{author}.png`
- The filename must match exactly what `slugify` produces for each artwork in the JSON data.

If the filename does not match, the image will not load in the application.

**Note:**  
When updating artwork titles or author names in the JSON, update the corresponding image filenames to match the new slugified format.

---

## JSON Data Structure Overview

The JSON data file (`public/data/artWorks.json`) contains an array of artwork objects.  
Each object represents a single artwork and includes the following fields:

- `artTitle`: The title of the artwork.
- `author`: The name of the artist.
- `artImage`: The original filename of the artwork image.
- `artDescription`: A short description or story about the artwork.
- `chapter`: The chapter grouping for the artwork.
- `medium`: The medium or material used for the artwork (e.g., Digital Art, Acrylic).

**Example:**

```json
{
  "artTitle": "Underneath The Cloudless Sky",
  "author": "The Third Man",
  "artImage": "THE THIRD MAN_Underneath The Cloudless Sky - YLAC PROVIDO.tiff",
  "artDescription": "",
  "chapter": "Chapter 1",
  "medium": "Digital Art"
}
```

This structure allows the application to dynamically generate gallery pages, individual artwork pages, and organize artworks by chapter and medium.

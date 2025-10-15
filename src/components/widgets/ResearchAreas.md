# ResearchAreas Component (Simple Version)

A clean, lightweight Astro component for displaying research areas without filtering capabilities.

## Usage

```astro
---
import ResearchAreas from '~/components/widgets/ResearchAreas.astro';
---

<!-- Basic usage -->
<ResearchAreas />

<!-- Customized styling -->
<ResearchAreas 
  title="Our Research Focus" 
  subtitle="Exploring cutting-edge technologies and methodologies"
  containerClass="py-20 bg-white dark:bg-gray-900"
  gridClass="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Research Areas"` | The main heading for the section |
| `subtitle` | `string` | `"Our diverse research portfolio..."` | Optional subtitle text |
| `containerClass` | `string` | `"py-16 md:py-24 bg-gray-50 dark:bg-gray-800"` | CSS classes for the container section |
| `gridClass` | `string` | `"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"` | CSS classes for the grid layout |

## Data Structure

The component automatically loads all JSON files from `/src/data/researchAreas/`. Each file should have this structure (enhanced fields are ignored in this simple version):

```json
{
  "name": "Research Area Name",
  "description": "Description of the research area...",
  "icon": "/icons/icon-name.svg",
  // Enhanced fields (ignored by simple version)
  "category": "ai",
  "level": "advanced", 
  "tags": ["tag1", "tag2"],
  "active": true
}
```

## Features

- ✅ Clean, simple display of all research areas
- ✅ Automatically loads and displays all research areas from data files
- ✅ Responsive grid layout (1 column on mobile, 2-3 columns on larger screens)
- ✅ Dark mode support
- ✅ Customizable styling through props
- ✅ Uses the existing `ResearchAreaCard.astro` component for individual cards
- ✅ Only renders if research area data is available
- ✅ Lightweight - no filtering logic or visual indicators

## When to Use

Use this simple version when:
- You want a clean, straightforward display
- No filtering is needed
- You prefer minimal visual complexity
- Performance is a priority
- You're building a basic showcase page

## For Advanced Features

If you need filtering capabilities, visual indicators (badges, tags), or advanced categorization, use `ResearchAreasFiltered.astro` instead.

## Dependencies

- `ResearchAreaCard.astro` component
- Research area JSON data files in `/src/data/researchAreas/`

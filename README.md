# Requify Design System

A professional, customizable design system built with Svelte 5, Tailwind CSS, and bits-ui.

## Features

- **60+ UI Components**: Buttons, forms, navigation, feedback elements, and more
- **Type-Safe**: Built with TypeScript and enums for variant and size options
- **Customizable**: CSS variables for easy color theming
- **Dark Mode**: Full dark mode support out of the box
- **Accessible**: Built with accessibility best practices
- **Modern**: Svelte 5 with runes for reactive programming

## Installation

```bash
npm install requify-design-system
# or
yarn add requify-design-system
# or
bun add requify-design-system
```

## Usage

### Basic Setup

```typescript
// In your Svelte component
import { Button, Card, Input, Label } from 'requify-design-system'
import { ButtonVariant, ComponentSize } from 'requify-design-system'
```

### Example Components

```svelte
<script lang="ts">
	import { Button, Card, Input, Label } from 'requify-design-system';
	import { ButtonVariant, ComponentSize } from 'requify-design-system';

	let inputValue = '';
</script>

<Card variant="default">
	<h3>Example Card</h3>
	<p>This is a sample card component.</p>
	<Label for="input">Enter text:</Label>
	<Input id="input" bind:value={inputValue} placeholder="Type something..." />
	<Button variant={ButtonVariant.PRIMARY} size={ComponentSize.MD}>
		Submit
	</Button>
</Card>
```

## Theming

The design system uses CSS variables for colors, making it easy to customize the theme. Override the default variables in your global CSS:

```css
:root {
	--color-primary-500: #your-color;
	--color-secondary-500: #your-color;
	/* ... other color variables */
}
```

### Default Color Palette

- **Primary**: Deep Slate Blue (professional, trustworthy)
- **Secondary**: Warm Amber (action, energy)
- **Accent**: Vibrant Teal (success undertones)
- **Semantic**: Success, Error, Warning, Info colors

## Available Components

### Foundation

- Button, ButtonGroup, CloseButton
- Input, Textarea, Label
- Card, Badge, Spinner

### Form Components

- Select, Checkbox, Switch, Radio
- Datepicker, DateRangePicker
- Search

### Navigation

- Sidebar, Breadcrumb, Dropdown, Tabs, Accordion, Pagination

### Feedback

- Alert, Toast, Modal, Drawer, Tooltip, Popover

### Data Display

- Table, Progressbar, Indicator

### Typography

- Heading, P, A, Blockquote

## Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Type check
bun run check

# Format code
bun run format
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

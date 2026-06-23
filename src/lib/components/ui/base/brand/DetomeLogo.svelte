<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import DetomeLogoLight from './DetomeLogoLight.svelte';
	import DetomeLogoDark from './DetomeLogoDark.svelte';

	/**
	 * Auto-switching Detome wordmark logo.
	 * Renders the light variant by default and the dark variant when a `.dark`
	 * class is present on a parent (typically `<html>`).
	 *
	 * Uses CSS stacking (both variants render, toggled via `hidden`/`dark:block`)
	 * so there is no runtime flash, no hydration mismatch, and it works in SSR.
	 *
	 * @example Default
	 * ```svelte
	 * <DetomeLogo />
	 * ```
	 *
	 * @example Sized
	 * ```svelte
	 * <DetomeLogo size="xl" />
	 * ```
	 *
	 * @param {'sm' | 'md' | 'lg' | 'xl' | string} size - Logo size. Default: 'md'.
	 * @param {string} class - Additional CSS classes applied to both variants.
	 *
	 * @see {@link DetomeLogoLight} - Explicit light variant.
	 * @see {@link DetomeLogoDark} - Explicit dark variant.
	 *
	 * @accessibility
	 * - Only the visible variant is exposed to assistive tech (the hidden one uses display:none).
	 * - role="img" with aria-label="detome" (override via props).
	 *
	 * @remarks The light and dark wordmarks have slightly different aspect ratios
	 * (dark ~2:1, light ~2.88:1). If you constrain height, the rendered width will
	 * change on theme toggle. Constrain width instead, or pick an explicit variant,
	 * if layout shift is a concern.
	 */
	interface Props {
		size?: 'sm' | 'md' | 'lg' | 'xl' | string;
		class?: string;
	}

	let { size = 'md', class: className, ...restProps }: Props = $props();
</script>

<DetomeLogoLight {size} class={cn('dark:hidden', className)} {...restProps} />
<DetomeLogoDark {size} class={cn('hidden dark:block', className)} {...restProps} />

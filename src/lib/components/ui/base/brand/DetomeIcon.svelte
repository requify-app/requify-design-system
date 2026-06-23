<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import DetomeIconLight from './DetomeIconLight.svelte';
	import DetomeIconDark from './DetomeIconDark.svelte';

	/**
	 * Auto-switching Detome brand mark (the "d" icon).
	 * Renders the light variant by default and the dark variant when a `.dark`
	 * class is present on a parent (typically `<html>`).
	 *
	 * Uses CSS stacking (both variants render, toggled via `hidden`/`dark:block`)
	 * so there is no runtime flash, no hydration mismatch, and it works in SSR.
	 *
	 * @example Default
	 * ```svelte
	 * <DetomeIcon />
	 * ```
	 *
	 * @example Large
	 * ```svelte
	 * <DetomeIcon size="xl" />
	 * ```
	 *
	 * @param {'sm' | 'md' | 'lg' | 'xl' | string} size - Icon size (square). Default: 'md'.
	 * @param {string} class - Additional CSS classes applied to both variants.
	 *
	 * @see {@link DetomeIconLight} - Explicit light variant.
	 * @see {@link DetomeIconDark} - Explicit dark variant.
	 *
	 * @accessibility
	 * - Only the visible variant is exposed to assistive tech (the hidden one uses display:none).
	 * - role="img" with aria-label="detome" (override via props).
	 */
	interface Props {
		size?: 'sm' | 'md' | 'lg' | 'xl' | string;
		class?: string;
	}

	let { size = 'md', class: className, ...restProps }: Props = $props();
</script>

<DetomeIconLight {size} class={cn('dark:hidden', className)} {...restProps} />
<DetomeIconDark {size} class={cn('hidden dark:block', className)} {...restProps} />

<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	/**
	 * Toolbar container for organizing action buttons and tools.
	 * Flexible horizontal layout with automatic wrapping.
	 *
	 * @example Basic toolbar
	 * ```svelte
	 * <Toolbar>
	 *   <ToolbarButton onclick={handleBold}>
	 *     <Bold class="h-4 w-4" />
	 *   </ToolbarButton>
	 *   <ToolbarButton onclick={handleItalic}>
	 *     <Italic class="h-4 w-4" />
	 *   </ToolbarButton>
	 * </Toolbar>
	 * ```
	 *
	 * @example With groups
	 * ```svelte
	 * <Toolbar>
	 *   <ToolbarGroup>
	 *     <ToolbarButton>Undo</ToolbarButton>
	 *     <ToolbarButton>Redo</ToolbarButton>
	 *   </ToolbarGroup>
	 *   <ToolbarGroup>
	 *     <ToolbarButton>Cut</ToolbarButton>
	 *     <ToolbarButton>Copy</ToolbarButton>
	 *     <ToolbarButton>Paste</ToolbarButton>
	 *   </ToolbarGroup>
	 * </Toolbar>
	 * ```
	 *
	 * @example With custom styling
	 * ```svelte
	 * <Toolbar class="bg-gray-100 p-2 rounded-lg">
	 *   <ToolbarButton>Action</ToolbarButton>
	 * </Toolbar>
	 * ```
	 *
	 * @example Vertical alignment
	 * ```svelte
	 * <Toolbar class="flex-col gap-2">
	 *   <ToolbarButton>Top</ToolbarButton>
	 *   <ToolbarButton>Middle</ToolbarButton>
	 *   <ToolbarButton>Bottom</ToolbarButton>
	 * </Toolbar>
	 * ```
	 *
	 * @example With labels
	 * ```svelte
	 * <Toolbar>
	 *   <ToolbarButton aria-label="Bold">
	 *     <Bold class="h-4 w-4" />
	 *   </ToolbarButton>
	 *   <ToolbarButton aria-label="Italic">
	 *     <Italic class="h-4 w-4" />
	 *   </ToolbarButton>
	 * </Toolbar>
	 * ```
	 *
	 * @param {Snippet} children - ToolbarButton or ToolbarGroup components
	 * @param {string} class - Additional CSS classes to apply
	 *
	 * @see {@link ToolbarButton} - Individual toolbar button
	 * @see {@link ToolbarGroup} - Grouped toolbar buttons
	 *
	 * @accessibility
	 * - Proper ARIA labeling for screen readers
	 * - Keyboard navigable buttons
	 * - Visible focus indicators
	 * - Logical grouping with ToolbarGroup
	 */
	interface Props {
		children?: Snippet;
		class?: string;
	}

	let { children, class: className, ...restProps }: Props = $props();

	const baseStyles = 'flex items-center gap-1 flex-wrap';
</script>

<div class={cn(baseStyles, className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</div>

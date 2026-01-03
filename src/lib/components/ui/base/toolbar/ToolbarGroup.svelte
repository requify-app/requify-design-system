<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	/**
	 * Toolbar button grouping with visual separator.
	 * Groups related toolbar buttons with border divider.
	 *
	 * @example Basic group
	 * ```svelte
	 * <ToolbarGroup>
	 *   <ToolbarButton onclick={handleUndo}>Undo</ToolbarButton>
	 *   <ToolbarButton onclick={handleRedo}>Redo</ToolbarButton>
	 * </ToolbarGroup>
	 * ```
	 *
	 * @example Multiple groups
	 * ```svelte
	 * <Toolbar>
	 *   <ToolbarGroup>
	 *     <ToolbarButton>Cut</ToolbarButton>
	 *     <ToolbarButton>Copy</ToolbarButton>
	 *     <ToolbarButton>Paste</ToolbarButton>
	 *   </ToolbarGroup>
	 *   <ToolbarGroup>
	 *     <ToolbarButton>Align Left</ToolbarButton>
	 *     <ToolbarButton>Align Center</ToolbarButton>
	 *     <ToolbarButton>Align Right</ToolbarButton>
	 *   </ToolbarGroup>
	 *   <ToolbarGroup>
	 *     <ToolbarButton>Bold</ToolbarButton>
	 *     <ToolbarButton>Italic</ToolbarButton>
	 *   </ToolbarGroup>
	 * </Toolbar>
	 * ```
	 *
	 * @example With custom styling
	 * ```svelte
	 * <ToolbarGroup class="bg-gray-50 rounded p-1 border-0">
	 *   <ToolbarButton>Item 1</ToolbarButton>
	 *   <ToolbarButton>Item 2</ToolbarButton>
	 * </ToolbarGroup>
	 * ```
	 *
	 * @example Last group (no border)
	 * ```svelte
	 * <Toolbar>
	 *   <ToolbarGroup>
	 *     <ToolbarButton>Group 1</ToolbarButton>
	 *   </ToolbarGroup>
	 *   <ToolbarGroup class="last:border-r-0">
	 *     <ToolbarButton>Last Group</ToolbarButton>
	 *   </ToolbarGroup>
	 * </Toolbar>
	 * ```
	 *
	 * @example Without border
	 * ```svelte
	 * <ToolbarGroup class="border-r-0 pr-0">
	 *   <ToolbarButton>Item 1</ToolbarButton>
	 *   <ToolbarButton>Item 2</ToolbarButton>
	 * </ToolbarGroup>
	 * ```
	 *
	 * @param {Snippet} children - ToolbarButton components to group
	 * @param {string} class - Additional CSS classes to apply
	 *
	 * @see {@link Toolbar} - Toolbar container
	 * @see {@link ToolbarButton} - Individual toolbar button
	 *
	 * @accessibility
	 * - Visual grouping for logical organization
	 * - Clear separation between button groups
	 * - Last group automatically removes border
	 * - Maintains keyboard navigation flow
	 */
	interface Props {
		children?: Snippet;
		class?: string;
	}

	let { children, class: className, ...restProps }: Props = $props();

	const baseStyles =
		'flex items-center gap-0.5 border-r border-gray-200 pr-1 last:border-r-0 last:pr-0 dark:border-gray-700';
</script>

<div class={cn(baseStyles, className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</div>

<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	/**
	 * Header text for dropdown sections.
	 * Provides visual separation and labeling.
	 *
	 * @example Basic usage
	 * ```svelte
	 * <Dropdown trigger={triggerSnippet}>
	 *   <DropdownHeader>Actions</DropdownHeader>
	 *   <DropdownItem>Action 1</DropdownItem>
	 *   <DropdownItem>Action 2</DropdownItem>
	 * </Dropdown>
	 * ```
	 *
	 * @example With icon
	 * ```svelte
	 * <DropdownHeader>
	 *   <Settings class="h-4 w-4 mr-2" />
	 *   Settings
	 * </DropdownHeader>
	 * ```
	 *
	 * @param {Snippet} children - Header text and/or icons
	 * @param {string} class - Additional CSS classes to apply
	 *
	 * @see {@link Dropdown} - Parent dropdown component
	 * @see {@link DropdownDivider} - Use with headers for visual grouping
	 *
	 * @accessibility
	 * - Non-interactive header text
	 * - Visual section indicator
	 * - Semantic structure for dropdown sections
	 */
	interface Props {
		children?: Snippet;
		class?: string;
	}

	let { children, class: className, ...restProps }: Props = $props();
</script>

<div class={cn('px-4 py-3 text-sm text-gray-900 dark:text-white', className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</div>

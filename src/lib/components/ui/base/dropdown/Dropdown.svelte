<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import { scale } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	/**
	 * Dropdown menu with keyboard navigation.
	 * Wraps bits-ui.DropdownMenu.Root.
	 *
	 * @example Basic usage
	 * ```svelte
	 * <Dropdown trigger>
	 *   {#snippet trigger()}
	 *     <Button>Open Menu</Button>
	 *   {/snippet}
	 *   <DropdownItem onclick={handleAction1}>Action 1</DropdownItem>
	 *   <DropdownItem onclick={handleAction2}>Action 2</DropdownItem>
	 *   <DropdownDivider />
	 *   <DropdownHeader>Section</DropdownHeader>
	 *   <DropdownItem onclick={handleAction3}>Action 3</DropdownItem>
	 * </Dropdown>
	 * ```
	 *
	 * @example With custom alignment
	 * ```svelte
	 * <Dropdown align="end" trigger>
	 *   {#snippet trigger()}
	 *     <Button variant="outline">Options</Button>
	 *   {/snippet}
	 *   <DropdownItem>Option 1</DropdownItem>
	 *   <DropdownItem>Option 2</DropdownItem>
	 * </Dropdown>
	 * ```
	 *
	 * @example Right-aligned dropdown
	 * ```svelte
	 * <Dropdown side="right" trigger>
	 *   {#snippet trigger()}
	 *     <Button>Profile</Button>
	 *   {/snippet}
	 *   <DropdownItem>Settings</DropdownItem>
	 *   <DropdownItem>Logout</DropdownItem>
	 * </Dropdown>
	 * ```
	 *
	 * @param {boolean} open - Dropdown open state (bindable). Default: false
	 * @param {Snippet} trigger - Trigger element that opens dropdown (required)
	 * @param {Snippet} children - Dropdown menu items (DropdownItem, DropdownDivider, DropdownHeader, DropdownLink)
	 * @param {'start' | 'center' | 'end'} align - Horizontal alignment of dropdown. Default: 'start'
	 * @param {'top' | 'right' | 'bottom' | 'left'} side - Which side of trigger to show on. Default: 'bottom'
	 * @param {string} class - Additional CSS classes to apply
	 * @param {'optimized' | 'always'} updatePositionStrategy - How to update position. Default: 'always'
	 * @param {boolean} hideWhenDetached - Hide when dropdown detaches from DOM. Default: false
	 *
	 * @see {@link DropdownItem} - Dropdown menu items
	 * @see {@link DropdownDivider} - Visual separator
	 * @see {@link DropdownHeader} - Section header
	 * @see {@link DropdownLink} - Link variant of dropdown item
	 *
	 * @accessibility
	 * - Arrow keys to navigate items
	 * - Space or Enter to select
	 * - Escape to close
	 * - Focus trap when open
	 * - ARIA menu role
	 */
	interface Props {
		/** Whether the dropdown is open */
		open?: boolean;
		/** Trigger element content */
		trigger?: Snippet;
		/** Dropdown content */
		children?: Snippet;
		/** Dropdown alignment */
		align?: 'start' | 'center' | 'end';
		/** Dropdown placement side */
		side?: 'top' | 'right' | 'bottom' | 'left';
		/** Additional CSS classes */
		class?: string;
		/** Position update strategy */
		updatePositionStrategy?: 'optimized' | 'always';
		/** Whether to hide when detached */
		hideWhenDetached?: boolean;
	}

	let {
		open = $bindable(false),
		trigger,
		children,
		align = 'start',
		side = 'bottom',
		class: classValue,
		updatePositionStrategy = 'always',
		hideWhenDetached = false,
		...restProps
	}: Props = $props();
</script>

<DropdownMenu.Root bind:open>
	{#if trigger}
		<DropdownMenu.Trigger>
			{@render trigger()}
		</DropdownMenu.Trigger>
	{/if}

	<DropdownMenu.Content {align} {side} {updatePositionStrategy} {hideWhenDetached} {...restProps}>
		<div
			transition:scale={{ duration: 100, start: 0.95 }}
			class={cn(
				'z-50 min-w-32 overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md dark:border-gray-700 dark:bg-gray-800',
				classValue
			)}>
			{#if children}
				{@render children()}
			{/if}
		</div>
	</DropdownMenu.Content>
</DropdownMenu.Root>

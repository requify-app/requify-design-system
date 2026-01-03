<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	/**
	 * Individual dropdown menu item with hover and active states.
	 * Wraps bits-ui.DropdownMenu.Item.
	 *
	 * @example Basic usage
	 * ```svelte
	 * <DropdownItem onclick={handleEdit}>Edit</DropdownItem>
	 * <DropdownItem onclick={handleDelete}>Delete</DropdownItem>
	 * <DropdownItem onclick={handleShare}>Share</DropdownItem>
	 * ```
	 *
	 * @example With icon
	 * ```svelte
	 * <DropdownItem onclick={handleAction}>
	 *   <Icon class="h-4 w-4 mr-2" />
	 *   Action with Icon
	 * </DropdownItem>
	 * ```
	 *
	 * @example Disabled
	 * ```svelte
	 * <DropdownItem onclick={handleAction} disabled>
	 *   This action is disabled
	 * </DropdownItem>
	 * ```
	 *
	 * @example With custom content
	 * ```svelte
	 * <DropdownItem onclick={handleProfile}>
	 *   <div class="flex items-center gap-2">
	 *     <Avatar class="h-6 w-6" />
	 *     <div>
	 *       <p class="text-sm font-medium">John Doe</p>
	 *       <p class="text-xs text-gray-500">john@example.com</p>
	 *     </div>
	 *   </div>
	 * </DropdownItem>
	 * ```
	 *
	 * @param {Snippet} children - Item content (text, icons, etc.)
	 * @param {boolean} disabled - If true, item cannot be selected. Default: false
	 * @param {(e: MouseEvent) => void} onclick - Click handler
	 * @param {string} class - Additional CSS classes to apply
	 *
	 * @see {@link Dropdown} - Parent dropdown container
	 * @see {@link DropdownLink} - Link variant
	 *
	 * @accessibility
	 * - Keyboard navigable
	 * - Space or Enter to activate
	 * - Hover state visual feedback
	 * - Disabled state properly indicated
	 * - Focus indicator
	 */
	interface Props {
		disabled?: boolean;
		onclick?: (e: MouseEvent) => void;
		children?: Snippet;
		class?: string;
	}

	let { disabled = false, onclick, children, class: className, ...restProps }: Props = $props();

	const baseStyles =
		'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:bg-gray-100 focus-visible:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus-visible:bg-gray-700 dark:focus-visible:text-gray-50';
</script>

<DropdownMenu.Item {disabled} {onclick} class={cn(baseStyles, className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</DropdownMenu.Item>

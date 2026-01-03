<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	/**
	 * Individual list group item with hover and focus states.
	 * Interactive button element within Listgroup container.
	 *
	 * @example Basic item
	 * ```svelte
	 * <ListgroupItem onclick={handleClick}>Item Name</ListgroupItem>
	 * ```
	 *
	 * @example With icon
	 * ```svelte
	 * <ListgroupItem>
	 *   <User class="h-4 w-4 mr-2" />
	 *   Profile
	 * </ListgroupItem>
	 * ```
	 *
	 * @example With badge
	 * ```svelte
	 * <ListgroupItem>
	 *   Notifications
	 *   <span class="ml-auto bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full text-xs">
	 *     3
	 *   </span>
	 * </ListgroupItem>
	 * ```
	 *
	 * @example Active state
	 * ```svelte
	 * <ListgroupItem class="bg-primary-50 text-primary-700">
	 *   Active Item
	 * </ListgroupItem>
	 * ```
	 *
	 * @example With custom styling
	 * ```svelte
	 * <ListgroupItem class="text-center font-bold">
	 *   Centered Title
	 * </ListgroupItem>
	 * ```
	 *
	 * @example Disabled state
	 * ```svelte
	 * <ListgroupItem disabled>
	 *   Disabled Item
	 * </ListgroupItem>
	 * ```
	 *
	 * @param {Snippet} children - Item content (text, icons, badges, etc.)
	 * @param {string} class - Additional CSS classes to apply
	 *
	 * @see {@link Listgroup} - Container for list group items
	 *
	 * @accessibility
	 * - Semantic button element
	 * - Keyboard: Enter and Space to activate
	 * - Visible focus ring indicator
	 * - High contrast on hover/focus
	 * - Screen reader announces item content
	 */
	interface Props extends HTMLButtonAttributes {
		children?: Snippet;
		class?: string;
	}

	let { children, class: className, ...restProps }: Props = $props();

	const baseStyles =
		'w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white first:rounded-t-lg last:rounded-b-lg last:border-b-0';
</script>

<button type="button" class={cn(baseStyles, 'flex items-center', className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</button>

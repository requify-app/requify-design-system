<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	/**
	 * Dropdown item that renders as link.
	 * Alternative to DropdownItem for navigation links.
	 *
	 * @example Basic link
	 * ```svelte
	 * <DropdownLink href="/profile">Profile</DropdownLink>
	 * <DropdownLink href="/settings">Settings</DropdownLink>
	 * <DropdownLink href="/logout">Logout</DropdownLink>
	 * ```
	 *
	 * @example With onclick
	 * ```svelte
	 * <DropdownLink href="/dashboard" onclick={trackNavigation}>
	 *   Dashboard
	 * </DropdownLink>
	 * ```
	 *
	 * @example With icon
	 * ```svelte
	 * <DropdownLink href="/documents">
	 *   <Document class="h-4 w-4 mr-2" />
	 *   Documents
	 * </DropdownLink>
	 * ```
	 *
	 * @example Disabled
	 * ```svelte
	 * <DropdownLink href="/pro" disabled>
	 *   Upgrade to Pro
	 * </DropdownLink>
	 * ```
	 *
	 * @param {string} href - Link URL for navigation (required)
	 * @param {Snippet} children - Link text and/or icons
	 * @param {(e: MouseEvent) => void} onclick - Click handler
	 * @param {string} class - Additional CSS classes to apply
	 *
	 * @see {@link Dropdown} - Parent dropdown component
	 * @see {@link DropdownItem} - Button variant for actions
	 *
	 * @accessibility
	 * - Renders as semantic <a> tag
	 * - Keyboard navigable
	 * - Hover state visual feedback
	 * - Disabled state properly indicated
	 */
	interface Props {
		href: string;
		onclick?: (e: MouseEvent) => void;
		children?: Snippet;
		class?: string;
	}

	let { href, onclick, children, class: className, ...restProps }: Props = $props();

	const baseStyles =
		'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:bg-gray-100 focus-visible:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus-visible:bg-gray-700 dark:focus-visible:text-gray-50';
</script>

<a {href} {onclick} class={cn(baseStyles, className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</a>

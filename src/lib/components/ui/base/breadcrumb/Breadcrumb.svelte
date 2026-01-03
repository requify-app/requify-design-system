<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	/**
	 * Hierarchical navigation trail for showing page hierarchy.
	 * Container for BreadcrumbItem components.
	 *
	 * @example Basic usage
	 * ```svelte
	 * <Breadcrumb>
	 *   <BreadcrumbItem href="/">Home</BreadcrumbItem>
	 *   <BreadcrumbItem href="/products">Products</BreadcrumbItem>
	 *   <BreadcrumbItem href="/products/laptops">Laptops</BreadcrumbItem>
	 *   <BreadcrumbItem>MacBook Pro</BreadcrumbItem>
	 * </Breadcrumb>
	 * ```
	 *
	 * @example With icons
	 * ```svelte
	 * <Breadcrumb>
	 *   <BreadcrumbItem href="/">
	 *     <Home class="h-4 w-4" />
	 *   </BreadcrumbItem>
	 *   <BreadcrumbItem href="/settings">Settings</BreadcrumbItem>
	 * </Breadcrumb>
	 * ```
	 *
	 * @param {Snippet} children - BreadcrumbItem components
	 * @param {string} class - Additional CSS classes to apply
	 *
	 * @see {@link BreadcrumbItem} - Individual breadcrumb items
	 *
	 * @accessibility
	 * - aria-label="Breadcrumb" for screen readers
	 * - Semantic <nav> and <ol> structure
	 * - Last item is current page (no link)
	 * - Keyboard navigable
	 */
	interface Props {
		children?: Snippet;
		class?: string;
	}

	let { children, class: className }: Props = $props();

	const baseStyles =
		'flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-400';
</script>

<nav aria-label="Breadcrumb" class={cn(baseStyles, className)}>
	<ol class="inline-flex items-center space-x-1 md:space-x-3">
		{#if children}
			{@render children()}
		{/if}
	</ol>
</nav>

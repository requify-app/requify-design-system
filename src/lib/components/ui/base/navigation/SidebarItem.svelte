<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { getContext } from 'svelte';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props extends HTMLAnchorAttributes {
		label: string;
		href: string;
		icon?: Snippet;
		children?: Snippet;
		class?: string;
		nested?: boolean;
	}

	let {
		label,
		href,
		icon,
		children,
		class: className,
		nested = false,
		...restProps
	}: Props = $props();

	// Get activeUrl from parent Sidebar context
	const context = getContext<{ activeUrl: () => string } | undefined>('sidebar-active-url');
	const activeUrl = $derived(context?.activeUrl() ?? '');
	const isActive = $derived(activeUrl === href);

	const baseStyles =
		'flex items-center px-3 py-2.5 text-base font-medium transition-all duration-200 rounded-lg group text-gray-900 dark:text-gray-200 relative';
	const normalStyles =
		'hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-[1.01] hover:shadow-md';
	const activeStyles =
		'font-semibold text-primary-900 bg-primary-200 dark:bg-primary-700 dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700 shadow-sm';
	const nestedStyles = $derived(nested ? 'ml-2 pl-8 sidebar-item-nested relative z-10' : '');
</script>

<a
	{href}
	class={cn(baseStyles, isActive ? activeStyles : normalStyles, nestedStyles, className)}
	{...restProps}>
	{#if icon}
		<span class="transition-colors duration-200">
			{@render icon()}
		</span>
	{/if}
	<span class="ms-3 flex-1">{label}</span>
	{#if children}
		{@render children()}
	{/if}
</a>

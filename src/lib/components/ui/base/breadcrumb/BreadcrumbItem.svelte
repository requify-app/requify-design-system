<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { ChevronRight } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props {
		children?: Snippet;
		href?: string;
		home?: boolean;
		class?: string;
		[key: string]: any; // Allow other props to pass through
	}

	let { children, href, home = false, class: className, ...restProps }: Props = $props();

	const linkStyles =
		'inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white';
	const currentStyles = 'inline-flex items-center text-gray-500 dark:text-gray-400';
</script>

<li class="inline-flex items-center">
	{#if !home}
		<ChevronRight class="mx-1 h-5 w-5 text-gray-400" />
	{/if}

	{#if href}
		<a {href} class={cn(linkStyles, className)} {...restProps}>
			{#if children}
				{@render children()}
			{/if}
		</a>
	{:else}
		<span class={cn(currentStyles, className)} {...restProps}>
			{#if children}
				{@render children()}
			{/if}
		</span>
	{/if}
</li>

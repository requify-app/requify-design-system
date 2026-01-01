<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { setContext } from 'svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		activeUrl?: string;
		children?: Snippet;
		class?: string;
	}

	let { activeUrl = '', children, class: className, ...restProps }: Props = $props();

	// Provide activeUrl to child components via context
	setContext('sidebar-active-url', { activeUrl: () => activeUrl });

	const baseStyles =
		'sidebar-width sidebar-transition fixed inset-y-0 left-0 z-30 h-full flex-none border-e border-gray-200 lg:block lg:h-auto lg:overflow-y-visible lg:pt-16 dark:border-gray-600';
</script>

<aside class={cn(baseStyles, className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</aside>

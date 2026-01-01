<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
	}

	let { children, class: className, ...restProps }: Props = $props();

	const baseStyles =
		'scrolling-touch top-2 h-full w-full overflow-y-auto bg-white lg:sticky lg:me-0 lg:block lg:h-[calc(100vh-4rem)] dark:bg-gray-800';
</script>

<div class={cn(baseStyles, className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</div>

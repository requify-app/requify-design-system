<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

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

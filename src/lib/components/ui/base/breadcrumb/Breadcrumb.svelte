<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

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

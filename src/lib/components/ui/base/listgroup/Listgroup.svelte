<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		active?: boolean;
		children?: Snippet;
		class?: string;
	}

	let { active = false, children, class: className, ...restProps }: Props = $props();

	const baseStyles =
		'w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white';
</script>

<div class={cn(baseStyles, className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</div>

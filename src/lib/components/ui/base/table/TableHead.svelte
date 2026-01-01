<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
		defaultRow?: boolean;
	}

	let { children, class: className, defaultRow = true, ...restProps }: Props = $props();

	const baseStyles =
		'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400';
</script>

<thead class={cn(baseStyles, className)} {...restProps}>
	{#if children}
		<tr>
			{@render children()}
		</tr>
	{/if}
</thead>

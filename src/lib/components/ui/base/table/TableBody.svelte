<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
	}

	let { children, class: className, ...restProps }: Props = $props();
</script>

<tbody class={cn(className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</tbody>

<script lang="ts">
	import { Tabs as BitsTabs } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import { fade, fly } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	interface Props {
		value?: string; // Optional - will auto-generate if not provided
		children?: Snippet;
		onclick?: (event: MouseEvent) => void;
		class?: string;
	}

	let { value: valueProp, children, onclick, class: className, ...restProps }: Props = $props();

	// Auto-generate value if not provided
	const value = $derived(valueProp ?? `tab-${Math.random().toString(36).substr(2, 9)}`);

	const baseStyles =
		'mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:ring-offset-gray-950';
</script>

<BitsTabs.Content {value} class={cn(baseStyles, className)} {onclick} {...restProps}>
	{#snippet child({ props })}
		<div
			{...props}
			transition:fly={{
				duration: 200,
				y: 10,
				opacity: 0,
				easing: (t) => t * (2 - t)
			}}>
			{#if children}
				{@render children()}
			{/if}
		</div>
	{/snippet}
</BitsTabs.Content>

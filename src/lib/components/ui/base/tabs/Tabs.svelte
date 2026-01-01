<script lang="ts">
	import { Tabs as BitsTabs } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		value?: string;
		onValueChange?: (value: string) => void;
		children?: Snippet;
		class?: string;
	}

	let {
		value = $bindable(),
		onValueChange,
		children,
		class: className,
		...restProps
	}: Props = $props();
</script>

<BitsTabs.Root bind:value {onValueChange} class={cn('w-full', className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</BitsTabs.Root>

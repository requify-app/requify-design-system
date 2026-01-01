<script lang="ts">
	import { Accordion as BitsAccordion } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		value?: string | string[];
		multiple?: boolean;
		disabled?: boolean;
		children?: Snippet;
		class?: string;
	}

	let {
		value = $bindable(),
		multiple = false,
		disabled = false,
		children,
		class: className
	}: Props = $props();
</script>

{#if multiple}
	<BitsAccordion.Root
		type="multiple"
		value={value as string[] | undefined}
		onValueChange={(v) => (value = v as string | string[])}
		{disabled}
		class={cn('w-full', className)}>
		{#if children}
			{@render children()}
		{/if}
	</BitsAccordion.Root>
{:else}
	<BitsAccordion.Root
		type="single"
		value={value as string | undefined}
		onValueChange={(v) => (value = v as string | string[])}
		{disabled}
		class={cn('w-full', className)}>
		{#if children}
			{@render children()}
		{/if}
	</BitsAccordion.Root>
{/if}

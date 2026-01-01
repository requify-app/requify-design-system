<script lang="ts">
	import { Accordion as BitsAccordion } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import { ChevronDown } from '@lucide/svelte';
	import { slide } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	interface Props {
		value: string; // REQUIRED - explicit values needed for controlled state
		disabled?: boolean;
		title?: string;
		children?: Snippet;
		header?: Snippet;
		class?: string;
	}

	let {
		value,
		disabled = false,
		title,
		children,
		header,
		class: className,
		...restProps
	}: Props = $props();
</script>

<BitsAccordion.Item
	{value}
	{disabled}
	class={cn('border-b border-gray-200 dark:border-gray-700', className)}
	{...restProps}>
	<BitsAccordion.Header>
		<BitsAccordion.Trigger
			class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
			{#if header}
				{@render header()}
			{:else}
				{title}
			{/if}
			<ChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
		</BitsAccordion.Trigger>
	</BitsAccordion.Header>

	<BitsAccordion.Content forceMount class="overflow-hidden text-sm">
		{#snippet child({ props, open })}
			{#if open}
				<div
					{...props}
					transition:slide={{
						duration: 250,
						easing: (t) => t * (2 - t)
					}}
					class="pt-0 pb-4">
					{#if children}
						{@render children()}
					{/if}
				</div>
			{/if}
		{/snippet}
	</BitsAccordion.Content>
</BitsAccordion.Item>

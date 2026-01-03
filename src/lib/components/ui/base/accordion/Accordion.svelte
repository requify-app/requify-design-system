<script lang="ts">
	import { Accordion as BitsAccordion } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	/**
	 * Collapsible content panels with keyboard navigation.
	 * Supports single or multiple panels open.
	 * Wraps bits-ui.Accordion.Root.
	 *
	 * @example Single open panel
	 * <Accordion type="single" value="item1">
	 *
	 * @example Multiple open panels
	 * <Accordion type="multiple" value={["item1", "item3"]}>
	 *
	 * @example Controlled value
	 * <Accordion bind:value={openItems} multiple>
	 *
	 * @param {string | string[]} value - Open panel identifier(s). Bindable. For type="single": string; for type="multiple": string[]
	 * @param {boolean} multiple - If true, allows multiple panels open. If false, single panel. Default: false
	 * @param {boolean} disabled - Disables all accordion interactions. Default: false
	 * @param {Snippet} children - AccordionItem components
	 * @param {string} class - Additional CSS classes to apply
	 *
	 * @see {@link AccordionItem} - Individual accordion panels
	 *
	 * @accessibility
	 * - Space or Enter to toggle
	 * - Arrow keys between items
	 * - ARIA expanded states
	 * - Smooth slide transition
	 * - Screen reader announces expanded/collapsed
	 */
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

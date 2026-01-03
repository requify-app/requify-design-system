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
	 * ```svelte
	 * <Accordion type="single" value="item1">
	 *   <AccordionItem value="item1" title="Item 1">
	 *     <p>Content for item 1</p>
	 *   </AccordionItem>
	 *   <AccordionItem value="item2" title="Item 2">
	 *     <p>Content for item 2</p>
	 *   </AccordionItem>
	 * </Accordion>
	 * ```
	 *
	 * @example Multiple open panels
	 * ```svelte
	 * <Accordion type="multiple" value={["item1", "item3"]}>
	 *   <AccordionItem value="item1" title="Item 1">
	 *     <p>Content</p>
	 *   </AccordionItem>
	 *   <!-- More items -->
	 * </Accordion>
	 * ```
	 *
	 * @example Controlled value
	 * ```svelte
	 * <script>
	 *   let openItems = $state([]);
	 * </script>
	 * <Accordion bind:value={openItems} multiple>
	 *   <AccordionItem value="section1" title="Section 1">
	 *     <p>Content</p>
	 *   </AccordionItem>
	 * </Accordion>
	 * ```
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

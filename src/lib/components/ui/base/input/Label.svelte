<script lang="ts">
	import { Label } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	/**
	 * Form label component with required field indicator.
	 * Wraps bits-ui.Label.Root for accessibility and proper label-input association.
	 *
	 * @example Basic label
	 * ```svelte
	 * <Label for="email">Email</Label>
	 * <Input id="email" bind:value={email} />
	 * ```
	 *
	 * @example Required field
	 * ```svelte
	 * <Label for="name" required>Name</Label>
	 * <Input id="name" bind:value={name} />
	 * ```
	 *
	 * @example With custom content
	 * ```svelte
	 * <Label for="description">
	 *   Description
	 *   <span class="text-xs text-gray-400">(optional)</span>
	 * </Label>
	 * <Textarea id="description" bind:value={description} />
	 * ```
	 *
	 * @param {boolean} required - If true, shows red asterisk (*) after label. Default: false
	 * @param {Snippet} children - Label text and content
	 * @param {string} class - Additional CSS classes to apply
	 *
	 * @see {@link Input} - Use with Input for form fields
	 * @see {@link Textarea} - Use with Textarea for multi-line inputs
	 * @see {@link Helper} - Add helper text below labeled inputs
	 *
	 * @accessibility
	 * - Proper label association via for/id attributes
	 * - Required indicator announced to screen readers
	 * - Automatic keyboard focus to associated input
	 * - Wraps bits-ui.Label for ARIA support
	 */
	interface Props {
		required?: boolean;
		children?: Snippet;
		class?: string;
	}

	let { required = false, children, class: className }: Props = $props();

	const baseStyles = 'block text-sm font-medium text-gray-900 dark:text-gray-50';
	const computedClass = $derived(cn(baseStyles, className));
</script>

<Label.Root class={computedClass}>
	{#if children}
		{@render children()}
	{/if}
	{#if required}
		<span class="text-error-500 ml-1">*</span>
	{/if}
</Label.Root>

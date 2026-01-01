<script lang="ts">
	import { Checkbox as BitsCheckbox } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import { Check, Minus } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	/**
	 * Checkbox component props
	 * @interface Props
	 */
	interface Props {
		/** Current checked state */
		checked?: boolean;
		/** Indeterminate state (for tri-state checkboxes) */
		indeterminate?: boolean;
		/** Whether the checkbox is disabled */
		disabled?: boolean;
		/** Whether the checkbox is required */
		required?: boolean;
		/** HTML name attribute */
		name?: string;
		/** HTML value attribute */
		value?: string;
		/** Label content snippet */
		children?: Snippet;
		/** Additional CSS classes */
		class?: string;
		/** HTML id attribute */
		id?: string;
		/** Callback when checked state changes */
		onCheckedChange?: (checked: boolean | 'indeterminate') => void;
	}

	let {
		checked = $bindable(),
		indeterminate = $bindable(false),
		disabled = false,
		required = false,
		name,
		value,
		children,
		class: classValue,
		id,
		onCheckedChange,
		...restProps
	}: Props = $props();

	const baseStyles =
		'peer h-5 w-5 shrink-0 rounded-md border-2 border-gray-300 bg-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-500/20 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 hover:border-primary-400 hover:shadow-[0_0_0_4px_rgba(61_82_153/0.08)]';
	const checkedStyles =
		'data-[state=checked]:bg-gradient-to-br data-[state=checked]:from-primary-600 data-[state=checked]:to-primary-500 data-[state=checked]:border-primary-600 data-[state=checked]:text-white data-[state=checked]:shadow-[0_2px_4px_0_rgb(61_82_153/0.3),inset_0_1px_0_0_rgba(255_255_255/0.2)] data-[state=checked]:scale-105';
	const indeterminateStyles =
		'data-[state=indeterminate]:bg-gradient-to-br data-[state=indeterminate]:from-primary-600 data-[state=indeterminate]:to-primary-500 data-[state=indeterminate]:border-primary-600 data-[state=indeterminate]:text-white data-[state=indeterminate]:shadow-[0_2px_4px_0_rgb(61_82_153/0.3),inset_0_1px_0_0_rgba(255_255_255/0.2)] data-[state=indeterminate]:scale-105';
</script>

<div class="flex items-center gap-2">
	<BitsCheckbox.Root
		bind:checked
		bind:indeterminate
		{disabled}
		{required}
		{name}
		{value}
		{id}
		{onCheckedChange}
		class={cn(baseStyles, checkedStyles, indeterminateStyles, classValue)}>
		{#snippet children(props)}
			{#if props.indeterminate}
				<Minus class="h-4 w-4" />
			{:else if props.checked}
				<Check class="h-4 w-4" />
			{/if}
		{/snippet}
	</BitsCheckbox.Root>

	{#if children}
		<label
			for={id}
			class="text-sm leading-none font-medium text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-50">
			{@render children()}
			{#if required}
				<span class="text-error-500 ml-1">*</span>
			{/if}
		</label>
	{/if}
</div>

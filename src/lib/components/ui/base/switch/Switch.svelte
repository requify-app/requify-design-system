<script lang="ts">
	import { Switch as BitsSwitch } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';
	import { SwitchVariant } from '../enums';

	/**
	 * Switch component props
	 * @interface Props
	 */
	interface Props {
		/** Current checked state */
		checked?: boolean;
		/** Whether the switch is disabled */
		disabled?: boolean;
		/** Whether the switch is required */
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
		/** Visual variant (color scheme) */
		variant?: SwitchVariant;
		/** Callback when checked state changes */
		onCheckedChange?: (checked: boolean) => void;
	}

	let {
		checked = $bindable(),
		disabled = false,
		required = false,
		name,
		value,
		children,
		class: classValue,
		id,
		variant = SwitchVariant.PRIMARY,
		onCheckedChange,
		...restProps
	}: Props = $props();

	const color = $derived(variant);

	const colors = {
		primary:
			'data-[state=checked]:bg-primary-500 data-[state=checked]:shadow-[0_2px_4px_0_rgb(61_82_153/0.2)]',
		secondary:
			'data-[state=checked]:bg-secondary-500 data-[state=checked]:shadow-[0_2px_4px_0_rgb(209_106_31/0.2)]',
		success:
			'data-[state=checked]:bg-success-500 data-[state=checked]:shadow-[0_2px_4px_0_rgb(22_163_74/0.2)]',
		error:
			'data-[state=checked]:bg-error-500 data-[state=checked]:shadow-[0_2px_4px_0_rgb(220_38_38/0.2)]',
		warning:
			'data-[state=checked]:bg-warning-500 data-[state=checked]:shadow-[0_2px_4px_0_rgb(202_138_4/0.2)]'
	};

	const baseStyles =
		'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-gray-200 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-500/20 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-700';
	const thumbStyles =
		'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-[0_2px_4px_0_rgb(0_0_0/0.15),0_0_0_1px_rgb(0_0_0/0.05)] ring-0 transition-transform duration-200 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] data-[state=checked]:translate-x-5 data-[state=checked]:scale-105 data-[state=unchecked]:translate-x-0';
</script>

<div class="flex items-center gap-2">
	<BitsSwitch.Root
		bind:checked
		{disabled}
		{required}
		{name}
		{value}
		{id}
		{onCheckedChange}
		class={cn(baseStyles, colors[color], classValue)}>
		<BitsSwitch.Thumb class={thumbStyles} />
	</BitsSwitch.Root>

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

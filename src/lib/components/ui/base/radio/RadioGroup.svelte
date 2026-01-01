<script lang="ts">
	import { RadioGroup as BitsRadioGroup } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface RadioOption {
		value: string;
		label: string;
		disabled?: boolean;
	}

	interface Props {
		value?: string;
		options?: RadioOption[];
		disabled?: boolean;
		required?: boolean;
		name?: string;
		children?: Snippet;
		class?: string;
		orientation?: 'horizontal' | 'vertical';
	}

	let {
		value = $bindable(),
		options = [],
		disabled = false,
		required = false,
		name,
		children,
		class: className,
		orientation = 'vertical',
		...restProps
	}: Props = $props();

	const containerClass = $derived(orientation === 'horizontal' ? 'flex gap-4' : 'space-y-2');
</script>

<BitsRadioGroup.Root bind:value {disabled} {name} class={cn(containerClass, className)}>
	{#if children}
		<!-- Support for custom children -->
		{@render children()}
	{:else if options.length > 0}
		<!-- Support for options prop -->
		{#each options as option}
			<div class="flex items-center gap-2">
				<BitsRadioGroup.Item
					id={`radio-${option.value}`}
					value={option.value}
					disabled={option.disabled}
					class="peer focus-visible:ring-primary-500 data-[state=checked]:border-primary-600 data-[state=checked]:bg-primary-600 h-5 w-5 shrink-0 rounded-full border-2 border-gray-300 bg-white transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800">
					{#snippet children(props)}
						{#if props.checked}
							<div class="flex h-full w-full items-center justify-center">
								<div class="h-2.5 w-2.5 rounded-full bg-white"></div>
							</div>
						{/if}
					{/snippet}
				</BitsRadioGroup.Item>
				<label
					for={`radio-${option.value}`}
					class="text-sm leading-none font-medium text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-50">
					{option.label}
					{#if required}
						<span class="text-error-500 ml-1">*</span>
					{/if}
				</label>
			</div>
		{/each}
	{/if}
</BitsRadioGroup.Root>

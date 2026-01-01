<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends Omit<HTMLInputAttributes, 'type'> {
		value: string;
		group?: string;
		class?: string;
	}

	let {
		value,
		group = $bindable(),
		class: className,
		disabled = false,
		name,
		...restProps
	}: Props = $props();

	const baseStyles =
		'h-5 w-5 shrink-0 rounded-full border-2 border-gray-300 bg-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:border-primary-600 checked:bg-primary-600 dark:border-gray-600 dark:bg-gray-800 dark:checked:border-primary-500 dark:checked:bg-primary-500';
</script>

<input
	type="radio"
	{value}
	{name}
	{disabled}
	bind:group
	class={cn(baseStyles, className)}
	{...restProps} />

<style>
	input[type='radio']:checked {
		background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>

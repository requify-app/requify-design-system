<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { HTMLTextareaAttributes } from 'svelte/elements';

	interface Props extends HTMLTextareaAttributes {
		error?: string;
		class?: string;
	}

	let {
		error,
		disabled = false,
		value = $bindable(),
		class: className,
		rows = 4,
		...restProps
	}: Props = $props();

	const baseStyles =
		'w-full rounded-md border bg-white text-gray-900 transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800 dark:text-gray-100 px-4 py-3 text-base resize-y min-h-[100px]';

	const errorStyles = $derived(
		error ? 'border-error-500 focus:ring-error-500' : 'border-gray-300 dark:border-gray-600'
	);

	const computedClass = $derived(cn(baseStyles, errorStyles, className));
</script>

<div class="w-full">
	<textarea class={computedClass} bind:value {disabled} {rows} {...restProps}></textarea>

	{#if error}
		<p class="text-error-600 dark:text-error-400 mt-1 text-sm">{error}</p>
	{/if}
</div>

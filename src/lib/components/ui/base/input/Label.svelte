<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';
	import type { HTMLLabelAttributes } from 'svelte/elements';

	interface Props extends HTMLLabelAttributes {
		required?: boolean;
		children?: Snippet;
		class?: string;
	}

	let { required = false, children, class: className, ...restProps }: Props = $props();

	const baseStyles = 'block text-sm font-medium text-gray-900 dark:text-gray-50';
	const computedClass = $derived(cn(baseStyles, className));
</script>

<label class={computedClass} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
	{#if required}
		<span class="text-error-500 ml-1">*</span>
	{/if}
</label>

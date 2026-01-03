<script lang="ts">
	import { Label } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

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

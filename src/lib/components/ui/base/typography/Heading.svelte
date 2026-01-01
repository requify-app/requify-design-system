<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
		children?: Snippet;
		class?: string;
		customSize?: string;
	}

	let { tag = 'h1', children, class: className, customSize, ...restProps }: Props = $props();

	const sizeStyles = {
		h1: 'text-3xl font-bold tracking-tight lg:text-4xl',
		h2: 'text-2xl font-semibold tracking-tight lg:text-3xl',
		h3: 'text-xl font-semibold tracking-tight lg:text-2xl',
		h4: 'text-lg font-semibold',
		h5: 'text-base font-semibold',
		h6: 'text-sm font-semibold'
	};

	const baseStyles = 'text-gray-900 dark:text-gray-50';
</script>

{#if tag === 'h1'}
	<h1 class={cn(baseStyles, customSize || sizeStyles.h1, className)} {...restProps}>
		{#if children}{@render children()}{/if}
	</h1>
{:else if tag === 'h2'}
	<h2 class={cn(baseStyles, customSize || sizeStyles.h2, className)} {...restProps}>
		{#if children}{@render children()}{/if}
	</h2>
{:else if tag === 'h3'}
	<h3 class={cn(baseStyles, customSize || sizeStyles.h3, className)} {...restProps}>
		{#if children}{@render children()}{/if}
	</h3>
{:else if tag === 'h4'}
	<h4 class={cn(baseStyles, customSize || sizeStyles.h4, className)} {...restProps}>
		{#if children}{@render children()}{/if}
	</h4>
{:else if tag === 'h5'}
	<h5 class={cn(baseStyles, customSize || sizeStyles.h5, className)} {...restProps}>
		{#if children}{@render children()}{/if}
	</h5>
{:else}
	<h6 class={cn(baseStyles, customSize || sizeStyles.h6, className)} {...restProps}>
		{#if children}{@render children()}{/if}
	</h6>
{/if}

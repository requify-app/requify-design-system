<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
		size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
		weight?: 'normal' | 'medium' | 'semibold' | 'bold';
		color?: 'default' | 'muted' | 'primary' | 'secondary';
	}

	let {
		children,
		class: className,
		size = 'base',
		weight = 'normal',
		color = 'default',
		...restProps
	}: Props = $props();

	const sizeStyles = {
		xs: 'text-xs',
		sm: 'text-sm',
		base: 'text-base',
		lg: 'text-lg',
		xl: 'text-xl'
	};

	const weightStyles = {
		normal: 'font-normal',
		medium: 'font-medium',
		semibold: 'font-semibold',
		bold: 'font-bold'
	};

	const colorStyles = {
		default: 'text-gray-700 dark:text-gray-300',
		muted: 'text-gray-600 dark:text-gray-400',
		primary: 'text-primary-600 dark:text-primary-400',
		secondary: 'text-secondary-600 dark:text-secondary-400'
	};

	const baseStyles = 'leading-relaxed';
</script>

<p
	class={cn(baseStyles, sizeStyles[size], weightStyles[weight], colorStyles[color], className)}
	{...restProps}>
	{#if children}{@render children()}{/if}
</p>

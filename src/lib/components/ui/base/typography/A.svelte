<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		children?: Snippet;
		class?: string;
		color?: 'default' | 'primary' | 'secondary';
		target?: string;
		rel?: string;
	}

	let {
		href,
		children,
		class: className,
		color = 'primary',
		target,
		rel,
		...restProps
	}: Props = $props();

	const colorStyles = {
		default: 'text-blue-600 dark:text-blue-400',
		primary: 'text-primary-600 dark:text-primary-400',
		secondary: 'text-secondary-600 dark:text-secondary-400'
	};

	const baseStyles =
		'font-medium hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded';
</script>

<a {href} {target} {rel} class={cn(baseStyles, colorStyles[color], className)} {...restProps}>
	{#if children}{@render children()}{/if}
</a>

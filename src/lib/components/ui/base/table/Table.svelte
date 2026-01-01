<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		class?: string;
		classes?: {
			div?: string;
			table?: string;
		};
		striped?: boolean;
		hoverable?: boolean;
		noborder?: boolean;
		shadow?: boolean;
		color?: 'default' | 'blue' | 'green' | 'red' | 'yellow' | 'purple';
	}

	let {
		children,
		class: className,
		classes,
		striped = false,
		hoverable = false,
		noborder = false,
		shadow = false,
		color = 'default',
		...restProps
	}: Props = $props();

	const baseStyles = 'w-full text-sm text-left text-gray-500 dark:text-gray-400';
	const borderStyles = $derived(noborder ? '' : 'border-collapse');
	const shadowStyles = $derived(shadow ? 'shadow-md' : '');
</script>

<div class={cn('relative overflow-x-auto', classes?.div)}>
	<table
		class={cn(baseStyles, borderStyles, shadowStyles, className, classes?.table)}
		{...restProps}>
		{#if children}
			{@render children()}
		{/if}
	</table>
</div>

<script lang="ts">
	import { Tabs as BitsTabs } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		value: string;
		disabled?: boolean;
		children?: Snippet;
		class?: string;
	}

	let { value, disabled = false, children, class: className, ...restProps }: Props = $props();

	const baseStyles =
		'relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-8 py-3.5 text-sm font-medium tracking-wide ring-offset-white transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-gray-700 data-[state=inactive]:hover:bg-white/60 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:rounded-t-md after:transition-all after:duration-200 after:ease-out data-[state=inactive]:after:bg-transparent data-[state=inactive]:hover:after:bg-primary-200 data-[state=active]:after:bg-primary-600 first:after:rounded-tl-lg last:after:rounded-tr-lg dark:ring-offset-gray-950 dark:data-[state=active]:bg-gray-800 dark:data-[state=active]:text-gray-50 dark:data-[state=inactive]:text-gray-400 dark:data-[state=inactive]:hover:text-gray-200 dark:data-[state=inactive]:hover:bg-gray-800/60 dark:data-[state=inactive]:hover:after:bg-primary-700 dark:data-[state=active]:after:bg-primary-500';
</script>

<BitsTabs.Trigger {value} {disabled} class={cn(baseStyles, className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</BitsTabs.Trigger>

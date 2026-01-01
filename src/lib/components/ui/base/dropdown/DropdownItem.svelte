<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	interface Props {
		disabled?: boolean;
		onclick?: (e: MouseEvent) => void;
		children?: Snippet;
		class?: string;
	}

	let { disabled = false, onclick, children, class: className, ...restProps }: Props = $props();

	const baseStyles =
		'relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:bg-gray-100 focus-visible:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus-visible:bg-gray-700 dark:focus-visible:text-gray-50';
</script>

<DropdownMenu.Item {disabled} {onclick} class={cn(baseStyles, className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</DropdownMenu.Item>

<script lang="ts">
	import { Collapsible } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import { slide } from 'svelte/transition';
	import { ChevronDown } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		label: string;
		icon?: Snippet;
		children?: Snippet;
		defaultOpen?: boolean;
		class?: string;
		[key: string]: unknown; // Allow any additional props
	}

	let {
		label,
		icon,
		children,
		defaultOpen = true,
		class: className,
		...restProps
	}: Props = $props();

	// Initialize open state - defaultOpen provides the initial value
	let isOpen = $state(defaultOpen === undefined ? true : defaultOpen);

	const triggerStyles =
		'flex items-center w-full px-3 py-2.5 text-base font-medium transition-all duration-200 rounded-lg group text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 hover:scale-[1.01] hover:shadow-md';
	const iconClass =
		'shrink-0 w-7 h-7 text-gray-500 transition-colors duration-200 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white';
</script>

<Collapsible.Root bind:open={isOpen} class={cn('', className)} {...restProps}>
	<Collapsible.Trigger class={triggerStyles}>
		{#if icon}
			<span class="transition-colors duration-200">
				{@render icon()}
			</span>
		{/if}
		<span class="ms-3 flex-1 text-left whitespace-nowrap">{label}</span>
		<ChevronDown
			class={cn(
				'h-5 w-5 transition-transform duration-300 ease-out',
				isOpen ? 'rotate-180 transform' : ''
			)} />
	</Collapsible.Trigger>

	<Collapsible.Content forceMount>
		{#snippet child({ props, open })}
			{#if open}
				<div {...props} transition:slide={{ duration: 250 }} class="sidebar-dropdown-content">
					{#if children}
						{@render children()}
					{/if}
				</div>
			{/if}
		{/snippet}
	</Collapsible.Content>
</Collapsible.Root>

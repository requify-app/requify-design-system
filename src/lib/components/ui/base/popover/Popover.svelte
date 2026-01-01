<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import { scale } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	interface Props {
		open?: boolean;
		trigger?: Snippet;
		children?: Snippet;
		align?: 'start' | 'center' | 'end';
		side?: 'top' | 'right' | 'bottom' | 'left';
		class?: string;
	}

	let {
		open = $bindable(false),
		trigger,
		children,
		align = 'start',
		side = 'bottom',
		class: className,
		...restProps
	}: Props = $props();
</script>

<PopoverPrimitive.Root bind:open>
	{#if trigger}
		<PopoverPrimitive.Trigger>
			{@render trigger()}
		</PopoverPrimitive.Trigger>
	{/if}

	<PopoverPrimitive.Content forceMount {align} {side} {...restProps}>
		{#snippet child({ props, open })}
			{#if open}
				<div
					{...props}
					transition:scale={{
						duration: 150,
						start: 0.95,
						opacity: 0,
						easing: (t) => t * (2 - t)
					}}
					class={cn(
						'z-50 rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800',
						className
					)}>
					{#if children}
						{@render children()}
					{/if}
				</div>
			{/if}
		{/snippet}
	</PopoverPrimitive.Content>
</PopoverPrimitive.Root>

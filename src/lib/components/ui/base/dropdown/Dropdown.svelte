<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import { scale } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	/**
	 * Dropdown component props
	 * @interface Props
	 */
	interface Props {
		/** Whether the dropdown is open */
		open?: boolean;
		/** Trigger element content */
		trigger?: Snippet;
		/** Dropdown content */
		children?: Snippet;
		/** Dropdown alignment */
		align?: 'start' | 'center' | 'end';
		/** Dropdown placement side */
		side?: 'top' | 'right' | 'bottom' | 'left';
		/** Additional CSS classes */
		class?: string;
		/** Position update strategy */
		updatePositionStrategy?: 'optimized' | 'always';
		/** Whether to hide when detached */
		hideWhenDetached?: boolean;
	}

	let {
		open = $bindable(false),
		trigger,
		children,
		align = 'start',
		side = 'bottom',
		class: classValue,
		updatePositionStrategy = 'always',
		hideWhenDetached = false,
		...restProps
	}: Props = $props();
</script>

<DropdownMenu.Root bind:open>
	{#if trigger}
		<DropdownMenu.Trigger>
			{@render trigger()}
		</DropdownMenu.Trigger>
	{/if}

	<DropdownMenu.Content {align} {side} {updatePositionStrategy} {hideWhenDetached} {...restProps}>
		<div
			transition:scale={{ duration: 100, start: 0.95 }}
			class={cn(
				'z-50 min-w-32 overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md dark:border-gray-700 dark:bg-gray-800',
				classValue
			)}>
			{#if children}
				{@render children()}
			{/if}
		</div>
	</DropdownMenu.Content>
</DropdownMenu.Root>

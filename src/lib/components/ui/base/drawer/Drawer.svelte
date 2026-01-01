<script lang="ts">
	import { Dialog } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import { fade, fly } from 'svelte/transition';
	import type { Snippet } from 'svelte';
	import type { FlyParams } from 'svelte/transition';

	type Placement = 'left' | 'right' | 'top' | 'bottom';

	interface Props {
		children?: Snippet;
		open?: boolean;
		placement?: Placement;
		backdrop?: boolean;
		class?: string;
		transitionParams?: Partial<FlyParams>; // Custom transition parameters
		[key: string]: unknown; // Allow additional HTML attributes
	}

	let {
		children,
		open = $bindable(),
		placement = 'left',
		backdrop = true,
		class: className,
		transitionParams = {},
		...restProps
	}: Props = $props();

	const placementStyles: Record<Placement, string> = {
		left: 'fixed left-0 top-0 h-full w-80 m-0 rounded-none bg-white dark:bg-gray-800 p-4',
		right: 'fixed right-0 top-0 h-full w-80 m-0 rounded-none bg-white dark:bg-gray-800 p-4',
		top: 'fixed left-0 top-0 w-full h-auto m-0 rounded-none bg-white dark:bg-gray-800 p-4',
		bottom: 'fixed bottom-0 left-0 w-full h-auto m-0 rounded-none bg-white dark:bg-gray-800 p-4'
	};

	const getTransition = (placement: Placement) => {
		return {
			x: placement === 'left' ? -500 : placement === 'right' ? 500 : 0,
			y: placement === 'top' ? -500 : placement === 'bottom' ? 500 : 0,
			duration: 300,
			...transitionParams
		};
	};
</script>

<Dialog.Root bind:open>
	{#if backdrop}
		<Dialog.Overlay forceMount>
			{#snippet child({ props, open })}
				{#if open}
					<div
						{...props}
						transition:fade={{ duration: 200 }}
						class="fixed inset-0 z-30 bg-gray-900/50 dark:bg-gray-900/80" />
				{/if}
			{/snippet}
		</Dialog.Overlay>
	{/if}

	<Dialog.Content forceMount={true}>
		{#snippet child({ props, open })}
			{#if open}
				<div
					{...props}
					class={cn(placementStyles[placement], 'z-40 overflow-y-auto', className)}
					transition:fly={getTransition(placement)}>
					{#if children}
						{@render children()}
					{/if}
				</div>
			{/if}
		{/snippet}
	</Dialog.Content>
</Dialog.Root>

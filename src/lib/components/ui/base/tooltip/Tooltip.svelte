<script lang="ts">
	import { Tooltip as BitsTooltip } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import { scale } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	/**
	 * Tooltip component props
	 * @interface Props
	 */
	interface Props {
		/** Tooltip content (string or snippet) */
		content?: string | Snippet;
		/** Trigger element content */
		children: Snippet;
		/** Tooltip placement side */
		side?: 'top' | 'right' | 'bottom' | 'left';
		/** Tooltip alignment */
		align?: 'start' | 'center' | 'end';
		/** Delay before showing tooltip (ms) */
		delayDuration?: number;
		/** Whether tooltip content is hoverable */
		disableHoverableContent?: boolean;
		/** Additional CSS classes */
		class?: string;
		/** Allow additional HTML attributes */
		[key: string]: unknown;
	}

	let {
		content,
		children,
		side = 'top',
		align = 'center',
		delayDuration = 200,
		disableHoverableContent,
		class: classValue,
		...restProps
	}: Props = $props();

	const hasContent = $derived(content !== undefined);
	const isStringContent = $derived(typeof content === 'string');
</script>

<BitsTooltip.Provider {disableHoverableContent}>
	<BitsTooltip.Root {delayDuration}>
		<BitsTooltip.Trigger>
			{@render children()}
		</BitsTooltip.Trigger>

		<BitsTooltip.Content forceMount {side} {align} {...restProps}>
			{#snippet child({ props, open })}
				{#if open}
					<div
						{...props}
						transition:scale={{
							duration: 100,
							start: 0.95,
							opacity: 0
						}}
						class={cn(
							'z-50 overflow-hidden rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-900 shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50',
							classValue
						)}>
						{#if hasContent}
							{#if isStringContent}
								{content}
							{:else}
								{@render (content as Snippet)()}
							{/if}
						{/if}
						<BitsTooltip.Arrow class="fill-white dark:fill-gray-800" />
					</div>
				{/if}
			{/snippet}
		</BitsTooltip.Content>
	</BitsTooltip.Root>
</BitsTooltip.Provider>

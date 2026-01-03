<script lang="ts">
	import { Tabs as BitsTabs } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	/**
	 * Tabbed interface with keyboard navigation.
	 * Wraps bits-ui.Tabs.Root.
	 *
	 * @example Basic usage
	 * ```svelte
	 * <Tabs value="overview">
	 *   <TabsList>
	 *     <TabsTrigger value="overview">Overview</TabsTrigger>
	 *     <TabsTrigger value="settings">Settings</TabsTrigger>
	 *   </TabsList>
	 *   <TabsContent value="overview">
	 *     <h3>Overview</h3>
	 *     <p>Content here</p>
	 *   </TabsContent>
	 *   <TabsContent value="settings">
	 *     <h3>Settings</h3>
	 *     <p>Configuration options</p>
	 *   </TabsContent>
	 * </Tabs>
	 * ```
	 *
	 * @param {string} value - Active tab identifier (bindable)
	 * @param {(value: string) => void} onValueChange - Callback when tab selection changes
	 * @param {Snippet} children - TabsList and TabsContent components
	 * @param {string} class - Additional CSS classes to apply
	 *
	 * @see {@link TabsList} - Container for tab triggers
	 * @see {@link TabsTrigger} - Individual tab button
	 * @see {@link TabsContent} - Content panel for each tab
	 *
	 * @accessibility
	 * - Left/Right arrow keys to navigate between tabs
	 * - Tab/Shift+Tab to focus list
	 * - Enter or Space to activate tab
	 * - ARIA tabs role with proper state
	 * - Focus management maintains context
	 */
	interface Props {
		value?: string;
		onValueChange?: (value: string) => void;
		children?: Snippet;
		class?: string;
	}

	let {
		value = $bindable(),
		onValueChange,
		children,
		class: className,
		...restProps
	}: Props = $props();
</script>

<BitsTabs.Root bind:value {onValueChange} class={cn('w-full', className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</BitsTabs.Root>

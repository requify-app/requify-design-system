<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { ComponentSize } from '../enums';
	import type { ComponentSizeType } from '../enums';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	/**
	 * Toolbar button for actions within a toolbar.
	 * Square button with predefined sizes and hover/focus states.
	 *
	 * @example Small toolbar button
	 * ```svelte
	 * <ToolbarButton onclick={handleAction}>
	 *   <Bold class="h-4 w-4" />
	 * </ToolbarButton>
	 * ```
	 *
	 * @example Large button
	 * ```svelte
	 * <ToolbarButton size="lg" onclick={handleAction}>
	 *   <Plus class="h-6 w-6" />
	 * </ToolbarButton>
	 * ```
	 *
	 * @example Extra small button
	 * ```svelte
	 * <ToolbarButton size="xs" onclick={handleAction}>
	 *   <X class="h-3 w-3" />
	 * </ToolbarButton>
	 * ```
	 *
	 * @example Medium button
	 * ```svelte
	 * <ToolbarButton size="md" onclick={handleAction}>
	 *   <Search class="h-5 w-5" />
	 * </ToolbarButton>
	 * ```
	 *
	 * @example Disabled button
	 * ```svelte
	 * <ToolbarButton disabled>
	 *   <Trash class="h-4 w-4" />
	 * </ToolbarButton>
	 * ```
	 *
	 * @example With aria-label
	 * ```svelte
	 * <ToolbarButton aria-label="Bold" onclick={handleBold}>
	 *   <Bold class="h-4 w-4" />
	 * </ToolbarButton>
	 * ```
	 *
	 * @example With custom styling
	 * ```svelte
	 * <ToolbarButton class="bg-primary-100 text-primary-700">
	 *   Active
	 * </ToolbarButton>
	 * ```
	 *
	 * @param {ComponentSize | ComponentSizeType} size - Button size. Default: ComponentSize.SM
	 *   Options: 'xs' (24px), 'sm' (32px), 'md' (40px), 'lg' (44px)
	 * @param {Snippet} children - Button content (typically an icon)
	 * @param {string} class - Additional CSS classes to apply
	 *
	 * @see {@link Toolbar} - Toolbar container
	 * @see {@link ToolbarGroup} - Grouped toolbar buttons
	 * @see {@link Button} - General purpose button component
	 *
	 * @accessibility
	 * - Semantic button element
	 * - Keyboard: Enter and Space to activate
	 * - Visible focus ring for keyboard navigation
	 * - Use aria-label for icon-only buttons
	 * - High contrast colors
	 */
	interface Props extends HTMLButtonAttributes {
		size?: ComponentSize | ComponentSizeType;
		children?: Snippet;
		class?: string;
	}

	let { size = ComponentSize.SM, children, class: className, ...restProps }: Props = $props();

	const baseStyles =
		'inline-flex items-center justify-center rounded transition-all duration-200 hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-700 dark:active:bg-gray-600 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500';

	const sizes: Record<ComponentSize, string> = {
		[ComponentSize.XS]: 'h-6 w-6 p-1',
		[ComponentSize.SM]: 'h-8 w-8 p-1.5',
		[ComponentSize.MD]: 'h-10 w-10 p-2',
		[ComponentSize.LG]: 'h-11 w-11 p-2.5',
		[ComponentSize.XL]: 'h-12 w-12 p-3'
	};

	const computedClass = $derived(cn(baseStyles, sizes[size] as string, className));
</script>

<button type="button" class={computedClass} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</button>

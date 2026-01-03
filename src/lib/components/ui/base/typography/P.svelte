<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	/**
	 * Paragraph component with configurable size, weight, and color.
	 * Semantic p element with flexible typography variants.
	 *
	 * @example Base paragraph
	 * ```svelte
	 * <P>This is a standard paragraph with base size and weight.</P>
	 * ```
	 *
	 * @example Small text
	 * ```svelte
	 * <P size="sm">This is smaller text for captions.</P>
	 * ```
	 *
	 * @example Large text
	 * ```svelte
	 * <P size="lg">This is larger text for emphasis.</P>
	 * ```
	 *
	 * @example Bold paragraph
	 * ```svelte
	 * <P weight="bold">This is bold text for emphasis.</P>
	 * ```
	 *
	 * @example Muted color
	 * ```svelte
	 * <P color="muted">This is secondary/muted text.</P>
	 * ```
	 *
	 * @example Primary color
	 * ```svelte
	 * <P color="primary">This is primary colored text.</P>
	 * ```
	 *
	 * @example Extra small with medium weight
	 * ```svelte
	 * <P size="xs" weight="medium">Fine print text.</P>
	 * ```
	 *
	 * @example With custom styling
	 * ```svelte
	 * <P class="text-center max-w-md mx-auto">
	 *   Centered paragraph with max width.
	 * </P>
	 * ```
	 *
	 * @param {Snippet} children - Paragraph content
	 * @param {string} class - Additional CSS classes to apply
	 * @param {'xs' | 'sm' | 'base' | 'lg' | 'xl'} size - Text size. Default: 'base'
	 *   Options: 'xs' (12px), 'sm' (14px), 'base' (16px), 'lg' (18px), 'xl' (20px)
	 * @param {'normal' | 'medium' | 'semibold' | 'bold'} weight - Font weight. Default: 'normal'
	 * @param {'default' | 'muted' | 'primary' | 'secondary'} color - Text color variant. Default: 'default'
	 *
	 * @see {@link Heading} - For heading elements
	 * @see {@link A} - For links within text
	 *
	 * @accessibility
	 * - Semantic paragraph element
	 * - High contrast colors for readability
	 * - Proper line height for legibility
	 * - Screen reader friendly text
	 */
	interface Props {
		children?: Snippet;
		class?: string;
		size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
		weight?: 'normal' | 'medium' | 'semibold' | 'bold';
		color?: 'default' | 'muted' | 'primary' | 'secondary';
	}

	let {
		children,
		class: className,
		size = 'base',
		weight = 'normal',
		color = 'default',
		...restProps
	}: Props = $props();

	const sizeStyles = {
		xs: 'text-xs',
		sm: 'text-sm',
		base: 'text-base',
		lg: 'text-lg',
		xl: 'text-xl'
	};

	const weightStyles = {
		normal: 'font-normal',
		medium: 'font-medium',
		semibold: 'font-semibold',
		bold: 'font-bold'
	};

	const colorStyles = {
		default: 'text-gray-700 dark:text-gray-300',
		muted: 'text-gray-600 dark:text-gray-400',
		primary: 'text-primary-600 dark:text-primary-400',
		secondary: 'text-secondary-600 dark:text-secondary-400'
	};

	const baseStyles = 'leading-relaxed';
</script>

<p
	class={cn(baseStyles, sizeStyles[size], weightStyles[weight], colorStyles[color], className)}
	{...restProps}>
	{#if children}{@render children()}{/if}
</p>

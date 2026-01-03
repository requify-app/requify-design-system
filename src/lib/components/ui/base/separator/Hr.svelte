<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { HTMLAttributes } from 'svelte/elements';

	/**
	 * Horizontal rule/separator for content sections.
	 * Semantic hr element with predefined spacing and color.
	 *
	 * @example Basic separator
	 * ```svelte
	 * <Hr />
	 * ```
	 *
	 * @example With custom spacing
	 * ```svelte
	 * <Hr class="my-8" />
	 * ```
	 *
	 * @example Reduced spacing
	 * ```svelte
	 * <Hr class="my-2" />
	 * ```
	 *
	 * @example Thick border
	 * ```svelte
	 * <Hr class="border-2" />
	 * ```
	 *
	 * @example Dashed separator
	 * ```svelte
	 * <Hr class="border-dashed" />
	 * ```
	 *
	 * @example Colored separator
	 * ```svelte
	 * <Hr class="border-primary-300" />
	 * ```
	 *
	 * @example In a card
	 * ```svelte
	 * <Card>
	 *   <h3>Section 1</h3>
	 *   <p>Content</p>
	 *   <Hr />
	 *   <h3>Section 2</h3>
	 *   <p>More content</p>
	 * </Card>
	 * ```
	 *
	 * @param {string} class - Additional CSS classes to apply
	 *
	 * @see {@link Card} - Card component often used with separators
	 *
	 * @accessibility
	 * - Semantic hr element
	 * - Visual separator for content structure
	 * - Screen reader announces thematic break
	 * - High contrast border colors
	 */
	interface Props extends HTMLAttributes<HTMLHRElement> {
		class?: string;
	}

	let { class: className, ...restProps }: Props = $props();

	const baseStyles = 'my-4 border-gray-200 dark:border-gray-700';
	const computedClass = $derived(cn(baseStyles, className));
</script>

<hr class={computedClass} {...restProps} />

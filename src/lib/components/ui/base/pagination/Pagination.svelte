<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	/**
	 * Pagination controls for data sets with previous/next and page numbers.
	 *
	 * @example Basic usage
	 * ```svelte
	 * <script lang="ts">
	 *   let pages = [
	 *     { name: '1', href: '/page/1', active: true },
	 *     { name: '2', href: '/page/2', active: false },
	 *     { name: '3', href: '/page/3', active: false }
	 *   ];
	 * </script>
	 * <Pagination
	 *   pages={pages}
	 *   previous={goToPrevious}
	 *   next={goToNext} />
	 * ```
	 *
	 * @example Small size
	 * ```svelte
	 * <Pagination size="sm" pages={pages} previous={prev} next={next} />
	 * ```
	 *
	 * @example Large size
	 * ```svelte
	 * <Pagination size="lg" pages={pages} previous={prev} next={next} />
	 * ```
	 *
	 * @example Custom prev/next content
	 * ```svelte
	 * <Pagination
	 *   pages={pages}
	 *   previous={goBack}
	 *   next={goForward}
	 *   prevContent={() => <span>Previous</span>}
	 *   nextContent={() => <span>Next</span>} />
	 * ```
	 *
	 * @interface PageItem
	 * @property {string} name - Page number/text to display
	 * @property {string} href - Link URL for this page
	 * @property {boolean} [active] - If true, this is the current page
	 *
	 * @param {PageItem[]} pages - Array of page items with name, href, and optional active state
	 * @param {() => void} previous - Callback when previous button is clicked
	 * @param {() => void} next - Callback when next button is clicked
	 * @param {'sm' | 'md' | 'lg'} size - Button size affecting height and text. Default: 'md'
	 * @param {string} class - Additional CSS classes to apply
	 * @param {Snippet} prevContent - Custom content for previous button (alternative to chevron icon)
	 * @param {Snippet} nextContent - Custom content for next button (alternative to chevron icon)
	 *
	 * @accessibility
	 * - aria-label for navigation
	 * - aria-current="page" for active page
	 * - Keyboard navigable links
	 * - Visible active state
	 * - Semantic <nav> element
	 */
	interface PageItem {
		name: string;
		href: string;
		active?: boolean;
	}

	interface Props {
		pages: PageItem[];
		previous?: () => void;
		next?: () => void;
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		prevContent?: Snippet;
		nextContent?: Snippet;
	}

	let {
		pages,
		previous,
		next,
		size = 'md',
		class: className,
		prevContent,
		nextContent
	}: Props = $props();

	const sizes = {
		sm: 'h-8 min-w-8 text-xs',
		md: 'h-10 min-w-10 text-sm',
		lg: 'h-12 min-w-12 text-base'
	};

	const sizeClass = $derived(sizes[size]);

	const baseButtonStyles =
		'flex items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';

	const activeStyles =
		'z-10 border-primary-300 bg-primary-50 text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white';
</script>

<nav class={cn('flex items-center gap-1', className)} aria-label="Pagination">
	{#if previous}
		<button
			type="button"
			onclick={previous}
			class={cn(baseButtonStyles, sizeClass, 'px-3')}
			aria-label="Previous page">
			{#if prevContent}
				{@render prevContent()}
			{:else}
				<ChevronLeft class="h-5 w-5" />
			{/if}
		</button>
	{/if}

	{#each pages as page}
		<a
			href={page.href}
			class={cn(baseButtonStyles, sizeClass, page.active ? activeStyles : '')}
			aria-current={page.active ? 'page' : undefined}>
			{page.name}
		</a>
	{/each}

	{#if next}
		<button
			type="button"
			onclick={next}
			class={cn(baseButtonStyles, sizeClass, 'px-3')}
			aria-label="Next page">
			{#if nextContent}
				{@render nextContent()}
			{:else}
				<ChevronRight class="h-5 w-5" />
			{/if}
		</button>
	{/if}
</nav>

<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { HTMLImgAttributes } from 'svelte/elements';

	/**
	 * Responsive image component with fluid width.
	 * Semantic img element with automatic scaling.
	 *
	 * @example Basic image
	 * ```svelte
	 * <Img src="/photo.jpg" alt="Photo description" />
	 * ```
	 *
	 * @example With custom sizing
	 * ```svelte
	 * <Img src="/avatar.png" alt="User avatar" class="w-12 h-12 rounded-full" />
	 * ```
	 *
	 * @example With object fit
	 * ```svelte
	 * <Img
	 *   src="/banner.jpg"
	 *   alt="Banner image"
	 *   class="w-full h-64 object-cover rounded-lg"
	 * />
	 * ```
	 *
	 * @example Lazy loading
	 * ```svelte
	 * <Img
	 *   src="/large-image.jpg"
	 *   alt="Large image"
	 *   loading="lazy"
	 * />
	 * ```
	 *
	 * @example With responsive source
	 * ```svelte
	 * <Img
	 *   srcset="/small.jpg 480w, /medium.jpg 768w, /large.jpg 1024w"
	 *   sizes="(max-width: 768px) 100vw, 50vw"
	 *   src="/medium.jpg"
	 *   alt="Responsive image"
	 * />
	 * ```
	 *
	 * @example Grayscale on hover
	 * ```svelte
	 * <Img
	 *   src="/profile.jpg"
	 *   alt="Profile photo"
	 *   class="hover:grayscale transition-all"
	 * />
	 * ```
	 *
	 * @param {string} src - Image source URL (required)
	 * @param {string} alt - Alt text description for accessibility (required)
	 * @param {string} class - Additional CSS classes to apply
	 *
	 * @see {@link Avatar} - For user avatar components with status indicators
	 *
	 * @accessibility
	 * - Alt text required for screen readers
	 * - Descriptive alt text for images with meaning
	 * - Empty alt (alt="") for decorative images
	 * - Fluid scaling for responsive layouts
	 */
	interface Props extends HTMLImgAttributes {
		src: string;
		alt: string;
		class?: string;
	}

	let { src, alt, class: className, ...restProps }: Props = $props();

	const baseStyles = 'max-w-full h-auto';
</script>

<img {src} {alt} class={cn(baseStyles, className)} {...restProps} />

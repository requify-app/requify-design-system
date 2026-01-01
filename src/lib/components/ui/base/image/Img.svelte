<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { HTMLImgAttributes } from 'svelte/elements';

	interface Props extends HTMLImgAttributes {
		src: string;
		alt: string;
		class?: string;
	}

	let { src, alt, class: className, ...restProps }: Props = $props();

	const baseStyles = 'max-w-full h-auto';
</script>

<img {src} {alt} class={cn(baseStyles, className)} {...restProps} />

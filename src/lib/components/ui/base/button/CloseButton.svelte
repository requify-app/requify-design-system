<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { X } from '@lucide/svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		class?: string;
	}

	let { class: className, ...restProps }: Props = $props();

	const baseStyles =
		'inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white';
</script>

<button type="button" class={cn(baseStyles, className)} {...restProps} aria-label="Close">
	<X class="h-5 w-5" />
</button>

<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLHRElement> {
		class?: string;
	}

	let { class: className, ...restProps }: Props = $props();

	const baseStyles = 'my-4 border-gray-200 dark:border-gray-700';
	const computedClass = $derived(cn(baseStyles, className));
</script>

<hr class={computedClass} {...restProps} />

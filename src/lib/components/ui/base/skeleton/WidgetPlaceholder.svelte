<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		class?: string;
	}

	let { class: className }: Props = $props();

	const baseStyles =
		'max-w-sm animate-pulse rounded border border-gray-200 p-4 shadow md:p-6 dark:border-gray-700';
</script>

<div class={cn(baseStyles, className)} role="status" aria-label="Loading...">
	<div class="mb-4 flex items-center justify-between">
		<div>
			<div class="mb-2.5 h-2.5 w-32 rounded-full bg-gray-300 dark:bg-gray-600"></div>
			<div class="h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
		</div>
		<div class="h-12 w-12 rounded bg-gray-200 dark:bg-gray-700"></div>
	</div>
	<div class="mb-4 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
	<div class="mb-4 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
	<div class="mb-4 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
	<div class="h-2 w-3/4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
	<span class="sr-only">Loading...</span>
</div>

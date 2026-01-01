<script lang="ts">
	import { Select as BitsSelect } from 'bits-ui';
	import { Check } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import { getContext } from 'svelte';

	interface Props {
		value: string;
		label?: string;
		disabled?: boolean;
		children?: Snippet;
	}

	let { value, label, disabled = false, children }: Props = $props();
</script>

<BitsSelect.Item
	{value}
	{label}
	{disabled}
	class="relative flex cursor-pointer items-center px-8 py-3 text-left text-lg hover:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-gray-700 data-[state=checked]:[&>span.check-icon]:inline">
	<span class="check-icon absolute left-2 hidden">
		<Check class="h-4 w-4" />
	</span>
	{#if children}
		{@render children()}
	{/if}
</BitsSelect.Item>

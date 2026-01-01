<script lang="ts">
	import { RadioGroup as BitsRadioGroup } from 'bits-ui';
	import type { Snippet } from 'svelte';

	interface Props {
		value: string;
		disabled?: boolean;
		children?: Snippet;
		id?: string;
	}

	let { value, disabled = false, children, id }: Props = $props();
</script>

<div class="flex items-center gap-2">
	<BitsRadioGroup.Item
		{value}
		{disabled}
		{id}
		class="peer focus-visible:ring-primary-500 data-[state=checked]:border-primary-600 data-[state=checked]:bg-primary-600 h-5 w-5 shrink-0 rounded-full border-2 border-gray-300 bg-white transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800">
		{#snippet children(props)}
			{#if props.checked}
				<div class="flex h-full w-full items-center justify-center">
					<div class="h-2.5 w-2.5 rounded-full bg-white"></div>
				</div>
			{/if}
		{/snippet}
	</BitsRadioGroup.Item>

	{#if children}
		<label
			for={id}
			class="text-sm leading-none font-medium text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-gray-50">
			{@render children()}
		</label>
	{/if}
</div>

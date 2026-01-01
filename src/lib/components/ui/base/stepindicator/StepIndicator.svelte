<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { Check } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		currentStep?: number;
		steps?: string[];
		glow?: boolean;
		class?: string;
		children?: Snippet<[{ step: number; label: string }]>;
	}

	let {
		currentStep = 1,
		steps = ['Step 1', 'Step 2', 'Step 3'],
		glow = false,
		class: className,
		children
	}: Props = $props();

	function isCompleted(stepIndex: number): boolean {
		return stepIndex < currentStep - 1;
	}

	function isCurrent(stepIndex: number): boolean {
		return stepIndex === currentStep - 1;
	}
</script>

<ol class={cn('flex w-full items-center text-center text-sm font-medium', className)}>
	{#each steps as step, i}
		<li
			class={cn(
				'flex items-center',
				i < steps.length - 1 ? 'w-full' : '',
				i < steps.length - 1
					? "after:mx-6 after:inline-block after:h-1 after:w-full after:border-b-2 after:content-[''] md:after:mx-10"
					: '',
				isCompleted(i) || isCurrent(i)
					? 'after:border-primary-600 dark:after:border-primary-500'
					: 'after:border-gray-200 dark:after:border-gray-700'
			)}>
			<div class="flex w-full flex-col items-center">
				<span
					class={cn(
						'flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm',
						isCompleted(i)
							? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400'
							: isCurrent(i)
								? 'bg-primary-600 ring-primary-100 dark:bg-primary-500 dark:ring-primary-900 text-white ring-4'
								: 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400',
						isCurrent(i) && glow ? 'shadow-primary-500/50 shadow-lg' : ''
					)}>
					{#if isCompleted(i)}
						<Check class="h-5 w-5" />
					{:else if children}
						{@render children({ step: i + 1, label: step })}
					{:else}
						{i + 1}
					{/if}
				</span>
				<span
					class={cn(
						'mt-2 hidden text-sm sm:inline-block',
						isCurrent(i)
							? 'text-primary-600 dark:text-primary-400 font-semibold'
							: isCompleted(i)
								? 'text-gray-700 dark:text-gray-300'
								: 'text-gray-500 dark:text-gray-400'
					)}>
					{step}
				</span>
			</div>
		</li>
	{/each}
</ol>

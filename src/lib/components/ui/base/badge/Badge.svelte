<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { X } from '@lucide/svelte';
	import {
		BadgeVariant,
		ComponentSize,
		type BadgeVariantType,
		type ComponentSizeType
	} from '../enums';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		variant?: BadgeVariant | BadgeVariantType;
		size?: ComponentSize | ComponentSizeType;
		dismissable?: boolean; // Show dismiss button
		onclose?: () => void; // Called when dismiss button is clicked
		children?: Snippet;
		class?: string;
		href?: string;
	}

	let {
		variant = BadgeVariant.DEFAULT,
		size = ComponentSize.MD,
		dismissable = false,
		onclose,
		children,
		class: className,
		href,
		...restProps
	}: Props = $props();

	const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full border';

	const variants: Record<string, string> = {
		[BadgeVariant.DEFAULT]:
			'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600',
		[BadgeVariant.PRIMARY]:
			'bg-primary-100 text-primary-800 border-primary-200 dark:bg-primary-900/30 dark:text-primary-300 dark:border-primary-700',
		[BadgeVariant.SECONDARY]:
			'bg-secondary-100 text-secondary-800 border-secondary-200 dark:bg-secondary-900/30 dark:text-secondary-300 dark:border-secondary-700',
		[BadgeVariant.SUCCESS]:
			'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700',
		[BadgeVariant.WARNING]:
			'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700',
		[BadgeVariant.ORANGE]:
			'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700',
		[BadgeVariant.ERROR]:
			'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700',
		[BadgeVariant.INFO]:
			'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700'
	};

	const sizes: Record<string, string> = {
		[ComponentSize.XS]: 'px-1.5 py-0.5 text-xs',
		[ComponentSize.SM]: 'px-2 py-0.5 text-xs',
		[ComponentSize.MD]: 'px-2.5 py-0.5 text-sm',
		[ComponentSize.LG]: 'px-3 py-1 text-base'
	};

	const computedClass = $derived(cn(baseStyles, variants[variant], sizes[size], className));
</script>

{#if href}
	<a
		{href}
		class={cn(computedClass, 'transition-opacity hover:opacity-80', dismissable && 'pr-1')}
		{...restProps}>
		{#if children}
			{@render children()}
		{/if}
		{#if dismissable && onclose}
			<button
				type="button"
				onclick={onclose}
				class="ml-1 inline-flex items-center rounded-sm p-0.5 hover:bg-black/10 dark:hover:bg-white/10"
				aria-label="Remove">
				<X class="h-3 w-3" />
			</button>
		{/if}
	</a>
{:else}
	<span class={cn(computedClass, dismissable && 'pr-1')} {...restProps}>
		{#if children}
			{@render children()}
		{/if}
		{#if dismissable && onclose}
			<button
				type="button"
				onclick={onclose}
				class="ml-1 inline-flex items-center rounded-sm p-0.5 hover:bg-black/10 dark:hover:bg-white/10"
				aria-label="Remove">
				<X class="h-3 w-3" />
			</button>
		{/if}
	</span>
{/if}

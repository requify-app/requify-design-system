<script lang="ts">
	import { Button as BitsButton } from 'bits-ui';
	import { cn } from '$lib/utils/cn';
	import {
		ButtonVariant,
		ComponentSize,
		type ButtonVariantType,
		type ComponentSizeType
	} from '../enums';
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: ButtonVariant | ButtonVariantType;
		size?: ComponentSize | ComponentSizeType;
		fullWidth?: boolean;
		loading?: boolean;
		icon?: Snippet;
		children?: Snippet;
		class?: string;
		href?: string;
		disabled?: boolean;
		type?: 'button' | 'submit' | 'reset';
		onclick?: (e: MouseEvent) => void;
		[key: string]: any; // Allow additional HTML attributes
	}

	let {
		variant = ButtonVariant.PRIMARY,
		size = ComponentSize.MD,
		fullWidth = false,
		loading = false,
		disabled = false,
		icon,
		children,
		class: className,
		href,
		type = 'button',
		onclick,
		...restProps
	}: Props = $props();

	const baseStyles =
		'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-3 disabled:pointer-events-none disabled:opacity-50 whitespace-normal overflow-hidden';

	const variants: Record<string, string> = {
		[ButtonVariant.PRIMARY]:
			'bg-gradient-to-b from-primary-600 to-primary-700 text-white shadow-[0_1px_2px_0_rgb(0_0_0/0.06),0_4px_12px_-2px_rgb(61_82_153/0.15),inset_0_1px_0_0_rgb(255_255_255/0.15)] hover:shadow-[0_2px_4px_0_rgb(0_0_0/0.08),0_8px_24px_-4px_rgb(61_82_153/0.25),inset_0_1px_0_0_rgb(255_255_255/0.2)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_1px_2px_0_rgb(0_0_0/0.1),0_2px_8px_-2px_rgb(61_82_153/0.2),inset_0_1px_0_0_rgb(255_255_255/0.1)]',
		[ButtonVariant.SECONDARY]:
			'bg-gradient-to-b from-secondary-500 to-secondary-600 text-white shadow-[0_1px_2px_0_rgb(0_0_0/0.06),0_4px_12px_-2px_rgb(209_106_31/0.15),inset_0_1px_0_0_rgb(255_255_255/0.15)] hover:shadow-[0_2px_4px_0_rgb(0_0_0/0.08),0_8px_24px_-4px_rgb(209_106_31/0.25),inset_0_1px_0_0_rgb(255_255_255/0.2)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_1px_2px_0_rgb(0_0_0/0.1),0_2px_8px_-2px_rgb(209_106_31/0.2),inset_0_1px_0_0_rgb(255_255_255/0.1)]',
		[ButtonVariant.OUTLINE]:
			'border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md active:bg-gray-100 dark:bg-gray-800/80 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700/80',
		[ButtonVariant.GHOST]:
			'text-gray-700 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 active:bg-white/5 dark:text-gray-300 dark:hover:bg-gray-800/50',
		[ButtonVariant.DANGER]:
			'bg-gradient-to-b from-error-600 to-error-700 text-white shadow-[0_1px_2px_0_rgb(0_0_0/0.06),0_4px_12px_-2px_rgb(220_38_38/0.15),inset_0_1px_0_0_rgb(255_255_255/0.15)] hover:shadow-[0_2px_4px_0_rgb(0_0_0/0.08),0_8px_24px_-4px_rgb(220_38_38/0.25),inset_0_1px_0_0_rgb(255_255_255/0.2)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_1px_2px_0_rgb(0_0_0/0.1),0_2px_8px_-2px_rgb(220_38_38/0.2),inset_0_1px_0_0_rgb(255_255_255/0.1)]',
		[ButtonVariant.SUCCESS]:
			'bg-gradient-to-b from-success-600 to-success-700 text-white shadow-[0_1px_2px_0_rgb(0_0_0/0.06),0_4px_12px_-2px_rgb(22_163_74/0.15),inset_0_1px_0_0_rgb(255_255_255/0.15)] hover:shadow-[0_2px_4px_0_rgb(0_0_0/0.08),0_8px_24px_-4px_rgb(22_163_74/0.25),inset_0_1px_0_0_rgb(255_255_255/0.2)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_1px_2px_0_rgb(0_0_0/0.1),0_2px_8px_-2px_rgb(22_163_74/0.2),inset_0_1px_0_0_rgb(255_255_255/0.1)]'
	};

	const sizes: Record<string, string> = {
		[ComponentSize.XS]: 'min-h-7 h-auto py-1.5 px-2.5 text-xs rounded-md',
		[ComponentSize.SM]: 'min-h-8 h-auto py-2 px-3 text-sm rounded-md',
		[ComponentSize.MD]: 'min-h-10 h-auto py-2.5 px-4 text-base rounded-md',
		[ComponentSize.LG]: 'min-h-11 h-auto py-3 px-6 text-base rounded-md',
		[ComponentSize.XL]: 'min-h-12 h-auto py-3.5 px-8 text-lg rounded-md'
	};

	const computedClass = $derived(
		cn(baseStyles, variants[variant], sizes[size], fullWidth && 'w-full', className)
	);
</script>

<BitsButton.Root
	class={computedClass}
	{type}
	disabled={disabled || loading}
	{onclick}
	{...restProps}>
	{#if href !== undefined}
		{href}
	{/if}
	{#if loading}
		<svg
			class="h-4 w-4 animate-spin"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24">
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
			</circle>
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
			</path>
		</svg>
	{:else if icon}
		{@render icon()}
	{/if}

	{#if children}
		{@render children()}
	{/if}
</BitsButton.Root>

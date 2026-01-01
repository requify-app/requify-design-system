<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { CircleAlert, TriangleAlert, Info, CircleCheckBig, X } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { AlertVariant } from '../enums';

	type AlertVariantType = 'info' | 'success' | 'warning' | 'error';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant?: AlertVariant | AlertVariantType;
		dismissible?: boolean;
		onDismiss?: () => void;
		icon?: Snippet;
		children?: Snippet;
		class?: string;
	}

	let {
		variant = 'info',
		dismissible = false,
		onDismiss,
		icon,
		children,
		class: className,
		...restProps
	}: Props = $props();

	let dismissed = $state(false);

	const defaultIcons: Record<string, any> = {
		[AlertVariant.INFO]: Info,
		[AlertVariant.SUCCESS]: CircleCheckBig,
		[AlertVariant.WARNING]: TriangleAlert,
		[AlertVariant.ERROR]: CircleAlert
	};

	const variants: Record<string, string> = {
		[AlertVariant.INFO]:
			'bg-info-50 border-info-200 text-info-800 dark:bg-info-900/20 dark:border-info-700 dark:text-info-300',
		[AlertVariant.SUCCESS]:
			'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-700 dark:text-green-300',
		[AlertVariant.WARNING]:
			'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-700 dark:text-yellow-300',
		[AlertVariant.ERROR]:
			'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-700 dark:text-red-300'
	};

	const iconColors: Record<string, string> = {
		[AlertVariant.INFO]: 'text-info-600 dark:text-info-400',
		[AlertVariant.SUCCESS]: 'text-green-600 dark:text-green-400',
		[AlertVariant.WARNING]: 'text-yellow-600 dark:text-yellow-400',
		[AlertVariant.ERROR]: 'text-red-600 dark:text-red-400'
	};

	const DefaultIcon = $derived(defaultIcons[variant]);

	function handleDismiss() {
		dismissed = true;
		if (onDismiss) {
			onDismiss();
		}
	}

	const baseStyles = 'flex items-start gap-3 rounded-lg border p-4';
	const computedClass = $derived(cn(baseStyles, variants[variant], className));
</script>

{#if !dismissed}
	<div class={computedClass} role="alert" {...restProps}>
		<div class="flex-shrink-0 {iconColors[variant]}">
			{#if icon}
				{@render icon()}
			{:else}
				<DefaultIcon class="h-5 w-5" />
			{/if}
		</div>

		<div class="flex-1 text-sm">
			{#if children}
				{@render children()}
			{/if}
		</div>

		{#if dismissible}
			<button
				type="button"
				onclick={handleDismiss}
				class="flex-shrink-0 rounded-md p-1 hover:bg-black/10 dark:hover:bg-white/10"
				aria-label="Dismiss">
				<X class="h-4 w-4" />
			</button>
		{/if}
	</div>
{/if}

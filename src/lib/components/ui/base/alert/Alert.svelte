<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { CircleAlert, TriangleAlert, Info, CircleCheckBig, X } from '@lucide/svelte';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { StatusVariant } from '../enums';
	import type { StatusVariantType } from '../enums';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant?: StatusVariant | StatusVariantType;
		dismissible?: boolean;
		onDismiss?: () => void;
		icon?: Snippet;
		children?: Snippet;
		class?: string;
	}

	let {
		variant = StatusVariant.INFO,
		dismissible = false,
		onDismiss,
		icon,
		children,
		class: className,
		...restProps
	}: Props = $props();

	let dismissed = $state(false);

	const defaultIcons: Record<StatusVariant, any> = {
		[StatusVariant.INFO]: Info,
		[StatusVariant.SUCCESS]: CircleCheckBig,
		[StatusVariant.WARNING]: TriangleAlert,
		[StatusVariant.ERROR]: CircleAlert
	};

	const variants: Record<StatusVariant, string> = {
		[StatusVariant.INFO]:
			'bg-info-50 border-info-200 text-info-800 dark:bg-info-900/20 dark:border-info-700 dark:text-info-300',
		[StatusVariant.SUCCESS]:
			'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-700 dark:text-green-300',
		[StatusVariant.WARNING]:
			'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-700 dark:text-yellow-300',
		[StatusVariant.ERROR]:
			'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-700 dark:text-red-300'
	};

	const iconColors: Record<StatusVariant, string> = {
		[StatusVariant.INFO]: 'text-info-600 dark:text-info-400',
		[StatusVariant.SUCCESS]: 'text-green-600 dark:text-green-400',
		[StatusVariant.WARNING]: 'text-yellow-600 dark:text-yellow-400',
		[StatusVariant.ERROR]: 'text-red-600 dark:text-red-400'
	};

	const DefaultIcon = $derived(defaultIcons[variant]);

	function handleDismiss() {
		dismissed = true;
		if (onDismiss) {
			onDismiss();
		}
	}

	const baseStyles = 'flex items-start gap-3 rounded-lg border p-4';
	const computedClass = $derived(cn(baseStyles, variants[variant] as string, className));
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

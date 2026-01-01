<script lang="ts">
	import { ModalSize } from '$lib/components/ui/base/enums';
	import Modal from './Modal.svelte';
	import Button from '../button/Button.svelte';
	import { CircleAlert, TriangleAlert, Info, CircleCheckBig } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		open?: boolean;
		variant?: 'info' | 'warning' | 'error' | 'success';
		title: string;
		description?: string;
		confirmText?: string;
		cancelText?: string;
		onConfirm?: () => void;
		onCancel?: () => void;
		children?: Snippet;
		class?: string;
	}

	let {
		open = $bindable(),
		variant = 'info',
		title,
		description,
		confirmText = 'Confirm',
		cancelText = 'Cancel',
		onConfirm,
		onCancel,
		children,
		class: className,
		...restProps
	}: Props = $props();

	const icons = {
		info: Info,
		warning: TriangleAlert,
		error: CircleAlert,
		success: CircleCheckBig
	};

	const iconColors = {
		info: 'text-info-600',
		warning: 'text-warning-600',
		error: 'text-error-600',
		success: 'text-success-600'
	};

	const buttonVariants = {
		info: 'primary',
		warning: 'secondary',
		error: 'danger',
		success: 'success'
	} as const;

	const Icon = $derived(icons[variant]);

	function handleConfirm() {
		if (onConfirm) {
			onConfirm();
		}
		open = false;
	}

	function handleCancel() {
		if (onCancel) {
			onCancel();
		}
		open = false;
	}
</script>

<Modal bind:open size={ModalSize.SM} dismissible class={className} {...restProps}>
	<div class="text-center">
		<div
			class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
			<Icon class="h-6 w-6 {iconColors[variant]}" />
		</div>

		<h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-50">
			{title}
		</h3>

		{#if description}
			<p class="mb-5 text-sm text-gray-600 dark:text-gray-400">
				{description}
			</p>
		{/if}

		{#if children}
			<div class="mb-5">
				{@render children()}
			</div>
		{/if}
	</div>

	{#snippet footer()}
		<Button variant="outline" onclick={handleCancel}>
			{cancelText}
		</Button>
		<Button variant={buttonVariants[variant]} onclick={handleConfirm}>
			{confirmText}
		</Button>
	{/snippet}
</Modal>

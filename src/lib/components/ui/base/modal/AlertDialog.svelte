<script lang="ts">
	import { ModalSize, StatusVariant, ButtonVariant } from '$lib/components/ui/base/enums';
	import type { StatusVariantType } from '$lib/components/ui/base/enums';
	import Modal from './Modal.svelte';
	import Button from '../button/Button.svelte';
	import { CircleAlert, TriangleAlert, Info, CircleCheckBig } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	/**
	 * Alert dialog for critical confirmations and important messages.
	 * Wraps Modal with pre-configured confirm/cancel actions and variant icons.
	 *
	 * @example Basic confirmation
	 * ```svelte
	 * <AlertDialog
	 *   bind:open={showDialog}
	 *   title="Delete Account"
	 *   description="This action cannot be undone"
	 *   onConfirm={handleDelete}
	 * />
	 * ```
	 *
	 * @example Error variant
	 * ```svelte
	 * <AlertDialog
	 *   bind:open={showError}
	 *   variant="error"
	 *   title="Error Occurred"
	 *   description="Something went wrong. Please try again."
	 *   confirmText="Retry"
	 *   onConfirm={handleRetry}
	 * />
	 * ```
	 *
	 * @example Success variant with custom content
	 * ```svelte
	 * <AlertDialog
	 *   bind:open={showSuccess}
	 *   variant="success"
	 *   title="Operation Complete"
	 *   onConfirm={() => showSuccess = false}
	 * >
	 *   {#snippet children()}
	 *     <p class="text-sm text-gray-600">
	 *       Your changes have been saved successfully.
	 *     </p>
	 *   {/snippet}
	 * </AlertDialog>
	 * ```
	 *
	 * @example Warning with custom buttons
	 * ```svelte
	 * <AlertDialog
	 *   bind:open={showWarning}
	 *   variant="warning"
	 *   title="Unsaved Changes"
	 *   confirmText="Discard"
	 *   cancelText="Keep Editing"
	 *   onConfirm={handleDiscard}
	 *   onCancel={handleKeep}
	 * />
	 * ```
	 *
	 * @example Info variant
	 * ```svelte
	 * <AlertDialog
	 *   bind:open={showInfo}
	 *   variant="info"
	 *   title="New Feature"
	 *   description="Check out our latest features"
	 *   confirmText="Got it"
	 *   onConfirm={() => showInfo = false}
	 * />
	 * ```
	 *
	 * @param {boolean} open - Controls dialog visibility. Default: false
	 * @param {StatusVariant | StatusVariantType} variant - Visual variant affecting icon and button colors. Default: StatusVariant.INFO
	 *   Options: 'info' | 'warning' | 'error' | 'success'
	 * @param {string} title - Dialog title (required)
	 * @param {string} description - Optional descriptive text below title
	 * @param {string} confirmText - Text for confirm button. Default: 'Confirm'
	 * @param {string} cancelText - Text for cancel button. Default: 'Cancel'
	 * @param {() => void} onConfirm - Callback when confirm button is clicked
	 * @param {() => void} onCancel - Callback when cancel button is clicked
	 * @param {Snippet} children - Custom content below description
	 * @param {string} class - Additional CSS classes to apply
	 *
	 * @see {@link Modal} - Base modal component
	 * @see {@link Drawer} - For side-panel navigation
	 *
	 * @accessibility
	 * - Keyboard: Escape to close, Tab/Shift+Tab to navigate buttons
	 * - Focus trap: Focus managed by Modal component
	 * - ARIA: Proper role, aria-labelledby, aria-describedby managed by bits-ui
	 * - Screen reader: Icon, title, and description are properly announced
	 * - High contrast colors for all variants
	 */
	interface Props {
		open?: boolean;
		variant?: StatusVariant | StatusVariantType;
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
		variant = StatusVariant.INFO,
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

	const icons: Record<StatusVariant, any> = {
		[StatusVariant.INFO]: Info,
		[StatusVariant.WARNING]: TriangleAlert,
		[StatusVariant.ERROR]: CircleAlert,
		[StatusVariant.SUCCESS]: CircleCheckBig
	};

	const iconColors: Record<StatusVariant, string> = {
		[StatusVariant.INFO]: 'text-info-600',
		[StatusVariant.WARNING]: 'text-warning-600',
		[StatusVariant.ERROR]: 'text-error-600',
		[StatusVariant.SUCCESS]: 'text-success-600'
	};

	const buttonVariants: Record<StatusVariant, ButtonVariant> = {
		[StatusVariant.INFO]: ButtonVariant.PRIMARY,
		[StatusVariant.WARNING]: ButtonVariant.SECONDARY,
		[StatusVariant.ERROR]: ButtonVariant.DANGER,
		[StatusVariant.SUCCESS]: ButtonVariant.SUCCESS
	};

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

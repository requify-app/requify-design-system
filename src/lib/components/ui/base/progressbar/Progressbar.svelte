<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { ComponentSize, ProgressbarVariant } from '../enums';

	interface Props {
		progress?: number;
		size?: ComponentSize | string;
		color?: ProgressbarVariant;
		labelInside?: boolean;
		labelOutside?: boolean;
		class?: string;
	}

	let {
		progress = 0,
		size = ComponentSize.MD,
		color = ProgressbarVariant.PRIMARY,
		labelInside = false,
		labelOutside = false,
		class: className,
		...restProps
	}: Props = $props();

	const colorStyles: Record<ProgressbarVariant, string> = {
		[ProgressbarVariant.PRIMARY]: 'bg-primary-600 dark:bg-primary-500',
		[ProgressbarVariant.SECONDARY]: 'bg-secondary-500 dark:bg-secondary-400',
		[ProgressbarVariant.SUCCESS]: 'bg-green-600 dark:bg-green-500',
		[ProgressbarVariant.ERROR]: 'bg-red-600 dark:bg-red-500',
		[ProgressbarVariant.WARNING]: 'bg-yellow-400 dark:bg-yellow-300',
		[ProgressbarVariant.INFO]: 'bg-blue-600 dark:bg-blue-500'
	};

	const sizeStyles: Record<string, string> = {
		[ComponentSize.XS]: 'h-1',
		[ComponentSize.SM]: 'h-1.5',
		[ComponentSize.MD]: 'h-2.5',
		[ComponentSize.LG]: 'h-4',
		[ComponentSize.XL]: 'h-6'
	};

	const sizeClass = $derived(sizeStyles[size] ?? size);
	const barBg = 'bg-gray-200 dark:bg-gray-700';
	const progressValue = $derived(Math.min(Math.max(progress, 0), 100));
</script>

<div class="w-full">
	{#if labelOutside}
		<div class="mb-1 flex justify-between">
			<span class="text-sm font-medium text-gray-700 dark:text-gray-300">{progressValue}%</span>
		</div>
	{/if}
	<div
		class={cn('w-full overflow-hidden rounded-full', barBg, sizeClass, className)}
		{...restProps}>
		<div
			class={cn('h-full transition-all duration-300', colorStyles[color])}
			style="width: {progressValue}%">
			{#if labelInside && size === 'lg'}
				<span class="flex h-full items-center justify-center text-xs font-medium text-white">
					{progressValue}%
				</span>
			{/if}
		</div>
	</div>
</div>

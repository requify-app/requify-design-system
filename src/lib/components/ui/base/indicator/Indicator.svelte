<script lang="ts">
	import { cn } from '$lib/utils/cn';

	type Variant = 'success' | 'error' | 'warning' | 'info' | 'default';
	type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	type Placement =
		| 'top-left'
		| 'top-center'
		| 'top-right'
		| 'center-left'
		| 'center'
		| 'center-right'
		| 'bottom-left'
		| 'bottom-center'
		| 'bottom-right';

	interface Props {
		variant?: Variant;
		size?: Size;
		placement?: Placement;
		border?: boolean;
		class?: string;
	}

	let {
		variant = 'default',
		size = 'md',
		placement = 'top-right',
		border = false,
		class: className
	}: Props = $props();

	// Map variants to colors
	const variantColors = {
		success: 'bg-green-500',
		error: 'bg-red-500',
		warning: 'bg-yellow-500',
		info: 'bg-blue-500',
		default: 'bg-gray-500'
	};

	const sizes = {
		xs: 'h-2 w-2',
		sm: 'h-2.5 w-2.5',
		md: 'h-3 w-3',
		lg: 'h-3.5 w-3.5',
		xl: 'h-6 w-6'
	};

	const placements = {
		'top-left': '-top-1 -left-1',
		'top-center': '-top-1 left-1/2 -translate-x-1/2',
		'top-right': '-top-1 -right-1',
		'center-left': 'top-1/2 -left-1 -translate-y-1/2',
		center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
		'center-right': 'top-1/2 -right-1 -translate-y-1/2',
		'bottom-left': '-bottom-1 -left-1',
		'bottom-center': '-bottom-1 left-1/2 -translate-x-1/2',
		'bottom-right': '-bottom-1 -right-1'
	};

	const baseStyles = 'absolute rounded-full';
	const borderStyles = $derived(border ? 'ring-2 ring-white dark:ring-gray-900' : '');
</script>

<span
	class={cn(
		baseStyles,
		sizes[size],
		placements[placement],
		variantColors[variant],
		borderStyles,
		className
	)}
	aria-hidden="true">
</span>

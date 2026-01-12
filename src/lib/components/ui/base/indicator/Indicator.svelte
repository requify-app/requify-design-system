<script lang="ts">
	import { cn } from '$lib/utils/cn';

	/**
	 * Status indicator badge for notifications, alerts, and status markers.
	 * Absolute positioned dot with variant colors and flexible sizing.
	 *
	 * @example Default indicator (top-right)
	 * ```svelte
	 * <div class="relative">
	 *   <Button>Notifications</Button>
	 *   <Indicator />
	 * </div>
	 * ```
	 *
	 * @example Success variant
	 * ```svelte
	 * <div class="relative">
	 *   <span>Online</span>
	 *   <Indicator variant="success" placement="right" />
	 * </div>
	 * ```
	 *
	 * @example Error with border
	 * ```svelte
	 * <div class="relative">
	 *   <Avatar />
	 *   <Indicator variant="error" border />
	 * </div>
	 * ```
	 *
	 * @example Large indicator
	 * ```svelte
	 * <div class="relative">
	 *   <Card>
	 *     <h3>Title</h3>
	 *   </Card>
	 *   <Indicator variant="warning" size="xl" />
	 * </div>
	 * ```
	 *
	 * @example Centered placement
	 * ```svelte
	 * <div class="relative">
	 *   <img src="avatar.jpg" alt="Avatar" />
	 *   <Indicator variant="success" placement="center" />
	 * </div>
	 * ```
	 *
	 * @example Small indicator
	 * ```svelte
	 * <div class="relative">
	 *   <Badge>Badge</Badge>
	 *   <Indicator size="xs" />
	 * </div>
	 * ```
	 *
	 * @param {'success' | 'error' | 'warning' | 'info' | 'default'} variant - Color variant. Default: 'default'
	 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl'} size - Indicator size. Default: 'md'
	 *   Sizes: 'xs' (8px), 'sm' (10px), 'md' (12px), 'lg' (14px), 'xl' (24px)
	 * @param {'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'} placement - Position relative to parent. Default: 'top-right'
	 * @param {boolean} border - If true, adds white ring border around indicator. Default: false
	 * @param {string} class - Additional CSS classes to apply
	 *
	 * @see {@link Badge} - For text-based badges
	 * @see {@link Avatar} - For user avatars with status indicators
	 *
	 * @accessibility
	 * - aria-hidden="true" for decorative markers
	 * - High contrast colors for visibility
	 * - Optional border for better visibility on colored backgrounds
	 * - Small footprint for subtle notifications
	 */
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
		sizes[size] as string,
		placements[placement] as string,
		variantColors[variant] as string,
		borderStyles,
		className
	)}
	aria-hidden="true">
</span>

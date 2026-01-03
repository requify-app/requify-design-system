<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';

	/**
	 * Table body component containing data rows.
	 * Semantic tbody element for data section of table.
	 *
	 * @example Basic table body
	 * ```svelte
	 * <TableBody>
	 *   <TableBodyRow>
	 *     <TableBodyCell>John Doe</TableBodyCell>
	 *     <TableBodyCell>john@example.com</TableBodyCell>
	 *   </TableBodyRow>
	 *   <TableBodyRow>
	 *     <TableBodyCell>Jane Smith</TableBodyCell>
	 *     <TableBodyCell>jane@example.com</TableBodyCell>
	 *   </TableBodyRow>
	 * </TableBody>
	 * ```
	 *
	 * @example With custom styling
	 * ```svelte
	 * <TableBody class="divide-y-2">
	 *   <TableBodyRow>
	 *     <TableBodyCell>Data</TableBodyCell>
	 *   </TableBodyRow>
	 * </TableBody>
	 * ```
	 *
	 * @example Empty state
	 * ```svelte
	 * <TableBody>
	 *   <TableBodyRow>
	 *     <TableBodyCell colspan="3" class="text-center text-gray-500">
	 *       No data available
	 *     </TableBodyCell>
	 *   </TableBodyRow>
	 * </TableBody>
	 * ```
	 *
	 * @param {Snippet} children - TableBodyRow components
	 * @param {string} class - Additional CSS classes to apply
	 *
	 * @see {@link Table} - Main table container
	 * @see {@link TableBodyRow} - Table row component
	 * @see {@link TableBodyCell} - Table cell component
	 *
	 * @accessibility
	 * - Semantic tbody element
	 * - Separates header from data for screen readers
	 * - Maintains proper table structure
	 */
	interface Props {
		children?: Snippet;
		class?: string;
	}

	let { children, class: className, ...restProps }: Props = $props();
</script>

<tbody class={cn(className)} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</tbody>

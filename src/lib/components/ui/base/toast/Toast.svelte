<script lang="ts">
  import { cn } from '$lib/utils/cn'
  import { CircleAlert, CircleCheckBig, Info, TriangleAlert, X } from '@lucide/svelte'
  import { fly } from 'svelte/transition'
  import type { Snippet } from 'svelte'
  import { ToastVariant } from '$lib/components/ui/base/enums'

  interface ToastData {
    id: string
    variant?: ToastVariant
    message?: string
  }

  interface Props {
    toast?: ToastData
    onDismiss?: (id: string) => void
    dismissable?: boolean
    onclose?: () => void
    color?: ToastVariant
    children?: Snippet
    class?: string
  }

  let {
    toast,
    onDismiss,
    dismissable = false,
    onclose,
    color: colorProp,
    children,
    class: className
  }: Props = $props()

  const variant = $derived(toast?.variant ?? colorProp ?? ToastVariant.INFO)

  const icons = {
    [ToastVariant.INFO]: Info,
    [ToastVariant.SUCCESS]: CircleCheckBig,
    [ToastVariant.ERROR]: CircleAlert,
    [ToastVariant.WARNING]: TriangleAlert
  } as const

  const variants = {
    [ToastVariant.INFO]:
      'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/90 dark:border-blue-700 dark:text-blue-100',
    [ToastVariant.SUCCESS]:
      'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/90 dark:border-green-700 dark:text-green-100',
    [ToastVariant.ERROR]:
      'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/90 dark:border-red-700 dark:text-red-100',
    [ToastVariant.WARNING]:
      'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/90 dark:border-yellow-700 dark:text-yellow-100'
  } as const

  const iconColors = {
    [ToastVariant.INFO]: 'text-blue-600 dark:text-blue-400',
    [ToastVariant.SUCCESS]: 'text-green-600 dark:text-green-400',
    [ToastVariant.ERROR]: 'text-red-600 dark:text-red-400',
    [ToastVariant.WARNING]: 'text-yellow-600 dark:text-yellow-400'
  } as const

  const Icon = $derived(icons[variant])

  function handleDismiss() {
    if (toast && onDismiss) {
      onDismiss(toast.id)
    }
    if (onclose) {
      onclose()
    }
  }

  const showDismissButton = $derived(dismissable || (toast && onDismiss))

  const baseStyles =
    'flex items-center gap-3 rounded-lg border p-4 shadow-lg backdrop-blur-sm min-w-[300px] max-w-md'
  const computedClass = $derived(cn(baseStyles, variants[variant], className))
</script>

<div
  transition:fly={{ y: -20, duration: 200 }}
  class={computedClass}
  role="alert"
  aria-live="polite"
>
  {#if !children}
    <div class="flex-shrink-0 {iconColors[variant]}">
      <Icon class="h-5 w-5" />
    </div>
  {/if}

  <div class="flex-1 text-sm font-medium">
    {#if children}
      {@render children()}
    {:else}
      {toast?.message ?? ''}
    {/if}
  </div>

  {#if showDismissButton}
    <button
      type="button"
      onclick={handleDismiss}
      class="flex-shrink-0 rounded-md p-1 hover:bg-black/10 dark:hover:bg-white/10"
      aria-label="Dismiss"
    >
      <X class="h-4 w-4" />
    </button>
  {/if}
</div>

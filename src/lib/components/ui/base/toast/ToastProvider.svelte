<script lang="ts">
  import Toast from './Toast.svelte'
  import type { Snippet } from 'svelte'
  import { ToastVariant } from '$lib/components/ui/base/enums'

  interface ToastData {
    id: string
    variant?: ToastVariant
    message?: string
  }

  interface Props {
    children?: Snippet
    toasts?: ToastData[]
    position?:
      | 'top-left'
      | 'top-center'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-center'
      | 'bottom-right'
    onDismiss?: (id: string) => void
  }

  let { children, toasts = [], position = 'top-right', onDismiss }: Props = $props()

  const positions = {
    'top-left': 'top-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-4 right-4'
  }

  function handleDismiss(id: string) {
    if (onDismiss) {
      onDismiss(id)
    }
  }
</script>

<!-- Toast Container -->
<div class="pointer-events-none fixed {positions[position]} z-50 flex flex-col gap-2">
  {#each toasts as toast (toast.id)}
    <div class="pointer-events-auto">
      <Toast {toast} onDismiss={handleDismiss} />
    </div>
  {/each}
</div>

<!-- App Content -->
{#if children}
  {@render children()}
{/if}

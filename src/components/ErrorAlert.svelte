<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  export let error;

  const dispatch = createEventDispatcher();

  function clearError() {
    dispatch('close');
  }
</script>

{#if error}
  <div class="error-alert" transition:fade on:click={clearError}>
    <strong>Error:</strong> {error}
  </div>
{/if}

<style>
  .error-alert {
    margin: 1rem 0;
    padding: 1rem;
    text-align: left;
    color: white;
    cursor: pointer;
    background-color: #F87666;
    border-radius: 1.25rem;
  }
</style>

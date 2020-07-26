<script>
  import { writable } from 'svelte/store';
  import SlideTransition from '../components/SlideTransition.svelte';

  const width = writable();
</script>

<main bind:offsetWidth={$width}>
  <slot decorator={SlideTransition} scoped={{ width }} />
</main>

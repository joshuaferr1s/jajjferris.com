<script>
  import { BaseTransition } from '@sveltech/routify/decorators';
  import { fly, fade } from 'svelte/transition';
  export let scoped;

  const { width } = scoped;

  const configs = [
    {
      condition: ({ routes }) => routes[0] === routes[1],
      transition: () => {},
    },
    {
      condition: c=> c.routes[1].path.includes('index'),
      transition: fly,
      inParams: { x: $width, duration: 500, opacity: 1 },
      outParams: { x: -$width, duration: 500, opacity: 1 },
    },
    {
      condition: (c) => true,
      transition: fly,
      inParams: { x: -$width, duration: 500, opacity: 1 },
      outParams: { x: $width, duration: 500, opacity: 1 },
    },
  ];
</script>

<BaseTransition {configs}>
  <slot />
</BaseTransition>

<script>
  export let white = false;
  export let offWhite = false;
  export let navigateTo;
</script>

<svg xmlns="http://www.w3.org/2000/svg" on:click={() => document.getElementById(navigateTo) ? document.getElementById(navigateTo).scrollIntoView() : null} class="down-arrow" width="100%" class:white class:offWhite height="100%" viewBox="0 0 24 24" stroke-width="1.5" stroke="#595959" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9" />
  <line x1="8" y1="12" x2="12" y2="16" />
  <line x1="12" y1="8" x2="12" y2="16" />
  <line x1="16" y1="12" x2="12" y2="16" />
</svg>

<style>
  .down-arrow {
    margin-top: 2vmin;
    height: 6vmin;
    width: auto;
    cursor: pointer;
    min-height: 30px;
    transition: transform .2s ease-in-out;
  }
  .down-arrow:hover, .down-arrow:focus, .down-arrow:active {
    transform: scale(1.1);
    stroke: #91c499;
  }
  .white {
    stroke: white;
  }
  .offWhite {
    stroke: rgb(212, 221, 221);
  }
</style>
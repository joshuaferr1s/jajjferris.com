<script>
  import { url } from '@sveltech/routify';
</script>

<a href={$url('/donate')} class="social">
  <svg class="social-image" width="100%" height="100%" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#595959" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 1.66666H5C2.79086 1.66666 1 3.45752 1 5.66666V16.3333C1 18.5425 2.79086 20.3333 5 20.3333H21C23.2091 20.3333 25 18.5425 25 16.3333V5.66666C25 3.45752 23.2091 1.66666 21 1.66666Z"/>
    <path d="M1 8.33334H25" />
    <path d="M6.33333 15H6.34667"/>
    <path d="M11.6667 15H14.3333"/>
  </svg>
</a>

<style>
  .social {
    margin: 0 3vmin;
    height: 5vmin;
    width: 5vmin;
    min-height: 30px;
    min-width: 30px;
    cursor: pointer;
  }
  .social-image {
    height: 100%;
    min-height: 30px;
  }
  .social-image:hover, .social-image:focus, .social-image:active {
    transform: scale(1.1);
    stroke: #91c499;
  }
</style>
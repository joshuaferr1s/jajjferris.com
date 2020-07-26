<script>
  import { url } from '@sveltech/routify';
</script>

<div class="container e404">
  <div class="huge">404</div>
  <div>
    Page not found. 
    <a class="link" href={$url('/')}>Go Home</a>
  </div>
</div>

<style>
  .e404 {
    background-color: #f2e9dc;
    color: #595959;
  }
  .huge {
    font-family: 'Amatic SC';
    font-size: 12rem;
    font-weight: 700;
  }
  .link {
    margin-top: 2rem;
    color: #1b1c1f;
  }
  .link:hover, .link:active {
    color: #798cbb;
  }
</style>
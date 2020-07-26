<script>
  import Github from './Icons/Github.svelte';
  import Email from './Icons/Email.svelte';
  import Resume from './Icons/Resume.svelte';
  import Card from './Icons/Card.svelte';
</script>

<div class="container find-me" id="find-me">
  <h1 class="title">Find/Contact Me</h1>
  <div class="socials">
    <Github />
    <Email />
    <Resume />
    <Card />
  </div>
</div>

<style>
  .find-me {
    background-color: #f2e9dc;
    color: #595959;
  }
  .title {
    font-family: 'Amatic SC';
    font-size: 3rem;
    font-weight: 700;
  }
  .socials {
    display: flex;
    flex-direction: row;
  }
</style>

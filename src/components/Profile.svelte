<script>
  import DownArrow from './Icons/DownArrow.svelte';
</script>

<div class="container profile" id="profile">
  <div class="text-center">
    <img class="avatar" src="Me.jpg" alt="Joshua Ferris's face" />
    <h2 class="name">Joshua Ferris</h2>
    <p class="headline">Fall 2020 Masters of Business Analytics Student</p>
    <DownArrow white navigateTo="my-story" />
  </div>
</div>

<style>
  .profile {
    background-color: #545e75;
    color: white;
  }
  .avatar {
    display: block;
    height: 25vmin;
    min-height: 150px;
    margin: .75rem auto;
    pointer-events: none;
    border-radius: 50%;
  }
  .name {
    font-family: 'Amatic SC';
    margin: .25rem;
    font-size: 2rem;
  }
  .headline {
    max-width: 60vmin;
    margin: 0;
    font-family: 'Baloo 2';
  }
</style>

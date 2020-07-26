<script>
  export let loading;
  export let amount;
</script>

<button
  type="button"
  on:click
  disabled={loading || !amount || amount < 1 || amount > 100}
>
  {#if loading}
    Loading...
  {:else}
    Donate ${amount ? amount : 0}
  {/if}
</button>

<style>
  button {
    display: block;
    width: 100%;
    height: 40px;
    cursor: pointer;
    background-color: #6772E5;
    color: #FFF;
    padding: 8px 12px;
    margin-bottom: 1rem;
    border: 0;
    border-radius: 30px;
    font-size: 1em;
    box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    transition: all .15s ease;
  }
  button:hover {
    background-color: #7795f8;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
  button:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
  button:disabled:hover {
    transform: none;
    box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);
  }
</style>

<script>
  import { url } from '@sveltech/routify';

  import ErrorAlert from '../components/ErrorAlert.svelte';
  import DonateButton from '../components/DonateButton.svelte';

  let loading, error, amount = 1;

  async function donate() {
    if (!(amount && !isNaN(amount) && amount >= 1 && amount <= 100)) {
      error = 'Amount must be between $1 and $100';
      return;
    }
    loading = true;
    const res = await fetch('/.netlify/functions/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });
    const data = await res.json();
    if (res.status !== 200) {
      error = data.message;
      loading = false;
      return;
    }

    const stripe = Stripe(data.publishableKey);
    const result = await stripe.redirectToCheckout({
      sessionId: data.sessionId,
    });

    if (result.error) {
      error = result.error.message;
      loading = false;
    }
  }
</script>

<div class="container donate">
  <h1 class="title">
    Donate
  </h1>
  <p class="text text-center">All payments are processed using Stripe. At no point does my website hold your card information.</p>
  <div class="payment-form">
    <ErrorAlert {error} on:close={() => {error = null;}} />
    <form on:submit={donate}>
      <input class="payment-amount" type="number" bind:value={amount} min={1} max={100}>
      <DonateButton {loading} {amount} on:click={donate} />
    </form>
  </div>
  <a href={$url('/')} class="link">
    Reutrn home
  </a>
</div>

<style>
  .donate {
    background-color: #f2e9dc;
    color: #595959;
  }
  .title {
    font-family: 'Amatic SC';
    font-size: 3rem;
    font-weight: 700;
  }
  .text {
    margin: 0;
    width: 40%;
  }
  .payment-form {
    width: 40%;
    max-width: 500px;
  }
  .payment-amount {
    display: block;
    width: 100%;
    border-radius: 15px;
    padding: .5rem 1rem;
    margin: 1rem 0;
    outline: none;
    border: none;
  }
  .link {
    margin-top: 2rem;
    color: #1b1c1f;
  }
  .link:hover, .link:active {
    color: #798cbb;
  }
  @media only screen and (max-width: 800px) {
    .text {
      width: 90%;
    }
  }
</style>

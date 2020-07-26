<script>
  import { url } from '@sveltech/routify';

  let quote = null;
  let fallBackQuote = {
    quote: 'Thanks for the adventure. Now go have a new one.',
    author: 'Ellie, Up'
  };

	async function loadQuote() {
		const res = await fetch('/.netlify/functions/get-quote');
		const data = await res.json();
		return data;
	}
</script>

<div class="container thank-you">
  <h1 class="title">Thank you!</h1>
  <p class="thank-text text-center">I'm not sure the reason why you gave me money, but you are a wonderful human bean!</p>
  <p class="thank-text text-center thank-text-last">As a thank you here is a random quote from my list of favorites.</p>
  {#await loadQuote() then quote}
    <blockquote class="quote quote-block text-left">"{quote ? quote.quote : fallBackQuote.quote}"</blockquote>
    <p class="quote quote-text text-left">- {quote ? quote.author : fallBackQuote.author}</p>
  {/await}
  <a href={$url('/')} class="link">
    Reutrn home
  </a>
</div>

<style>
  .thank-you {
    background-color: #f2e9dc;
    color: #595959;
  }
  .title {
    font-family: 'Amatic SC';
    font-size: 3rem;
    font-weight: 700;
  }
  .thank-text {
    width: 40%;
    margin: 0;
  }
  .thank-text-last {
    margin-bottom: 2rem;
  }
  .text-left {
    text-align: left;
  }
  .link {
    margin-top: 2rem;
    color: #1b1c1f;
  }
  .link:hover, .link:active {
    color: #798cbb;
  }
  .quote {
    width: 40%;
    font-family: 'Amatic SC';
    margin: 0;
  }
  .quote-block {
    font-size: 1.5rem;
    border-left: 5px solid #595959;
    padding-left: .75rem;
  }
  .quote-text {
    font-size: 1.25rem;
    padding-left: 3rem;
  }
  @media only screen and (max-width: 800px) {
    .title {
      margin: 5vmin 0;
    }
    .thank-text, .quote {
      width: 90%;
    }
  }
</style>
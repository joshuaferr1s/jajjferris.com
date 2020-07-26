<script>
  import DownArrow from './Icons/DownArrow.svelte';
</script>

<div class="container my-story" id="my-story">
  <h1 class="title">My Story</h1>
  <p class="text text-center">
    I was born and raised in the United Kingdom. Throughout high school, I spent my time studying mathematics and programming text based RPG games in Batch, Python, and Javascript. I attended the University of York to get my bachelors in mathematics, in which I obtained an upper second-class.
  </p>
  <p class="text text-center">
    In the summer of 2016, I flew to Ohio with Camp America to work at YMCA Camp Kern as an equestrian camp counselor. It was there I found my confidence and many other things. During staff training, I was sent to lifeguard training. Igniting my love for aquatic safety and leading me to become not only a <a class="link" href="/assets/lifeguard.pdf" target="_blank">certified lifeguard</a>, but also a <a class="link" href="/assets/lifeguard-instructor.pdf" target="_blank">lifeguard instructor</a> and <a class="link" href="/assets/ashi-instructor.pdf" target="_blank">first aid, CPR, and emergency oxygen instructor</a>. Over the next four years, I went from counselor to assistant ranch director, to aquatics director.
  </p>
  <p class="text text-center">
    Since graduating from the University of York in 2018, I married my wife and immigrated to the USA. My first year was spent awaiting approval from USCIS to work in the states. During which time I focused on developing my programming skills. I created websites for Camp Kern, as well as working in partnership with the University of Cincinnati’s Dr. Karla Washington on a tool for her research in speech-language pathology. This past year, I have been working part-time at YMCA Camp Kern as a barn hand. I'm looking forward to my next opportunity: a masters in business analytics at Miami University, starting this fall.
  </p>
  <DownArrow offWhite navigateTo="find-me" />
</div>

<style>
  .my-story {
    background-color: #80a1c1;
    color: rgb(212, 221, 221);
  }
  .title {
    font-family: 'Amatic SC';
    font-size: 3rem;
    font-weight: 700;
  }
  .text {
    width: 70%;
  }
  @media only screen and (max-width: 800px) {
    .title {
      margin: 5vmin 0;
    }
    .text {
      width: 90%;
    }
  }
</style>

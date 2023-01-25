<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
<header>

  <h1>Rachael Kelm-Southworth</h1>
  <h3>A developer who builds stuff kind of good</h3>
  </header>
  <section>
<h2>Skillz</h2>

<p>Javascript and React</p>
<p>CSS</p>
<p>Github</p>
<p>Telling other people how to Javascipt</p>
<p>MySql</p>
<p>GraphQL</p>
<p>no sequel</p>
<p>REST</p>
<p></p>
</section>
  <div class="card">
    <Counter />
  </div>
  
</main>

<style>

  main {
     font-family:Verdana, Geneva, Tahoma, sans-serif;
         padding: 1.5em;
         margin: 1.5em;
        
  }

  header {
    position:fixed;
    top: 0px;
    width:100%;
    margin: 0 0 0 -43%;
    box-shadow: inset 0 0 15px 5px rgba(0,0,0,0.75);
    text-align: center;
  }
  h1 {
       padding: 1.5em;
  }
  h1:hover {
 box-shadow: inset 0 0 15px 5px #303141aa;

  }

  h2 {
    font-size: 30px;
    padding: 1.5em;
  }


h3 {
  font-size: 20px;
    padding: 1.5em;
}

section {
  text-align: center;
  position: fixed;
  padding: 1.5em;
  width:80vw;
  box-shadow: 1px 1px 5px 3px grey;
}
</style>
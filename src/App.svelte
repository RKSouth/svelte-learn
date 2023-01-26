<script lang="ts">
  import Skillz from "./lib/Skillz.svelte";
  import Contact from "./lib/Contact.svelte";
  import About from './lib/About.svelte';
  import Xperience from "./lib/Xperience.svelte";
  import Resume from "./lib/Resume.svelte";
import Image from './assets/rachael.jpg'
  function toggle() {
    window.document.body.classList.toggle("dark-mode");
    
  }
  export let menu = 1;
  export let image = './src/assets/rachael.jpg'
</script>

<header>
  <img src={image}/>
  <h1>Rachael Kelm-Southworth</h1>

  <h3>A developer who builds stuff kind of good</h3>
</header>

<main>

  <section>
    <div>
      <button on:click={toggle}>Toggle mode</button>
    </div>
    <ul id="menu">
      <li><a href="/" on:click|preventDefault={() => (menu = 1)}>About</a></li> |
      <li><a href="/" on:click|preventDefault={() => (menu = 2)}>Skillz</a></li> |
      <li><a href="/" on:click|preventDefault={() => (menu = 3)}>Xperience</a></li> |
      <li><a href="/" on:click|preventDefault={() => (menu = 4)}>Resume</a></li> |
      <li><a href="/" on:click|preventDefault={() => (menu = 5)}>Contact</a></li>
    </ul>
    
    {#if menu === 1}
    <About/>
    {:else if menu === 2}
    <Skillz />
    {:else if menu === 3}
    <Xperience/>
    {:else if menu === 4}
    <Resume/>
    {:else if menu === 5}
    <Contact/>
    {:else}
    <h1>
      Page Not Found
    </h1>
    {/if}
    
  </section>

</main>

<style>
  :global(body) {
    background-color: #fafcff;
    color: #435b74;
    transition: background-color 0.3s;
  }
  :global(body.dark-mode) {
    background-color: #30363b;
    color: #bfc2c7;
  }

  button {
    background-color: #e0e0e0;
    color: #6b8eac;
    border: none;
    padding: 0.5rem;

  }
  button:focus {
   border: none;
   box-shadow: 0 0 15px 5px #303141aa;
  }
  :global(body.dark-mode) button {
    background-color: #1d3040;
    color: #bfc2c7;
  }
  main {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 1.5em;
    margin: 1.5em;
  }

  header {
    top: 0px;
    left: 0px;
    position: absolute;
    width: 100%;
    margin: 0 0 0 0%;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.75);
    text-align: left;
  }

  header:hover {
    box-shadow: inset 0 0 15px 5px #303141aa;
  }

header h3 {
  margin-left: 13rem;
  margin-top: -4rem;
}
  h1 {
    padding: 1.5em;
    margin-left: 10rem;
    margin-top: -2rem;
  }

  h2 {
    font-size: 30px;
    padding: 1.5em;
  }

  h3 {
    font-size: 20px;
    padding: 1.5em;
  }

  img{
    width: 8rem;
    float:left;
    box-shadow:  5px 5x 5px 5px rgb(134, 134, 134);
    margin: 2rem 0rem 2rem 5rem;

  }
  section {

    text-align: center;
    z-index: 0;
   
    padding: 1.5em;
    margin-top: 40vh;
    box-shadow: 1px 1px 5px 3px rgb(198, 198, 198);
  }

  div {
    margin: 1.5em;

  }


  :global(body.dark-mode) header,  :global(body.dark-mode) section {
  box-shadow: inset 0 0 15px 5px #17171eaa;
 }

 :global(body.dark-mode) header:hover, :global(body.dark-mode) section:hover {
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.75);
 }
 ul#menu li{
		display : inline;
	}
  ul{
    text-decoration: none;
  }
</style>


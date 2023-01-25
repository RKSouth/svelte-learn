<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import Skillz from "./lib/Skillz.svelte";
  function toggle() {
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<header>
  <h1>Rachael Kelm-Southworth</h1>
  <h3>A developer who builds stuff kind of good</h3>
</header>

<main>
  <section>
    <Skillz />
  </section>
  <div>
    <button on:click={toggle}>Toggle mode</button>
  </div>
</main>

<style>
  :global(body) {
    background-color: #e0e0e0;
    color: #6b8eac;
    transition: background-color 0.3s;
  }
  :global(body.dark-mode) {
    background-color: #1d3040;
    color: #bfc2c7;
  }

  button {
    background-color: #f76027;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    text-transform: uppercase;
  }
  :global(body.dark-mode) button {
    background-color: #0084f6;
    color: white;
  }
  main {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 1.5em;
    margin: 1.5em;
  }

  header {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    margin: 0 0 0 0%;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.75);
    text-align: center;
  }

  header:hover {
    box-shadow: inset 0 0 15px 5px #303141aa;
  }
  h1 {
    padding: 1.5em;
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
    margin-top: -10vh;
    position: relative;
    left: -20vw;
    padding: 1.5em;
    width: 80vw;
    box-shadow: 1px 1px 5px 3px grey;
  }

  section:hover {
    box-shadow: inset 0 0 15px 5px #303141aa;
  }

  div {
    margin: 1.5em;
    position: relative;
  }


  :global(body.dark-mode) header,  :global(body.dark-mode) section {
  box-shadow: inset 0 0 15px 5px #17171eaa;
 }

 :global(body.dark-mode) header:hover, :global(body.dark-mode) section:hover {
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.75);
 }

</style>


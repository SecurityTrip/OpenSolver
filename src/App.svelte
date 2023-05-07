<script lang="ts">
  import Greet from './lib/Greet.svelte'
  import Home from './lib/Home.svelte';


  async function settings(){
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  }
</script>

<nav class="navbar">
  <div class="navbar-brand">Open Solver</div>
  <ul class="navbar-nav">
    <li class="nav-item">
      <button on:click={settings}>Settings</button>
    </li>
  </ul>
</nav>

<main class="container">
  <Home />
</main>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /*background-color: #eee;*/
    padding: 1rem;
  }
  
  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .navbar-nav {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
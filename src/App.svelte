<script lang="ts">
  import Greet from './lib/Greet.svelte'

</script>

<nav class="navbar">
  <div class="navbar-brand">Open Solver</div>
  <ul class="navbar-nav">
    <li class="nav-item"><a href="#">Home</a></li>
    <li class="nav-item"><a href="#">About</a></li>
    <li class="nav-item"><a href="#">Contact</a></li>
  </ul>
</nav>

<main class="container">
  

  <div class="row">
    <Greet />
  </div>


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
  
  .nav-item {
    margin-left: 1rem;
  }
  
  .nav-item a {
    text-decoration: none;
    color: #FFF;
    font-weight: bold;
  }
</style>
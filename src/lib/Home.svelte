<script lang="ts">
    import { invoke } from "@tauri-apps/api/tauri"
  
    let name = "";
    let greetMsg = "";
    let options = ["linalg"];
  
    async function greet(){
      // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
      greetMsg = await invoke("greet", { name })
    }
</script>

<style>
  .word-list {
    text-align: left;
  }
</style>
  
<div>
  <div class="word-list">
    <h1>Список слов:</h1>
    <ul>
      {#each options as word}
        <li>{word}</li>
      {/each}
    </ul>
  </div>

</div>
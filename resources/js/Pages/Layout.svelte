<script>
  import Navbar from "../Components/Navbar.svelte";
</script>

<main class="font-ubuntu">
  <Navbar/>
  <article>
    <slot />
  </article>
</main>
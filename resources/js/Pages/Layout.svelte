<script>
  import Navbar from "../Components/Navbar.svelte";
</script>

<main class="font-ubuntu">
  <Navbar/>
  <article>
    <slot />
  </article>
  <footer class="bg-black">
    <div class="container mx-auto grid grid-cols-12 text-white py-12 gap-4">
      <div class="col-span-6">
        <h1 class="text-2xl font-medium mb-4"> Dino Rent Car</h1>
        <p class="mb-4">Dino Rent Car is the newest way of Renting a vehicle</p>
        <p class="mb-4 flex items-center"><box-icon name='envelope' color='#ffffff' class="mr-2"></box-icon>Hello@dinorentcar.com</p>
        <p class="flex items-center"><box-icon name='phone' color='#ffffff' class="mr-2"></box-icon>1234567890</p>
      </div>
      <div class="col-span-2">
        <p class="font-medium text-xl mb-4">Our Services</p>
        <p class="text-sm mb-4">Rental car</p>
        <p class="text-sm mb-4">Buy Car</p>
        <p class="text-sm">Upgrade Car</p>
      </div>
      <div class="col-span-2">
        <p class="font-medium text-xl mb-4">Our Product</p>
        <p class="text-sm mb-4">Luxury car</p>
        <p class="text-sm mb-4">Sports Car</p>
        <p class="text-sm">Automatic Car</p>
      </div>
      <div class="col-span-2">
        <p class="font-medium text-xl mb-4">Social Media</p>
        <p class="text-sm mb-4">Instagram</p>
        <p class="text-sm mb-4">Youtube</p>
        <p class="text-sm">Facebook</p>
      </div>
    </div>
  </footer>
</main>
<script>
    import { onMount } from 'svelte';

    let isSolid = false;
    onMount(() => { 

        window.addEventListener("scroll", () => {
            isSolid = window.scrollY > window.innerHeight - 96
        });
    });
</script>

<div
    class="z-50 navbar {isSolid ? 'bg-black shadow-2xl' : 'bg-gradient-to-b from-black to-transparent'} text-white fixed top-0"
>
    <div class="container mx-auto">
        <div class="flex-1">
            <a class="btn btn-ghost text-2xl font-bold">Dino Rent Car</a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1 text-base">
                <li><a class="font-medium">Home</a></li>
                <li><a>About</a></li>
                <li><a>Catalogue</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    </div>
</div>

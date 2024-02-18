<script>
    import heroImage from "../image/car-hero.jpeg";
    import Layout from "./Layout.svelte";
    export let title;
</script>

<Layout>
    <div
        class="hero min-h-screen"
        style="background-image: url({heroImage});"
    >
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                <p class="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                </p>
                <button class="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
</Layout>

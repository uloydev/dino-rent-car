<script>
    import heroImage from "../image/car-hero.jpeg";
    import carImage from "../image/car.png";
    import Layout from "./Layout.svelte";
    export let title;
</script>

<Layout>
    <div
        class="hero min-h-screen mb-20"
        style="background-image: url({heroImage});"
    >
        <div class="hero-overlay bg-opacity-30 bg-black"></div>
        <div class="hero-content text-center text-white">
            <div class="">
                <h1 class="mb-5 text-5xl font-bold">
                    Choose Your Favorite Car For Your Life
                </h1>
                <p class="mb-5 max-w-xl mx-auto">
                    Carentalis is the newest way of selling a vehicle. We have
                    wade it simple for car sellers to sell their vehicle and
                    receive immediate cash payouts with no hassle.
                </p>
                <div class="flex gap-x-8 items-center justify-center">
                    <button
                        class="btn bg-[#363636] bg-opacity-40 hover:bg-white hover:text-black hover:shadow-lg border-white text-white font-medium"
                        >Choose Now</button
                    >
                    <button
                        class="btn bg-[#363636] bg-opacity-40 hover:bg-white hover:text-black hover:shadow-lg border-white text-white font-medium"
                        >View Other</button
                    >
                </div>
                <div
                    class="w-full bg-white shadow-2xl p-8 mt-16 rounded-xl text-black flex justify-between items-end gap-x-8"
                >
                    <div class="text-start">
                        <label
                            for="selectTransmission"
                            class="text-[#d4d4d4] font-medium text-sm mb-3 inline-block"
                            >Transmission</label
                        >
                        <select
                            class="select select-bordered w-full max-w-xs border-[#d4d4d4] text-[#999999]"
                            id="selectTransmission"
                        >
                            <option>Manual</option>
                            <option>Matic</option>
                            <option>No Gear</option>
                        </select>
                    </div>
                    <div class="text-start">
                        <label
                            for="inputPickUpDate"
                            class="text-[#d4d4d4] font-medium text-sm mb-3 inline-block"
                            >Pick Up Date</label
                        >
                        <input
                            type="date"
                            class="input input-bordered w-full max-w-xs border-[#d4d4d4] text-[#999999]"
                            id="inputPickUpDate"
                        />
                    </div>
                    <div class="text-start">
                        <label
                            for="inputReturnDate"
                            class="text-[#d4d4d4] font-medium text-sm mb-3 inline-block"
                            >Return Date</label
                        >
                        <input
                            type="date"
                            class="input input-bordered w-full max-w-xs border-[#d4d4d4] text-[#999999]"
                            id="inputReturnDate"
                        />
                    </div>
                    <button
                        class="btn bg-black hover:bg-black hover:drop-shadow-xl text-white font-medium"
                        >Search Now</button
                    >
                </div>
            </div>
        </div>
    </div>

    <div class="mb-20 container mx-auto">
        <h1 class="text-4xl text-[#333333] font-bold text-center mb-4">
            Why Choose Us
        </h1>
        <p class="font-medium text-[#999999] text-center text-sm">
            Become part of our ever growing community
        </p>
        <div class="flex mt-16 gap-x-16 justify-center items-center">
            <div class="flex justify-between gap-6">
                <div
                    class="w-12 h-12 rounded-full bg-[#fff8f3] flex items-center justify-center"
                >
                    <box-icon name="car"></box-icon>
                </div>
                <div>
                    <p class="font-medium text-[#333333] mb-2">
                        Variety Car of Brands
                    </p>
                    <p class="text-sm text-[#999999]">Best Car for Vacation</p>
                </div>
            </div>
            <div class="flex justify-between gap-6">
                <div
                    class="w-12 h-12 rounded-full bg-[#fff8f3] flex items-center justify-center"
                >
                    <box-icon type="solid" name="dollar-circle"></box-icon>
                </div>
                <div>
                    <p class="font-medium text-[#333333] mb-2">
                        Best Price Guarantee
                    </p>
                    <p class="text-sm text-[#999999]">Special offers for you</p>
                </div>
            </div>
            <div class="flex justify-between gap-6">
                <div
                    class="w-12 h-12 rounded-full bg-[#fff8f3] flex items-center justify-center"
                >
                    <box-icon name="check-shield" type="solid"></box-icon>
                </div>
                <div>
                    <p class="font-medium text-[#333333] mb-2">
                        Trusted and Secure
                    </p>
                    <p class="text-sm text-[#999999]">Saving your money</p>
                </div>
            </div>
        </div>
    </div>

    <div class="mb-20 mx-auto container">
        <p class="font-medium text-[#999999] text-center text-sm">
            Research Car models
        </p>
        <h1 class="text-4xl text-[#333333] font-bold text-center mt-4">
            Special offers for you
        </h1>
        <div class="grid grid-cols-4 mt-16 gap-16 justify-center items-center">
            {#each { length: 4 } as _, i}
                <div
                    class="card card-compact bg-white drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)] rounded-3xl"
                >
                    <figure>
                        <img src={carImage} alt="Car" />
                    </figure>
                    <div class="card-body !pt-0 relative">
                        <div
                            class="px-3 pb-2 box-border before:absolute before:h-8 before:rounded-t-full before:bg-white before:w-full before:left-0 before:top-[-2rem] before:drop-shadow-[0_-20px_10px_rgba(0,0,0,0.2)]"
                        >
                            <h2 class="mb-4 font-medium text-2xl">
                                2020 Innova Reborn
                            </h2>
                            <p class="font-medium mb-1">
                                Fuel Type : <span class="font-normal"
                                    >Petrol 95</span
                                >
                            </p>
                            <p class="font-medium mb-1">
                                Transmission : <span class="font-normal"
                                    >Automatic</span
                                >
                            </p>
                            <p class="font-medium">
                                Exterior : <span class="font-normal"
                                    >Cherry Red Cars</span
                                >
                            </p>
                            <div class="card-actions justify-center mt-6">
                                <button
                                    class="btn bg-white shadow-none outline-1 border-black text-black hover:bg-black hover:text-white hover:drop-shadow-lg block w-full"
                                    >Rental Now</button
                                >
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
        <div class="flex justify-between items-center mt-16">
            <div class="flex gap-x-8 justify-between items-center">
                <p class="text-[#d4d4d4] font-medium">19 result</p>
                <p class="text-[#999999]">Rental a car ? choose type car</p>
            </div>
            <button
                class="btn bg-white shadow-none outline-1 border-black text-black hover:bg-black hover:text-white hover:drop-shadow-lg"
                >Show All Cars</button
            >
        </div>
    </div>

    <div class="container mx-auto mb-20">
        <h1 class="font-bold text-2xl mb-4">What Our Clients Say</h1>
        <p class="font-medium text-[#999999]">
            Testimonials from our best clients
        </p>

        <div class="grid grid-cols-4 gap-8 mt-8">
            {#each { length: 4 } as _, i}
                <div class="rounded-2xl shadow-md p-6">
                    <q class="text-[#999999] text-sm"
                        >Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Tenetur officiis sit, placeat rerum neque dolore
                        praesentium nisi alias suscipit doloribus.</q
                    >
                    <div class="flex items-end justify-between mt-8">
                        <div class="flex items-center gap-x-4">
                            <div
                                class="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center"
                            >
                                <box-icon type="solid" name="user" color="#fff"
                                ></box-icon>
                            </div>
                            <div class="text-sm">
                                <p class="font-medium text-[#333333] mb-2">
                                    Wahyu Miftahul Aflah
                                </p>
                                <p class="text-[#999999]">Depok, Indonesia</p>
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-x-2">
                            <box-icon name="star" type="solid" color="#e69c44"
                            ></box-icon><span class="text-[#e69c44]">4.9</span>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>

    <div class="bg-[#f2f2f2] py-16">
        <div class="container-sm text-center">
            <h1 class="text-[#333333] font-bold text-3xl mb-4">
                Get The Latest Updates
            </h1>
            <p class="text-[#999999] font-medium">
                We'll send you some updates and special offers
            </p>

            <div class="max-w-2xl flex flex-col items-center bg-white mx-auto py-8 mt-12 rounded-lg shadow-sm">
                <div class="text-[#999999] p-3 rounded-lg border-[#f2f2f2] border mb-4">
                    <input
                        class="input"
                        placeholder="Enter Your Email Address"
                    />
                    <button class="ml-4 btn bg-black hover:bg-black hover:drop-shadow-xl text-white font-medium"
                        >Get Updates</button
                    >
                </div>
                <p class="text-sm text-[#999999]">Want to become member in my community? <span class="text-[#d4d4d4] font-semibold">Join with us</span></p>
            </div>
        </div>
    </div>
</Layout>

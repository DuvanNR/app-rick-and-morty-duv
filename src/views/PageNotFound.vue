<template>
    <div class=" rounded-lg overflow-hidden mb-10 h-screen" style="background: #4D4669;">
        <div class="flex place-content-center mx-auto mt-10">
          <div class="">
            <router-link
            :to="{ name: 'characters' }"
            class="place-content-center bg-white tracking-wide text-gray-800 font-bold rounded border-b-2  border-blue-500 shadow-md py-2 px-6 inline-flex items-center"
            >
            <i class="mdi mdi-arrow-left-thick mr-3 "></i> Volver
            </router-link>
          </div>
        </div>
        <div class="flex place-content-center">
          <div class="w-2/5">
            <img class="w-full" src="../assets/portalrick.gif" alt="Rick_and_Morty_logo">
          </div>
        </div>
        <div class="flex place-content-center">
          <div class="">
            <h1 class="text-white text-4xl font-bold mb-8">Página no encontrada</h1>
          </div>
        </div>
        <br>
    </div>
</template>

<script>

</script>

<style>

</style>
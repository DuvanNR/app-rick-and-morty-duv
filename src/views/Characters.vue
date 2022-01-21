<template>
  <div class="md:container md:mx-auto mt-4">

        <div class="flex place-content-center">
          <div class="w-1/5">
            <img class="w-full" src="../assets/Rick_and_Morty_logo.png" alt="Rick_and_Morty_logo">
          </div>
        </div>
        <br>

        <div class="overflow-hidden">
            <!-- card header -->
            <div class="px-6 py-4 font-bold uppercase rounded">
              <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2  bg-dgreenRaM rounded">
                <div>
                  <FilterByParams />
                </div>
                <div>
                  <OrderByParams />
                </div>
              </div>
              <div>
                <PagerCharacters />
              </div>
            </div>

            <!-- card body -->
            <div class="">
                 <ListCharacters />
            </div>

            <!-- card footer -->
            <div class="m-8 text-right">
                <PagerCharacters />
            </div>
        </div>

  </div>

</template>

<script>
import ListCharacters from '@/components/ListCharacters'
import FilterByParams from '@/components/FilterByParams'
import OrderByParams from '@/components/OrderByParams'
import PagerCharacters from '@/components/PagerCharacters'

export default {
  name: 'Characters',
  components: {
    ListCharacters,
    FilterByParams,
    OrderByParams,
    PagerCharacters
  }
}
</script>

<style>

</style>

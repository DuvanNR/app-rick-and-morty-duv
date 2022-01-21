<template>
    <div class="box">
        <div class="place-content-center rounded flex items-center w-full mx-auto ">
            <div class="flex md:mt-8 lg:mt-8 sm:mt-2">

                <div class="m-3">
                        <input 
                        @click="orderType(true)" 
                        type="radio" 
                        name="room_type"
                        class="radioOrder"
                        id="roomPrivate" checked hidden
                        />
                        <label
                        for="roomPrivate"
                        class="radioOrder radio bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                            <i class="mdi mdi-order-alphabetical-ascending"></i>
                        </label>
                </div>
                <div class="m-3">
                    <input
                    @click="orderType(false)"
                    type="radio"
                    name="room_type"
                    id="roomPublic"
                    hidden
                    />
                    <label 
                    for="roomPublic" 
                    class="radioOrder radio bg-white tracking-wide text-gray-800 font-bold rounded border-b-2  border-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                        <i class="mdi mdi-order-alphabetical-descending "></i>
                    </label>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()

    const orderType = (type) => {
      store.dispatch('OrderByParams', type);
    }

    return {
      orderType
    }
  }
}
</script>

<style>

</style>
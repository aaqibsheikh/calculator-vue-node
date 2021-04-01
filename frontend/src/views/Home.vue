<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap items-center justify-center">
      <button @click="$router.push('/dropzone')" type="button" class="p-2 text-sm text-white bg-blue-400">Dropzone</button>
    </div>
    <div class="flex flex-col border border-gray-200 w-96 mt-10 mx-auto">
      <h2 class="text-center bg-calc-red py-5 text-white text-lg tracking-wider leading-loose uppercase">Calculator</h2>

      <div class="flex flex-col m-4 mt-20 shadow-lg">
        <div class="border border-gray-200 p-7">
          <h2 class="text-center text-sm mb-2 text-gray-400 leading-loose tracking-widest">Enter the numbers</h2>
          <form @submit.prevent="calculateResult" id="calculator">
            <div>
              <input v-model="first_number" name="first_number" class="appearance-none mb-2 block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="Enter first number" />
            </div>

            <div>
              <input v-model="second_number" name="second_number" class="appearance-none mb-4 block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="Enter second number" />
            </div>
            <button type="submit" class="w-full text-white bg-calc-red py-2 focus:outline-none">Sum</button>
          </form>
          <hr class="w-full mt-10 border border-red-300">

          <h2 class="text-center text-sm mb-2 text-gray-400 leading-loose tracking-widest mt-10">Result</h2>
          <div class="border border-calc-red p-2">
            {{sum}}
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      first_number: '',
      second_number: '',
    }
  },
  computed: {
    sum() {
      return this.$store.state.sum;
    }
  },
  methods: {
    calculateResult() {

      if(this.first_number && this.second_number) {
        this.$store.dispatch('getSumOfNumbers', {first_number: this.first_number, second_number: this.second_number});
      }
    }
  }
}
</script>
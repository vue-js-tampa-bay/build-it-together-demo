<template lang="pug">
  .taco-container
    router-link(to='/') Home
    h2 {{ taco.name }}
    p Vegetarian? {{ getVegetarianStatus }}
    p Base: {{ taco.base }}
    p Toppings:
    ul
      li(v-for='topping in taco.toppings') {{ topping }}
</template>

<script>
export default {
  name: 'taco',
  data () {
    return {
      taco: {}
    }
  },
  mounted () {
    this.$http
      .get(`/tacos/${this.$route.params.id}`)
      .then(resp => this.taco = resp.data)
  },
  computed: {
    getVegetarianStatus () {
      if (this.taco.is_vegetarian === true) {
        return 'Yes'
      } else {
        return 'No'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.taco-container {
  margin: 20px;
}
p, li {
  text-transform: capitalize;
}
</style>
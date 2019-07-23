<template lang="pug">
  .home-container
    h1 Taco Time!
    ul
      router-link(
        tag='li'
        v-for='taco in tacos'
        :to='`taco/${taco.id}`'
        :key='taco.id'
      ) {{ taco.name }}
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      tacos: []
    }
  },
  mounted () {
    this.$http
      .get('/tacos')
      .then(resp => this.tacos = resp.data)
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    margin: 5px 0;
    cursor: pointer;
  }
  li:hover {
    text-decoration: underline;
  }
}
</style>
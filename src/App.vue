<template>
  <div id="app">
    <Form />
  </div>
</template>

<script>
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    Form,
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto:100,300,400");

* {
  font-family: Roboto, sans-serif;
}

body {
  background-color: #f8bbd0;
}

#app {
  color: #2c3e50;
  margin-top: 60px;
}
</style>

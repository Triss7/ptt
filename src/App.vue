<template>
  <div id="app" class="page">
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
  @import './css/App.scss';
</style>

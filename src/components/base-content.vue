<template>
  <main class="base-content">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'BaseContent',
  data () {
    return {};
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.base-content {
  width: 100%;
  height: calc(100vh - 50px);
  /* background: rgb(227, 227, 227); */
  background: #fff;
  padding: 15px;
  overflow: auto;
}
</style>

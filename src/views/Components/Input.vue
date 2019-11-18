<template>
  <div>
    <input v-model="value" class="lm-input"/>
  </div>
</template>

<script>
export default {
  name: 'LmInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.lm-input {
  height: 38px;
  line-height: 40px;
  font-size: 16px;
}
</style>

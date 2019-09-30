<template>
  <div class="LmMain-style">
    <router-view name="main"/>
  </div>
</template>
<script>
export default {
  name: 'LmMain'
}
</script>
<style scoped>
.LmMain-style {
  width: 100%;
  height: 100%;
  /* background-color: rgba(131, 126, 146, 0.3); */
  border-left: 1px solid #DCDFE6;
  border-top: 1px solid #DCDFE6;
}
</style>

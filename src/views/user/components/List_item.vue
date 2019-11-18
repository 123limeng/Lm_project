<template>
  <div>
    <div>我是item</div>
    <slot/>
    <section>
      <span>123</span>
    </section>
    <slot name="item1"/>
    <section>
      <span>456</span>
    </section>
    <slot name="item2"/>
    <section>
      <span>789</span>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ListItem'
}
</script>

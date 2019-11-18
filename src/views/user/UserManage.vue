<template>
  <div>
    <h3>用户管理</h3>
    <list-item>
      <template #default>
        <header>
          <h5>第一部分</h5>
          <lm-input />
        </header>
      </template>
      <template #item1>
        <header>
          <h5>第二部分</h5>
        </header>
      </template>
      <template #item2>
        <header>
          <h5>第三部分</h5>
        </header>
      </template>
    </list-item>
  </div>
</template>
<script>
import ListItem from './components/List_item'
import LmInput from '@/views/Components/Input.vue'
export default {
  name: 'UserManage',
  components: {
    ListItem, LmInput
  }
}
</script>

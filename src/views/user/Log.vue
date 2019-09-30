<template>
  <div>
    <!-- 搜索条件 -->
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <label class="lable-style">标题</label>
          <el-input v-model="list.title" class="input-style"/>
        </el-col>
        <el-col :span="8">
          <label class="lable-style">创建时间</label>
          <el-date-picker
            v-model="datevalue"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            class="input-style"/>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4" :offset="20">
          <el-button type="primary" icon="el-icon-circle-plus-outline" @click="handleAddLog">添加</el-button>
        </el-col>
      </el-row>
    </el-card>
    <!-- 添加日志弹窗 -->
    <el-dialog :visible.sync="dialogVisible" :close-on-click-modal="false">
      <tinymce v-model="content"/>
    </el-dialog>
    <!-- 日志列表 -->
    <el-card class="div-margin">
      123456
    </el-card>
  </div>
</template>
<script>
import Tinymce from '@/components/Tinymce'
export default {
  name: 'MyLog',
  components: {
    Tinymce
  },
  data () {
    return {
      datevalue: [],
      content: '',
      list: {
        title: undefined,
        createTime: undefined,
        endTime: undefined,
        page: 0,
        size: 10
      },
      dialogVisible: false
    }
  },
  methods: {
    handleAddLog () {
      this.dialogVisible = true
    }
  }
}
</script>
<style scoped>
.input-style {
  position: relative;
  font-size: 14px;
  display: block;
  width: auto!important;
  margin-left: 100px;
}
.lable-style {
  width: 100px;
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
}
.div-margin {
  margin-top:20px;
}
</style>

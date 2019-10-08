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
      <el-form label-width="100px">
        <el-form-item label="标题">
          <el-input/>
        </el-form-item>
        <el-form-item label="内容">
          <tinymce v-model="content"/>
        </el-form-item>
        <el-form-item>
          <div class="div-center">
            <el-button>取消</el-button>
            <el-button type="success">保存</el-button>
          </div>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 日志列表 -->
    <el-card class="div-margin">
      <el-table
        :data="logTable"
        border>
        <el-table-column type="index" label="序号" width="100px" align="center"/>
        <el-table-column label="标题" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column label="内容" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.content }}</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        class="div-center"/>
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
      dialogVisible: false,
      logTable: [
        {
          title: '昨天',
          content: '123'
        },
        {
          title: '昨天',
          content: '123'
        },
        {
          title: '昨天',
          content: '123'
        },
        {
          title: '昨天',
          content: '123'
        },
        {
          title: '昨天',
          content: '123'
        },
        {
          title: '昨天',
          content: '123'
        },
        {
          title: '昨天',
          content: '123'
        },
        {
          title: '昨天',
          content: '123'
        },
        {
          title: '昨天',
          content: '123'
        },
        {
          title: '昨天',
          content: '123'
        }
      ]
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
.div-center {
  width: 200px;
  margin: 50px auto;
}
</style>

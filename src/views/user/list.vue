<template>
  <el-container>
    <el-header><h1>用户一览表</h1></el-header>
    <!-- 筛选区域 -->
    <el-main>
      <el-form ref="form" class="fp-form" label-position="right" :inline="true" :model="form" label-width="70px">
        <el-form-item label="手机号" prop="name">
          <el-input v-model="form.mobile" />
        </el-form-item>
        <el-form-item label="推广码" prop="name">
          <el-input v-model="form.code" />
        </el-form-item>
        <el-form-item label="注册时间" label-width="80px">
          <el-date-picker
            v-model="days"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </el-form-item>
        <el-form-item label="所属咨询中心" label-width="120px">
          <el-select v-model="form.termId" placeholder="全部">
            <el-option v-for="item in options" :key="item.termId" :label="item.name" :value="item.termId" />
          </el-select>
        </el-form-item>
        <el-form-item label="所属运营中心" label-width="120px">
          <el-select v-model="form.deleted" placeholder="全部">
            <el-option label="全部" value="" />
            <el-option label="已下架" :value="1" />
            <el-option label="发布中" :value="0" />
          </el-select>
        </el-form-item>
        <div class="fp-form-footer">
          <div class="pull-right">
            <el-button type="primary" @click="add()">添加</el-button>
            <el-button type="default" @click="reset()">重置</el-button>
            <el-button type="default" @click="search()">搜索</el-button>
          </div>
        </div>
      </el-form>
    </el-main>
    <!-- 列表区域 -->
    <el-main>
      <el-table key="btable" v-loading="loading" :data="list">
        <el-table-column prop="id" label="用户id" />
        <el-table-column prop="id" label="用户手机号" />
        <el-table-column prop="createTime" label="注册时间" />
        <el-table-column prop="id" label="微信昵称" />
        <el-table-column prop="id" label="自己的推广码" />
        <el-table-column prop="id" label="账户积分" />
        <el-table-column prop="id" label="位置" />
        <el-table-column prop="id" label="所属运营中心" />
        <el-table-column prop="id" label="所属咨询中心" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="updateImage(scope.row)">修改自己的推广码</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <!-- 分页 -->
    <el-main>
      <el-pagination background layout="prev, pager, next" :total="total" @current-change="pageChange" />
    </el-main>
    <!-- <el-dialog title="编辑文章" :visible.sync="showEditDialog" width="60%" :before-close="onClose">
      <el-form :model="enitiy">
        <el-form-item label="用户ID" :label-width="formLabelWidth">
          12121212
        </el-form-item>
        <el-form-item label="原推广码" :label-width="formLabelWidth">
          12121212
        </el-form-item>
        <el-form-item label="新推广码" :label-width="formLabelWidth">
          <el-input v-model="enitiy.title" placeholder="请输入文章标题" size="miedum" autocomplete="off" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="onClose">取 消</el-button>
        <el-button v-loading.fullscreen.lock="submitLoading" type="primary" @click="save()">添加</el-button>
      </span>
    </el-dialog> -->
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      showEditDialog: false,
      formLabelWidth: '100px',
      loading: false,
      enitiy: {
        title: 'aaa'
      },
      total: 0,
      form: {
        title: '',
        termId: '',
        deleted: '',
        startTime: '',
        endTime: ''
      },
      list: [],
      days: [], // 0: 开始日期，1：结束日期
      options: [

      ],
      pageConf: {
        total: 0,
        limit: 10,
        offset: 0
      }
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    }
  },
  methods: {
    // 添加
    save() {
      this.showEditDialog = true
    },
    onClose() {
      this.showEditDialog = false
    },
    submitLoading() {
      this.showEditDialog = false
    },
    // 分页监听
    pageChange(val) {
      // const { limit } = this.pageConf
      // const offset = (val - 1) * limit
      // this.pageConf.offset = offset
      // this.getList()
    }
  }
}
</script>

<style scoped>
  .container{
    text-align: center;
    width: 100%;
    height: calc(100vh - 50px);
    background: rgb(227,227,227);
  }
  .container img{
    width: 800px;
  }
  .header{
    background: rgb(227,227,227);
    font-size: 30px;
    height: 200px;
    padding-top: 30px;
  }
</style>

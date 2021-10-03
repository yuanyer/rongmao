<template>
  <base-content>
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="拼团订单id" />
        <el-table-column prop="registTime" label="发起时间" />
        <el-table-column prop="id" label="结束时间" />
        <el-table-column prop="id" label="商品id" />
        <el-table-column prop="yunying" label="金额" />
        <el-table-column prop="id" label="状态" />
        <el-table-column prop="id" label="拼团规则" />
        <el-table-column prop="id" label="拼团状态" />
      </el-table>
      <div style="margin-top: 15px"></div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="商品名称" width="180px" />
        <el-table-column prop="address" label="名称" />
      </el-table>

      <div style="margin-top: 15px"></div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="id" />
        <el-table-column prop="registTime" label="用户id" />
        <el-table-column prop="id" label="核销码" />
        <el-table-column prop="id" label="核销码状态" />
        <el-table-column prop="id" label="消费状态" />
        <el-table-column prop="registTime" label="使用时间" />
        <el-table-column prop="registTime" label="用户确认时间" />
        <el-table-column prop="address" label="使用机构门店" />
      </el-table>
    </template>
  </base-content>
</template>

<script>
import { mapGetters } from 'vuex';
const Response = {
  data: [
    {
      id: 0,
      tel: '1521234098',
      registTime: 1621395027069,
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      wechat: 'xxx',
      zijima: '1111',
      jifeng: 'aaaa',
      postion: 'aasafsaf',
      yunying: '1111',
      zixun: '2222'
    },
    {
      id: 1,
      tel: '1521234098',
      registTime: 1621395027069,
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      wechat: 'xxx',
      zijima: '1111',
      jifeng: 'aaaa',
      postion: 'aasafsaf',
      yunying: '1111',
      zixun: '2222'
    },
    {
      id: 2,
      tel: '1521234098',
      registTime: 1621395027069,
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      wechat: 'xxx',
      zijima: '1111',
      jifeng: 'aaaa',
      postion: 'aasafsaf',
      yunying: '1111',
      zixun: '2222'
    },
    {
      id: 3,
      tel: '1521234098',
      registTime: 1621395027069,
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
      wechat: 'xxx',
      zijima: '1111',
      jifeng: 'aaaa',
      postion: 'aasafsaf',
      yunying: '1111',
      zixun: '2222'
    }
  ],
  total: 120
};

export default {
  computed: {
    ...mapGetters(['sidebar']),
    routes() {
      return this.$router.options.routes;
    }
  },
  data() {
    return {
      tableData: Response.data
    };
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  width: 100%;
  height: calc(100vh - 50px);
  background: rgb(227, 227, 227);
}
.container img {
  width: 800px;
}
.header {
  background: rgb(227, 227, 227);
  font-size: 30px;
  height: 200px;
  padding-top: 30px;
}
</style>

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
      </el-table>
      <div style="margin-top: 15px"></div>
      <el-button style="margin-bottom: 10px" type="primary" @click="handleAdd">
        新增
      </el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="参团人用户ID" />
        <el-table-column prop="registTime" label="支付状态" />
        <el-table-column prop="id" label="当前结果" />
        <el-table-column prop="id" label="用户来源" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope.row)" type="text" size="small">
              删除
            </el-button>
            <el-button type="text" size="small">必不中签</el-button>
            <el-button type="text" size="small">必中签</el-button>
            <el-button type="text" size="small">随机</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="添加用户" :visible.sync="isShow" width="30%">
        <sf-base-form :eles="eles" ref="mybaseForm"></sf-base-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="isShow = false">取 消</el-button>
          <el-button type="primary" @click="isShow = false">确 定</el-button>
        </span>
      </el-dialog>
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
      tableData: Response.data,
      isShow: false,
      eles: [
        {
          label: '用户ID',
          elType: 'input',
          placeholder: '请输入用户手机号',
          value: '',
          name: 'id'
        },
        {
          label: '购买状态',
          elType: 'select',
          placeholder: '可以是负值',
          value: '',
          name: 'state',
          options: [
            {
              label: '随机',
              value: 1
            },
            {
              label: '必不中签',
              value: 2
            },
            {
              label: '必中签',
              value: 3
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleEdit(row) {
      console.log(row);
    },
    handleAdd() {
      this.isShow = true;
    }
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

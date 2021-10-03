<template>
  <base-content>
    <template>
      <div style="text-align: right;padding-bottom: 10px;">
        <el-button type="primary" @click="handleAdd">新建优惠券</el-button>
      </div>
      <sf-grid :columns="columns" :store-config="configs"></sf-grid>
      <el-dialog title="加积分" :visible.sync="isShow" width="30%">
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
      // here is dialog
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
          label: '积分数量',
          elType: 'input',
          placeholder: '可以是负值',
          value: '',
          name: 'itemCode'
        }
      ],
      // here is table
      columns: [
        {
          title: 'id',
          props: 'id'
        },
        {
          title: '优惠卷名称',
          props: 'name'
        },
        {
          title: '面值',
          props: 'zijima'
        },
        {
          title: '门槛',
          props: 'zijima'
        },
        {
          title: '状态',
          props: 'address'
        },
        {
          title: '使用范围',
          props: 'address'
        },
        {
          title: '功能范围',
          props: 'address'
        },
        {
          title: '有效期',
          props: 'address'
        },
        {
          title: '状态',
          props: 'address'
        },
        {
          title: '发行量',
          props: 'postion'
        },
        {
          title: '使用量',
          props: 'zixun'
        },
      ],
      configs: {
        loadDataApi: function () {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(Response);
            }, 100);
          });
        },
        fetchListData: function (res) {
          return res.data;
        },
        fetchTotal: function (res) {
          return res.total;
        },
        generateQueryParams: function (pagination) {
          let { pageIndex, pageSize } = pagination;
          return {
            page: pageIndex,
            limit: pageSize
          };
        }
      }
    };
  },
  methods: {
    handleAdd() {
      this.isShow = true;
    },
    // val: 当前表单中的数据
    // key 用来handles 中设置的唯一标识key值
    handleBaseSearch(val, key) {
      console.log(val);
      console.log(key);
      if (key === 'search') {
        console.log(val);
        alert(JSON.stringify(val));
      } else if (key === 'add') {
        console.log('add jifeng');
        this.isShow = true;
      } else {
        const formEle = this.$refs.baseSearchEle;
        formEle.empty();
      }
    }
  }
};
</script>

<template>
  <base-content>
    <template>
      <sf-base-search
        :baseSearchs="baseSearchs"
        :base-handles="baseHandles"
        :baseData="baseFormData"
        ref="baseSearchEle"
      />

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
      baseSearchs: [
        {
          label: '提现申请时间',
          elType: 'date',
          placeholder: '请选择积分流水时间',
          value: '',
          name: 'itemCode'
        },
        {
          label: '用户手机号',
          elType: 'input',
          placeholder: '请输入用户手机号',
          value: '',
          name: 'vendorCode'
        },
        {
          label: '提现状态',
          elType: 'select',
          placeholder: '请请择提现状态',
          value: '',
          name: 'category',
          options: [
            {
              label: '未支付',
              value: 1
            },
            {
              label: '已支付',
              value: 2
            }
          ]
        }
      ],
      baseHandles: [
        {
          btnType: 'primary',
          text: '查询',
          key: 'search',
          handle: this.handleBaseSearch
        },
        {
          btnType: 'default',
          text: '重置',
          key: 'reset',
          handle: this.handleBaseSearch
        }
      ],
      baseFormData: {},
      // here is table
      columns: [
        {
          title: '申请时间',
          props: 'registTime'
        },
        {
          title: '用户id',
          props: 'name'
        },
        {
          title: '金额',
          props: 'address'
        },
        {
          title: '状态',
          props: 'address'
        },
        {
          title: '开户行',
          props: 'address'
        },
        {
          title: '户名',
          props: 'address'
        },
        {
          title: '卡号',
          props: 'address'
        },
        {
          title: '支付时间',
          props: 'registTime'
        }
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
    // val: 当前表单中的数据
    // key 用来handles 中设置的唯一标识key值
    handleBaseSearch(val, key) {
      console.log(val);
      console.log(key);
      if (key === 'search') {
        console.log(val);
        alert(JSON.stringify(val));
      } else {
        const formEle = this.$refs.baseSearchEle;
        formEle.empty();
      }
    }
  }
};
</script>

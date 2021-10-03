<template>
  <base-content>
    <template>
      <sf-base-search
        :baseSearchs="baseSearchs"
        :allSearchs="allSearchs"
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
          label: '积分流水时间',
          elType: 'date',
          placeholder: '请选择积分流水时间范围',
          value: '',
          name: 'itemCode'
        },
        {
          label: '用户手机号',
          elType: 'input',
          placeholder: '请输入用户手机号',
          value: '',
          name: 'vendorCode'
        }
      ],
      allSearchs: [
        {
          label: '积分流水时间',
          elType: 'date',
          placeholder: '请选择积分流水时间范围',
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
          label: '行为类型',
          elType: 'select',
          placeholder: '请请择行为类型',
          value: '',
          name: 'category',
          options: [
            {
              label: '消费提现',
              value: 1
            },
            {
              label: '手动处理',
              value: 2
            },
            {
              label: '提现',
              value: 3
            }
          ]
        },
        {
          label: '所属咨询中心',
          elType: 'select',
          placeholder: '所属咨询中心',
          value: '',
          name: 'category1',
          options: [
            {
              label: '1',
              value: 1
            },
            {
              label: '2',
              value: 2
            },
            {
              label: '3',
              value: 3
            }
          ]
        },
        {
          label: '积分状态',
          elType: 'select',
          placeholder: '请请择积分状态',
          value: '',
          name: 'category2',
          options: [
            {
              label: '可提现',
              value: 0
            },
            {
              label: '不可提现',
              value: 1
            }
          ]
        },
        {
          label: '运营中心',
          elType: 'select',
          placeholder: '请请择运营中心',
          value: '',
          name: 'category3',
          options: [
            {
              label: '1',
              value: 1
            },
            {
              label: '2',
              value: 2
            },
            {
              label: '3',
              value: 3
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
        },
        {
          btnType: 'default',
          text: '加积分',
          key: 'add',
          handle: this.handleBaseSearch
        }
      ],
      baseFormData: {},
      // here is table
      columns: [
        {
          title: '时间',
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
          title: '行为类型',
          props: 'address'
        },
        {
          title: '状态',
          props: 'address'
        },
        {
          title: '所属运营中心',
          props: 'address'
        },
        {
          title: '所属咨询中心',
          props: 'address'
        },
        {
          title: '备注',
          props: 'address'
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
    add(val, key) {
      console.log(val, key);
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

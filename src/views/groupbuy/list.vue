<template>
  <base-content>
    <template>
      <sf-base-search
        :baseSearchs="baseSearchs"
        :base-handles="baseHandles"
        :baseData="baseFormData"
        ref="baseSearchEle"
      />

      <sf-grid
        :columns="columns"
        :operations="operations"
        :store-config="configs"
      />
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
      eles: [
        {
          label: '活动名称',
          elType: 'input',
          placeholder: '请输入活动名称',
          value: '',
          name: 'name'
        },
        {
          label: '开始时间',
          elType: 'date',
          placeholder: '请选择开始时间',
          value: '',
          name: 'startTime'
        },
        {
          label: '结束时间',
          elType: 'date',
          placeholder: '请选择结束时间',
          value: '',
          name: 'endTime'
        },
        {
          label: '链接',
          elType: 'input',
          placeholder: '',
          value: '',
          name: 'link'
        },
        {
          label: '图片链接',
          elType: 'input',
          placeholder: '',
          value: '',
          name: 'picLink'
        },
        {
          label: '活动状态',
          elType: 'select',
          placeholder: '请选择活动状态',
          value: '',
          name: 'actvieState',
          options: [
            {
              label: '未开始',
              value: 1
            },
            {
              label: '已开始',
              value: 2
            },
            {
              label: '已结束',
              value: 3
            }
          ]
        },
        {
          label: '地域限制',
          elType: 'input',
          placeholder: '请输入地域限制',
          value: '',
          name: 'id'
        }
      ],
      baseSearchs: [
        {
          label: '拼团名称',
          elType: 'input',
          placeholder: '请输入拼团名称',
          value: '',
          name: 'name'
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
          title: '拼团id',
          props: 'id'
        },
        {
          title: '商品id',
          props: 'registTime'
        },
        {
          title: '商品名',
          props: 'id'
        },
        {
          title: '拼团价格',
          props: 'id'
        },
        {
          title: '拼团规则',
          props: 'id'
        },
        {
          title: '状态',
          props: 'address'
        },
        {
          title: '可售范围',
          props: 'address'
        }
      ],
      operations: [
        {
          label: '编辑',
          handler: (row) => {
            console.log(row);
            // this.$message.success('编辑');
            this.$router.push('/orders/expense');
          }
        },
        {
          label: '上架',
          handler: (row) => {
            console.log(row);
            // this.$message.success('编辑');
            // this.$router.push('/orders/expense');
          }
        },
        {
          label: '下架',
          handler: (row) => {
            console.log(row);
            // this.$message.success('编辑');
            // this.$router.push('/orders/expense');
          }
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
      } else {
        const formEle = this.$refs.baseSearchEle;
        formEle.empty();
      }
    }
  }
};
</script>

<template>
  <base-content>
    <template>
      <sf-base-search
        :baseSearchs="baseSearchs"
        :allSearchs="allSearchs"
        :base-handles="baseHandles"
        :all-handles="AllHandles"
        :baseData="baseFormData"
        ref="baseSearchEle"
      />

      <sf-grid
        :columns="columns"
        :operations="operations"
        :store-config="configs"
      ></sf-grid>
      <el-dialog title="修改推广码" :visible.sync="isShow" width="30%">
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
          label: '用户id',
          elType: 'input',
          placeholder: '',
          value: '',
          readonly: true,
          name: 'id'
        },
        {
          label: '原推广码',
          elType: 'input',
          placeholder: '请输入自己的推广码',
          readonly: true,
          value: '',
          name: 'name'
        },
        {
          label: '新推广码',
          elType: 'input',
          placeholder: '请输入自己的推广码',
          value: '',
          name: 'itemCode'
        }
      ],
      baseSearchs: [
        {
          label: '手机号',
          elType: 'input',
          placeholder: '请输入用户手机号',
          value: '',
          name: 'itemCode'
        },
        {
          label: '推广码',
          elType: 'input',
          placeholder: '请输入推广码',
          value: '',
          name: 'vendorCode'
        }
      ],
      allSearchs: [
        {
          label: '手机号',
          elType: 'input',
          placeholder: '请输入用户手机号',
          value: '',
          name: 'itemCode'
        },
        {
          label: '推广码',
          elType: 'input',
          placeholder: '请输入推广码',
          value: '',
          name: 'vendorCode'
        },
        {
          label: '注册时间',
          elType: 'date',
          placeholder: '请输入',
          value: '',
          name: 'unit'
        },
        {
          label: '咨询中心',
          elType: 'select',
          placeholder: '请请择咨询中心',
          value: '',
          name: 'category',
          options: [
            {
              label: '品类A',
              value: 1
            },
            {
              label: '品类B',
              value: 2
            },
            {
              label: '品类C',
              value: 3
            }
          ]
        },
        {
          label: '运营中心',
          elType: 'select',
          placeholder: '请请择运营中心',
          value: '',
          name: 'yunying',
          options: [
            {
              label: '品类A',
              value: 1
            },
            {
              label: '品类B',
              value: 2
            },
            {
              label: '品类C',
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
        }
      ],
      baseFormData: {},
      // here is table
      columns: [
        {
          title: '用户id',
          props: 'name'
        },
        {
          title: '用户手机号',
          props: 'address'
        },
        {
          title: '注册时间',
          props: 'registTime'
        },
        {
          title: '微信昵称',
          props: 'address'
        },
        {
          title: '自己的推广码',
          props: 'address'
        },
        {
          title: '账户积分',
          props: 'address'
        },
        {
          title: '位置',
          props: 'address'
        },
        {
          title: '所属运营中心',
          props: 'address'
        },
        {
          title: '所属咨询中心',
          props: 'address'
        }
      ],
      operations: [
        {
          label: '编辑',
          handler: (row) => {
            console.log(row);
            this.isShow = true;
            const {id, name} = row;
            this.eles[0].value = id;
            this.eles[1].value = name;
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
    },
    handerAll(val, key) {
      console.log(val, key);
    }
  }
};
</script>

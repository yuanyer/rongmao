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
      <el-dialog title="修改推广关系" :visible.sync="isShow" width="30%">
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
          readonly: true,
          placeholder: '',
          value: '',
          name: 'id'
        },
        {
          label: '原推广人ID',
          elType: 'input',
          placeholder: '',
          readonly: true,
          value: '',
          name: 'itemCode'
        },
        {
          label: '新推广人',
          elType: 'input',
          placeholder: '请输入新推广人ID',
          value: '',
          name: 'newCode'
        }
      ],
      baseSearchs: [
        {
          label: '推荐者推广码',
          elType: 'input',
          placeholder: '请输入推荐者推广码',
          value: '',
          name: 'itemCode'
        },
        {
          label: '注册时间',
          elType: 'date',
          placeholder: '请输入注册时间',
          value: '',
          name: 'vendorCode'
        }
      ],
      allSearchs: [
        {
          label: '推荐者推广码',
          elType: 'input',
          placeholder: '请输入推荐者推广码',
          value: '',
          name: 'itemCode'
        },
        {
          label: '注册时间',
          elType: 'date',
          placeholder: '请输入注册时间',
          value: '',
          name: 'vendorCode'
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
          title: '推荐者推广码',
          props: 'address'
        }
      ],
      operations: [
        {
          label: '编辑',
          handler: (row) => {
            console.log(row);
            this.isShow = true;
            const { id, name } = row;
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

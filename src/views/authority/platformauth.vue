<template>
  <base-content>
    <template>
      <sf-grid
        :columns="columns"
        :operations="operations"
        :store-config="configs"
      />
      <el-dialog title="修改帐户信息" :visible.sync="reSetShow" width="40%">
        <sf-base-form
          width="400px"
          :eles="resetForm"
          ref="resetPwd"
        ></sf-base-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="reSetShow = false">取 消</el-button>
          <el-button type="primary" @click="reSetShow = false">确 定</el-button>
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
      reSetShow: false,
      resetForm: [
        {
          label: '账号类型',
          elType: 'input',
          readonly: true,
          placeholder: '',
          value: '',
          name: 'accountType'
        },
        {
          label: '用户管理',
          elType: 'select',
          placeholder: '请选择用户管理',
          value: '',
          name: 'userManage',
          options: [
            {
              label: '无权限使用',
              value: 1
            },
            {
              label: '全部权限',
              value: 2
            },
            {
              label: '仅可浏览相关信息',
              value: 3
            }
          ]
        },
        {
          label: '拉新管理',
          elType: 'select',
          placeholder: '请选择拉新管理',
          value: '',
          name: 'flushManage',
          options: [
            {
              label: '无权限使用',
              value: 1
            },
            {
              label: '全部权限',
              value: 2
            },
            {
              label: '仅可浏览相关信息',
              value: 3
            }
          ]
        },
        {
          label: '商品系统',
          elType: 'select',
          placeholder: '请选择商品系统',
          value: '',
          name: 'productionSystem',
          options: [
            {
              label: '无权限使用',
              value: 1
            },
            {
              label: '全部权限',
              value: 2
            },
            {
              label: '仅可浏览相关信息',
              value: 3
            }
          ]
        },
        {
          label: '积分系统',
          elType: 'select',
          placeholder: '请选择积分系统',
          value: '',
          name: 'jifengSystem',
          options: [
            {
              label: '无权限使用',
              value: 1
            },
            {
              label: '全部权限',
              value: 2
            },
            {
              label: '仅可浏览相关信息',
              value: 3
            }
          ]
        },
        {
          label: '活动管理',
          elType: 'select',
          placeholder: '请选择活动管理',
          value: '',
          name: 'activeState',
          options: [
            {
              label: '无权限使用',
              value: 1
            },
            {
              label: '全部权限',
              value: 2
            },
            {
              label: '仅可浏览相关信息',
              value: 3
            }
          ]
        },
        {
          label: '订单管理',
          elType: 'select',
          placeholder: '请选择订单管理',
          value: '',
          name: 'orderManage',
          options: [
            {
              label: '无权限使用',
              value: 1
            },
            {
              label: '全部权限',
              value: 2
            },
            {
              label: '仅可浏览相关信息',
              value: 3
            }
          ]
        },
        {
          label: '核销系统',
          elType: 'select',
          placeholder: '请选择核销系统',
          value: '',
          name: 'xiaoheSystem',
          options: [
            {
              label: '无权限使用',
              value: 1
            },
            {
              label: '全部权限',
              value: 2
            },
            {
              label: '仅可浏览相关信息',
              value: 3
            }
          ]
        },
        {
          label: '拼团管理',
          elType: 'select',
          placeholder: '请选择拼团管理',
          value: '',
          name: 'pingtuanManage',
          options: [
            {
              label: '无权限使用',
              value: 1
            },
            {
              label: '全部权限',
              value: 2
            },
            {
              label: '仅可浏览相关信息',
              value: 3
            }
          ]
        },
        {
          label: '权限管理',
          elType: 'select',
          placeholder: '请选择权限管理',
          value: '',
          name: 'rightManage',
          options: [
            {
              label: '无权限使用',
              value: 1
            },
            {
              label: '全部权限',
              value: 2
            },
            {
              label: '仅可浏览相关信息',
              value: 3
            }
          ]
        }
      ],
      // here is table
      columns: [
        {
          title: 'id',
          props: 'id'
        },
        {
          title: '用户名',
          props: 'name'
        },
        {
          title: '绑定的手机号',
          props: 'tel'
        },
        {
          title: '账号类型',
          props: 'wechat'
        },
        {
          title: '账号名',
          props: 'name'
        },
        {
          title: '上级账号名',
          props: 'name'
        }
      ],
      operations: [
        {
          label: '重置密码',
          handler: (row) => {
            console.log(row);
            this.reSetShow = true;
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

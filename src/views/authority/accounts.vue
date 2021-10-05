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
      <el-dialog title="新建帐号" :visible.sync="isShow" width="40%">
        <sf-base-form
          width="400px"
          :eles="eles"
          ref="createAccountForm"
        ></sf-base-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="handleCancleCreate">取 消</el-button>
          <el-button type="primary" @click="handleCreatAccount">
            确 定
          </el-button>
        </span>
      </el-dialog>

      <el-dialog title="重置密码" :visible.sync="reSetShow" width="40%">
        <sf-base-form
          width="300px"
          :eles="resetForm"
          ref="resetPwd"
        ></sf-base-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="handleCancelRestPwd">取 消</el-button>
          <el-button type="primary" @click="handleRestPwd">确 定</el-button>
        </span>
      </el-dialog>
    </template>
  </base-content>
</template>

<script>
import { mapGetters } from 'vuex';
import { fetchCreateAccount, fetchUpdatePwd } from '@/api/authority';

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
      reSetShow: false,
      eles: [
        {
          label: '用户id',
          elType: 'input',
          placeholder: '请输入用户id',
          readonly: true,
          value: '',
          name: 'id'
        },
        {
          label: '用户名',
          elType: 'input',
          placeholder: '请输入用户名',
          value: '',
          name: 'user_name'
        },
        {
          label: '绑定的手机号',
          elType: 'input',
          placeholder: '请输入手机号',
          value: '',
          name: 'phone'
        },
        {
          label: '账号名',
          elType: 'input',
          placeholder: '请输入账号名',
          value: '',
          name: 'account_name'
        },
        {
          label: '账号类型',
          elType: 'select',
          placeholder: '请选择账号类型',
          value: '',
          name: 'account_type',
          options: [
            {
              label: '平台管理员',
              value: 1
            },
            {
              label: '运营中心',
              value: 2
            },
            {
              label: '咨询中心',
              value: 3
            },
            {
              label: '机构',
              value: 4
            },
            {
              label: '门店',
              value: 5
            }
          ]
        },
        {
          label: '上级账号',
          elType: 'select',
          placeholder: '请选择上级账号',
          value: '',
          name: 'upAccount',
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
            },
            {
              label: '4',
              value: 4
            },
            {
              label: '5',
              value: 5
            }
          ]
        },
        {
          label: '新密码',
          elType: 'input',
          placeholder: '请输入新密码',
          value: '',
          name: 'password'
        },
        {
          label: '确认新密码',
          elType: 'input',
          placeholder: '再次确认新密码',
          value: '',
          name: 'confirm_password'
        }
      ],
      resetForm: [
        {
          label: '帐户名',
          elType: 'input',
          readonly: true,
          placeholder: '请输入帐户名',
          value: '',
          name: 'userName'
        },
        {
          label: '新密码',
          elType: 'input',
          placeholder: '输入新密码',
          value: '',
          name: 'password'
        },
        {
          label: '确认新密码',
          elType: 'input',
          placeholder: '再次输入新密码',
          value: '',
          name: 'confirm_password'
        }
      ],
      baseSearchs: [
        {
          label: '用户名',
          elType: 'input',
          placeholder: '请输入用户名',
          value: '',
          name: 'userName'
        },
        {
          label: '手机号',
          elType: 'input',
          placeholder: '请输入手机号',
          value: '',
          name: 'tel'
        },
        {
          label: '上级账号名',
          elType: 'input',
          placeholder: '请输入上级账号名',
          value: '',
          name: 'activeState'
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
          text: '新建帐号',
          key: 'add',
          handle: this.handleBaseSearch
        }
      ],
      baseFormData: {},
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
      id: '',
      operations: [
        {
          label: '重置密码',
          handler: (row) => {
            console.log(row);
            const { id } = row;
            this.id = id;
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
    handleCancleCreate() {
      this.isShow = false;
      this.handleClearCatch();
    },
    handleCancelRestPwd() {
      this.reSetShow = false;
      this.handleClearCatch();
    },
    handleClearCatch() {
      this.$refs.createAccountForm ? this.$refs.createAccountForm.empty() : '';
      this.$refs.resetPwd ? this.$refs.resetPwd.empty() : '';
    },
    handleRestPwd() {
      const val = this.$refs.resetPwd.getVal();
      val.id = this.id;
      fetchUpdatePwd(val).then((res) => {
        this.reSetShow = false;
        this.handleClearCatch();
      });
    },
    handleCreatAccount() {
      const val = this.$refs.createAccountForm.getVal();
      fetchCreateAccount(val).then((res) => {
        this.isShow = false;
        this.handleClearCatch();
      });
    },
    add(val, key) {
      console.log(val, key);
    },
    // val: 当前表单中的数据
    // key 用来handles 中设置的唯一标识key值
    handleBaseSearch(val, key) {
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

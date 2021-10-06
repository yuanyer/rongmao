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
        ref="grid"
      ></sf-grid>
      <el-dialog title="修改推广关系" :visible.sync="isShow" width="30%">
        <sf-base-form :eles="eles" ref="updateForm"></sf-base-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="isShow = false">取 消</el-button>
          <el-button type="primary" @click="handleSubmitChangeRelaship"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </template>
  </base-content>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  fetchNewUserList,
  fetchNewUserById,
  fetchUpdateRelaship
} from '@/api/user';
import { queryParams } from '@/utils';

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
          name: 'no'
        },
        {
          label: '新推广人',
          elType: 'input',
          placeholder: '请输入新推广人ID',
          value: '',
          name: 'promotion_user_id'
        }
      ],
      baseSearchs: [
        {
          label: '推荐者推广码',
          elType: 'input',
          placeholder: '请输入推荐者推广码',
          value: '',
          name: 'promotion_user_code'
        },
        {
          label: '注册时间',
          elType: 'date-range',
          placeholder: '请选择注册时间',
          width: '380px',
          value: [],
          name: 'register_time'
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
          props: 'id'
        },
        {
          title: '用户手机号',
          props: 'phone'
        },
        {
          title: '注册时间',
          props: 'insert_time'
        },
        {
          title: '微信昵称',
          props: 'wechat_nick_name'
        },
        {
          title: '推荐者推广码',
          props: 'promotion_person_code'
        }
      ],
      operations: [
        {
          label: '编辑',
          handler: (row) => {
            const { id } = row;
            fetchNewUserById({
              id
            }).then((res) => {
              console.log(res);
              this.isShow = true;
              const { promotion_code, promotion_person_id } = res.data;
              this.eles[0].value = id;
              this.eles[1].value = promotion_code;
              this.eles[2].value = promotion_person_id;
            });
          }
        }
      ],
      formData: {},
      configs: {
        loadDataApi: (p) => {
          return new Promise((resolve) => {
            fetchNewUserList(queryParams(p, this.formData)).then((res) => {
              resolve(res);
            });
          });
        },
        fetchListData: function (res) {
          return res.data;
        },
        fetchTotal: function (res) {
          return res.meta.count;
        },
        generateQueryParams: function (pagination) {
          let { pageIndex, pageSize } = pagination;
          return {
            page_num: pageIndex,
            page_size: pageSize
          };
        }
      }
    };
  },
  methods: {
    handleSubmitChangeRelaship() {
      const val = this.$refs.updateForm.getVal();
      delete val.no;
      fetchUpdateRelaship(val).then((res) => {
        this.isShow = false;
        this.$refs.grid.query();
      });
    },
    // val: 当前表单中的数据
    // key 用来handles 中设置的唯一标识key值
    handleBaseSearch(val, key) {
      if (key === 'search') {
        // this.formData = val;
        const { promotion_user_code, register_time } = val;
        this.formData = {
          promotion_user_code,
          register_start_time: register_time[0],
          register_end_time: register_time[1]
        };
        this.$refs.grid.query();
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

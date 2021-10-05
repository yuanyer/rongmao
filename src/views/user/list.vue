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

      <sf-grid
        :columns="columns"
        :operations="operations"
        :store-config="configs"
        ref="grid"
      ></sf-grid>
      <el-dialog title="修改推广码" :visible.sync="isShow" width="30%">
        <sf-base-form :eles="eles" ref="mybaseForm"></sf-base-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="isShow = false">取 消</el-button>
          <el-button type="primary" @click="handleChangeCode">确 定</el-button>
        </span>
      </el-dialog>
    </template>
  </base-content>
</template>

<script>
import { queryParams } from '@/utils';
import { mapGetters } from 'vuex';
import { fetchUserList, fetchChangeCode } from '@/api/user';

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
      product_name: 'aaaaa',
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
          name: 'old_promotion_code'
        },
        {
          label: '新推广码',
          elType: 'input',
          placeholder: '请输入自己的推广码',
          value: '',
          name: 'promotion_code'
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
          name: 'phone'
        },
        {
          label: '推广码',
          elType: 'input',
          placeholder: '请输入推广码',
          value: '',
          name: 'promotion_code'
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
      formData: {},
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
          title: '自己的推广码',
          props: 'promotion_code'
        },
        {
          title: '账户积分',
          props: 'score'
        },
        {
          title: '位置',
          formatter(val) {
            const { province, city } = val;
            return province + '/' + city;
          }
        },
        {
          title: '所属单位',
          props: 'platform'
        }
      ],
      operations: [
        {
          label: '编辑',
          handler: (row) => {
            this.isShow = true;
            const { id, promotion_code } = row;
            this.eles[0].value = id;
            this.eles[1].value = promotion_code;
            this.eles[2].value = '';
          }
        }
      ],
      configs: {
        loadDataApi: (p) => {
          return new Promise((resolve) => {
            fetchUserList(queryParams(p, this.formData)).then((res) => {
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
        generateQueryParams: (pagination) => {
          let { pageIndex, pageSize } = pagination;
          return {
            page_size: pageSize,
            page_num: pageIndex
          };
        }
      }
    };
  },
  methods: {
    // val: 当前表单中的数据
    // key 用来handles 中设置的唯一标识key值
    handleBaseSearch(val, key) {
      if (key === 'search') {
        this.formData = val;
        this.$refs.grid.query();
      } else {
        const formEle = this.$refs.baseSearchEle;
        formEle.empty();
      }
    },
    handleChangeCode() {
      const data = this.$refs.mybaseForm.getVal();
      fetchChangeCode(data).then((res) => {
        console.log(res);
        this.isShow = false;
      });
    }
  }
};
</script>

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

      <sf-grid :columns="columns" :store-config="configs" ref="grid" />
    </template>
  </base-content>
</template>

<script>
import { queryParams } from '@/utils';
import { mapGetters } from 'vuex';
import { fetchVerificationList } from '@/api/verification';

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
          label: '开始时间',
          elType: 'date',
          placeholder: '请选择开始时间',
          value: '',
          name: 'start_time'
        },
        {
          label: '结束时间',
          elType: 'date',
          placeholder: '请选择结束时间',
          value: '',
          name: 'end_time'
        },
        {
          label: '状态',
          elType: 'select',
          placeholder: '请选择状态',
          value: '',
          name: 'user_confirm_status',
          options: [
            {
              label: '已核销',
              value: 1
            },
            {
              label: '待核销',
              value: 0
            }
          ]
        }
      ],
      allSearchs: [
        {
          label: '开始时间',
          elType: 'date',
          placeholder: '请选择开始时间',
          value: '',
          name: 'start_time'
        },
        {
          label: '结束时间',
          elType: 'date',
          placeholder: '请选择结束时间',
          value: '',
          name: 'end_time'
        },
        {
          label: '状态',
          elType: 'select',
          placeholder: '请选择状态',
          value: '',
          name: 'user_confirm_status',
          options: [
            {
              label: '已核销',
              value: 1
            },
            {
              label: '待核销',
              value: 0
            }
          ]
        },
        {
          label: '订单id',
          elType: 'input',
          placeholder: '订单id',
          value: '',
          name: 'order_id'
        },
        {
          label: '用户id',
          elType: 'input',
          placeholder: '请输入用户id',
          value: '',
          name: 'user_id'
        },
        {
          label: '商品id',
          elType: 'input',
          placeholder: '请输入商品id',
          value: '',
          name: 'product_id'
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
          title: '核销码',
          props: 'code'
        },
        {
          title: '核销时间',
          props: 'user_confirm_time'
        },
        {
          title: '商品id',
          props: 'product_id'
        },
        {
          title: '订单id',
          props: 'order_id'
        },
        {
          title: '用户id',
          props: 'user_id'
        },
        {
          title: '门店机构',
          props: 'account_type_name'
        },
        {
          title: '用户确认状态',
          props: 'user_confirm_status'
        },
        {
          title: '确认时间',
          props: 'registTime'
        }
      ],
      formData: {},
      configs: {
        loadDataApi: (p) => {
          return new Promise((resolve) => {
            fetchVerificationList(queryParams(p, this.formData)).then((res) => {
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
    add(val, key) {
      console.log(val, key);
    },
    // val: 当前表单中的数据
    // key 用来handles 中设置的唯一标识key值
    handleBaseSearch(val, key) {
      if (key === 'search') {
        this.formData = val;
        this.$refs.grid.query();
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

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
        ref="gird"
      />
    </template>
  </base-content>
</template>

<script>
import { mapGetters } from 'vuex';
import { queryParams } from '@/utils';
import { fetchOrderList } from '@/api/verification';
export default {
  computed: {
    ...mapGetters(['sidebar']),
    routes() {
      return this.$router.options.routes;
    }
  },
  data() {
    return {
      baseSearchs: [
        {
          label: '活动开始时间',
          elType: 'date',
          placeholder: '请选择活动开始时间',
          value: '',
          name: 'start_time'
        },
        {
          label: '活动结束时间',
          elType: 'date',
          placeholder: '请输入活动结束时间',
          value: '',
          name: 'end_time'
        },
        {
          label: '状态',
          elType: 'select',
          placeholder: '请选择状态',
          value: '',
          name: 'consume_status',
          options: [
            {
              label: '已完成',
              value: 1
            },
            {
              label: '待消费',
              value: 2
            },
            {
              label: '已消费',
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
          title: '订单id',
          props: 'id'
        },
        {
          title: '订单时间',
          props: 'insert_time'
        },
        {
          title: '用户id',
          props: 'user_id'
        },
        {
          title: '商品id',
          props: 'product_id'
        },
        {
          title: '金额',
          props: 'price'
        },
        {
          title: '状态',
          props: 'consume_status'
        }
      ],
      operations: [
        {
          label: '查看消费记录',
          handler: (row) => {
            const { id } = row;
            this.$router.push({
              path: '/orders/expense',
              query: {
                id
              }
            });
          }
        }
      ],
      configs: {
        loadDataApi: (p) => {
          return new Promise((resolve) => {
            fetchOrderList(queryParams(p, this.formData)).then((res) => {
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
        this.$refs.gird.query();
      } else {
        const formEle = this.$refs.baseSearchEle;
        formEle.empty();
      }
    }
  }
};
</script>

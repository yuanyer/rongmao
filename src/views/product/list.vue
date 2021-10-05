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
        :store-config="configs"
        :operations="operations"
        ref="grid"
      ></sf-grid>
    </template>
  </base-content>
</template>

<script>
import { mapGetters } from 'vuex';
import { queryParams } from '@/utils';
import { fetchProductionList, fetchUpsAndDowns } from '@/api/production-api';
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
      baseSearchs: [
        {
          label: '商品名称',
          elType: 'input',
          placeholder: '请输入商品名称',
          value: '',
          name: 'product_name'
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
          text: '新增商品',
          key: 'add',
          handle: this.handleBaseSearch
        }
      ],
      baseFormData: {},
      // here is table
      columns: [
        {
          title: '商品id',
          props: 'id'
        },
        {
          title: '商品名',
          props: 'product_name'
        },
        {
          title: '价格',
          props: 'price'
        },
        {
          title: '优惠价',
          props: 'price_discount'
        },
        {
          title: '类型',
          props: 'product_type'
        },
        {
          title: '规格',
          props: 'product_attribute'
        },
        {
          title: '状态',
          props: 'status'
        },
        {
          title: '商品提供方',
          props: 'provider'
        },
        {
          title: '可售范围',
          props: 'sale_scope'
        }
      ],
      formData: {},
      configs: {
        loadDataApi: (p) => {
          return new Promise((resolve) => {
            fetchProductionList(queryParams(p, this.formData)).then((res) => {
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
      },
      operations: [
        {
          label: '编辑',
          handler: (row) => {
            console.log(row);
            // this.$message.success('编辑');
            this.$router.push({
              path: '/product/update',
              query: {
                flag: 'edit'
              }
            });
          }
        },
        {
          label: '上架',
          handler: (row) => {
            console.log(row);
            const { id } = row;
            fetchUpsAndDowns({
              id,
              status: 1
            }).then((res) => {
              this.$refs.grid.query();
              this.$message.success('商品上架成功');
            });
          }
        },
        {
          label: '下架',
          handler: (row) => {
            const { id } = row;
            fetchUpsAndDowns({
              id,
              status: 0
            }).then((res) => {
              this.$refs.grid.query();
              this.$message.success('商品下架成功');
            });
            // this.$message.success('编辑');
          }
        }
      ]
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
        this.$router.push({
          path: '/product/update',
          query: {
            flag: 'add'
          }
        });
      } else {
        const formEle = this.$refs.baseSearchEle;
        formEle.empty();
      }
    }
  }
};
</script>

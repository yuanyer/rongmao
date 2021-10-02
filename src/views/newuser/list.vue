<template>
  <div class="container">
    <sf-base-search
      :baseSearchs="baseSearchs"
      :allSearchs="allSearchs"
      :base-handles="baseHandles"
      :all-handles="AllHandles"
      :baseData="baseFormData"
      ref="baseSearchEle"
    />
  </div>
</template>

<!-- <script>
     import { mapGetters } from 'vuex';

     export default {
     data() {
     return {
     name: 'zhangsan'
     };
     },
     computed: {
     ...mapGetters(['sidebar']),
     routes() {
     return this.$router.options.routes;
     }
     }
     };
     </script>
-->
<script>
export default {
  data() {
    const selectOption = () => {
      return [
        {
          label: '货主a',
          value: 1
        },
        {
          label: '货主b',
          value: 2
        },
        {
          label: '货主c',
          value: 3
        },
        {
          label: '货主d',
          value: 4
        }
      ];
    };
    return {
      count: 5,
      oneOptions: selectOption(),
      baseSearchs: [
        {
          label: '商品编码',
          elType: 'input',
          placeholder: '请输入',
          value: '',
          name: 'itemCode'
        },
        {
          label: '货主',
          elType: 'select',
          placeholder: '请输入货主代码',
          value: '',
          name: 'vendorCode',
          remote: true,
          loading: false,
          reserveKeyword: true,
          options: [],
          remoteMethod: this.fetchOwnerOnepage('base-search'),
          infiniteScroll: this.baseSearchScroll('base-search')
        }
      ],
      allSearchs: [
        {
          label: '商品编码',
          elType: 'input',
          placeholder: '请输入',
          value: '',
          name: 'itemCode'
        },
        {
          label: '商品名称',
          elType: 'input',
          placeholder: '请输入',
          value: '',
          name: 'itemName'
        },
        {
          label: '货主',
          elType: 'select',
          placeholder: '请输入货主代码',
          value: '',
          name: 'vendorCode',
          remote: true,
          loading: false,
          reserveKeyword: true,
          options: [],
          remoteMethod: this.fetchOwnerOnepage('all-search'),
          infiniteScroll: this.baseSearchScroll('all-search')
        },
        {
          label: '计量单位',
          elType: 'input',
          placeholder: '请输入',
          value: '',
          name: 'unit'
        },
        {
          label: '品类',
          elType: 'select',
          placeholder: '请请择品类',
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
          label: '规格',
          elType: 'input',
          placeholder: '请输入',
          value: '',
          name: 'spec'
        },
        {
          label: '保质期',
          elType: 'date',
          placeholder: '请选择日期',
          value: '',
          name: 'expirationTime'
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
      AllHandles: [
        {
          btnType: 'primary',
          text: '新增',
          icon: 'add',
          key: 'add',
          handle: this.add
        },
        {
          btnType: 'default',
          text: '删除',
          key: 'delete',
          handle: this.handerAll
        },
        {
          btnType: 'default',
          text: '导入',
          key: 'import',
          handle: this.handerAll
        },
        {
          btnType: 'default',
          text: '导出',
          key: 'export',
          handle: this.handerAll
        }
      ],
      baseFormData: {}
    };
  },
  methods: {
    // fetch one page data
    fetchOwnerOnepage(key) {
      return (code) => {
        // You can get data of remote ajax by code
        console.log(code);
        if (key === 'base-search') {
          this.baseSearchs[1].options = this.oneOptions;
        } else {
          this.allSearchs[2].options = this.oneOptions;
        }
      };
    },

    // If a lot of data , and You could scroll divide pages
    baseSearchScroll(key) {
      return () => {
        if (key === 'base-search') {
          let n = this.count;
          this.count += 5;
          for (; n < this.count; n++) {
            this.baseSearchs[1].options.push({
              label: `货主${n}`,
              value: n
            });
          }
        } else {
          let n = this.count;
          this.count += 5;
          for (; n < this.count; n++) {
            this.allSearchs[2].options.push({
              label: `货主${n}`,
              value: n
            });
          }
        }
      };
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
    },
    handerAll(val, key) {
      console.log(val, key);
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  width: 100%;
  height: calc(100vh - 50px);
  background: rgb(227, 227, 227);
}
.container img {
  width: 800px;
}
.header {
  background: rgb(227, 227, 227);
  font-size: 30px;
  height: 200px;
  padding-top: 30px;
}
</style>

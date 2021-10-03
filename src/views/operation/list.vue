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
      <el-dialog title="新建活动" :visible.sync="isShow" width="40%">
        <sf-base-form
          width="400px"
          :eles="eles"
          ref="mybaseForm"
        ></sf-base-form>
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
          label: '活动名称',
          elType: 'input',
          placeholder: '请输入活动名称',
          value: '',
          name: 'name'
        },
        {
          label: '开始时间',
          elType: 'date',
          placeholder: '请选择开始时间',
          value: '',
          name: 'startTime'
        },
        {
          label: '结束时间',
          elType: 'date',
          placeholder: '请选择结束时间',
          value: '',
          name: 'endTime'
        },
        {
          label: '链接',
          elType: 'input',
          placeholder: '',
          value: '',
          name: 'link'
        },
        {
          label: '图片链接',
          elType: 'input',
          placeholder: '',
          value: '',
          name: 'picLink'
        },
        {
          label: '活动状态',
          elType: 'select',
          placeholder: '请选择活动状态',
          value: '',
          name: 'actvieState',
          options: [
            {
              label: '未开始',
              value: 1
            },
            {
              label: '已开始',
              value: 2
            },
            {
              label: '已结束',
              value: 3
            }
          ]
        },
        {
          label: '地域限制',
          elType: 'input',
          placeholder: '请输入地域限制',
          value: '',
          name: 'id'
        }
      ],
      baseSearchs: [
        {
          label: '活动开始时间',
          elType: 'date',
          placeholder: '请选择活动开始时间',
          value: '',
          name: 'itemCode'
        },
        {
          label: '活动结束时间',
          elType: 'date',
          placeholder: '请输入活动结束时间',
          value: '',
          name: 'vendorCode'
        },
        {
          label: '活动状态',
          elType: 'select',
          placeholder: '请选择活动状态',
          value: '',
          name: 'activeState',
          options: [
            {
              label: '未开始',
              value: 1
            },
            {
              label: '已开始',
              value: 2
            },
            {
              label: '已结束',
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
        },
        {
          btnType: 'default',
          text: '新建活动',
          key: 'add',
          handle: this.handleBaseSearch
        }
      ],
      baseFormData: {},
      // here is table
      columns: [
        {
          title: '开始时间',
          props: 'registTime'
        },
        {
          title: '结束时间',
          props: 'registTime'
        },
        {
          title: '活动名称',
          props: 'name'
        },
        {
          title: '链接',
          props: 'address'
        },
        {
          title: '图片链接',
          props: 'address'
        },
        {
          title: '活动状态',
          props: 'address'
        },
        {
          title: '地域限制',
          props: 'address'
        }
      ],
      operations: [
        {
          label: '编辑',
          handler: (row) => {
            console.log(row);
            // this.$message.success('编辑');
            this.isShow = true;
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

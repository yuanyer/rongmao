<template>
  <base-content>
    <template>
      <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="商品ID">
          <el-col :span="4">
            <el-input v-model="form.id" width="280px" />
          </el-col>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-col :span="4">
            <el-input v-model="form.product_name" />
          </el-col>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-col :span="4">
            <el-input v-model="form.price" />
          </el-col>
        </el-form-item>
        <el-form-item label="优惠后价格">
          <el-col :span="4">
            <el-input v-model="form.price_discount" />
          </el-col>
        </el-form-item>
        <el-form-item label="商品类型">
          <el-col :span="4">
            <el-select v-model="form.product_type" placeholder="请选择商品类型">
              <el-option label="商品" value="1" />
              <el-option label="服务" value="2" />
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="商品规格">
          <el-col :span="4">
            <el-input v-model="form.product_attribute" />
          </el-col>
        </el-form-item>
        <el-form-item label="商品提供方">
          <el-col :span="4">
            <el-input v-model="form.provider" />
          </el-col>
        </el-form-item>
        <el-form-item label="可售卖范围">
          <el-col :span="4">
            <el-input v-model="form.sale_scope_list" />
          </el-col>
        </el-form-item>
        <el-form-item label="平台分成">
          <el-col :span="4">
            <el-select
              v-model="form.plantform_type"
              style="width: 100%"
              placeholder="请选择分成类型"
            >
              <el-option label="数字" value="1" />
              <el-option label="百分比" value="2" />
            </el-select>
          </el-col>
          <el-col style="text-align: center" :span="2">-</el-col>
          <el-col :span="4">
            <el-input v-model="form.plantform_value" />
          </el-col>
        </el-form-item>
        <el-form-item label="运营中心分成">
          <el-col :span="4">
            <el-select
              v-model="form.operation_type"
              style="width: 100%"
              placeholder="请选择活动区域"
            >
              <el-option label="数字" value="1" />
              <el-option label="百分比" value="2" />
            </el-select>
          </el-col>
          <el-col style="text-align: center" :span="2">-</el-col>
          <el-col :span="4">
            <el-input v-model="form.operation_value" />
          </el-col>
        </el-form-item>
        <el-form-item label="咨询中心分成">
          <el-col :span="4">
            <el-select
              v-model="form.counsel_type"
              style="width: 100%"
              placeholder="请选择活动区域"
            >
              <el-option label="数字" value="1" />
              <el-option label="百分比" value="2" />
            </el-select>
          </el-col>
          <el-col style="text-align: center" :span="2">-</el-col>
          <el-col :span="4">
            <el-input v-model="form.counsel_value" />
          </el-col>
        </el-form-item>
        <el-form-item label="提供商分成">
          <el-col :span="4">
            <el-select
              v-model="form.supplier_type"
              style="width: 100%"
              placeholder="请选择活动区域"
            >
              <el-option label="数字" value="1" />
              <el-option label="百分比" value="2" />
            </el-select>
          </el-col>
          <el-col style="text-align: center" :span="2">-</el-col>
          <el-col :span="4">
            <el-input v-model="form.supplier_value" />
          </el-col>
        </el-form-item>
        <el-form-item label="推荐者分成">
          <el-col :span="4">
            <el-select
              v-model="form.region"
              style="width: 100%"
              placeholder="请选择活动区域"
            >
              <el-option label="数字" value="1" />
              <el-option label="百分比" value="2" />
            </el-select>
          </el-col>
          <el-col style="text-align: center" :span="2">-</el-col>
          <el-col :span="4">
            <el-input v-model="form.name" />
          </el-col>
        </el-form-item>

        <el-form-item label="商品图">
          <el-col :span="4">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList2"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </el-col>
        </el-form-item>
        <el-form-item label="商品介绍链接">
          <el-col :span="4">
            <el-input v-model="form.product_desc_url" />
          </el-col>
        </el-form-item>
        <el-form-item label="商品状态">
          <el-col :span="4">
            <el-select v-model="form.status" placeholder="请选择活动区域">
              <el-option label="上架" value="1" />
              <el-option label="下架" value="0" />
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </template>
  </base-content>
</template>

<script>
import { mapGetters } from 'vuex';
import { createProduct } from '@/api/production-api';

export default {
  created() {
    console.log(this.$route.query);
  },
  data() {
    return {
      fileList2: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ],
      form: {
        id: '',
        product_name: '',
        price: '',
        price_discount: '',
        product_type: '',
        product_attribute: '',
        provider: '',
        sale_scope_list: '',
        product_rate_list: [
          { text: '平台分成', rate_type: 0, rate_value: 0, role_type: 0 },
          { text: '运营中心分成', rate_type: 0, rate_value: 0, role_type: 0 },
          { text: '咨询中心分成', rate_type: 0, rate_value: 0, role_type: 0 },
          { text: '提供商分成', rate_type: 0, rate_value: 0, role_type: 0 },
          { text: '推荐者分成', rate_type: 0, rate_value: 0, role_type: 0 }
        ],
        product_desc_url: '',
        status: ''
      }
    };
  },
  methods: {
    async onSubmit() {
      const formData = {
        price: 100, // 商品价格
        price_discount: 29, // 优惠价格
        product_attribute: '332', // 如果是服务只能传数字，商品可以传文本
        product_desc_url: 'https://www.baidu.com',
        // eslint-disable-next-line no-dupe-keys
        product_img_list: [ // 商品图片信息
          { img_position: 1, img_url: 'https://qiniu.zuolinju.com/kama/autumn-1-5.png' },
          { img_position: 2, img_url: 'https://qiniu.zuolinju.com/kama/person-5.png' },
          { img_position: 3, img_url: 'https://qiniu.zuolinju.com/kama/person-4.png' }
        ],
        product_name: '商品名称',
        product_rate_list: [ // 商品分成配置数据集合
          { rate_type: 1, rate_value: '200', role_type: 1 },
          { rate_type: 2, rate_value: '100', role_type: 2 },
          { rate_type: 1, rate_value: '230', role_type: 3 },
          { rate_type: 3, rate_value: '260', role_type: 4 },
          { rate_type: 1, rate_value: '280', role_type: 5 }
        ],
        product_type: 1, // 商品类型，1：商品，2：服务
        provider: '商品提供方',
        quantity: 1, // 商品数量
        sale_scope_list: [1], // 售卖范围对应的账号id
        status: 1 // 商品状态，0：下架，1：上架
      }
      const result = await createProduct(JSON.stringify(formData))
      if (result.code == 0) {
        alert('创建成功')
      }
      console.log('submit!', result);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  },
  computed: {
    ...mapGetters(['sidebar']),
    routes() {
      return this.$router.options.routes;
    }
  }
};
</script>

<style scoped>
.el-select {
  width: 100%;
}
</style>

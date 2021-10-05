<template>
  <base-content>
    <template>
      <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="商品ID">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="form.product_name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="优惠后价格">
          <el-input v-model="form.price_discount"></el-input>
        </el-form-item>
        <el-form-item label="商品类型">
          <el-select v-model="form.product_type" placeholder="请选择商品类型">
            <el-option label="商品" value="1"></el-option>
            <el-option label="服务" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="商品规格">
          <el-input v-model="form.product_attribute"></el-input>
        </el-form-item>
        <el-form-item label="商品提供方">
          <el-input v-model="form.provider"></el-input>
        </el-form-item>
        <el-form-item label="可售卖范围">
          <el-input v-model="form.sale_scope_list"></el-input>
        </el-form-item>

        <el-form-item label="平台分成">
          <el-col :span="5">
            <el-select
              style="width: 100%"
              v-model="form.region"
              placeholder="请选择活动区域"
            >
              <el-option label="数字" value="shanghai"></el-option>
              <el-option label="百分比" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col style="text-align: center" :span="2">-</el-col>
          <el-col :span="17">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="运营中心分成">
          <el-col :span="5">
            <el-select
              style="width: 100%"
              v-model="form.region"
              placeholder="请选择活动区域"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col style="text-align: center" :span="2">-</el-col>
          <el-col :span="17">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="咨询中心分成">
          <el-col :span="5">
            <el-select
              style="width: 100%"
              v-model="form.region"
              placeholder="请选择活动区域"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col style="text-align: center" :span="2">-</el-col>
          <el-col :span="17">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="提供商分成">
          <el-col :span="5">
            <el-select
              style="width: 100%"
              v-model="form.region"
              placeholder="请选择活动区域"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col style="text-align: center" :span="2">-</el-col>
          <el-col :span="17">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="推荐者分成">
          <el-col :span="5">
            <el-select
              style="width: 100%"
              v-model="form.region"
              placeholder="请选择活动区域"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col style="text-align: center" :span="2">-</el-col>
          <el-col :span="17">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="商品图">
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
        </el-form-item>
        <el-form-item label="商品介绍链接">
          <el-input v-model="form.product_desc_url"></el-input>
        </el-form-item>
        <el-form-item label="商品状态">
          <el-select v-model="form.status" placeholder="请选择活动区域">
            <el-option label="上架" value="1"></el-option>
            <el-option label="下架" value="0"></el-option>
          </el-select>
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
        product_desc_url: '',
        status: ''
      }
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
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

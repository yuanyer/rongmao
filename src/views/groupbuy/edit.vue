<template>
  <base-content>
    <template>
      <el-form ref="form" :model="form" label-width="180px">
        <el-form-item label="商品ID">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="拼团价格">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        
        <el-form-item label="商品原价">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="正常售卖价">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="商品类型">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="商品规格">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="商品提供方">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="可拼团范围">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="参与人数上限">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="成功购买人数">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
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
              <el-option label="数字" value="shanghai"></el-option>
              <el-option label="百分比" value="beijing"></el-option>
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
              <el-option label="数字" value="shanghai"></el-option>
              <el-option label="百分比" value="beijing"></el-option>
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
              <el-option label="数字" value="shanghai"></el-option>
              <el-option label="百分比" value="beijing"></el-option>
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
              <el-option label="数字" value="shanghai"></el-option>
              <el-option label="百分比" value="beijing"></el-option>
            </el-select>
          </el-col>
          <el-col style="text-align: center" :span="2">-</el-col>
          <el-col :span="17">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="未购买补偿">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
            <el-option label="5" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="拼团状态">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="上架" value="shanghai"></el-option>
            <el-option label="下架" value="beijing"></el-option>
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
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
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

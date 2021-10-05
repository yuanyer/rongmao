<template>
  <base-content>
    <template>
      <el-table :data="order" style="width: 100%">
        <el-table-column prop="id" label="订单id" />
        <el-table-column prop="insert_time" label="订单时间" />
        <el-table-column prop="user_id" label="用户id" />
        <el-table-column prop="product_id" label="商品id" />
        <el-table-column prop="yunying" label="金额" />
        <el-table-column prop="consume_status" label="状态" />
      </el-table>
      <div style="margin-top: 15px"></div>
      <el-table :data="product" style="width: 100%">
        <el-table-column prop="product_name" label="商品名称" width="180px" />
        <el-table-column prop="product_attribute" label="名称" />
      </el-table>

      <div style="margin-top: 15px"></div>
      <el-table :data="orderCodeList" style="width: 100%">
        <el-table-column prop="id" label="id" />
        <el-table-column prop="code" label="核销码" />
        <el-table-column prop="code_status" label="核销码状态" />
        <el-table-column prop="user_confirm_status" label="消费状态" />
        <el-table-column prop="consume_time" label="使用时间" />
        <el-table-column prop="user_confirm_time" label="用户确认时间" />
        <el-table-column prop="address" label="使用机构门店" />
      </el-table>
    </template>
  </base-content>
</template>

<script>
import { mapGetters } from 'vuex';
import { fetchOrderDetail } from '@/api/verification';

export default {
  created() {
    fetchOrderDetail({
      id: this.id
    }).then((res) => {
      const { order, order_code_list, product } = res.data;
      this.order = [order];
      this.orderCodeList = order_code_list;
      this.product = [product];
    });
  },
  computed: {
    ...mapGetters(['sidebar']),
    routes() {
      return this.$router.options.routes;
    },
    id() {
      return this.$route.query.id;
    }
  },
  data() {
    return {
      order: [],
      orderCodeList: [],
      product: []
    };
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

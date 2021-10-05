import { get, post } from '@/utils/request';
// 查询核销记录列表
export const fetchVerificationList = async (params) => {
  const res = await post('/api/admin/order/get_order_code_list', params);
  return res.info;
};

// 查询订单列表
export const fetchOrderList = async (params) => {
  const res = await post('/api/admin/order/get_order_list', params);
  return res.info;
};

// 查看订单详情
export const fetchOrderDetail = async (params) => {
  const res = await post('/api/admin/order/get_order_detail_by_id', params);
  return res.info;
};

import { get, post } from '@/utils/request';

export const fetchProductionList = async (params) => {
  const res = await post('/api/admin/product/get_product_list', params);
  return res.info;
};

// 商品上架,下架
export const fetchUpsAndDowns = (params) =>
  post('/api/admin/product/update_product_status', params);

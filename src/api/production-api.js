import { get, post } from '@/utils/request';

export const fetchProductionList = async (params) => {
  const url = `/api/admin/product/get_product_list?page_size=${params.page_size}&page_num=${params.page_num}`
  const res = await post(url, params);
  return res.info;
};

// 商品上架,下架
export const fetchUpsAndDowns = (params) =>
  post('/api/admin/product/update_product_status', params);

// 创建商品
export const createProduct = async (params) => {
  const res = await post('/api/admin/product/create', params);
  return res;
};

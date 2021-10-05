import { get, post } from '@/utils/request';

export const fetchUserList = async (params) => {
  const res = await post('/api/admin/user/get_user_list', params);
  return res.info;
};

// 修改自己的推广码
export const fetchChangeCode = (params) =>
  post('/api/admin/user/update_promotion_code_by_id', params);

export const fetchProductionList = async (params) => {
  const res = await post('/api/admin/product/get_product_list', params);
  return res;
};

// 拉新用户列表
export const fetchNewUserList = async (params) => {
  const res = await post('/api/admin/user/get_promotion_user_list', params);
  return res.info;
};
// 拉新用户查询用户详情
export const fetchNewUserById = async (params) => {
  const res = await post('/api/admin/user/get_user_by_id', params);
  return res.info;
};
// 修改推广关系
export const fetchUpdateRelaship = async (params) => {
  const res = await post('/api/admin/user/update_promotion_user_by_id', params);
  return res;
}

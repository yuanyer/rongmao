import { get, post } from '@/utils/request';

export const fetchUserList = async (params) => {
  const { page_num, page_size } = params
  const url = `/api/admin/user/get_user_list?page_size=${page_size}&page_num=${page_num}`
  const res = await post(url, params);
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
  const { page_num, page_size } = params
  const res = await post(`/api/admin/user/get_promotion_user_list?page_size=${page_size}&page_num=${page_num}`, params);
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
// 用户登录
export const fetchLogin = async (params) => {
  const res = await post('/api/admin/account/login', params);
  return res;
}
// 获取用户信息
export const fetchUserInfo = async (params) => {
  const res = await get('/api/admin/menu/get_user_menu_detail', params);
  return res;
}

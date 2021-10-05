import { get, post } from '@/utils/request';

// 创建用户
export const fetchCreateAccount = (params) =>
  post('/api/admin/account/create', params);

// 重置密码、更新密码
export const fetchUpdatePwd = (params) =>
  post('/api/admin/account/update_password', params);

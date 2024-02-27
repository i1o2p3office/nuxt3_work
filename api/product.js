import request from '@/utils/request'

export function getTopNewProduct(page) {
  return request(`/api/product/topNew`, 'GET', { page })
}

export function getHotProduct(page) {
  return request(`/api/product/hot`, 'GET', { page })
}

export function getList(page, limit, category) {
  return request(`/api/product/list`, 'GET', { page, limit, category })
}

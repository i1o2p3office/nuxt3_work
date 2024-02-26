import request from '@/utils/request'

export function getDiscountText() {
  return request('/api/mainPage/discountText', 'GET')
}

import request from '@/utils/request'

export function getNav() {
  return request('/api/nav', 'GET')
}

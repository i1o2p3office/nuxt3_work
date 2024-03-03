import request from '@/utils/request'

export function getAnnouncement() {
  return request('/api/announcement', 'GET')
}

export default defineEventHandler(async (event) => {
  return [
    {
      id: 1,
      title: 'Welcome',
      url: ''
    },
    {
      id: 2,
      title: 'FREE SHIPPING OVER $2,000',
      url: 'https://www.google.com.tw/'
    },
    {
      id: 3,
      title: 'Up to 50% off selected items',
      url: 'http://www.yahoo.com.tw/'
    },
    {
      id: 4,
      title: 'NEW ARRIVALS 5% OFF',
      url: 'https://www.facebook.com/'
    }
  ]
})

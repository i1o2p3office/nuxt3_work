export default defineEventHandler(async (event) => {
  return [
    {
      id: 1,
      title: 'Home',
      url: '/'
    },
    {
      id: 2,
      title: 'ALL',
      url: '/category/all'
    },
    {
      id: 3,
      title: 'Man / Unisex',
      sub: [
        {
          id: 1,
          title: 'T-Shirts & Vest',
          url: '/category/1'
        },
        {
          id: 2,
          title: 'Hoodies & Sweatshirts',
          url: '/category/2'
        },
        {
          id: 3,
          title: 'Jackets & Coats',
          url: '/category/3'
        },
        {
          id: 4,
          title: 'Jeans',
          url: '/category/4'
        },
        {
          id: 5,
          title: 'Trousers & Chinos',
          url: '/category/5'
        },
        {
          id: 6,
          title: 'Shorts',
          url: '/category/6'
        },
        {
          id: 7,
          title: 'Shirts',
          url: '/category/7'
        },
        {
          id: 8,
          title: 'Suits & Blazers',
          url: '/category/8'
        },
        {
          id: 9,
          title: 'Underwear & Socks',
          url: '/category/9'
        },
        {
          id: 10,
          title: 'Accessories',
          url: '/category/10'
        }
      ]
    },
    {
      id: 4,
      title: 'Women/Unisex',
      sub: [
        {
          id: 1,
          title: 'T-Shirts & Vest',
          url: '/category/1'
        },
        {
          id: 2,
          title: 'Hoodies & Sweatshirts',
          url: '/category/2'
        },
        {
          id: 3,
          title: 'Jackets & Coats',
          url: '/category/3'
        },
        {
          id: 4,
          title: 'Jeans',
          url: '/category/4'
        },
        {
          id: 5,
          title: 'Trousers & Chinos',
          url: '/category/5'
        },
        {
          id: 6,
          title: 'Shorts',
          url: '/category/6'
        },
        {
          id: 7,
          title: 'Shirts',
          url: '/category/7'
        },
        {
          id: 8,
          title: 'Suits & Blazers',
          url: '/category/8'
        },
        {
          id: 9,
          title: 'Underwear & Socks',
          url: '/category/9'
        },
        {
          id: 10,
          title: 'Accessories',
          url: '/category/10'
        }
      ]
    },
    {
      id: 5,
      title: '現貨區',
      url: '/category/spot-goods'
    },
    {
      id: 6,
      title: '【SALE】',
      url: '/category/sale'
    },
    {
      id: 7,
      title: 'How To Buy',
      url: '/category/qa'
    }
  ]
})

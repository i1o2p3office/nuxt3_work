const productNames = [
  'Green Retro Checked Shirt',
  'Blue Retro Checked Shirt',
  'Red Retro Checked Shirt',
  'Yellow Retro Checked Shirt',
  'Black Retro Checked Shirt',
  'White Retro Checked Shirt',
  'Pink Retro Checked Shirt',
  'Purple Retro Checked Shirt',
  'Cover Embroidered Cap (2 Colors )'
]
const discounts = [1, 0.95, 0.9, 0.8, 0.7, 0.5]

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = parseInt(query.page) || 1
  const limit = parseInt(query.limit) || 12
  const category = query.category || 'all'
  const products = await generate(page, limit)
  return products
})

function generate(page, limit) {
  return new Promise((resolve) => {
    let total = 1000
    let maxPage = Math.ceil(total / limit)
    let products = []
    for (let i = page; i <= limit * page; i++) {
      let product_name = productNames[Math.floor(Math.random() * productNames.length)]
      let discount = discounts[Math.floor(Math.random() * discounts.length)]
      let originalPrice = Math.floor(useRandomInt(1, 25)) * 100
      products.push({
        pid: i,
        name: product_name,
        price: Math.ceil(originalPrice * discount),
        originalPrice: originalPrice,
        Rebate: discount,
        img: `/product/product_${useRandomInt(1, 20)}.jpg`,
        imgSub: `/product/product_${useRandomInt(1, 20)}.jpg`
      })
    }

    resolve({ data: products, nowPage: page, maxPage, total })
  })
}

function useRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

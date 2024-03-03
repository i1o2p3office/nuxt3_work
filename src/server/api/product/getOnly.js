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
  const productId = parseInt(query.id)
  const products = await generate(productId)
  return products
})

function generate(productId) {
  return new Promise((resolve) => {
    let product_name = productNames[Math.floor(Math.random() * productNames.length)]
    let discount = discounts[Math.floor(Math.random() * discounts.length)]
    let originalPrice = Math.floor(useRandomInt(1, 25)) * 100
    const product = {
      pid: productId,
      name: product_name,
      price: Math.ceil(originalPrice * discount),
      originalPrice: originalPrice,
      Rebate: discount,
      img: [
        `/product/product_${useRandomInt(1, 20)}.jpg`,
        `/product/product_${useRandomInt(1, 20)}.jpg`,
        `/product/product_${useRandomInt(1, 20)}.jpg`,
        `/product/product_${useRandomInt(1, 20)}.jpg`,
        `/product/product_${useRandomInt(1, 20)}.jpg`,
        `/product/product_${useRandomInt(1, 20)}.jpg`,
        `/product/product_${useRandomInt(1, 20)}.jpg`
      ],
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['red', 'green', 'blue', 'yellow', 'black', 'white', 'pink', 'purple'],
      stock: useRandomInt(0, 10),
      info: '<ul style="list-style-type:disc;"><li>尺寸: One Size</li><li>材質: 棉</li><li>產地: 台灣</li></ul>',
      desc: '<ul style="list-style-type:disc;"><li>尺寸: One Size</li><li>材質: 棉</li><li>產地: 台灣</li></ul>'
    }

    resolve(product)
  })
}

function useRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

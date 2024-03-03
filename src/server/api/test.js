export default defineEventHandler(async (event) => {
  const token = getHeader(event, 'Authorization')
  console.log(token)
  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'plase login first'
    })
  }

  const header = getHeaders(event)
  const query = getQuery(event)
  // const body = await readBody(event);

  return {
    url: event.url,
    path: event.path,
    header,
    query
  }
})

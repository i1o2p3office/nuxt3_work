export default defineEventHandler(async (event) => {
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

export default defineEventHandler((event) => {
  // console.log("event", event);
  const token = getHeader(event, "Authorization");
});

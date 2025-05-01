export default defineEventHandler((event) => {
  console.info(getRequestURL(event).pathname);
});

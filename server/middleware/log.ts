export default defineEventHandler((event) => {
  const url = getRequestURL(event);

  console.info(url.pathname);
});

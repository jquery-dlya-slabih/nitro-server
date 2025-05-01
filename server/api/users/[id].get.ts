export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const data = await $fetch(`https://dummyjson.com/users/${id}`);

  return data;
});

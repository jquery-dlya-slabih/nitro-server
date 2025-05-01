defineRouteMeta({
  openAPI: {
    tags: ['user'],
    description: 'User by id',
    parameters: [{ in: 'query', name: 'user', required: true }]
  }
});

export default defineCachedEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  return await $fetch(`https://dummyjson.com/users/${id}`);
});

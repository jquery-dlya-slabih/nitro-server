defineRouteMeta({
  openAPI: {
    tags: ['Users'],
    description: 'Get user by id',
    parameters: [
      {
        in: 'path',
        name: 'id',
        required: true,
        schema: {
          type: 'integer',
          description: 'User id'
        }
      }
    ]
  }
});

export default defineCachedEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  return await $fetch(`https://dummyjson.com/users/${id}`);
});

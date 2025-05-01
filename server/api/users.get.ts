defineRouteMeta({
  openAPI: {
    tags: ['users'],
    description: 'Users list',
    parameters: [{ in: 'query', name: 'users', required: true }]
  }
});

export default defineCachedEventHandler(async () => {
  return await $fetch('https://dummyjson.com/users').catch((error) => console.log(error));
});

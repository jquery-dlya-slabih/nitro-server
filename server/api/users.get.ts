defineRouteMeta({
  openAPI: {
    tags: ['Users'],
    description: 'Get all users'
  }
});

export default defineCachedEventHandler(async () => {
  return await $fetch('https://dummyjson.com/users').catch((error) => console.log(error));
});

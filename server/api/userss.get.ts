defineRouteMeta({
  openAPI: {
    tags: ['test'],
    description: 'Test route description',
    parameters: [{ in: 'query', name: 'test', required: true }]
  }
});

export default defineEventHandler(async () => {
  const data = await fetch('https://dummyjson.com/users')
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return data;
});

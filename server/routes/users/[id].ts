export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  const data = await fetch(`https://dummyjson.com/users/${id}`).then((res) => res.json());

  return `<div>
<h1>User with id: ${id}</h1>
<div>${data.firstName}</div>
</div>`;
});

export default defineEventHandler(async (event) => {
  // const payload = { ...getQuery(event) };
  // const { result } = await runTask("log", { payload });
  console.log(useRuntimeConfig().apiEnv);

  return 'Start by editing <code>server/routes/index.ts</code>.';
});

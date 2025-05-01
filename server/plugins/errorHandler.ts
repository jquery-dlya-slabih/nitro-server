export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('error', async (error, { event }) => {
    console.info(`${event.path} Application error, ooopsy whooopsy!`);
    console.info(error);
  });
});

export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('error', async (error, { event }) => {
    console.error('Error on path: ' + event.path);
    console.error(error.cause);
  });
});

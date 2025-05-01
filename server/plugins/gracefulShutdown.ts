export default defineNitroPlugin((nitro) => {
  nitro.hooks.hookOnce('close', async () => {
    console.info('Closing nitro server...');
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });
});

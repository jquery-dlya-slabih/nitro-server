export default defineNitroConfig({
  srcDir: 'server',
  compatibilityDate: '2025-04-30',
  runtimeConfig: {
    apiEnv: process.env.API_ENV
  },
  experimental: {
    tasks: true
  },
  scheduledTasks: {
    '* * * * *': ['log']
  }
});

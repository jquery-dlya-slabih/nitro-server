export default defineNitroConfig({
  srcDir: 'server',
  compatibilityDate: '2025-04-30',
  experimental: {
    tasks: true
  },
  scheduledTasks: {
    '* * * * *': ['log']
  }
});

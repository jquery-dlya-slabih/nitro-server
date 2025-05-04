export default defineNitroConfig({
  srcDir: 'server',
  compatibilityDate: '2025-04-30',
  openAPI: {
    meta: {
      title: 'nitro-server',
      description: 'Docs for example API',
      version: '1.0.0'
    },
    ui: {
      scalar: {
        theme: 'purple',
        route: '/_docs'
      },
      swagger: false
    },
    production: 'runtime'
  },
  experimental: {
    tasks: true,
    openAPI: true
  },
  scheduledTasks: {
    '* * * * *': ['log']
  }
});

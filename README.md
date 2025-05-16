# nitro-server

Server template with ton of features.

## Locking Environment Versions

It's considered good practice to lock the versions of your environment tools, such as Node.js and pnpm. To do this,
you can specify the required versions in the `engines` field in `package.json` and configure enforcement using the
`.npmrc` file in your project's root.

If needed, you can disable strict version checks by setting `engine-strict=false` in `.npmrc`.

## For dev

1. clone project `git clone https://github.com/jquery-dlya-slabih/nitro-server.git`
2. install pnpm 10.x version `npm install -g pnpm@latest-10`
3. install deps `pnpm install`
4. run dev `npm run dev`

Example routes:

- get all users http://localhost:3000/api/users
- get user by id http://localhost:3000/api/users/1
- docs http://localhost:3000/_docs

## For prod

### With docker

1. `npm run docker:build`
2. `npm run docker:start`

### Without docker

1. `pnpm install`
2. `npm run build`
3. `npm run prod`

## Commands

| description                         | command                  |
|-------------------------------------|--------------------------|
| run dev build with dev server       | `npm run dev`            |
| run prod build                      | `npm run build`          |
| run prod server (prod build needed) | `npm run prod`           |
| run oxlint                          | `npm run lint`           |
| run prettier check                  | `npm run prettier:check` |
| run prettier write                  | `npm run prettier:write` |
| run docker image build              | `npm run docker:build`   |
| start docker container              | `npm run docker:run`     |
| stop docker container               | `npm run docker:stop`    |

## API

API handlers are located in the `server/api` folder.

For API handlers:

- use `defineCachedEventHandler` for cached responses,
- use `defineEventHandler` for regular uncached handlers.

For more details, see the Nitro documentation:

- [api](https://nitro.build/guide#serverapi)
- [routes](https://nitro.build/guide/routing)
- [cache](https://nitro.build/guide/cache)

## Middleware

To inject middleware for APIs or routes, use the `server/middleware` directory.
See the Nitro [middleware](https://nitro.build/guide/routing#middleware) documentation for details.

## Plugins

Nitro plugins will be executed once during server startup to allow extending Nitro's runtime behavior.
They receive nitroApp context, which can be used to hook into Nitro lifecycle events.
[Plugins](https://nitro.build/guide/plugins) are auto-registered from `server/plugins` directory and run synchronously
(by order of file name) on the first Nitro initialization.

## Files

Nitro handles [assets](https://nitro.build/guide/assets) via the `server/public` directory. All assets in directory
will be automatically served. This means that you can access them directly from the browser without any special configuration.

## Cron jobs

You can define cron jobs in the `server/tasks` directory and schedule them in `nitro.config.ts`. For help configuring
schedules, check out [crontab.guru](https://crontab.guru/) – a useful tool for cron syntax.

Tasks can be executed in three ways:

- **Automatically**
- **Programmatically**
- **Manually**

Documentation [here](https://nitro.build/guide/tasks).

## Utils

You can add your application specific utils inside `server/utils` directory and they will be auto-imported when used.
Every export in the utils directory and its subdirectories will become available globally in your application. Check
[documentation](https://nitro.build/guide/utils) for more.

## OpenAPI

To enable **OpenAPI** documentation, use `defineRouteMeta` in your API handlers. For **Swagger** or **Scalar** configuration,
modify the `nitro.config.ts` file and read the official [documentation](https://nitro.build/config#openapi).

## Hooks

There is a `pre-push` hook in the `.githooks` folder. If you want to add another hook, for example `pre-commit`, then you need:

1. create a file with name `pre-commit` in `.githooks` folder
2. in project root use command `chmod +x .githooks/pre-commit`
3. fill new hook with any commands, like `pre-push` hook

If you want to delete all hooks:

1. remove `.githooks` folder
2. remove `prepare` command in `package.json`
3. in project root use command `git config --unset core.hooksPath`

## Docker

If you encounter a **pnpm** installation error like: Known issue: `Error: Error when performing the request to
https://registry.npmjs.org/pnpm/-/pnpm-10.7.0.tgz; for troubleshooting help,
see https://github.com/nodejs/corepack#troubleshooting.`). Try running the `docker:build` command again.

## Contributing

Feel free to open an issue or submit PRs.

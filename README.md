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
4. run dev `pnpm run dev`

## For prod

1. install deps `pnpm install`
2. pnpm build
3. pnpm prod

## Commands

| description                         | command               |
| ----------------------------------- | --------------------- |
| run dev build with dev server       | `pnpm dev`            |
| run prod build                      | `pnpm build`          |
| run prod server (prod build needed) | `pnpm prod`           |
| run prettier check                  | `pnpm prettier:check` |
| run prettier write                  | `pnpm prettier:write` |

## Hooks

There is a `pre-push` hook in the `.githooks` folder. If you want to add another hook, for example `pre-commit`, then you need:

1. create a file with name `pre-commit` in `.githooks` folder
2. in project root use command `chmod +x .githooks/pre-commit`
3. fill new hook with any commands, like `pre-push` hook

If you want to delete all hooks:

1. remove `.githooks` folder
2. remove `prepare` command in `package.json`
3. in project root use command `git config --unset core.hooksPath`

## Prisma admin

It's demo project for prisma admin components

You don't need to clone this repo just install our CLI and start your own one:

```shell
yarn global add @paljs/cli
//or
npm install -g @paljs/cli
```

then crete your project with this command:

```shell
> pal c
```

We added `sqlite` as db provider in `schema.prisma` you can change it to your custom db provider

after an update your `schema.prisma` run

```shell
> yarn create-migration
> yarn migrate-database
```

this commands will save your schema into db

now run

```shell
> yarn generate:prisma
> pal g
> yarn generate
> yarn dev
```

- build prisma client
- build crud system
- build client graphql hooks
- start dev server

`Good work`

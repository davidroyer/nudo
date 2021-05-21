# Nudo

> An example Todo application built using [Nuxt.js](https://nuxtjs.org/) and [Userbase.js](https://userbase.com/).
>
> See the [Live Demo](https://nudo.netlify.app/).

## Setup Instructions

### Prerequisites

To use this repo as a starting point you'll need to:

1. Have a Userbase account or [create one](https://v1.userbase.com/#create-admin).
2. Use the **App ID** that's automatically generated for you by Userbase
   as an environmental variable.

### Environmental Variable Setup

1. Create an `.env` file at the root of the project
2. Put the following in that `.env` file: `USERBASE_APP_ID=`
3. Locate your **App ID** value from Userbase.
4. Inside the .`env` file, add that **App ID** immediately after `USERBASE_APP_ID=`

**EXAMPLE:** If you **App ID** is `1234` then your `.env` file should be as follows:

```text
USERBASE_APP_ID=123
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

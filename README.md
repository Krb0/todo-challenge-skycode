<span style="font-size:28px"> :card_file_box: To Do Challenge </span>

###### By Apika Luca - Maded with :heart:

---
## :memo: Index
+ [Technologies](#computer-technologies)
+ [How to start](#rocket-how-to-start)
+ [Details](#memo-details)
+ [Scripts](#robot-scripts)
+ [References](#card_file_box-references)

---

## :computer: Technologies
+ Next.js
+ Chakra UI
+ Prisma
+ Anything you need to build a to do list :smile:
> ***Note for Skycode***
> 
> You **MUST** use:
> + Fusejs
> + Jsonwebtoken
> + *BONUS: Socket.io*
> 
> You **CAN'T** use:
> + Next Auth
> + Tailwind
> 
> You **CAN** use:
> + Any library you want

---
## :rocket: How to start
This is a simple proyect with Next.js and Prisma.
### :books: Requirements
+ Yarn
+ MongoDB (Local or Cloud)
### :package: Prepare (Before you start)
First need to create a `.env` file with the schema of `.env.example` file.
#### - :turtle: Manual Method
```sh
# Install dependencies
$ yarn
# Setup Prisma
$ yarn prisma generate
# Reload Chakra UI (Execute this every time you change the theme)
$ yarn chakra-cli tokens src/style/theme.ts
```
#### - :rabbit2: Script Method ***(Recommended)***
```sh
# Execute script
$ yarn sky:setup
```
### :sparkles: Start Development Server
```sh
# Start server
$ yarn dev
```
### :tada: Start Production Server
```sh
# Build server
$ yarn build
# Start server
$ yarn start
```
---
## :memo: Details
You need to build a To Do list page with the following features:
+ Task, Tag and Checkbox CRUD
  - Create
  - Read
  - Update
  - Delete
+ Authentication
  - Authentication with username and password. The password could be plain text or hashed.
  - Login
  - Logout
  - Register
+ Admin Panel
  - List all users and the count of tasks for each user.
---
## :robot: Scripts
+ `sky:setup` : Install dependencies, setup Prisma and Chakra UI
+ `sky:chakra` : Reload Chakra UI types.
---
## :card_file_box: References
+ [Next.js](https://nextjs.org/)
+ [Chakra UI](https://chakraui.com/)
+ [Prisma](https://www.prisma.io/)
+ [Fusejs](https://fusejs.io/)
+ [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
+ [Socket.io](https://socket.io/)
---
:copyright: 2022 Apika Luca
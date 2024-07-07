# MobiCase - A Modern Fullstack E-Commerce Shop for Custom Phone Cases

Built with the Next.js 14 App Router, Postgres, TypeScript, Tailwind & Kinde Auth

![Project Image](https://raw.githubusercontent.com/Rohit-2012/mobicase-ecommerce-app/main/public/thumbnail.png)

## Features

- 🛠️ Complete shop built from scratch in Next.js 14
- 💻 Beautiful landing page included
- 💳 Secret admin dashboard to manage orders
- 🖥️ Drag-and-drop file uploads
- 🛍️ Customers can purchase directly from you
- 🌟 Clean, modern UI on top of shadcn-ui
- 🛒 Completely custom phone case configurator
- 🔑 Authentication using Kinde
- ✅ Apple-inspired configuration design
- ⌨️ 100% written in TypeScript

## Getting started

To get started with this project, run

```bash
  git clone https://github.com/Rohit-2012/mobicase-ecommerce-app.git
```

and create .env file and set up the following environt variables

- KINDE_CLIENT_ID= Your client ID
- KINDE_CLIENT_SECRET= Your Client Secret
- KINDE_ISSUER_URL= Your final deployed link
- KINDE_SITE_URL=http://localhost:3000
- KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
- KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/auth-callback
- ADMIN_EMAIL= email(s) which you want to set as ADMIN
- NEXT_PUBLIC_SERVER_URL=http://localhost:3000
- STRIPE_SECRET_KEY= Your Stripe Secret Key
- UPLOADTHING_SECRET= Your Uploadthing secret
- UPLOADTHING_APP_ID= Your Uploadthing App ID
- DATABASE_URL= Your cloud DataBase URL where you want to manage the Data
- STRIPE_WEBHOOK_SECRET= Your Stripe Webhook Secret
- RESEND_API_KEY= Your Resend API Key

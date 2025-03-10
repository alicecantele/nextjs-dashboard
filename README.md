# Next.js Learn Tutorial Project

This repository contains a sample project developed following the [official Next.js tutorial](https://nextjs.org/learn). It covers fundamental concepts such as:

- Next.js folder structure
- Pages and navigation
- Dynamic routes
- Static Site Generation (SSG) and Server-Side Rendering (SSR)
- API Routes

  ![image](https://github.com/user-attachments/assets/180b79cc-5db4-4e0e-9b24-0b5e6dbcb137)

Check this app working in https://nextjs-dashboard-alice-canteles-projects.vercel.app/

Use email `user@nextmail.com` and password `123456` to login.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) *(optional)*
- [Tailwind CSS](https://tailwindcss.com/) *(optional)*

## Installation and Usage

1. Clone this repository:
   ```bash
   git clone https://github.com/alicecantele/nextjs-dashboard.git
   cd nextjs-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install  # or yarn install or pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev  # or yarn dev or pnpm dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Project Structure

```bash
.
├── pages            # Pages and routes
│   ├── index.tsx    # Home page
│   ├── about.tsx    # Example new page
│   ├── [id].tsx     # Example dynamic route
│   └── api          # API Routes
│       └── hello.ts # API example
├── public           # Static files
├── styles           # Global styles
├── components       # Reusable components
├── package.json     # Project dependencies
└── README.md        # Documentation
```

## Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Official Next.js Tutorial](https://nextjs.org/learn)
- [Next.js Code Examples](https://github.com/vercel/next.js/tree/canary/examples)

## License

This project is open-source and licensed under the [MIT License](LICENSE).


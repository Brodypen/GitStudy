<div>
  <picture align="center">
    <source
      width="100%"
      media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
      srcset="/readme/Landing.png"
    />
    <source
      width="100%"
      media="(prefers-color-scheme: dark)"
      srcset="/readme/Landing.png"
    />
    <img alt="Logo">
  </picture>
  <h1 align="center">
    GitStudy
  </h1>
  <p>
    Welcome to GitStudy! GitStudy is a study group platform that we built for hackMISSO 2024 with Next.js. It allows users to create and join study groups, share resources, and collaborate on projects! Learn more below.
  </p>
</div>

-----

## Features

### :bust_in_silhouette: User Authentication
Users can create an account, log in, and manage their profile with Google or GitHub.

### :books: Study Groups
Users can create and join study groups. Each study group has a dedicated page where members can share resources, discuss topics, and collaborate on projects.

### :link: Resource Sharing
Users can share resources such as links to helpful articles, videos, and other educational materials. These resources can be shared within a specific study group or made public for all users to access.

### :hammer_and_wrench: Project Collaboration
Users can collaborate on projects within their study groups. This includes creating a project, assigning tasks, tracking progress, and sharing project files.

### :mag: Search
Users can search for study groups, resources, and other users. The search feature includes filters to help users find exactly what they are looking for.

----

## 🚧: Future Plans
We plan to enhance the notification system to provide more personalized and relevant updates to users.

### :star: Gamification
In the future, we plan to introduce a gamification system where users can "star" resources shared by others. This will increase the "credibility" stat of the users who consistently provide valuable resources to their community.

### :bell: Notifications
Users receive notifications about updates in their study groups, such as new resources being shared, new discussions being started, or changes to projects they are part of.

----

## Technologies

**General**: 
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)

**Frontend**:
![Next.js](https://img.shields.io/badge/-Next.js-black?logo=next.js&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

**Database**: 
![Supabase](https://img.shields.io/badge/-Supabase-181717?logo=supabase&logoColor=white)

**Authentication**: 
![Google](https://img.shields.io/badge/-Google-4285F4?logo=google&logoColor=white) ![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white)

**Deployment**: 
![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white)

**Version Control**:
![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white)

----

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

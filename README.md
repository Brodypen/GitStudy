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

### :calendar: Study Session Planning
In the future, we plan to introduce a feature where students can plan a study session at a specific location and time. This will help facilitate in-person collaboration and learning.


----

## Technologies

**General**: 
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)

**Design**:
![Figma](https://img.shields.io/badge/-Figma-F24E1E?logo=figma&logoColor=white)

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

## :page_facing_up: Pages

### :house: Landing Page
![image](https://github.com/Brodypen/GitStudy/assets/114624617/65b0d213-de4f-4339-a4e1-9d3c50957316)
The landing page welcomes users and provides an overview of the platform. It also has a cool hover feature that fills up the cells below it!

### :key: Login Page
![image](https://github.com/Brodypen/GitStudy/assets/114624617/21fedce3-e600-4b57-b4a0-0d188ed66389)
The login page allows users to access their accounts through GitHub or Google

### :chart_with_upwards_trend: Dashboard Page
![image](https://github.com/Brodypen/GitStudy/assets/114624617/6a5cfdb9-ebbb-4504-912a-3d219850a4a8)
The dashboard page provides a personalized overview of the user's activity, including their study groups, tasks, and notifications.

### :trophy: Popular Study Groups Dashboard Page
![image](https://github.com/Brodypen/GitStudy/assets/114624617/859d5ed8-6ca9-4a0c-939e-5d56856f349d)
This page displays the most popular study groups on the platform, ranked by factors such as number of members, activity level, and resource quality.

### :heart: Favorite Study Groups Dashboard Page
![image](https://github.com/Brodypen/GitStudy/assets/114624617/2ea5e7ff-3194-46d8-94fc-45973f3bf11b)
This page shows the user's favorite study groups for quick access.

### :busts_in_silhouette: My Groups Dashboard Page
![image](https://github.com/Brodypen/GitStudy/assets/114624617/a4bb4504-21c5-42dd-84b0-0aef5cc7f0a5)
This page lists all the study groups that the user is a part of.

### :books: Study Groups Dashboard Page
![image](https://github.com/Brodypen/GitStudy/assets/114624617/1e1ec0ac-f33e-47e8-b1ab-db82d7456254)
This page provides a comprehensive list of all study groups on the platform.

### :speech_balloon: General Dashboard Page
![image](https://github.com/Brodypen/GitStudy/assets/114624617/6da60683-b9f8-4624-8bf1-6a415469cb91)
This page is a general communication hub where users can interact with each other.

### :file_folder: Study Guides Page
![image](https://github.com/Brodypen/GitStudy/assets/114624617/d21537ea-49a6-4c2d-9f2a-7691a0a3c02e)
This page hosts files on study guides for various subjects, shared by users.

### :notebook_with_decorative_cover: Notes Page
![image](https://github.com/Brodypen/GitStudy/assets/114624617/bc5cb0fd-2f88-47a0-961a-8751fa00005a)
This page hosts files on notes for different study groups, shared by users.

### :arrow_up: Uploads Popup Page
![Uploading image.png…]()
This page allows users to upload study materials such as notes and study guides. It includes options for specifying the relevant study group, adding a description, and choosing the file to upload.

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

# Reddit Clone 🚀

A modern Full Stack Reddit Clone built using Next.js, TypeScript, Tailwind CSS, Prisma ORM, Supabase PostgreSQL, and Vercel Deployment.

---

# 🔥 Features

✅ Login Page  
✅ Signup Page  
✅ Create Community  
✅ Create Post  
✅ Community Dropdown  
✅ Dynamic Post Detail Pages  
✅ Upvote & Downvote System  
✅ Comment System  
✅ Responsive Premium UI  
✅ Prisma ORM Integration  
✅ Supabase PostgreSQL Database  
✅ API Routes using Next.js  
✅ Full Stack Architecture  
✅ Live Deployment on Vercel

---

# 🛠️ Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Prisma ORM
- Supabase PostgreSQL
- Vercel

---

# 📂 Folder Structure

app/
 ┣ api/
 ┃ ┣ community/
 ┃ ┣ post/
 ┃ ┣ comment/
 ┃ ┗ vote/
 ┣ create-community/
 ┣ create-post/
 ┣ login/
 ┣ signup/
 ┣ post/[id]/
 ┗ page.tsx

---

# ⚡ API Endpoints

## Community API

/api/community

## Post API

/api/post

## Comment API

/api/comment

## Vote API

/api/vote

---

# 🗄️ Database Tables

## Community
- id
- name

## Post
- id
- title
- content
- communityId

## Comment
- id
- text
- postId

## Vote
- id
- value
- postId

---

# 🚀 Live Deployment

Frontend + Backend deployed together on Vercel.

## Live URL

https://reddit-clone-topaz-omega.vercel.app

---

# 🎥 Demo Video

https://drive.google.com/file/d/1PtQeurZ7B3uWBr0qm7oK3-Bj3vcI-Beq/view?usp=drivesdk

---

# ⚙️ Environment Variables

DATABASE_URL="postgresql://postgres.hgttctntdzqotayrlnzk:tashidelek1@aws-1-ap-northeast-1.pooler.supabase.com:5432/postgres"

NEXTAUTH_SECRET=mysecret123

---

# ▶️ Run Locally

npm install

npm run dev

---

# 🌟 Future Improvements

- Full Authentication
- User Profiles
- Image Uploads
- Dark Mode
- Real-time Notifications

---

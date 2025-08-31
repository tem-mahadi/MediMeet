# 🩺 MediMeet – Online Doctor Appointment & Consultation Platform

MediMeet is a full-stack healthcare platform built with **Next.js** that enables patients to book doctor appointments, subscribe to different plans, and consult via **secure video calls** powered by **Vonage**.  
The platform ensures smooth role-based access for **patients, doctors, and admins**, with robust authentication, doctor verification, and payout management.

---

## ✨ Features

### 👤 Patients
- Register/Login with **Clerk Authentication**
- Choose from different **subscription plans**
- Book appointments based on doctor availability
- Access **video consultations** (subscription-based)
- Manage profile and appointments

### 🩺 Doctors
- Create and manage doctor profile
- Set availability schedule
- Conduct **video consultations** with patients
- Track payouts and appointments

### 🛠️ Admin
- **Verify doctors** before approval
- Manage users, doctors, and appointments
- Handle subscription plans and payouts
- Oversee platform activities

---

## 🚀 Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)  
- **Backend:** Next.js API Routes  
- **Database:** [Prisma ORM](https://www.prisma.io/) with [PostgreSQL/MySQL]  
- **Video Call Integration:** [Vonage API](https://www.vonage.com/)  
- **Authentication & Authorization:** [Clerk](https://clerk.com/)  
- **Deployment:** [Vercel](https://vercel.com/)

---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/tem-mahadi/MediMeet.git
cd MediMeet

# 2. Install dependencies
npm install
# or
yarn install

# 3. Set up environment variables
# Create a `.env` file in the root and add:
# DATABASE_URL=your_database_url
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
# CLERK_SECRET_KEY=your_clerk_secret
# VONAGE_API_KEY=your_vonage_key
# VONAGE_API_SECRET=your_vonage_secret

# 4. Run Prisma migrations
npx prisma migrate dev

# 5. Start development server
npm run dev

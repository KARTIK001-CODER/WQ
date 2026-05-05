# Low Level Design (LLD)

---

# 1. System Architecture

```txt
                    ┌─────────────────────┐
                    │     Next.js App     │
                    │  (Frontend Client)  │
                    └─────────┬───────────┘
                              │
                    HTTPS / WebSocket
                              │
        ┌─────────────────────┴─────────────────────┐
        │                                           │
┌───────▼────────┐                      ┌──────────▼─────────┐
│  Main Backend  │                      │   AI Service       │
│ Node + Express │                      │ Python FastAPI     │
└───────┬────────┘                      └──────────┬─────────┘
        │                                           │
        │                                           │
 ┌──────▼───────┐                          ┌────────▼────────┐
 │ PostgreSQL   │                          │ ML Pipelines    │
 │ Prisma ORM   │                          │ NLP Processing  │
 └──────────────┘                          └─────────────────┘
```

---

# 2. Frontend LLD

## Folder Structure

```txt
src/
│
├── app/
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── courses/
│   ├── educator/
│   ├── admin/
│   └── api/
│
├── components/
│   ├── ui/
│   ├── dashboard/
│   ├── course/
│   ├── analytics/
│   ├── ai/
│   └── shared/
│
├── features/
│   ├── auth/
│   ├── course/
│   ├── quiz/
│   ├── analytics/
│   ├── gamification/
│   └── ai/
│
├── hooks/
├── lib/
├── services/
├── store/
├── styles/
├── types/
└── utils/
```

---

# 3. Backend LLD

## Folder Structure

```txt
src/
│
├── modules/
│   ├── auth/
│   ├── users/
│   ├── courses/
│   ├── lectures/
│   ├── quizzes/
│   ├── analytics/
│   ├── gamification/
│   ├── ai/
│   └── notifications/
│
├── middleware/
├── prisma/
├── config/
├── sockets/
├── validators/
├── utils/
└── jobs/
```

---

# 4. Database Design

## User

```txt
User
- id
- name
- email
- password
- role
- avatar
- streak
- xp
- createdAt
```

---

## Course

```txt
Course
- id
- title
- description
- thumbnail
- educatorId
- category
- level
- createdAt
```

---

## Lecture

```txt
Lecture
- id
- courseId
- title
- videoUrl
- duration
- order
```

---

## Enrollment

```txt
Enrollment
- id
- userId
- courseId
- progress
- enrolledAt
```

---

## Quiz

```txt
Quiz
- id
- courseId
- lectureId
- title
```

---

## QuizAttempt

```txt
QuizAttempt
- id
- userId
- quizId
- score
- submittedAt
```

---

## Notes

```txt
Notes
- id
- userId
- lectureId
- timestamp
- content
```

---

## Achievement

```txt
Achievement
- id
- title
- description
- badge
```

---

## UserAchievement

```txt
UserAchievement
- id
- userId
- achievementId
```

---

## AIChat

```txt
AIChat
- id
- userId
- prompt
- response
- createdAt
```

---

# 5. Authentication Flow

```txt
User Login
    ↓
JWT Access Token
    ↓
HTTP Only Refresh Token
    ↓
Protected Routes Middleware
    ↓
Role Authorization
```

---

# 6. API Design

## Auth APIs

```txt
POST   /auth/register
POST   /auth/login
POST   /auth/logout
POST   /auth/refresh
GET    /auth/me
```

---

## Course APIs

```txt
GET    /courses
GET    /courses/:id
POST   /courses
PUT    /courses/:id
DELETE /courses/:id
```

---

## Lecture APIs

```txt
GET    /lectures/:id
POST   /lectures
PUT    /lectures/:id
DELETE /lectures/:id
```

---

## Quiz APIs

```txt
POST   /quiz/generate-ai
POST   /quiz/submit
GET    /quiz/results
```

---

## AI APIs

```txt
POST   /ai/chat
POST   /ai/summarize
POST   /ai/recommend
POST   /ai/generate-roadmap
```

---

## Analytics APIs

```txt
GET /analytics/student
GET /analytics/course
GET /analytics/platform
```

---

# 7. AI Service LLD

## Responsibilities

The AI service handles:

* recommendation engine
* quiz generation
* summaries
* weak topic detection
* NLP processing

---

## AI Service Structure

```txt
ai-service/
│
├── app/
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── pipelines/
│   ├── embeddings/
│   ├── datasets/
│   └── utils/
```

---

# 8. Data Pipeline Design

## Pipeline Flow

```txt
Dataset Input
      ↓
Validation
      ↓
Cleaning
      ↓
Transformation
      ↓
Feature Engineering
      ↓
Model Processing
      ↓
Recommendation Output
```

---

# 9. Realtime Architecture

Using Socket.IO for:

* live chat
* notifications
* realtime classroom
* collaborative discussions
* live polls

---

# 10. Gamification Engine

## XP Logic

```txt
Complete Lecture -> +10 XP
Pass Quiz -> +50 XP
7-Day Streak -> Badge
```

---

## Badge System

```txt
Beginner
Intermediate
Advanced
DSA Master
Consistency King
```

---

# 11. Security Layer

```txt
- JWT authentication
- Refresh tokens
- Role-based access
- Input validation
- Rate limiting
- Helmet middleware
- CORS protection
- Password hashing
```

---

# 12. Deployment Architecture

## Frontend

* Vercel

## Backend

* Railway

## Database

* Neon PostgreSQL

## AI Service

* Render / Railway

---

# 13. Future Scalability

## Future Improvements

```txt
- Redis caching
- Docker
- Kubernetes
- CI/CD
- Vector database
- Event-driven architecture
- Search indexing
- Recommendation optimization
```

---

# 14. MVP Scope

## Phase 1 Deliverables

* Authentication System
* Course System
* Video Learning
* Progress Tracking
* Interactive Notes
* AI Tutor
* Analytics Dashboard
* Basic Gamification

---

# Engineering Goal

EduSync aims to be more than a traditional LMS.

The project focuses on:

* scalable engineering
* clean architecture
* intelligent learning systems
* real-world development practices
* modern UI/UX systems
* production-level software design

The long-term vision is to evolve EduSync into a complete intelligent learning ecosystem.

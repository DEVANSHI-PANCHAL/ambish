# Ambish Engineering - Backend API

Node.js + Express backend service using Prisma ORM and MongoDB Atlas.

## 📁 Directory Architecture

```
backend/
├── prisma/
│   └── schema.prisma        # Prisma schema defining MongoDB models
├── src/
│   ├── config/
│   │   └── prisma.ts        # Prisma Client singleton configuration
│   ├── controllers/
│   │   ├── health.controller.ts
│   │   └── inquiry.controller.ts
│   ├── middlewares/
│   │   ├── error.middleware.ts
│   │   └── notFound.middleware.ts
│   ├── routes/
│   │   ├── health.routes.ts
│   │   ├── inquiry.routes.ts
│   │   └── index.ts
│   ├── services/
│   │   └── inquiry.service.ts
│   ├── utils/
│   │   └── apiResponse.ts
│   ├── app.ts               # Express application initialization
│   └── server.ts            # Server entry point
├── .env                     # Environment variables (DB connection string)
├── .env.example             # Environment template
├── package.json
└── tsconfig.json
```

## 🛠️ Setup Instructions

### 1. Database Configuration
Update `backend/.env` with your actual MongoDB Atlas connection string:
```env
DATABASE_URL="mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>.mongodb.net/ambish_db?retryWrites=true&w=majority"
```

### 2. Install Dependencies
Navigate into the `backend/` folder and install dependencies:
```bash
cd backend
npm install
```

### 3. Generate Prisma Client & Push Schema
Generate Prisma client and push the schema to MongoDB Atlas:
```bash
npm run prisma:generate
npm run prisma:push
```

### 4. Run Development Server
Start the Express server with live reload:
```bash
npm run dev
```

The API will be available at: `http://localhost:5000/api`

## 🔌 API Endpoints

- `GET  /api/health` - Health check
- `POST /api/inquiries` - Submit a new inquiry
- `GET  /api/inquiries` - Retrieve all inquiries
- `GET  /api/inquiries/:id` - Retrieve single inquiry by ID
- `DELETE /api/inquiries/:id` - Delete an inquiry

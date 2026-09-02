from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import models
from database import engine
from routes import auth, posts

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Bcommunity API")

# Setup CORS to allow requests from the Vue frontend
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(posts.router, prefix="/api/posts", tags=["posts"])

@app.get("/api/health")
def health_check():
    return {"status": "ok"}

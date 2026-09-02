from pydantic import BaseModel
from typing import List, Optional
import datetime

# --- Token Schemas ---
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None


# --- User Schemas ---
class UserBase(BaseModel):
    name: str
    email: str
    avatar: Optional[str] = None
    role: Optional[str] = "User"
    status: Optional[str] = "Active"

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    joinDate: datetime.datetime

    class Config:
        from_attributes = True


# --- Comment Schemas ---
class CommentBase(BaseModel):
    text: str
    codeSnippet: Optional[str] = None
    codeLanguage: Optional[str] = None
    parent_id: Optional[int] = None

class CommentCreate(CommentBase):
    pass

class Comment(CommentBase):
    id: int
    post_id: int
    author_id: int
    timestamp: datetime.datetime
    isBestAnswer: bool
    author: User

    class Config:
        from_attributes = True


# --- Post Schemas ---
class PostBase(BaseModel):
    content: str
    tag: Optional[str] = "#General"
    image: Optional[str] = None
    projectUrl: Optional[str] = None
    codeSnippet: Optional[str] = None
    codeLanguage: Optional[str] = None
    isQuestion: Optional[bool] = False

class PostCreate(PostBase):
    pass

class Post(PostBase):
    id: int
    author_id: int
    timestamp: datetime.datetime
    likes: int
    isSolved: bool
    author: User
    comments: List[Comment] = []

    class Config:
        from_attributes = True

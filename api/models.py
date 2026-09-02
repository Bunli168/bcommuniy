from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Text, DateTime
from sqlalchemy.orm import relationship
import datetime

from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    avatar = Column(String)
    role = Column(String, default="User")
    joinDate = Column(DateTime, default=datetime.datetime.utcnow)
    status = Column(String, default="Active")

    posts = relationship("Post", back_populates="author")
    comments = relationship("Comment", back_populates="author")


class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    author_id = Column(Integer, ForeignKey("users.id"))
    content = Column(Text)
    tag = Column(String, default="#General")
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)
    likes = Column(Integer, default=0)
    image = Column(String, nullable=True)
    projectUrl = Column(String, nullable=True)
    codeSnippet = Column(Text, nullable=True)
    codeLanguage = Column(String, nullable=True)
    isSolved = Column(Boolean, default=False)
    isQuestion = Column(Boolean, default=False)

    author = relationship("User", back_populates="posts")
    comments = relationship("Comment", back_populates="post")


class Comment(Base):
    __tablename__ = "comments"

    id = Column(Integer, primary_key=True, index=True)
    post_id = Column(Integer, ForeignKey("posts.id"))
    author_id = Column(Integer, ForeignKey("users.id"))
    parent_id = Column(Integer, ForeignKey("comments.id"), nullable=True)
    text = Column(Text)
    codeSnippet = Column(Text, nullable=True)
    codeLanguage = Column(String, nullable=True)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)
    isBestAnswer = Column(Boolean, default=False)

    author = relationship("User", back_populates="comments")
    post = relationship("Post", back_populates="comments")
    replies = relationship("Comment")

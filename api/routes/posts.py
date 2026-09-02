from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

import models
import schemas
from deps import get_db, get_current_user

router = APIRouter()

@router.get("/", response_model=List[schemas.Post])
def get_posts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    posts = db.query(models.Post).order_by(models.Post.timestamp.desc()).offset(skip).limit(limit).all()
    return posts

@router.post("/", response_model=schemas.Post)
def create_post(post: schemas.PostCreate, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    db_post = models.Post(**post.dict(), author_id=current_user.id)
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post

@router.get("/{post_id}", response_model=schemas.Post)
def get_post(post_id: int, db: Session = Depends(get_db)):
    post = db.query(models.Post).filter(models.Post.id == post_id).first()
    if post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    return post

@router.post("/{post_id}/comments", response_model=schemas.Comment)
def create_comment(post_id: int, comment: schemas.CommentCreate, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    # Verify post exists
    post = db.query(models.Post).filter(models.Post.id == post_id).first()
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    db_comment = models.Comment(
        **comment.dict(),
        post_id=post_id,
        author_id=current_user.id
    )
    db.add(db_comment)
    db.commit()
    db.refresh(db_comment)
    return db_comment

@router.post("/{post_id}/like")
def like_post(post_id: int, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    post = db.query(models.Post).filter(models.Post.id == post_id).first()
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    
    post.likes += 1
    db.commit()
    return {"message": "Post liked", "likes": post.likes}

@router.post("/{post_id}/comments/{comment_id}/solve")
def mark_as_solved(post_id: int, comment_id: int, db: Session = Depends(get_db), current_user: models.User = Depends(get_current_user)):
    post = db.query(models.Post).filter(models.Post.id == post_id).first()
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    if post.author_id != current_user.id:
        raise HTTPException(status_code=403, detail="Only the author can mark as solved")
    
    comment = db.query(models.Comment).filter(models.Comment.id == comment_id, models.Comment.post_id == post_id).first()
    if not comment:
        raise HTTPException(status_code=404, detail="Comment not found")
    
    # Mark all comments as not best answer, then this one as best answer
    db.query(models.Comment).filter(models.Comment.post_id == post_id).update({"isBestAnswer": False})
    
    comment.isBestAnswer = True
    post.isSolved = True
    db.commit()
    
    return {"message": "Marked as solved"}

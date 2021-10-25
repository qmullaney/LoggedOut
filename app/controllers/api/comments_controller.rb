class Api::CommentsContoller < ApplicationController

    def create
        comment = Comment.create(liker_id: params[:liker_id], post_id: params[:post_id])
        
    end

    def destroy
        comment = Comment.find_by(liker_id: params[:liker_id], post_id: params[:post_id])
        comment.destroy
    end

    def update
        comment = Comment.find_by(liker_id: params[:liker_id], post_id: params[:post_id])

        comment.update(params[:body])
    end

    def index
        post = Post.find(params[:id])

        @comments = post.comments.includes(:commenter)

        render 'api/comments/index'
    end
end
class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.create(commenter_id: params[:commenter_id], post_id: params[:post_id], body: params[:body])

        
        render 'api/comments/show'
    end

    def destroy
        comment = Comment.find_by(commenter_id: params[:commenter_id], post_id: params[:post_id])
        comment.destroy
    end

    def update
        @comment = Comment.find_by(commenter_id: params[:commenter_id], post_id: params[:post_id])

        @comment.update(params[:body])

        render 'api/comments/show'
    end

    def index
        post = Post.find(params[:post_id])
        @comments = post.comments.includes(:commenter)

        render 'api/comments/index'
    end
end
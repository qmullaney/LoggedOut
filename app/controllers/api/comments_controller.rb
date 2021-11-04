class Api::CommentsController < ApplicationController
    protect_from_forgery with: :null_session
    def create
        @comment = Comment.create(commenter_id: params[:commenter_id], post_id: params[:post_id], body: params[:body])

        
        render 'api/comments/show'
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
    end

    def update
        @comment = Comment.find(params[:id])

        @comment.update(body: params[:text])
        render 'api/comments/show'
    end

    def index
        post = Post.find(params[:post_id])
        @comments = post.comments.includes(:commenter)

        render 'api/comments/index'
    end
end
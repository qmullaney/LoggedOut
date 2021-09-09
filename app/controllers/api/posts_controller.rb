class Api::PostsController < ApplicationController
    def index
        @posts = Post.all.includes(:user)
        

        render "api/posts/index"
    end

    def create

        
        @post = Post.new(post_params)


        if @post.save
            render "api/posts/show"
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def show
        @post = Post.find_by(id: params[:id])
        render "api/posts/show"
    end

    def post_params
        params.require(:post).permit(:body, :author_id)
    end
end

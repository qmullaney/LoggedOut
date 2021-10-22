class Api::PostsController < ApplicationController
    def index
        @posts = Post.all.includes(:user)

        user = User.find(params[:id])

        connections = Connection.connections(user).map{ |usr| usr.id }

        @posts = @posts.select do |post| 
            connections.include?(post.author_id) || post.author_id.to_s == params[:id]
        end

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

    def update
        
        @post = Post.find_by(id: params[:post][:id])
        if @post.update(post_params)
            render "api/posts/show"
        else
            render json: @post.errors.full_messages, status: 422
        end

        
    end

    def destroy
        
        post = Post.find_by(id: params[:id])
       
        post.destroy
    end

    def post_params
        params.require(:post).permit(:body, :author_id, :photo)
    end
end

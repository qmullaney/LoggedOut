class Api::LikesController < ApplicationController
    def destroy
        post = Post.find(params[:post])

        like = Like.find_by(liker: params[:liker], post: post)

        like.destroy
    end

    def create 
        post = Post.find(params[:post])

        @like = Like.create(liker: params[:liker], post: post)

        
    end
end
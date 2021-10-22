class Api::UsersController < ApplicationController
    def create

        
        @user = User.new(user_params)
        
        
        if @user.save
            
            log_in!(@user)

            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index
        input = params[:input]
        if input.length == 0
            @results = []
        else
            @results = User.where("name LIKE ?", "%#{input}%")
        end
        render 'api/users/index'

    end

    def show 
        @user = User.find_by(id: params[:userId])
        
        
    end



    def update
        id = params[:id] || params[:user][:id]
        @user = User.find_by(id: id)

        if params[:user][:photo] == "empty"
            @user.photo.purge
            
            render 'api/users/show'
        elsif @user.update(user_params) 

            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end



    def user_params
        params.require(:user).permit(:id, :email, :name, :password, :photo, :about, :company, :position, :work, :edu_about, :education, :headline, :location, :pronouns)
    end
end

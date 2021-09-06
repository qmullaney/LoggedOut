class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email],params[:user][:password])

        if @user.nil?
            render json: ['Couldn’t find a LinkedIn account associated with this email and password. Please try again.'], status: 401
        else
            log_in!(@user)
            render "/api/users/show"
        end
    end

    def destroy
        @user = current_user
        if @user 
            logout
            render "api/users/show"
        else
            render json: ["No one is signed in "], status: 404
        end
    end
end

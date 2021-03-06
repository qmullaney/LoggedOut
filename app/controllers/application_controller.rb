class ApplicationController < ActionController::Base

    helper_method :logged_in?, :current_user

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def log_in!(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logout
        session[:session_token] = nil
        current_user.reset_session_token!
        current_user = nil
    end


    # not sure if i need this, probably not 
    def ensure_logged_in
        redirect_to new_session_url if !logged_in?
    end
end

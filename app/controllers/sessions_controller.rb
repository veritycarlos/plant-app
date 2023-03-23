class SessionsController < ApplicationController

    # login
    def create
        user = User.find_by(username: params[:session][:username])
        if user && user.authenticate(params[:session][:password])
            session[:user_id] =  user.id #moment of user being logged in
            render json: user, status: :ok
        else 
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end 
    end 
 
    
    #logout
    def destroy
        session.clear
    end 

    private

    def user_params
        params.permit(:username, :password )
    end
    
end

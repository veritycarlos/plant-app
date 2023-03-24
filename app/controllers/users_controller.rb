class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def index
        users = User.all
        render json: users
    end 

    # def show
    #     user = User.find_by(id: params[:id])
    #     if user
    #         render json: user
    #     else
    #         render json: { error: "User not found" }, status: :not_found
    #     end
    # end 
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, include: :tips
        else
            render json: { error: "User not found" }, status: :unauthorized 
        end
    end 

    def create
        user = User.create(user_params) 
        if user.valid?
            session[:user_id] = user.id 
            render json: user
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity  
        end 
    end 

    private
    #strong params
    def user_params
        params.permit(:username, :password)
    end 

end

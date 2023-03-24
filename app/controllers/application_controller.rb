class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize

  rescue_from ActiveRecord::RecordInvalid, with: :invalid_response

  private

  def authorize
   if !current_user
    return render json: {errors: ["Not Authorized"]}, status: :unauthorized unless @current_user
   end 
  end 

  def current_user
    User.find_by(id: session[:user_id])
  end

  def invalid_response(invalid)
    render json: { error: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end 

end

class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :invalid_response

  private

  def current_user
    User.find_by(id: session[:user_id])
  end

  def invalid_response(invalid)
    render json: { error: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end 

end

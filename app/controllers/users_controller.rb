class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      @token = user.generate_jwt
      render 'auth/index'
    else
      render json: { error: user.errors.full_messages[0] }, status: 403
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end

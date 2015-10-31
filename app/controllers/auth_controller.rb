class AuthController < ApplicationController
  def index
    user = User.find_by_email(params[:email])

    if user && user.authenticate(params[:password])
      @token = user.generate_jwt
    else
      render json: { error: 'Wrong email or password' }, status: 403
    end
  end
end

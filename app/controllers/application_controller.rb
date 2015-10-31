class ApplicationController < ActionController::Base
  def current_user
    return nil unless cookies[:auth_token]
    decoded_token = JWT.decode cookies[:auth_token], ENV['AUTH_SECRET_KEY'], true, { algorithm: 'HS256' }
    email = decoded_token[0]['data']

    User.find_by_email(email)
  end

  def auth?
    !current_user.nil?
  end
end

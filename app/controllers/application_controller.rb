class ApplicationController < ActionController::Base
  def current_user
    auth_token = request.headers["Authorization"]
    return nil unless auth_token

    begin
      decoded_token = JWT.decode auth_token, ENV['AUTH_SECRET_KEY'], true, { algorithm: 'HS256' }
    rescue
      return nil
    end

    email = decoded_token[0]['data']
    User.find_by_email(email)
  end

  def auth?
    !current_user.nil?
  end
end

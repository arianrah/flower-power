class ApplicationController < ActionController::API
  # skip_before_action :verify_authenticity_token
  include ActionController::HttpAuthentication::Token::ControllerMethods
  before_action :authenticate

  def current_user
    @current_user
  end

  def logged_in?
    !!current_user
  end

  private
  def authenticate
    Rails.logger.info request.headers["Authorization"]
    authenticate_or_request_with_http_token do |token, options|
      @current_user = User.find_by(token: token)
      # puts 'this is the auth token: '+token
      # ActiveSupport::SecurityUtils.secure_compare(token, TOKEN)
    end
  end
end

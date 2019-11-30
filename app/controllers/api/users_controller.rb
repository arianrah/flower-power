class Api::UsersController < ApplicationController
  skip_before_action :authenticate, :only => [:create, :is_user, :destroy, :index]
  def index
    users = User.all
    render :json => {
      data: User.all
    }
  end
  
  def is_user
    user = User.find_by(email: session_params[:email])
    if user && user.authenticate(session_params[:password])
      user.generate_token
      render json: {
        token: user.token
      }
    else
      render json: { 
        status: 401,
        errors: ['no such user', 'verify credentials and try again or signup']
      }
    end
  end

  def create
    user = User.new(user_params)
    if user.save
      user.generate_token
      render json: {
        token: user.token
      }
    else
      render json: {
        status: 401
      }
    end
  end

  def destroy
    current_user.update(token: nil)
    render json: {
      status: 200
    }
  end

  private
  def session_params
    params.require(:user).permit(:email, :password)
  end
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end  
end

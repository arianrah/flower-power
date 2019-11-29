class Api::UsersController < ApplicationController

  def index
    users = User.all
    render :json => {
      data: User.all
    }
  end
  
  def is_user
    user = User.find_by(email: session_params[:email])
    puts user
    if user && user.authenticate(session_params[:password])
      # response.set_cookie("appCookie", {value: user.id, path: '/'})
      user.token = ([*('A'..'Z'),*('0'..'9')]-%w(0 1 I O)).sample(8).join
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
      user.token = ([*('A'..'Z'),*('0'..'9')]-%w(0 1 I O)).sample(8).join
      render json: {
        token: user.token
      }
    else
      render json: {
        status: 500
      }
    end
  end

  def destroy
    reset_session
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

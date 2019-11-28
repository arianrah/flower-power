class Api::UsersController < ApplicationController
  def index
    users = User.all
    # puts users.inspect
    render :json => {
      data: User.all
    }
  end
  def create
    
    user = User.new(user_params)
    if user.save!
      response.set_cookie("appCookie", {value: user.id, path: '/'})
      render json: {
        user: user
      }
    else
      render json: {
        status: 500
      }
    end
  end
  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end  
end

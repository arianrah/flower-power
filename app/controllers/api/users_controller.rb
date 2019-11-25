class Api::UsersController < ApplicationController
  def index
    render :json => {
      message: "users!"
    }
  end
end

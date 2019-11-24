class Api::TestsController < ApplicationController
  def index
    render :json => {
      message: "asdfasdf!"
    }
  end
end
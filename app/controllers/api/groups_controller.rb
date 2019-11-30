def index
  class Api::GroupsController < ApplicationController
    render :json => {
      data. Group.all,
      status: 200
    }
  end
  def create 
    group = Group.new(group_params)
    if group.save
      render :json => {
       status: 201
      }
    else
      render :json => {
        status: 502
      }
    end
  end
  private
  def group_params
    params.require(:group).permit(:name, :user_id)
  end
end

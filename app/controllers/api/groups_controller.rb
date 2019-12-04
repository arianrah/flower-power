class Api::GroupsController < ApplicationController
  # skip_before_action :authenticate, :only => [:index]
  def index
    render json: current_user.groups
  end
  def show
    render json: current_user.groups
  end
  def create 
    group = current_user.groups.new(group_params)
    
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

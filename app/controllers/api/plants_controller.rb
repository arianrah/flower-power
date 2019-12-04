class Api::PlantsController < ApplicationController
  # skip_before_action :authenticate, :only => [:index]
  def index
    render json: current_user.plants
  end
  def create
    group = current_user.groups.find(params[:group_id])
    plant = current_user.plants.new(plant_params)
    # byebug
    plant.group = group
    if plant.save
      render :json => {
        data: plant,
        statue: 201
      }
    else
      render :json => {
        status: 502
      }
    end
  end
  private
  def plant_params
    params.require(:plant).permit(:name)
  end  
end
class Api::PlantsController < ApplicationController
  def index
    render json: => {
      data: Plant.all,
      status: 200
    }
  end
  def create
    plant = Plant.new(plant_params)
    if plant.save
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
  def plant_params
    params.require(:plant).permit(:name, :image)
  end  
end
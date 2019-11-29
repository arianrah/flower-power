class Api::PlantsController < ApplicationController
  def index
    plants = Plant.all
    # puts users.inspect
    render :json => {
      data: Plant.all
    }
  end
  def create
    
    plant = Plant.new(plant_params)
    if plant.save!
      render json: {
        plant: plant
      }
    else
      render json: {
        status: 500
      }
    end
  end
  private
  def plant_params
    params.require(:plant).permit(:name, :image)
  end  
end
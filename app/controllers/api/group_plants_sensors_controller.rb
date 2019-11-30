class Api::GroupPlantsSensorsController < ApplicationController
  def index
    gps = GroupPlantSensor.all
    render :json => {
      data: GroupPlantSensor.all
    }
  end
  def create
    gps = GroupPlantSensor.new(gps_params)
    if gps.save
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
  def gps_params
    params.require(:gps).permit(:user_id, :plant_id, :sensor_id, :group_id)
  end
end

class Api::GroupPlantsSensorsController < ApplicationController
  skip_before_action :authenticate, :only => [:index, :create]
  def index
    gps = GroupPlantsSensor.all
    render :json => {
      data: GroupPlantsSensor.all
    }
  end
  def create
    gps = GroupPlantsSensor.new(gps_params)
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

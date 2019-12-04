class Api::SensorsController < ApplicationController
  # skip_before_action :authenticate, :only => [:index, :create]
  def index
    render json: current_user.sensors
  end
  def create
    sensor = Sensor.new(sensor_params)
    # sensor.save
    if sensor.save
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
  def sensor_params
    params.require(:sensor).permit(:host, :gpio, :sensor_type_id)
  end  
end

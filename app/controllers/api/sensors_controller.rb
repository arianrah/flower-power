class Api::SensorsController < ApplicationController
  def index
    render :json => {
      data: Sensor.all,
      status: 200
    }
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

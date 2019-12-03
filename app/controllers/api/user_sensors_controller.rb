class Api::SensorsController < ApplicationController
  skip_before_action :authenticate, :only => [:index, :create]
  def index
    render :json => {
      data: Sensor.all
    }
  end
  def create
    # p user_sensor_params
    user_sensor = Sensor.new(user_sensor_params)
    user_sensor.save
    # puts user_sensor
    render json: {}
  end
  private
  def user_sensor_params
    params.require(:sensor).permit(:longitude, :latitude)
  end  
end

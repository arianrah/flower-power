class Api::UserSensorsController < ApplicationController
  def index
    render :json => {
      data: UserSensor.all
    }
  end
  def create
    # p user_sensor_params
    user_sensor = UserSensor.new(user_sensor_params)
    user_sensor.save
    # puts user_sensor
    render json: {}
  end
  private
  def user_sensor_params
    params.require(:user_sensor).permit(:longitude, :latitude)
  end  
end

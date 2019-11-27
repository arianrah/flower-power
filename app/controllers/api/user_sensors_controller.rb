class Api::UserSensorsController < ApplicationController
  def index
    render :json => {
      data: UserSensor.all
    }
  end
  # def create
  #   user_sensor = User_sensors.new(user_sensors_params)
  # end
  # private
  # def user_sensor_params
  #   params.require(:user_sensor_params).permit(:longitude, :latitude)
  # end  
end

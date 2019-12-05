class Api::SensorHistoryController < ApplicationController

  skip_before_action :authenticate, :only => [:index, :create]

  def index
    render :json => {
   data: SensorHistory.to_durations(SensorHistory.all),
      status:200
    }
  end
  def create
    sensor_log = SensorHistory.new(sensor_log_params)
    # sensor.save
    if sensor_log.save
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

  def sensor_log_params
    params.require(:sensor_log).permit(:latitude, :longitude, :moisture, :sensor_id)
  end  
end

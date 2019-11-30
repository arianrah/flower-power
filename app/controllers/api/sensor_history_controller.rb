class Api::SensorHistoryController < ApplicationController
  skip_before_action :authenticate, :only => [:index]
  def index
    render :json => {
      data: SensorHistory.all
    }
  end
  def create
    sensor_log = SensorHistory.new(sensor_params)
  end
end

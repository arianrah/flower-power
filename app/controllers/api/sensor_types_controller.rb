class Api::SensorTypesController < ApplicationController
skip_before_action :authenticate, :only => [:index]
  def index
      render :json => {
        data: SensorType.all
      }
  end
end

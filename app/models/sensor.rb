class Sensor < ApplicationRecord
  has_many :sensor_types
  has_many :sensor_histories
  delegate :user, :to => :group_plants_sensors

end

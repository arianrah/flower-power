class Sensor < ApplicationRecord
  belongs_to :sensor_type
  belongs_to :user
  has_many :group_plants_sensors
  has_many :sensor_histories
 

end

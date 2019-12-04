class Sensor < ApplicationRecord
  belongs_to :sensor_type
  belongs_to :user
  belongs_to :plant
  has_many :sensor_histories
end

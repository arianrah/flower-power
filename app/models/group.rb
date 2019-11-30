class Group < ApplicationRecord
  belongs_to: users
  has_many: group_plants_sensors
end

class Plant < ApplicationRecord
  belongs_to :group_plants_sensor
  delegate :user, :to => :group_plants_sensor
end

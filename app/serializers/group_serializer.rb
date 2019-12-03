class GroupSerializer < ActiveModel::Serializer
  attributes :name, :plants, :sensors
  has_many :group_plants_sensors
  has_many :plants, through: :group_plants_sensors
  has_many :sensors, through: :group_plants_sensors 
end
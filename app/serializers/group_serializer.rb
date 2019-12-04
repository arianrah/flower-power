class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :plants, :sensors
  has_many :plants
  has_many :sensors, through: :plants
end
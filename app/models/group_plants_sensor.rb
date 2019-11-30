class GroupPlantsSensor < ApplicationRecord
  belongs_to :user
  has_one :group
  has_many :plants
  has_many :sensors
end

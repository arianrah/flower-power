class GroupPlantsSensor < ApplicationRecord
  belongs_to :user
  belongs_to :group
  belongs_to :plant
  belongs_to :sensor
end

class Group < ApplicationRecord
  belongs_to :user
  has_many :plants
  has_many :sensors, through: :plants
end

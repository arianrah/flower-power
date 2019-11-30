class User < ApplicationRecord
  has_many :groups
  has_many :group_plants_sensors
  has_many :plants, through: :group_plants_sensors
  has_many :sensors, through: :group_plants_sensors


  
  has_secure_password
  validates :password, presence: true
  validates :password, length: { minimum: 4 }
  validates :email, presence: true
  validates :email, uniqueness: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  def generate_token
    self.token = ([*('A'..'Z'),*('0'..'9')]-%w(0 1 I O)).sample(8).join
    self.save
  end
end

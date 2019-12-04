class RemoveGroupPlantSensor < ActiveRecord::Migration[5.2]
  def change
    drop_table :group_plants_sensors
  end
end

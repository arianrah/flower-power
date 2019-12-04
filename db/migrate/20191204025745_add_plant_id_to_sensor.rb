class AddPlantIdToSensor < ActiveRecord::Migration[5.2]
  def change
    add_column :sensors, :plant_id, :integer, index: true
  end
end

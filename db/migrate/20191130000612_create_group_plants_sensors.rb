class CreateGroupPlantsSensors < ActiveRecord::Migration[5.2]
  def change
    create_table :group_plants_sensors do |t|

      t.timestamps
    end
  end
end

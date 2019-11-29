class GroupPlantsSensors < ActiveRecord::Migration[5.2]
  def change
    create_table :group_plants_sensors do |t|
      t.references :user, foreign_key: true
      t.references :plant, foreign_key: true
      t.references :sensor, foreign_key: true
      t.references :group, foreign_key: true
  end
end
end
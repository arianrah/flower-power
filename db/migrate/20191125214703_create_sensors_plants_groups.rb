class CreateSensorsPlantsGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :sensors_plants_groups do |t|
      t.references :user_sensor, foreign_key: true
      t.references :user_plant, foreign_key: true
      t.references :group, foreign_key: true
      t.timestamps
    end
  end
end

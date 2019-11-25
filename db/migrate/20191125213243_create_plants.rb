class CreatePlants < ActiveRecord::Migration[5.2]
  def change
    create_table :plants do |t|
      t.string "common_name"
      t.string "scientific_name"
      t.integer "max_temp"
      t.integer "min_temp"
      t.references :moisture_level, foreign_key: true
      t.timestamps
    end
  end
end

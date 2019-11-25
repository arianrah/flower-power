class CreateMoistureLevels < ActiveRecord::Migration[5.2]
  def change
    create_table :moisture_levels do |t|
        t.string "name"
        t.integer "watering_frequency"
      t.timestamps
    end
  end
end

class SensorTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :sensor_types do |t|
      t.string "name"
    end
  end
end

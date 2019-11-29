class SensorHistory < ActiveRecord::Migration[5.2]
  def change
    create_table :sensor_history do |t|
      t.string "latitude"
      t.string "longitude"
      t.boolean 'moisture?'
      t.references :sensor, foreign_key: true
    end
  end
end

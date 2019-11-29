class Sensors < ActiveRecord::Migration[5.2]
  def change
    create_table :sensors do |t|
      t.string "host"
      t.string "gpio"
  
    t.references :sensor_type, foreign_key: true
    end
  end
end

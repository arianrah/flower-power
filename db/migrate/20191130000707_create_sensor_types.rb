class CreateSensorTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :sensor_types do |t|

      t.timestamps
    end
  end
end

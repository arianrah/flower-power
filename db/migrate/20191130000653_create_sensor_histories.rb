class CreateSensorHistories < ActiveRecord::Migration[5.2]
  def change
    create_table :sensor_histories do |t|

      t.timestamps
    end
  end
end

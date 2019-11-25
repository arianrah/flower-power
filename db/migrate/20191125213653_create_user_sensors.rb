class CreateUserSensors < ActiveRecord::Migration[5.2]
  def change
    create_table :user_sensors do |t|
      t.integer "host"
      t.integer "gpio"
      t.integer "value"
      t.references :sensor, foreign_key: true
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end

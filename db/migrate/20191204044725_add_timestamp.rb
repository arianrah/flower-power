class AddTimestamp < ActiveRecord::Migration[5.2]
  def change
    add_timestamps :sensor_histories, null: false, default: -> { 'NOW()' }
  end
end

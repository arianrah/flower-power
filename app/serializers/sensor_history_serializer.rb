class SensorHistorySerializer < ActiveModel::Serializer
  attributes :latitude, :longitude, :moisture, :sensor_id, :durnation
  def duration
    if moisture = true 
      created_at = start_time
    else 
      created_at = end_time
  
    puts (start_time-end_time)
    end
  end
  
  
end


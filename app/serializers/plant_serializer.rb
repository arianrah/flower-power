class PlantSerializer < ActiveModel::Serializer
  # include NullAttributesRemover
  attributes :id, :name, :user_name

  def user_name
    "#{ object.user.first_name } #{ object.user.last_name }"
  end
  
end
class PlantSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_name

  def user_name
    object.user.name
  end
  
end
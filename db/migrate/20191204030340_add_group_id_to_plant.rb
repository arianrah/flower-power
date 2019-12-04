class AddGroupIdToPlant < ActiveRecord::Migration[5.2]
  def change
    add_column :plants, :group_id, :integer, index: true
  end
end

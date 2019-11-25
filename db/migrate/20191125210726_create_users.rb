class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table "users", force: :cascade do |t|
      t.string "first_name"
      t.string "last_name"
      t.string "email"
      t.string "password"
      t.timestamps
    end
  end
end

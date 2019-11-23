# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "hashedpassword"
  end

   create_table "moisture_levels", force: :cascade do |t|
    t.string "name"
    t.integer "watering_frequency"
   end


  create_table "sensors", force: :cascade do |t|
    t.string "name"
  end

  create_table "plants", force: :cascade do |t|
    t.string "common_name"
    t.string "scientific_name"
    t.integer "max_temp"
    t.integer "min_temp"
    t.references :moisture_level, foreign_key: true
  end

  create_table "user_sensors", force: :cascade do |t|
    t.integer "host"
    t.integer "gpio"
    t.references :sensor, foreign_key: true
    t.references :user, foreign_key: true
  end

  create_table "user_plants", force: :cascade do |t|
    t.string "name"
    t.references :user, foreign_key: true
    t.references :plant, foreign_key: true
end

create_table "groups", force: :cascade do |t|
  t.string "name"
end

create_table "sensors_plants_groups", force: :cascade do |t|
  t.references :user_sensor, foreign_key: true
  t.references :user_plant, foreign_key: true
  t.references :group, foreign_key: true

end
end

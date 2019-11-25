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

ActiveRecord::Schema.define(version: 2019_11_25_214703) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "groups", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "moisture_levels", force: :cascade do |t|
    t.string "name"
    t.integer "watering_frequency"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "plants", force: :cascade do |t|
    t.string "common_name"
    t.string "scientific_name"
    t.integer "max_temp"
    t.integer "min_temp"
    t.bigint "moisture_level_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["moisture_level_id"], name: "index_plants_on_moisture_level_id"
  end

  create_table "sensors", force: :cascade do |t|
    t.string "name"
    t.integer "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sensors_plants_groups", force: :cascade do |t|
    t.bigint "user_sensor_id"
    t.bigint "user_plant_id"
    t.bigint "group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["group_id"], name: "index_sensors_plants_groups_on_group_id"
    t.index ["user_plant_id"], name: "index_sensors_plants_groups_on_user_plant_id"
    t.index ["user_sensor_id"], name: "index_sensors_plants_groups_on_user_sensor_id"
  end

  create_table "user_plants", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id"
    t.bigint "plant_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["plant_id"], name: "index_user_plants_on_plant_id"
    t.index ["user_id"], name: "index_user_plants_on_user_id"
  end

  create_table "user_sensors", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "plants", "moisture_levels"
  add_foreign_key "sensors_plants_groups", "groups"
  add_foreign_key "sensors_plants_groups", "user_plants"
  add_foreign_key "sensors_plants_groups", "user_sensors"
  add_foreign_key "user_plants", "plants"
  add_foreign_key "user_plants", "users"
end

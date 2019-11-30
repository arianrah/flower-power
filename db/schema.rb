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

ActiveRecord::Schema.define(version: 2019_11_29_225408) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "group_plants_sensors", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "plant_id"
    t.bigint "sensor_id"
    t.bigint "group_id"
    t.index ["group_id"], name: "index_group_plants_sensors_on_group_id"
    t.index ["plant_id"], name: "index_group_plants_sensors_on_plant_id"
    t.index ["sensor_id"], name: "index_group_plants_sensors_on_sensor_id"
    t.index ["user_id"], name: "index_group_plants_sensors_on_user_id"
  end

  create_table "groups", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_groups_on_user_id"
  end

  create_table "plants", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.index ["user_id"], name: "index_plants_on_user_id"
  end

  create_table "sensor_histories", force: :cascade do |t|
    t.string "latitude"
    t.string "longitude"
    t.boolean "moisture?"
    t.bigint "sensor_id"
    t.index ["sensor_id"], name: "index_sensor_histories_on_sensor_id"
  end

  create_table "sensor_types", force: :cascade do |t|
    t.string "name"
  end

  create_table "sensors", force: :cascade do |t|
    t.string "host"
    t.string "gpio"
    t.bigint "user_id"
    t.bigint "sensor_type_id"
    t.index ["sensor_type_id"], name: "index_sensors_on_sensor_type_id"
    t.index ["user_id"], name: "index_sensors_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "token"
  end

  add_foreign_key "group_plants_sensors", "groups"
  add_foreign_key "group_plants_sensors", "plants"
  add_foreign_key "group_plants_sensors", "sensors"
  add_foreign_key "group_plants_sensors", "users"
  add_foreign_key "groups", "users"
  add_foreign_key "plants", "users"
  add_foreign_key "sensor_histories", "sensors"
  add_foreign_key "sensors", "sensor_types"
  add_foreign_key "sensors", "users"
end

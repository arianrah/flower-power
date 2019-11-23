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

  create table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "hashedpassword"
  end

   create table "moisture_level", force: :cascade do |t|
    t.string "name"
    t.integer "watering_frequency"
   end

  end

  create table "sensors", force: :cascade do |t|
    t.string "name"
  end

  create table "plants", force: :cascade do |t|
    t.string "common_name"
    t.string "scientific_name"
    t.integer "max_temp"
    t.integer "min_temp"
    add_index(:moisture_level, :id)
  end

  create table "user_sensors", force: :cascade do |t|
    t.integer "host"
    t.integer "gpio"
    add_index(:sensors, :id)
    add_index(:users, :id)
  end

  create table "user_plants", force: :cascade do |t|
    t.string "name"
    add_index(:users, :id)
    add_index(:plants, :id)
end

create table "groups", force: :cascade do |t|
  t.string "name"
end

create table "sensors_plants_groups", force: :cascade do |t|
  add_index(:users_sensors, :id)
  add_index(:users_plants, :id)
  add_index(:group_id, :id)

end

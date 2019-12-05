# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Drop all tables




GroupPlantsSensor.delete_all

Group.delete_all
Plant.delete_all
Sensor.delete_all
User.delete_all
SensorType.delete_all

sensor_types = SensorType.create!([{ name:'moisture'}, {name:'pH'}, { name:'barometric'}, { name:'temperature'}])


users = User.create!([{  first_name: 'jeff', last_name: 'robson', email: 'jeff@robson.com', password: 'password'},

{  first_name: 'email', last_name: 'asd', email: 'email@email.com', password: 'password'}, 

{  first_name: 'party', last_name: 'time', email: 'party@time.com', password: 'password'} ])



plants1 = Plant.create([
  {name: 'Rose', user: users.first},
  {name: 'Lily', user: users.first},
  {name: 'Basil', user: users.first},
  {name: 'Rosemary', user: users.first},
  {name: 'Aloe', user: users.first}])
  plants2 = Plant.create([
  {name: 'Corpse Flower', user: users.third},
  {name: 'Venus Fly Traps', user: users.third},
  {name: 'Pitcher Plant', user: users.third},
  {name: 'Sundew', user: users.third},
  {name: 'Lobtser Pot Traps', user: users.third}
])
groups= Group.create([
  {name: 'Kitchen', user: users.first},
  {name: 'Living Room', user: users.first},
  {name: 'Outdoors', user: users.second},
  {name: 'Dining Room', user: users.second}
])

sensors= Sensor.create([
  {host:'330', gpio:'32456', user: users.first, sensor_type: sensor_types.first},
  {host:'330', gpio:'32456', user: users.first, sensor_type: sensor_types.first},
  {host:'339', gpio:'99456', user: users.first, sensor_type: sensor_types.second},
  {host:'350', gpio:'38856', user: users.first, sensor_type: sensor_types.first},
  {host:'330', gpio:'32456', user: users.third, sensor_type: sensor_types.first},
])



SensorHistory.create(latitude: 49, longitude: 138.5, moisture: true, sensor_id: 2, created_at: '2019-12-05T00:04:04.152Z', updated_at: '2019-12-05T00:04:04.152Z')

SensorHistory.create(latitude: 70, longitude: 230, moisture: false, sensor_id: 2, created_at: '2019-12-05T01:05:04.152Z', updated_at: '2019-12-05T01:05:04.152Z')

SensorHistory.create(latitude: 12, longitude: 213, moisture: true, sensor_id: 2, created_at: '2019-12-05T01:05:09.152Z', updated_at: '2019-12-05T01:05:09.152Z')

SensorHistory.create(latitude: 90, longitude: 90, moisture: false, sensor_id: 2, created_at: '2019-12-05T00:20:14.152Z', updated_at: '2019-12-05T00:20:14.152Z')

SensorHistory.create(latitude: 1, longitude: 100, moisture: true, sensor_id: 2, created_at: '2019-12-05T12:20:20.152Z', updated_at: '2019-12-05T12:20:20.152Z')

GroupPlantsSensor.create(user: users.first, plant: plants1.first, sensor: sensors.first, group: groups.first)
GroupPlantsSensor.create(user: users.first, plant: plants1.second, sensor: sensors.first, group: groups.first)


GroupPlantsSensor.create(user: users.first, plant: plants1.third, sensor: sensors.second, group: groups.second)
GroupPlantsSensor.create(user: users.first, plant: plants1.fourth, sensor: sensors.second, group: groups.second)
GroupPlantsSensor.create(user: users.first, plant: plants1.fifth, sensor: sensors.third, group: groups.second)



GroupPlantsSensor.create(user: users.second, plant: plants2.first, group: groups.third)
GroupPlantsSensor.create(user: users.second, plant: plants2.second, sensor: sensors.fourth, group: groups.third)
GroupPlantsSensor.create(user: users.second, plant: plants2.third, sensor: sensors.fourth, group: groups.third)



GroupPlantsSensor.create(user: users.second, plant: plants2.fourth, sensor: sensors.fifth, group: groups.fourth)
GroupPlantsSensor.create(user: users.second, plant: plants2.fifth, sensor: sensors.fifth, group: groups.fourth)










puts "db Seeded"


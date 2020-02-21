# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy
# Team.destroy
# Project.destroy

User.create(first_name: "ryan", last_name: "mansfield", email: "ryan@test.com", password: "123456")
User.create(first_name: "joe", last_name: "camel", email: "joet@test.com", password: "123456")
User.create(first_name: "jill", last_name: "hill", email: "jill@test.com", password: "123456" )
User.create(first_name: "jack", last_name: "beanstalk", email: "jack@test.com", password: "123456")

puts "Users Created"

Team.create(name: "Team 1")
Team.create(name: "Team 2")


puts "Teams Created"

Project.create(name: "Project 1", genre: "genre", plot: "plot", team_id: 1)

Project.create(name: "Project 2", genre: "genre", plot: "plot", team_id: 2)

Project.create(name: "Project 3", genre: "genre", plot: "plot", team_id: 1)

puts "Projects Created"

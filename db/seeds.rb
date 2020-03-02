# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Team.destroy_all
Collaborator.destroy_all
Project.destroy_all
Stage.destroy_all
Checklist.destroy_all
Task.destroy_all



puts "All Users, Teams, Projects, Stages, Checklists, and Tasks have been destroyed, Creating new ones"
puts ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"

User.create(first_name: "jill", last_name: "hill", email: "jill@test.com", password: "123456" )
User.create(first_name: "jack", last_name: "beanstalk", email: "jack@test.com", password: "123456")

puts "Users Created"

Team.create(name: "Team 1")
Team.create(name: "Team 2")


puts "Teams Created"

Collaborator.create(team_id: 1, user_id: 1)
Collaborator.create(team_id: 1, user_id: 2)
Collaborator.create(team_id: 2, user_id: 1)
Collaborator.create(team_id: 2, user_id: 2)

puts "Collaborator created"

Project.create(team_id: 1, name: "Best Project Ever")
Stage.create(project_id: 1, name: "pre-production")
Stage.create(project_id: 1, name: "production")
Stage.create(project_id: 1, name: "post-production")

Project.create(team_id: 1, name: "Second Best Project Ever")
Stage.create(project_id: 2, name: "pre-production")
Stage.create(project_id: 2, name: "production")
Stage.create(project_id: 2, name: "post-production")

puts "Projects and Stages Seeded"


Checklist.create(stage_id: 1, name: "pre-production checklist 1")
Checklist.create(stage_id: 1, name: "pre-production checklist 2")

Checklist.create(stage_id: 2, name: "production checklist 1")
Checklist.create(stage_id: 2, name: "production checklist 2")

Checklist.create(stage_id: 3, name: "post-production checklist 1")
Checklist.create(stage_id: 3, name: "post-production checklist 2")

Checklist.create(stage_id: 4, name: "pre-production checklist 1")
Checklist.create(stage_id: 4, name: "pre-production checklist 2")

Checklist.create(stage_id: 5, name: "production checklist 1")
Checklist.create(stage_id: 5, name: "production checklist 2")

Checklist.create(stage_id: 6, name: "post-production checklist 1")
Checklist.create(stage_id: 6, name: "post-production checklist 2")

puts "Checklist Created"

Task.create(checklist_id: 1, title: "Task 1", note: "Task 1 note")
Task.create(checklist_id: 1, title: "Task 2", note: "Task 2 note")
Task.create(checklist_id: 1, title: "Task 3", note: "Task 3 note")

Task.create(checklist_id: 2, title: "Task 1", note: "Task 1 note")
Task.create(checklist_id: 2, title: "Task 2", note: "Task 2 note")
Task.create(checklist_id: 2, title: "Task 3", note: "Task 3 note")

Task.create(checklist_id: 3, title: "Task 1", note: "Task 1 note")
Task.create(checklist_id: 3, title: "Task 2", note: "Task 2 note")
Task.create(checklist_id: 3, title: "Task 3", note: "Task 3 note")

Task.create(checklist_id: 4, title: "Task 1", note: "Task 1 note")
Task.create(checklist_id: 4, title: "Task 2", note: "Task 2 note")
Task.create(checklist_id: 4, title: "Task 3", note: "Task 3 note")

Task.create(checklist_id: 5, title: "Task 1", note: "Task 1 note")
Task.create(checklist_id: 5, title: "Task 2", note: "Task 2 note")
Task.create(checklist_id: 5, title: "Task 3", note: "Task 3 note")

Task.create(checklist_id: 6, title: "Task 1", note: "Task 1 note")
Task.create(checklist_id: 6, title: "Task 2", note: "Task 2 note")
Task.create(checklist_id: 6, title: "Task 3", note: "Task 3 note")

Task.create(checklist_id: 7, title: "Task 1", note: "Task 1 note")
Task.create(checklist_id: 7, title: "Task 2", note: "Task 2 note")
Task.create(checklist_id: 7, title: "Task 3", note: "Task 3 note")

Task.create(checklist_id: 8, title: "Task 1", note: "Task 1 note")
Task.create(checklist_id: 8, title: "Task 2", note: "Task 2 note")
Task.create(checklist_id: 8, title: "Task 3", note: "Task 3 note")

Task.create(checklist_id: 9, title: "Task 1", note: "Task 1 note")
Task.create(checklist_id: 9, title: "Task 2", note: "Task 2 note")
Task.create(checklist_id: 9, title: "Task 3", note: "Task 3 note")

Task.create(checklist_id: 10, title: "Task 1", note: "Task 1 note")
Task.create(checklist_id: 10, title: "Task 2", note: "Task 2 note")
Task.create(checklist_id: 10, title: "Task 3", note: "Task 3 note")

Task.create(checklist_id: 11, title: "Task 1", note: "Task 1 note")
Task.create(checklist_id: 11, title: "Task 2", note: "Task 2 note")
Task.create(checklist_id: 11, title: "Task 3", note: "Task 3 note")

Task.create(checklist_id: 12, title: "Task 1", note: "Task 1 note")
Task.create(checklist_id: 12, title: "Task 2", note: "Task 2 note")
Task.create(checklist_id: 12, title: "Task 3", note: "Task 3 note")


puts "tasks created"


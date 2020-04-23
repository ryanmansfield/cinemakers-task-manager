class Project < ApplicationRecord
  has_many :collaborators, dependent: :destroy
  has_many :users, through: :collaborators
  validates :name, presence: true, uniqueness: true, allow_blank: false
  has_many :stages, dependent: :destroy
  has_many :checklists, through: :stages
  has_many :tasks, through: :checklists

  # def project_progress
  #   if self.tasks.exists?
  #     tasks = self.tasks
  #     task_count = self.tasks.count
  #     completed_tasks = 0.0
  #     tasks.each { |task| completed_tasks +=1 if task.is_complete == true  }
  #     progress = ((completed_tasks / task_count)*100).to_i
  #     return progress
  #   else
  #     return 0
  #   end
  # end
end

class Project < ApplicationRecord
  belongs_to :team
  has_many :collaborators, through: :team
  validates :name, presence: true, uniqueness: true, allow_blank: false
  has_many :stages, dependent: :destroy
  has_many :checklists, through: :stages
  has_many :tasks, through: :checklists

  def project_progress
    tasks = self.tasks
    task_count = self.tasks.count
    completed_tasks = 0.0
    tasks.each { |task| completed_tasks +=1 if task.is_complete == true  }
    progress = ((completed_tasks / task_count)*100).to_i
    return progress
  end
end

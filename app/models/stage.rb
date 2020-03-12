class Stage < ApplicationRecord
  belongs_to :project
  has_many :checklists, dependent: :destroy
  has_many :tasks, through: :checklists

  def stage_progress
    tasks = self.tasks
    task_count = self.tasks.count
    completed_tasks = 0.0
    tasks.each { |task| completed_tasks +=1 if task.is_complete == true  }
    progress = ((completed_tasks / task_count)*100).to_i
    return progress
  end
end

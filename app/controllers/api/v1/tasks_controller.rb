class Api::V1::TasksController < ApplicationController
  before_action :set_checklist, except: :destroy

  def index
    tasks = @checklist.tasks
    render json: tasks
  end

  def create
    task = @checklist.tasks.build(task_params)
    task.save
    render json: task
  end

  def new
  end

  def update
    task = Task.find(params[:id])
    task.update(title: task_params[:title],
                due_date: task_params[:due_date],
                assigned_to: task_params[:assigned_to],
                is_complete: task_params[:is_complete])
    render json: task
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    render json: task
  end

  private

  def set_checklist
    @checklist = Checklist.find(params[:checklist_id])
  end

  def task_params
    params.require(:task).permit(:title,
                                 :due_date,
                                 :assigned_to,
                                 :is_complete)
  end
end

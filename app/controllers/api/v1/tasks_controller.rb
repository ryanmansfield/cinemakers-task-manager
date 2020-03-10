class Api::V1::TasksController < ApplicationController
  before_action :set_checklist

  def index
    # @checklist = Checklist.find(params[:checklist_id])
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
  end

  def destroy
  end

  private

  def set_checklist
    @checklist = Checklist.find(params[:checklist_id])
  end

  def task_params
    params.require(:task).permit(:title,
                                  :note)
  end
end

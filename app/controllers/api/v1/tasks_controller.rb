class Api::V1::TasksController < ApplicationController

  def index
    @checklist = Checklist.find(params[:checklist_id])
    tasks = @checklist.tasks
    render json: tasks
  end

  def create
  end

  def new
  end

  def update
  end

  def destroy
  end

  private


end

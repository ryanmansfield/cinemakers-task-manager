class Api::V1::ChecklistsController < ApplicationController
  # before_action :set_stage

  def index
    # @project = Project.find_by(params[:id])
    @stage = Stage.find_by(params[:id])
    # binding.pry
    checklists = @stage.checklists
    render json: checklists
  end

  # def create
  #   checklist = @stage.checklists.build(content: params[:content])
  #   checklist.save
  #   render json: checklist
  # end

  private

  # def set_stage
  #   @stage = Stage.find(params[:id])
  # end
end


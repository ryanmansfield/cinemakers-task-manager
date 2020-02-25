class Api::V1::ChecklistsController < ApplicationController
  before_action :set_stage

  def index
    checklists = @stage.messages.order('created_at ASC')
    render json: checklists
  end

  def create
    checklist = @stage.checklists.build(content: params[:content])
    # checklist.user = current_user
    checklist.save
    render json: message
  end

  private

  def set_stage
    @stage = Stage.find_by(name: params[:channel_id])
  end
end

class CollaboratorsController < ApplicationController
  before_action :set_project, except: :destroy

  def index
    @collaborators = Collaborator.all
  end

  def new
    @collaborator = Collaborator.new
    @user = current_user
  end

  def create
    @collaborator = Collaborator.new
    @collaborator.user = current_user
    @collaborator.project = @project
    if @collaborator.save
      redirect_to project_path(@project)
    else
      render :new
    end
  end

  private

  def set_project
    @project = Project.find(params[:project_id])
  end
end

class CollaboratorsController < ApplicationController
  before_action :set_project, except: :destroy

  def index
    @collaborators = Collaborator.all
  end

  def new
    @collaborator = Collaborator.new
    @users = User.all
  end

  def create
    @collaborator = Collaborator.new(collaborator_params)
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

  def collaborator_params
    # *Strong params*: You need to *whitelist* what can be updated by the user
    # Never trust user data!
    params.require(:collaborator).permit(:user_id)
  end
end

class ProjectsController < ApplicationController

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
    @collaborators = @project.collaborators
    @collaborator = Collaborator.new
  end

  def new
    @project = Project.new
    @user = current_user
  end

  def create
    @project = Project.new(project_params)
    @project.stages.build(name: 'pre-production')
    @project.stages.build(name: "production")
    @project.stages.build(name: "post-production")
    @project.collaborators.build(user_id: current_user.id, position: 'owner')

    if @project.save
      redirect_to root_path
    else
      render :new
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    redirect_to root_path
  end

  private

  def project_params
    # *Strong params*: You need to *whitelist* what can be updated by the user
    # Never trust user data!
    params.require(:project).permit(:name, :genre, :plot)
  end
end

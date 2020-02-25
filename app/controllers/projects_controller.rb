class ProjectsController < ApplicationController
  # before_action :set_project, only: [:show]

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  def new
    @project = Project.new
    # @project.stages.build
  end

  def create
    @project = Project.new(project_params)
    @project.stages.build(name: 'pre-production')
    @project.stages.build(name: "production")
    @project.stages.build(name: "post-production")

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
    params.require(:project).permit(:name, :team_id)
  end

  # def set_project
  #   @project = project.find(params[:id])
  # end
end

class TeamsController < ApplicationController
  # before_action :set_project, except: :destroy
  before_action :set_team, only: [:destroy, :show]

  def new
    @team = Team.new
    # @user = current_user
  end

  def create
    @team = Team.new(team_params)
    @team.user_id = current_user.id
    if @team.save
      redirect_to root_path
    else
      render :new
    end
  end

  def destroy
    @team = Team.find(params[:id])
    @team.destroy

    # no need for app/views/restaurants/destroy.html.erb
    redirect_to @team.project
  end

  private

  def team_params
    # *Strong params*: You need to *whitelist* what can be updated by the user
    # Never trust user data!
    params.require(:team).permit(:name, :user_id)
  end

  def set_project
    @project = Project.find(params[:project_id])
  end

  def set_team
    @team = team.find(params[:id])
  end
end

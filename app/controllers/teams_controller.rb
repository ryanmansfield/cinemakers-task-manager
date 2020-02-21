class TeamsController < ApplicationController
  # before_action :set_project, except: :destroy
  # before_action :set_team, only: [:destroy, :show]

  def index
    @teams = Team.all
  end

  def show
    @team = Team.find(params[:id])
    @collaborators = @team.collaborators
  end

  def new
    @team = Team.new
  end

  def create
    @team = Team.new(team_params)
    if @team.save
      redirect_to root_path
    else
      render :new
    end
  end

  # def destroy
  #   # @team = Team.find(params[:id])
  #   @team.destroy
  #   redirect_to root_path
  # end

  private

  def team_params
    # *Strong params*: You need to *whitelist* what can be updated by the user
    # Never trust user data!
    params.require(:team).permit(:name)
  end

  # def set_team
  #   @team = team.find(params[:id])
  # end
end

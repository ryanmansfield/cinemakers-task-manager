class TeamsController < ApplicationController
  before_action :set_project, except: :destroy
  before_action :set_team, only: [:destroy, :show]

  def new
    @team = Team.new
    @users = User.all
  end

  def create
    @team = Team.new(team_params)
    @team.project = @project
    # @team.ingredient = Ingredient.find(params['team']['ingredient'])

    if @team.save
      redirect_to @project
    else
      render :new
    end
  end

  def destroy
    @team = Team.find(params[:id])
    @team.destroy

    # no need for app/views/restaurants/destroy.html.erb
    redirect_to root_path
  end

  private

  def team_params
    # *Strong params*: You need to *whitelist* what can be updated by the user
    # Never trust user data!
    params.require(:team).permit(:name, :user_id)
  end

  def set_cocktail
    @project = Project.find(params[:project_id])
  end

  def set_dose
    @team = Team.find(params[:id])
  end
end

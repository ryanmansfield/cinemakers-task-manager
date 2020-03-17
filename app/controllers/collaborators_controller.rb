class CollaboratorsController < ApplicationController
  before_action :set_team, except: :destroy

  def index
    @collaborators = Collaborator.all
  end

  def new
    @collaborator = Collaborator.new
    @user = current_user
    @team = Team.find(params[:team_id])
  end

  def create
    @collaborator = Collaborator.new
    @collaborator.user = current_user
    @collaborator.team = @team
    if @collaborator.save
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def set_team
    @team = Team.find(params[:team_id])
  end
end

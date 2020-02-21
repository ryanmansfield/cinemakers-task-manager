class CollaboratorsController < ApplicationController
  before_action :set_team, except: :destroy
  # before_action :set_collaborator, only: [:destroy, :show]
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

  # def update
  # end

  # def destroy
  #   @collaborator = Collaborator.find(params[:id])
  #   @collaborator.destroy

  #   # no need for app/views/restaurants/destroy.html.erb
  #   redirect_to @collaborator.project
  # end

  private

  # def collab_params
  #   # *Strong params*: You need to *whitelist* what can be updated by the user
  #   # Never trust user data!
  #   params.require(:collaborator).permit()
  # end

  def set_team
    @team = Team.find(params[:team_id])
  end

  # def set_collaborator
  #   @collaborator = Collaborator.find(params[:id])
  # end
end

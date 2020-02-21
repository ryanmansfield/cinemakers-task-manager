class CollaboratorsController < ApplicationController
  # before_action :set_project, except: :destroy
  # before_action :set_team, only: [:destroy, :show]

  def new
    @collaborator = Collaborator.new
    # @user = current_user
    # @project = project1
  end

  def create
    @collaborator = Collaborator.new(collab_params)
    @collaborator.user_id = current_user.id
    @collaborator.team_id =
    if @collaborator.save
      redirect_to root_path
    else
      render :new
    end
  end

  def update
  end

  # def destroy
  #   @collaborator = Collaborator.find(params[:id])
  #   @collaborator.destroy

  #   # no need for app/views/restaurants/destroy.html.erb
  #   redirect_to @collaborator.project
  # end

  private

  def collab_params
    # *Strong params*: You need to *whitelist* what can be updated by the user
    # Never trust user data!
    params.require(:collaborator).permit(:user_id, :team_id)
  end
end

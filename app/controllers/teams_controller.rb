# class TeamsController < ApplicationController

#   def index
#     @teams = Team.all
#   end

#   def show
#     @team = Team.find(params[:id])
#     @collaborators = @team.collaborators
#     @collaborator = Collaborator.new
#   end

#   def new
#     @team = Team.new
#   end

#   def create
#     @team = Team.new(team_params)
#     @team.collaborators.build(user_id: current_user.id)
#     if @team.save
#       redirect_to team_path(@team)
#     else
#       render :new
#     end
#   end

#   def destroy
#     @team = Team.find(params[:id])
#     @team.destroy
#     redirect_to root_path
#   end

#   private

#   def team_params
#     # *Strong params*: You need to *whitelist* what can be updated by the user
#     # Never trust user data!
#     params.require(:team).permit(:name)
#   end
# end

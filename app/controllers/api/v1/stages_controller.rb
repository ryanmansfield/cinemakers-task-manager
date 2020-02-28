# class Api::V1::StagesController < ApplicationController
#   # before_action :set_project

#   def index
#     @project = Project.find_by(name: params[:project_id])

#     stages = @project.stages
#     render json: stages
#   end

#   def show
#     if params[:id].blank?
#       redirect_to stage_path(Stage.first.name)
#     else
#       # @project = Project.find_by(params[:project_id])
#       @stage = Stage.find_by(params[:id])
#       @stages = Stage.all
#     end
#   end

#   private

#   # def set_project
#   #   @project = Project.find_by(params[:project_id])
#   # end
# end

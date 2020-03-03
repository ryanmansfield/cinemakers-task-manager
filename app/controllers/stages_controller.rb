class StagesController < ApplicationController
  def show
    if params[:id].blank?
      redirect_to stage_path(Stage.first.id)
    else
      @project = Project.find(params[:id])
      @stages = @project.stages
      @stage = Stage.find(params[:id])
    end
  end
end

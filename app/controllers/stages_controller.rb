class StagesController < ApplicationController
  def show
    if params[:id].blank?
      redirect_to stage_path(Stage.first.name)
    else
      @stage = Stage.find_by(params[:id])
      @stages = Stage.all
    end
  end
end

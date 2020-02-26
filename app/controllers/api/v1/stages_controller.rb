class Api::V1::StagesController < ApplicationController
  before_action :set_project

  def index
    stages = @project.stages
    render json: stages
  end

 def show

 end

  private

  def set_project

  end


end

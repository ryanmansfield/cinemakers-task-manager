class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]
  before_action :set_params

  def home
  end

  private

  def set_params
    @projects = Project.all
    @collaborator = current_user
  end
end



  # def set_project
  #   @project = project.find(params[:id])
  # end

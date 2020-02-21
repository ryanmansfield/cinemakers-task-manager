class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]
  before_action :set_teams

  def home
  end

  private

  def set_teams
    collaborator = current_user
  end
end



  # def set_project
  #   @project = project.find(params[:id])
  # end

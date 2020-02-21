class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]
  before_action :set_params
  def home
  end

  private

  def set_params
    @teams = Team.all
    @projects = Project.all
  end
end

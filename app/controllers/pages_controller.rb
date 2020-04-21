class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    # @team = Team.new
    @project = Project.new
  end
end

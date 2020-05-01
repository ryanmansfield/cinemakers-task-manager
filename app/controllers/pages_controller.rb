class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
    # @team = Team.new
    @project = Project.new
  end

    def resource_name
    :user
  end

  def resource
    @resource ||= User.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end
end

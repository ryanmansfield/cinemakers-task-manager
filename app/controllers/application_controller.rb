class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :user_name, :city, :state, :photo])
    devise_parameter_sanitizer.permit(:account_update, keys: [:first_name, :last_name, :user_name, :city, :state, :photo])
  end
end

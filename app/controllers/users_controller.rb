class UsersController < ApplicationController
  def index
    @users = User.all
  end

  # def to_label
  #   "#{first_name} | #{email}"
  # end
end

class Project < ApplicationRecord
  belongs_to :team
  # belongs_to :user
  has_many :users, through: :team
end

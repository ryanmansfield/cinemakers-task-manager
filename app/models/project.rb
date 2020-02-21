class Project < ApplicationRecord
  belongs_to :team
  has_many :collaborators, through: :team
end

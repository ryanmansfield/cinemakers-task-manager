class Project < ApplicationRecord
  belongs_to :team
  has_many :collaborators, through: :team
  validates :name, presence: true, uniqueness: true, allow_blank: false
  has_many :stages

  # accepts_nested_attributes_for :stages
end

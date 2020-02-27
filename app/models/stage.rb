class Stage < ApplicationRecord
  belongs_to :project
  has_many :checklists, dependent: :destroy
end

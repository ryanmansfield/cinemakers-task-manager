class Stage < ApplicationRecord
  belongs_to :project, dependent: :destroy
  has_many :checklists
end

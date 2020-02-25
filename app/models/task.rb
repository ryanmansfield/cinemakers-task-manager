class Task < ApplicationRecord
  belongs_to :checklist, dependent: :destroy
  validates :title, presence: true, uniqueness: true, allow_blank: false
  validates :note, presence: true, allow_blank: false
  validates :due_date, presence: true, allow_blank: false
  validates :assigned_to, presence: true, allow_blank: false
end

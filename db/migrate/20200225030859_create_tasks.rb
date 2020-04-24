class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.references :checklist, foreign_key: true
      t.string :title
      t.datetime :due_date
      t.boolean :is_complete, null: false, default: false
      t.string :assigned_to

      t.timestamps
    end
  end
end

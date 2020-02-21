class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :genre
      t.string :plot

      t.timestamps
    end
  end
end

class AddDetailsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :tag, :string
    add_column :users, :bio, :string
    add_column :users, :company, :string
    add_column :users, :city, :string
    add_column :users, :state, :string
    add_column :users, :website, :string
    add_column :users, :field, :string
  end
end

class AddSectionsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :headline, :string
    add_column :users, :position, :string
    add_column :users, :company, :string
    add_column :users, :edu_about, :string
    add_column :users, :location, :string
    add_column :users, :pronouns, :string
  end
end

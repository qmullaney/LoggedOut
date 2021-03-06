class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.text :about
      t.text :education
      t.text :work

      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamps
    end

    add_index :users, :name 
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true 
  end
end

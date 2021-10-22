class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.integer :liker, null: false
      t.integer :post, null: false

      t.timestamps
    end
    add_index :likes, :post
  end
end

class CreateConnections < ActiveRecord::Migration[6.1]
  def change
    create_table :connections do |t|
      t.integer :connector, null: false
      t.integer :connectee, null: false

      t.timestamps
    end
    add_index :connections, :connector
    add_index :connections, :connectee
  end
end

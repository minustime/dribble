class CreateUsers < ActiveRecord::Migration[5.2]
  def up
    create_table :users do |t|
      t.string "name", :limit => 100, :null => false
      t.string "email", :limit => 255, :null => false
      t.timestamps
    end
  end
  def down
    drop_table :users
  end
end

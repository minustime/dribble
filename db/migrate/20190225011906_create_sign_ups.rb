class CreateSignUps < ActiveRecord::Migration[5.2]
  def up
    create_table :sign_ups do |t|
      t.integer "user_id"
      t.integer "block_id"
      t.integer "status", :limit => 1
      t.timestamps
    end
    add_index("sign_ups", ["user_id", "block_id"])
  end
  def down
    drop_table :sign_ups
  end
end

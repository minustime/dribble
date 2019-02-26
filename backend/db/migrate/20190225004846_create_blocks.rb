class CreateBlocks < ActiveRecord::Migration[5.2]
  def up
    create_table :blocks do |t|
      t.date "date"
      t.time "start_at", :null => false
      t.time "end_at", :null => false
      t.timestamps
    end
  end
  def down
    drop_table :blocks
  end
end

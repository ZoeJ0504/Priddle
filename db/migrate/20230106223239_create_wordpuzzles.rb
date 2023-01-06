class CreateWordpuzzles < ActiveRecord::Migration[7.0]
  def change
    create_table :wordpuzzles do |t|
      t.string :post
      t.integer :user_id

      t.timestamps
    end
  end
end

class CreateRiddles < ActiveRecord::Migration[7.0]
  def change
    create_table :riddles do |t|
      t.string :post 
      t.integer :user_id
      
    end
  end
end

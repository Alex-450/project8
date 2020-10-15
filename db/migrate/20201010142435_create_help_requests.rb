class CreateHelpRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :help_requests do |t|
      t.string :title
      t.string :description
      t.string :latitude
      t.string :longitude
      t.boolean :fulfilled

      t.timestamps
    end
  end
end

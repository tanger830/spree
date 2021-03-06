FactoryGirl.define do
  factory :inventory_unit, :class => Spree::InventoryUnit do
    variant { FactoryGirl.create(:variant) }
    order { FactoryGirl.create(:order) }
    state 'on_hand'
    shipment { FactoryGirl.create(:shipment, :state => 'pending') }
    #return_authorization { FactoryGirl.create(:return_authorization) }
  end
end

  Dir[Rails.root.join('spec/support/**/*.rb')].each { |f| require f }
  config.include Devise::Test::ControllerHelpers, type: :controller
  config.include ControllerMacros, type: :controller
  config.include FactoryBot::Syntax::Methods

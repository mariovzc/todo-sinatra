namespace '/' do
  before { @title = 'Welcome' }
  get do
    erb 'index'
  end
end

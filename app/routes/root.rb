namespace '/' do
  before { @title = 'Welcome' }
  get do
    @tasks = Tarea.all
    erb 'index'
  end
end

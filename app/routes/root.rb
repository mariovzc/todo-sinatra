require 'make_todo'
namespace '/' do
  before { @title = 'Welcome' }
  get do
    @tasks = Tarea.all
    erb 'index'
  end
end
get '/new' do
  erb 'new'
end
post '/create' do
  Tarea.create(params[:title])
  redirect "/"
end
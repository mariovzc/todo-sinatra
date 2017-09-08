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
get '/all' do
  content_type :json
  @tasks = Tarea.all
  @tasks.to_json
end
post '/create' do
  Tarea.create(params[:title])
  redirect "/"
end
put '/task/:id' do
  Tarea.update(params[:id])
end

delete '/task/:id' do
  Tarea.destroy(params[:id])
end
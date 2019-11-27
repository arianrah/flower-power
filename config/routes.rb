Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    get '/data' => 'tests#index'
    get '/users' => 'users#index'
    post '/register' => 'users#create'
    get '/user-sensors' => 'user_sensors#index'
    post '/new-user-sensor' => 'user_sensors#create'
    resources :users 

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end

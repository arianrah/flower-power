Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    get '/test' => 'tests#index'

    get '/users' => 'users#index'
    post '/register' => 'users#create'
    post '/login' => 'users#is_user'

    get '/user-sensors' => 'user_sensors#index'
    post '/new-user-sensor' => 'user_sensors#create'
    
    get '/plants' => 'plants#index'
    post '/plants-new' => 'plants#create'

    get '/sensors' => 'sensors#index'
    post '/sensors-new' => 'sensors#create'

    get '/sensor-history' => 'sensor_history#index'
    post '/sensor-history-new' => 'sensor_history#create'

    get '/sensor-type' => 'sensor_types#index'

    resources :plants
    resources :users 
    resources :sessions, only: [:create]

  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end

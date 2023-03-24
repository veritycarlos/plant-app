Rails.application.routes.draw do

  resources :plants, only: [:index, :show, :create, :update, :destroy] do
    resources :tips, only: [:show, :index, :create, :update, :destroy]
  end 

  resources :tips, only: [:show, :index, :create, :update, :destroy]

  get "/plants/tips", to: "plants#tips"

  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'


  post '/signup', to: 'users#create'
  get '/current-user', to: 'users#get_current_user'
  

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'


  

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

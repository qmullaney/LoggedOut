Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :destroy, :index, :show, :update]
    resources :connections, only: [:create, :destroy, :index, :show]
  end

  root "static_pages#root"
end

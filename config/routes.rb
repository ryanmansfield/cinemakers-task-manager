Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :teams, only: [ :index, :new, :create, :destroy ]
  resources :collaborator, only: [:new, :create, :update, :destroy]
  resources :projects, only: [:index, :show, :new, :create]


  # namespace :api, defaults: { format: :json } do
  #   namespace :v1 do
  #     resources :channels, only: [] do
  #       resources :messages, only: [ :index, :create ]
  #     end
  #   end
  # end



  # mount ActionCable.server => "/cable"
end


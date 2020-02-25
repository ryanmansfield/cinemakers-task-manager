Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :teams, only: [ :index, :show, :new, :create, :destroy ] do
    resources :collaborators, only: [:index, :new, :create ]
  end

  resources :projects, only: [:index, :show, :new, :create, :destroy]



  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :stages, only: [] do
        resources :checklist, only: [ :index, :create ] do
          resources :tasks, only: []
        end
      end
    end
  end



  # mount ActionCable.server => "/cable"
end



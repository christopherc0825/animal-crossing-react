Rails.application.routes.draw do
  resources :sea_critters
  resources :bugs
  resources :fish
  resources :designs
  resources :villagers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.6.2"

gem "administrate", github: "excid3/administrate", branch: "zeitwerk"
gem "bootsnap", ">= 1.1.0", require: false
gem "bootstrap", "~> 4.3", ">= 4.3.1"
gem "devise_masquerade", "~> 0.6.2"
gem "devise-bootstrapped", github: "excid3/devise-bootstrapped", branch: "bootstrap4"
gem "devise", "~> 4.6", ">= 4.6.1"
gem "font-awesome-sass", "~> 5.6", ">= 5.6.1"
gem "friendly_id", "~> 5.2", ">= 5.2.5"
gem "gravatar_image_tag", github: "mdeering/gravatar_image_tag"
gem "haml-rails", "~> 2.0"
gem "jbuilder", "~> 2.5"
gem "mini_magick", "~> 4.9", ">= 4.9.2"
gem "name_of_person", "~> 1.1"
gem "omniauth-github", "~> 1.3"
gem "pg", ">= 0.18", "< 2.0"
gem "public_suffix"
gem "puma", "~> 3.11"
gem "rails", "~> 5.2.2", ">= 5.2.2.1"
gem "sidekiq", "~> 5.2", ">= 5.2.5"
gem "sitemap_generator", "~> 6.0", ">= 6.0.1"
gem "turbolinks", "~> 5"
gem "tzinfo-data", platforms: %i(mingw mswin x64_mingw jruby)
gem "webpacker", "~> 4.0.2"
gem "whenever", require: false

group :development, :test do
  gem "byebug", platforms: %i(mri mingw x64_mingw)
  gem "pry-rails"
  gem "rubocop", "~> 0.60"
end

group :development do
  gem "brakeman"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring-watcher-listen", "~> 2.0.0"
  gem "spring"
  gem "web-console", ">= 3.3.0"
end

group :test do
  gem "capybara", ">= 2.15"
  gem "chromedriver-helper"
  gem "selenium-webdriver"
end

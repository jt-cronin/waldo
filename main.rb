require 'sinatra'
require 'pry'
require_relative 'functions.rb'
require 'sinatra/reloader'


get '/' do 
	erb :home
end

get '/easy' do
	erb :easy
end

get '/hard' do 
	erb :hard
end

get '/home' do
	erb :home
end

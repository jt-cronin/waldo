require 'sinatra'
require 'pry'
require_relative 'functions.rb'
require 'sinatra/reloader'
require 'csv'



get '/trials' do
	erb :trials
end

get '/' do 

	erb :home
end

get '/home' do
	erb :home
end

get '/easy' do
	erb :easy
end

get '/hard' do 
	erb :hard
end

get '/storage' do
	erb :storage
end

require 'sinatra'
require 'pry'
require_relative 'functions.rb'
require 'sinatra/reloader'
require 'csv'

#trials section
get '/trials' do
	erb :trials
end

#actual pages section
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

get '/easyScores' do
	erb :easyScores
end

#posting scores and retrieving scores

post '/storage' do
	params[:easyScore]
	addToEasy(params[:easyScore])
	redirect '/home'
end


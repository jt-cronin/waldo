def getCoordinatesRB

	@levelChose = {}

	CSV.foreach("storage.txt", {headers: true, return_headers: false}) do |row|
		level = row['level']

		

		xMin = row['xMin']
		xMax = row['xMax']
		yMin = row['yMin']
		yMax = row['yMax']
		currentLevel = [xMin, xMax, yMin, yMax]

		if !@levelChose[level]
			@levelChose[level] = currentLevel
		end
	end
	return @levelChose
end



def addToEasy (input)
	File.open("easyScores.txt", "a") do |line|
		line.puts "#{input}\r"
	end
end

def getEasyScores

	@scores = {}
	CSV.foreach("easyScores.txt", {headers: true, return_headers: false}) do |row|
		player = row['name']
		score = row['score']
		@scores[player] = score
	end
	return @scores
end





def getCoordinatesRB

	levelChose = {}

	CSV.foreach("storage.txt", {headers: true, return_headers: false}) do |row|
		level = row['level']

		

		xMin = row['xMin']
		xMax = row['xMax']
		yMin = row['yMin']
		yMax = row['yMax']
		currentLevel = [xMin, xMax, yMin, yMax]

		if !levelChose[level]
			levelChose[level] = currentLevel
		end
		
	end
	binding.pry
	return levelChose
end
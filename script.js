const tableBody = document.getElementById("table-body")

fetch("data.json")
	.then((response) => response.json())
	.then((jsonData) => {
		for (const testName in jsonData) {
			if (jsonData.hasOwnProperty(testName)) {
				const failingDays =
					jsonData[testName]
						.failing_days

				const row = document.createElement("tr")

				const testNameCell =
					document.createElement("td")
				testNameCell.textContent = testName
				const failingDaysCell =
					document.createElement("td")
				failingDaysCell.textContent =
					failingDays

				row.appendChild(testNameCell)
				row.appendChild(failingDaysCell)

				tableBody.appendChild(row)
			}
		}
	})
	.catch((error) => {
		console.error("Error fetching JSON data:", error)
	})

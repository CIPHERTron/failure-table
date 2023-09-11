// Get a reference to the table body element
const tableBody = document.getElementById("table-body")

// Fetch the JSON data from the local file
fetch("data.json")
	.then((response) => response.json())
	.then((jsonData) => {
		// Iterate over the JSON data and create table rows
		for (const testName in jsonData) {
			if (jsonData.hasOwnProperty(testName)) {
				const failingDays =
					jsonData[testName]
						.failing_days

				// Create a table row
				const row = document.createElement("tr")

				// Create table cells for test name and failing days
				const testNameCell =
					document.createElement("td")
				testNameCell.textContent = testName
				const failingDaysCell =
					document.createElement("td")
				failingDaysCell.textContent =
					failingDays

				// Append cells to the row
				row.appendChild(testNameCell)
				row.appendChild(failingDaysCell)

				// Append the row to the table body
				tableBody.appendChild(row)
			}
		}
	})
	.catch((error) => {
		console.error("Error fetching JSON data:", error)
	})

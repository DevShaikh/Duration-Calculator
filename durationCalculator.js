// @Title        Medicine life calculator
// @Author       Ahmed Shaikh ( DevShaikh )

// @ArgumentsDatesFormat   YYYY-MM-DD

// Function
const calculator = (manufactureDate, expiryDate) => {
  // Dates
  const currDate = new Date()

  const mfDate = new Date(manufactureDate)
  const expDate = new Date(expiryDate)

  // Getting total days between manufacture date to expiry date
  const totalDays = (expDate - mfDate) / (1000 * 3600 * 24)

  // Getting total passed days between manufacture date to current date
  const daysPassed = (currDate - mfDate) / (1000 * 3600 * 24)

  // Getting total remaining days between current date to expiry date
  const daysRemaining = (expDate - currDate) / (1000 * 3600 * 24)

  // Calculating passed days percentage
  const daysPassedInPercentage = (daysPassed / totalDays) * 100

  // Calculating remaining days percentage
  const daysLeftInPercentage = (daysRemaining / totalDays) * 100

  console.table({
    'Total Days': totalDays,
    'Passed Days': Math.floor(daysPassed),
    'Remaining Days': Math.ceil(daysRemaining),
    'Passed Days (%)': daysPassedInPercentage.toFixed(2),
    'Remaining Days (%)': daysLeftInPercentage.toFixed(2),
  })
}

calculator('2021-10-11', '2021-11-21')

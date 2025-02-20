const sidePop1 = 'Frontend Development'
const sideArray1 = [
  'MyFavoriteSport Art Competition',
  'ICAF Responsive Design',
  'My Website',
  'Flow',
]

const sidePop2 = 'Complex Systems'
const sideArray2 = [
  'Serverless Backend API',
  'Tabletop Puzzle Game',
  'Electron Chess Analytics',
]

const sidePop3 = 'Conceptual Projects'
const sideArray3 = ['Webcommerce Project', 'Visual Studio']

const sidePop4 = 'Python'
const sideArray4 = ['Python Data Manipulation', 'Machine Learning']

const sidePop5 = 'Scripting'
const sideArray5 = ['Powershell', 'Excel Formulas']

const sidePop6 = 'Database Modeling'
const sideArray6 = ['SQL Webcommerce']

export const sideDetails = [
  sideArray1,
  sideArray2,
  sideArray3,
  sideArray4,
  sideArray5,
  sideArray6,
]

export const sideNames = [
  sidePop1,
  sidePop2,
  sidePop3,
  sidePop4,
  sidePop5,
  sidePop6,
]
export const sideLinks = sideDetails.map((subArray) =>
  subArray.map(
    (item) =>
      '/' +
      item
        .toLowerCase()
        .replace(/[^a-zA-Z ]/g, '')
        .replace(/ /g, '-')
  )
)

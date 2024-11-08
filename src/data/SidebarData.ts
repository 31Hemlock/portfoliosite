const sidePop1 = 'Applications'
const sideArray1 = ['MyFavoriteSport Art Competition', 'Serverless Backend API', 'Electron Chess Analytics', 'Visual Studio', 'ICAF Responsive Design', 'Tabletop Puzzle Game']

const sidePop2 = 'Webapps'
const sideArray2 = ['Flow', 'Webcommerce Project', 'My Website']

const sidePop3 = 'Python'
const sideArray3 = ['Python Data Manipulation', 'Machine learning']

const sidePop4 = 'Scripting'
const sideArray4 = ['Powershell', 'Excel Formulas']

const sidePop5 = 'Database Modeling'
const sideArray5 = ['SQL Webcommerce']

export const sideDetails = [sideArray1, sideArray2, sideArray3, sideArray4, sideArray5]

export const sideNames = [sidePop1, sidePop2, sidePop3, sidePop4, sidePop5]
export const sideLinks = sideDetails.map(subArray => 
  subArray.map(item => 
    'portfoliosite/' + item.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/ /g, '-')
  )
);

let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
content.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
content.append(dogDetails)

let dogDescription = document.createElement ('h3')
dogDescription.setAttribute('class','dog-description')
content.append(dogDescription)

dogDescription.textContent = 'Description'

let dogDescripDetail = document.createElement ('p')
dogDescripDetail.setAttribute('class','dog-Description')
content.append(dogDescripDetail)

dogDescripDetail.textContent = 'This Gentle Dog is aloof toward her owner'

let feedTime = document.createElement ('h3')
feedTime.setAttribute('class','feed-Time')
content.append(feedTime)

let feedingList = document.createElement ('ul')
content.append(feedingList)

let feedingTime1 = document.createElement ('li')
feedingTime1.textContent='9:00 AM'
let feedingTime2 = document.createElement ('li')
feedingTime2.textContent='12:00 PM'
let feedingTime3 = document.createElement ('li')
feedingTime3.textContent='5:00 PM'

feedingList.append(feedingTime1,feedingTime2,feedingTime3)


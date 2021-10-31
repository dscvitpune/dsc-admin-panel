const data = [
  {
    id: "1",
    name: "Nayan Bari",
    role: "Website Dev",
    email: "nayan.bari20@vit.edu",
    phone: "8806575743",
  },
  {
    id: "2",
    name: "Anurag Kulkarni",
    role: "Website Head",
    email: "xyz@vit.edu",
    phone: "1234567890",
  },
  {
    id: "3",
    name: "Nayan Bari",
    role: "Website Dev",
    email: "nayan.bari20@vit.edu",
    phone: "8806575743",
  },
  {
    id: "4",
    name: "Nayan Bari",
    role: "Website Dev",
    email: "nayan.bari20@vit.edu",
    phone: "8806575743",
  },
  {
    id: "5",
    name: "Nayan Bari",
    role: "Website Dev",
    email: "nayan.bari20@vit.edu",
    phone: "8806575743",
  },
  {
    id: "5",
    name: "Nayan Bari",
    role: "Website Dev",
    email: "nayan.bari20@vit.edu",
    phone: "8806575743",
  },
  {
    id: "7",
    name: "Nayan Bari",
    role: "Website Dev",
    email: "nayan.bari20@vit.edu",
    phone: "8806575743",
  },
];

const table = document.querySelector('#table tbody')

function randomColor(){
    const colors = ['#001219','#005f73','#0a9396','#94d2bd','#e9d8a6','#ee9b00','#ca6702','#bb3e03','#ae2012','#9b2226']
    return colors[Math.floor(Math.random() * colors.length)]
}

data.forEach((item) => {
    const name = item.name
    const firstLetter = name.charAt(0)
    console.log(firstLetter)
    const element = document.createElement('tr')
    element.classList.add('element')
    element.innerHTML = `
    <th scope="row" class="d-none d-sm-block" id="${item.id}" >
    <div class="d-flex justify-content-center align-items-center text-light font-weight-normal text-center rounded-circle" style="background-color:${randomColor()}; width: 36px; height: 36px">${firstLetter}</div></th>
    <td>${item.name}</td>
    <td>${item.role}</td>
    <td>${item.email}</td>
    <td>${item.phone}</td>`
    table.appendChild(element)
})

const duration = document.getElementById('duration')

console.log(duration)
duration.addEventListener('input', (e) => {
    const numberOfDays = parseInt(duration.value)
    console.log(typeof numberOfDays)
    const daySlotsRow = document.querySelector('#day-slots-row')
    $("#day-slots-row").empty();

    for(let i=0; i<numberOfDays; i++){
        const row = document.createElement('div')
        row.classList.add('row')
        row.innerHTML = `
        <div class="form-group col-xs-8 col-md-6 days">
            <label for="day-${i+1}" class="control-label" style="float: left;">day-${i+1}</label>
            <input type="date"  class="form-control" id="day-${i+1}"  style="background-color: #D7DBDD;">
        </div>
        <div class="form-group col-xs-8 col-md-6 slots" >
            <label for="slot-${i+1}" class="control-label"  style="float: left;">Number of slots</label>
            <input type="number"  class="form-control" id="slot-${i+1}"  style="background-color: #D7DBDD;">
        </div>`
        daySlotsRow.appendChild(row)
    }
    console.log(daySlotsRow)
    const slots = document.querySelectorAll('.slots')
    console.log(slots)
    if ( slots.length > 0){
        const slotsInput = []
        for (let i = 0; i < slots.length; i++){
            const slot = slots[i].childNodes[3]
            slotsInput.push(slot)
        }
        console.log(slotsInput)
        slotsInput.forEach(slot => {
            slot.addEventListener('input', (e) => {
                const numberOfSlots = parseInt(slot.value)

                for(let i = 0; i < numberOfSlots; i++){
                    const slotsSection = document.createElement('div')
                    slotsSection.classList.add('number-of-slots')
                    const slotsRow = document.createElement('div')
                    slotsRow.classList.add('d-flex')
                    const parentRow = e.path[2]
                    console.log(e.path[2])
                    slotsRow.innerHTML = `
                    <div class="form-group col-xs-8 col-md-6 slots" style="margin-right:5px">
                        <label for="slot-${i+1}" class="control-label" style="float: left;">slot-${i+1}</label>
                        <input placeholder="Start time" type="time" class="form-control" style="background-color: #D7DBDD;">
                    </div>
                    <div class="form-group col-xs-8 col-md-6 slots">
                        <label for="slot-${i+1}" class="control-label" style="float: left;">slot-${i+1}</label>
                        <input placeholder="End time" type="time" class="form-control" style="background-color: #D7DBDD;">
                    </div>
                    `
                    slotsSection.appendChild(slotsRow)
                    parentRow.appendChild(slotsSection)
                    console.log(slot)
                   
                }
                if(isNaN(numberOfSlots)){
                    const slotsSectionDivs = e.path[2].querySelectorAll('.number-of-slots')
                    slotsSectionDivs.forEach((slot) => {
                        slot.remove()
                    })
                }
                
                console.log(numberOfSlots)
            })
        })
    }
})



function displayAbilities(){
    let tBody = abilitiesTableTbody
    const abilitiesArray = Object.keys(abilities)
    tBody.innerText = ""

    for (let i = 0; i < abilitiesArray.length; i++){
        const abilitiesName = abilitiesArray[i]
        let row = document.createElement("tr")
        tBody.append(row)

        if(i >= 75)
            row.className = "hideTemp"


        let ability = document.createElement("td")
        ability.className = "ability"
        ability.innerText = sanitizeString(abilities[abilitiesName]["name"])
        row.append(ability)

        let description = document.createElement("td")
        description.className = "description"
        description.innerText = abilities[abilitiesName]["description"]
        row.append(description)

        row.addEventListener("click", async() => {
            if(!speciesButton.classList.contains("activeButton"))
                await tableButtonClick("species")
            window.scrollTo({ top: 0})
            const list = abilitiesIngameNameArray
            createFilter(list, species, ["abilities"], filterCount++, speciesFilterButton, "Ability", isInt = false, isOperator = false, text = abilities[abilitiesName]["ingameName"])
        })
    }
}
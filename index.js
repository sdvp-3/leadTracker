

      let myLeads = []
      let favLeads = []
     
      const inputEl = document.getElementById("input-el")
      const inputBtn = document.getElementById("input-btn")
      const favBtn = document.getElementById("fav-btn")
      const ulEl = document.getElementById("ul-el")
      const favUl= document.getElementById("fav-ul-el")
      const deleteBtn = document.getElementById("delete-btn")
      const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const leadsFromLocalStorages = JSON.parse( localStorage.getItem("favLeads") )
      if (leadsFromLocalStorage) {
          myLeads = leadsFromLocalStorage
          render(myLeads, ulEl)

      }

      if (leadsFromLocalStorages){
        favLeads = leadsFromLocalStorages
      render(favLeads, favUl)
    }

      function render(leads, element) {
          let listItems = ""
          for (let i = 0; i < leads.length; i++) {
              listItems += `
                  <li>
                      <a target='_blank' href='${leads[i]}'>
                          ${leads[i]}
                      </a>
                  </li>
              `
          }
        
       element.innerHTML = listItems
          
          
      }

      deleteBtn.addEventListener("dblclick", function() {
          localStorage.clear()
          myLeads = []
          favLeads = []
          render(myLeads, ulEl)
          render(favLeads, favUl)
      })

      inputBtn.addEventListener("click", function() {
          myLeads.push(inputEl.value)
          inputEl.value = ""
          localStorage.setItem("myLeads", JSON.stringify(myLeads) )
          render(myLeads, ulEl)
       
      })

      favBtn.addEventListener("click", function(){
          favLeads.push(inputEl.value)
          inputEl.value= ""
  localStorage.setItem("favLeads", JSON.stringify(favLeads) )
         render(favLeads, favUl)
         

      })
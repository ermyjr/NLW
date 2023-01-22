const form = document.querySelector("#formHabits")
const nlwSetup = new NLWSetup(form)
const data ={
    run:['01-22','01-23','01-24']
}

nlwSetup.setData(data)
nlwSetup.load()


const createElement = document.createElement

const x = createElement("div")
const y = createElement("div")
y.id = "hello"
x.append(y)

const app = document.querySelector("#app")

app.append(x)
const Pizza = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "The meat Pizza"),
            React.createElement("p", {}, "The cheese Pizzas")
        ]

    )
}

const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1",{}, "Pixel Perfect Pizzas")
    )
}

const container = document.getElementById("root")
console.log(container)
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))
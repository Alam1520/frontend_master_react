const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt Me"),
        React.createElement(Pet, {
            name: "Fido",
            animal: "Dog",
            breed: "Labrador",
        }),
        React.createElement(Pet, {
            name: "Bella",
            animal: "Cat",
            breed: "Persian",
        }),
        React.createElement(Pet, { name: "Max", animal: "Dog", breed: "Labrador" })
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

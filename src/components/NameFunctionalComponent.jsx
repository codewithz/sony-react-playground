export function NameFunctionalComponent(props) {
    const { name, message } = props;
    return (
        <div>
            <h3>Name Component- Function</h3>
            Name:{name}
            <br />
            Message:{message}

        </div>
    )

}
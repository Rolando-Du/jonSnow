



const Helmet = (props) => {

    document.title = 'Jon Snow -' + props.title;
    return (
        <div className="w-100">{props.children}</div>
    )
}

export default Helmet;
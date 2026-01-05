
function List(props) {
    // fruits.sort((a, b) => b.name.localeCompare(a.name));  // revers alpha
    // fruits.sort((a, b) => a.name.localeCompare(a=b.name));  // alpha
    // fruits.sort((a, b) => a.cal - b.cal);  // numeric
    // fruits.sort((a, b) => b.cal - a.cal);  // revers numeric
    // const listItems = fruits.map(item => <li key={item.id}>{item.name}:&nbsp;<b>{item.cal}</b></li>)

    // const lowCalItem = fruits.filter(item => item.cal < 100)
    // const listItems = lowCalItem.map(item => <li key={item.id}>{item.name}:&nbsp;<b>{item.cal}</b></li>)

    // const highCalItem = fruits.filter(item => item.cal >= 100)
    // const listItems = highCalItem.map(item => <li key={item.id}>{item.name}:&nbsp;<b>{item.cal}</b></li>)


    const itemList = props.list;

    const listItems = itemList.map(item => 
        <li key={item.id}> {item.name}:&nbsp;<b>{item.cal}</b></li>
    )

    return  (
        <>
            <h2 className="list-cat"> { props.category } </h2>
            <ol className="list-item"> { listItems } </ol>
        </>
    )
}

// List.propTypes = {
//     category: PropTypes.string,
//     list: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number,
//         name: PropTypes.string,
//         cal: PropTypes.string,
//     }))
// }

export default List;
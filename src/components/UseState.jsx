import { useState } from "react";

export default
    function UsingState() {
        const data = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
        { id: 3, name: 'Bobly' },
        { id: 4, name: 'Charlie' },
        { id: 5, name: 'Dobly' },
        { id: 6, name: 'Alivia' },
        { id: 7, name: 'Kanchun' }
    ];
    
    const [items, setData] = useState(data)

    const handaleRemoveAll = () => {
        setData([])
    }

    const handaleRemoveOne = (id) => {
        const filterData = items.filter(item => item.id !== id)
        setData(filterData)
    }

    return (
        <div className="my-24">
            <div>
                {
                    items.map((item, id) => <h1 key={id}>Name: {item?.name}</h1>)
                }
                <button onClick={handaleRemoveOne} className="btn btn-info btn-xs">Remove One</button>
            </div>
            <button onClick={handaleRemoveAll} className="btn btn-success">Remove All</button>
        </div>
    )
}
import React, {useState} from 'react';

const CardItem = (props) => {
    const [Ddata, setDdata] = useState('explorium')

    props.testData({Ddata})

    return (<div>
        This is a card item {Ddata}
        {props.testData}
    </div>
    )
}

export default CardItem;
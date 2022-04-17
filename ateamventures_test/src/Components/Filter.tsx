import React , {useState}from 'react';
import '../Styles/Filter.css';

const Filter: React.FC = () => {

    const [opened, setOpened] = useState(false);

    

    return (
        <div className='filter_box'>
            <div className='filter_method'>
                가공방식
            </div>

            <div className='filter_material'>
                재료
            </div>
        </div>
    )
}

export default Filter;
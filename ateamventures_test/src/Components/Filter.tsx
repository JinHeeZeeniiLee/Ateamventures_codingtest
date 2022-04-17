import React , {useState}from 'react';
import Refresh from '../assets/refresh_24px.png'
import Arrow from '../assets/arrow_drop_down_24px.png';
import '../Styles/Filter.css';


const methodOptions: string[] = ['밀링', '선반'];
const materialOptions: string[] = ['알루미늄', '탄소강', '구리', '합금강', '강철'];

const Filter: React.FC = () => {

    const [opened, setOpened] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [metDropped, setMetDropped] = useState(methodOptions);
    const [mateDropped, setMateDropped] = useState(materialOptions);
    

    const boxDropingSwitch = () => {
        setIsClick(false);
    }

    

    return (
        <div className='filter_box'>
            <div className='filter_method' onClick={boxDropingSwitch}>
                가공방식
                <img src={Arrow}/>
            </div>
            

            <div className='filter_material'>
                재료
                <img src={Arrow}/>
            </div>

            <div className='refresh_box'>
                <img src={Refresh} style={{width: '15.99px', height: '16px'}}/>
                <div className='refresh_ment'>필터링 리셋</div>
            </div>
        </div>
    )
}

export default Filter;
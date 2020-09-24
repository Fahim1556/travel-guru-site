import React, {useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import fake from '../../FakeData/fakeData';
import Place from '../../componentes/Place/Place';

const Home = () => {
    const style = {
        marginTop:'-100px',
        display: 'flex',
        paddingRight: '20px',
        marginLeft:'150px',
        marginRight:'50px', 
        
    }
    const [fakeData, setFakeData] = useState(fake)
    return (
        <div style={style}>

            <Row>
                <Col style={style}>{fakeData.map(data => <Place data={data}/>)}</Col>
            </Row>
            
        </div>
    );
};

export default Home;
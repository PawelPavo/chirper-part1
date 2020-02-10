import React from 'react'
import moment from 'moment'
import { FaAt } from 'react-icons/fa'
import Animate from 'react-smooth'
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


const ChirpCard = props => {
    return (
        <>

            <Animate to="5" from="0" attributeName="opacity">
                        <div className='col-md-7'>
                <StyleRoot>
                    <div className="test" style={styles.bounce}>
                            <div className='card my-4 shadow border-success mb-3'>
                                <h3 className='card-header text-center bg-success shadow'>< FaAt /> {props.name}</h3>
                                <div className='card-body text-center'>
                                    <p className='card-text'>{props.chirp}</p>
                                </div>
                                <div className="card-footer shadow bg-transparent border-success text-center font-italic font-weight-lighter text-black-50">
                                    {moment(props.date).format('MMMM Do YYYY, h:mm:ss a')}
                                </div>
                            </div>
                        </div>
                </StyleRoot>
                    </div>
            </Animate>

        </>
    )
}

const styles = {
    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
}

export default ChirpCard;
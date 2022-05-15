import React from 'react'
import HomeStyle from '../Styles/HomeStyle.css'
import mainImage from '../Images/heroImage.jpg'
import eyeImage from '../Images/eye.svg'

const Home = () => {
    return (
        <>
            <div className='d-flex align-items-center justify-content-around flex-wrap' style={{position:'relative'}}>
                <img src={mainImage} className='leftImage' alt="Hero Image" />
                <div className="rightContent" style={{ width: '38rem' }}>
                    <h1 className='oneNeuron'>One Neuron</h1>
                    <h2 style={{ color: '#f1963a', fontWeight: '700', fontSize: '2.5rem' }}>Eaducation as a Service</h2>
                    <p className='homePara'>An OTT platform for education. You demand we fulfil all your learning needs without costing you extra.</p>
                    <button className='exploreButton my-1'> Explore More </button>
                </div>
            </div>
                <img src={eyeImage} alt="Eye Image" className='eyeImage' />
        </>
    )
}

export default Home
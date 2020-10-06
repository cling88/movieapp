import React from 'react';

function MainImage(props){
    return(
        <div style={{ backgroundImage: `url("${props.image}")`,
            backgroundColor: '#c1c1c1',
            height: '500px',
            width: '100%',
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
             }}>  {/* << 이미지url들어가는부분 */}
            <div>
                <div style={{ position: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem' }}>
                <h2 style={{ color: 'white' }}>{props.title}</h2>
                    <p style={{ color: 'white', fontSize: '1rem' }}>
                        { props.text }
                    </p>
                </div>
            </div>
        </div>
    )
    
}

export default MainImage;
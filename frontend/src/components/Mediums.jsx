import React, { useState, useEffect } from 'react';
function Mediums(props) {
   
    return(            <>
          { props.mediums && props.mediums.length > 0 && props.mediums.map((medium, index) => {
                return (
                    <React.Fragment key={index}>
                        {medium.name}
                        {props.medium.length > (index + 1) ? ' & ' : ''}
                    </React.Fragment>
                 );
                })
            }
        </>
    );
}

export default Mediums; 
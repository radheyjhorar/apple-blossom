import React, { useState, useEffect } from 'react';
function Boards(props) {
    // const [boards, setBoards]  = useState([]);
    // useEffect(() => {
    //    setBoards(props.boards);
    //    console.log(props.boards);
    // },[props]);
    return(            <>
          {   props.boards.length > 0 && props.boards.map((board, index) => {
                return (
                    <React.Fragment key={index}>
                        {board.name}
                        {props.boards.length > (index + 1) ? ' & ' : ''}
                    </React.Fragment>
                 );
                })
            }
        </>
    );
}

export default Boards; 
import PropTypes from 'prop-types';

const Square =({children, isSelected, updateBoard,index})=>{
    const className =`square ${isSelected ? 'is-selected':''}` 
    const hanldeClick=()=>{
      updateBoard(index)
    }
    return(
      <div onClick={hanldeClick} className={className}>
        {children}
      </div>
    )
}

Square.propTypes={
    isSelected:PropTypes.bool,
    updateBoard:PropTypes.func,
    index:PropTypes.number,
    children:PropTypes.string
}

export default Square;
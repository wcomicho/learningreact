import React from 'react'

const MemoComp = ({name}) => {
  console.log("Rendering Memo Component");
  /*
    modified the "export default"
    using React.memo
    This component will not re-render if the props component value did not change
    Same behaviour with PureComponent
  */  
  return (
    <>
      Memo Component: {name}
    </>
  )
}

export default React.memo(MemoComp)

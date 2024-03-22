import React from 'react'

function inlineError({error}) {
  return <>
   <p className="error" style={{ color: 'red', overflowY: 'hidden', fontSize: '12px' }}>{error}</p>
  </>
}

export default inlineError
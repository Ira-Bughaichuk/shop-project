

import React from 'react'
import { MagnifyingGlass } from "react-loader-spinner";

function Loader() {
  return (
    <MagnifyingGlass
    visible={true}
    height="140"
    width="140"
    ariaLabel="MagnifyingGlass-loading"
    wrapperStyle={{display: 'block', margin:"200px auto"}}
    wrapperClass="MagnifyingGlass-wrapper"
    glassColor="var(--thumba-bg)"
    color= "var(--header-bg)"
  />
  )
}

export default Loader
import React from 'react'

const useFetching =  (callBack) => {
  const fetching =  async () => {
    try{
      await callBack();      
    }catch {
      console.log('error')
    }
  }

  return fetching 
}

export default useFetching
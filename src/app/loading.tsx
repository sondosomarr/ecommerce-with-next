"use client"
import React from 'react'
import {  Oval } from 'react-loader-spinner'

export default function loading() {
  return (
    <div className='flex items-center justify-center h-screen'>
        <Oval
  visible={true}
  height="125"
  width="125"
  color="#4fa94d"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
      </div>
  )
}

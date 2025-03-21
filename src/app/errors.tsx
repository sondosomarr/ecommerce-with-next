"use client"
import React from 'react'
interface Props{
    error: Error
}

export default function errors({error}: Props) {
  return (
    <div>
       <p>{error.message}</p>
    </div>
  )
}

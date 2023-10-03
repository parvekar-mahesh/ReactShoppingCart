import { Typography } from '@mui/material'
import React from 'react'
import { CounterState } from './counterReducer'
import { useSelector } from 'react-redux'

function ContactPage() {
  const { data,title} = useSelector((state: CounterState)=>state)
  return (
     <Typography>
          Contact page --- {title}   ----- {data}
      </Typography>
  )
}

export default ContactPage

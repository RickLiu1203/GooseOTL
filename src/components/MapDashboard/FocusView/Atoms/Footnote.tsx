import { Asterisk } from 'lucide-react';
import React from 'react'

interface Props{
    text: string;
}

function Footnote({text}: Props) {
  return (
    <p><Asterisk/> {text}</p>
  )
}

export default Footnote
'use client'
import React, { useActionState } from 'react'
import { Button } from '../ui/button'
import { useFormState, useFormStatus } from 'react-dom'

export default function Submit() {
    const {pending}=useFormStatus()
  return (
    <Button disabled={pending} aria-label='submit'  type="submit">Save changes</Button>
  )
}

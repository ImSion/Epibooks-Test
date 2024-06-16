import React from 'react'
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function Welcome() {
  return (
    <Alert color="success" icon={HiInformationCircle}>
      <h1 className="font-medium">Questo è il mio EpicBooks!</h1>
    </Alert>
  )
}

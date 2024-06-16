import React from "react";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function NotFound() {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <h1 className="font-medium">PAGE NOT FOUND</h1> Change a few things up and try submitting again.
    </Alert>
  );
}
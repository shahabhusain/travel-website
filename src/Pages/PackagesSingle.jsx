import React from 'react'
import { useParams } from 'react-router-dom';
import SinglePackafes from '../Components/Packages/SinglePackafes';

const PackagesSingle = () => {
    const id = useParams().packageId;
  return (
    <div>
        <SinglePackafes id={id} />
    </div>
  )
}

export default PackagesSingle
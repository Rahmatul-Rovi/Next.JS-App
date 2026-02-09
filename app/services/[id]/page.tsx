import React from 'react'

export default async function serviceDetailPage({ params }) {
    const {id} = await params;

  return (
    <div>
      <h1>ServiceDetailPage</h1>
      <p>ID: {id} </p>
    </div>
  )
}

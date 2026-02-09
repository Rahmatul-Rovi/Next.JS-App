import React from 'react'

export default async function serviceDetailPage({ params }) {
     const data = [
    {
      id: "1",
      serviceName: "Web Development",
      serviceImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      service_Description: "Custom website building using React, Next.js, and modern technologies."
    },
    {
      id: "2",
      serviceName: "Graphic Design",
      serviceImage: "https://images.unsplash.com/photo-1558655146-d09347e92766",
      service_Description: "Creative logo design and branding identity for your business."
    },
    {
      id: "3",
      serviceName: "Digital Marketing",
      serviceImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      service_Description: "Grow your online presence with SEO and social media marketing."
    },
    {
      id: "4",
      serviceName: "App Development",
      serviceImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      service_Description: "High-performance mobile applications for Android and iOS."
    },
    {
      id: "5",
      serviceName: "UI/UX Design",
      serviceImage: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c",
      service_Description: "User-friendly and aesthetically pleasing interface design."
    },
    {
      id: "6",
      serviceName: "Cyber Security",
      serviceImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      service_Description: "Securing your digital assets and protecting against cyber threats."
    }
  ];
    const {id} = await params;
    const singleData = data.find((d) => d.id == id);

  return (
    <div>
      <h1>ServiceDetailPage</h1>
      <p>ID: {id} </p>
      <p>{singleData?.serviceName}</p>
      <img src={singleData?.serviceImage} />
    </div>
  )
}

import Link from 'next/link';
import React from 'react'

export default function ServicesPage() { // Component name Capital letter e dewa bhalo
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

  return (
    <div className="p-10">
      <p className='text-4xl text-center mb-10'> Services Page </p>
      
      {/* Grid style dile dekhte shundor lagbe */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          data.map((d) => {
            return (
              <div key={d.id} className="border p-4 rounded-lg shadow"> 
                {/* ID thik kora hoyeche eikhane */}
                <Link href={`/services/${d.id}`}>
                   <img src={d.serviceImage} alt={d.serviceName} className="w-full h-48 object-cover rounded" />
                   <h2 className="mt-2 font-bold text-xl">{d.serviceName}</h2>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
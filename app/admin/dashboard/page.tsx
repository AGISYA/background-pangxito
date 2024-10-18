'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Dashboard() {
  const [title, setTitle] = useState('PANGXITO');
  const [description, setDescription] = useState(
    'Pangsit Tulang Rangu 3 in 1 bisa digoreng, direbus, dan dikukus'
  );
  const [selectedImage, setSelectedImage] = useState<string>('/images/1.jpg');

  const [customerName, setCustomerName] = useState('');
  const [customerFeedback, setCustomerFeedback] = useState(
    'Pangsit yang lezat, benar-benar membuat saya terkesan!'
  );

  const [datahero, setDataHero] = useState({
    image: 'title',
    description1: {
      title: '',
      description: '',
    },
    description2: {
      name_customer: '',
      description: '',
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result && typeof reader.result === 'string') {
          setSelectedImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setDataHero((prevState) => ({
      ...prevState,
      description1: {
        ...prevState.description1,
        title: value,
      },
    }));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setDataHero((prevState) => ({
      ...prevState,
      description1: {
        ...prevState.description1,
        description: value,
      },
    }));

    console.log('cek data hero');
    console.log(datahero);
  };

  const handleCustomerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerName(e.target.value);
  };

  // Save to local storage

  // Get data hero
  // datahero = localStorage.getItem('hero') || undefined;

  const saveToLocalStorage = () => {
    const stringifiedData = JSON.stringify(datahero);

    console.log(stringifiedData);

    localStorage.setItem('hero', stringifiedData);
  };

  return (
    <div className='bg-white flex flex-col p-4'>
      <Image
        src={selectedImage}
        alt='Gambar'
        width={400}
        height={300}
        className='mb-6'
      />
      <div className='mb-4'>
        <label className='block mb-2'>Ubah Gambar:</label>
        <input type='file' onChange={handleImageChange} />
      </div>
      {/* Deskripsi 1 */}
      <div>
        <div className='text-2xl font-semibold mt-10'>Deskripsi 1</div>
        <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
          <h2 className='text-xl font-bold text-gray-800 mb-4'>Edit Title</h2>
          <input
            type='text'
            value={datahero.description1.title}
            onChange={handleTitleChange}
            className='w-full p-3 mb-4 border border-gray-300 rounded-lg'
            placeholder='Enter new title'
          />

          <h2 className='text-xl font-bold text-gray-800 mb-4'>
            Edit Deskripsi
          </h2>
          <input
            type='text'
            value={datahero.description1.description}
            onChange={handleDescriptionChange}
            className='w-full p-3 mb-4 border border-gray-300 rounded-lg'
            placeholder='Enter new description'
          />
          <div
            onClick={() => {
              saveToLocalStorage();
            }}
            className='w-28 mx-auto text-center text-white bg-green-500 hover:bg-green-600 py-2 rounded-lg'
          >
            UPDATE
          </div>
        </div>
      </div>
      {/* Deskripsi 2 */}
      <div className='text-2xl font-semibold mt-10'>Deskripsi 2</div>
      <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
        <h2 className='text-xl font-bold text-gray-800 mb-4'>Nama Customer</h2>
        <input
          type='text'
          value={customerName}
          onChange={handleCustomerNameChange}
          className='w-full p-3 mb-4 border border-gray-300 rounded-lg'
          placeholder='Enter customer name'
        />

        <h2 className='text-xl font-bold text-gray-800 mb-4'>Deskripsi</h2>
        <input
          type='text'
          value={customerFeedback}
          onChange={(e) => setCustomerFeedback(e.target.value)}
          className='w-full p-3 mb-4 border border-gray-300 rounded-lg'
        />
        <div className='w-28 mx-auto text-center text-white bg-green-500 hover:bg-green-600 py-2 rounded-lg'>
          UPDATE
        </div>
      </div>
    </div>
  );
}

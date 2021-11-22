/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useEffect } from 'react';
import Router from 'next/router';

export default function Custom404() {
  const router = Router;
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  });
  return (
    <div>
      <h1 className="title-not-found">Oooops....</h1>
      <h1 className="title-not-found">Halaman yang anda cari tidak ditemukan</h1>
    </div>
  );
}

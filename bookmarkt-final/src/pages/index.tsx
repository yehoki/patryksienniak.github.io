import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import { useState } from 'react'

import type { ReactElement } from 'react';
import Bestsellers from '@/components/Bestsellers';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [books, setBooks] = useState([]);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newAuthor, setNewAuthor] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [forceRender, setForceRender] = useState(0);

  return (
    <>
      <Head>
        <title>Bookmarkt</title>
      </Head>
      <Header/>
      <section id="bestsellers">
        <Bestsellers/>
      </section>
      {/* FOOTER */}
      <div>
        12344321
      </div>
    </>
  )
}

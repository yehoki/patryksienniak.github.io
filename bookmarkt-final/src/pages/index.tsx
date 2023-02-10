import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import { useState, useContext} from 'react'

import type { ReactElement } from 'react';
import Bestsellers from '@/components/Bestsellers';
import { UserContext } from './_app';
import MaterialHeader from "@/components/MaterialHeader";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [books, setBooks] = useState([]);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newAuthor, setNewAuthor] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [forceRender, setForceRender] = useState(0);
  const userContext = useContext(UserContext);
  const user = userContext?.user;
  return (
    <>
      <Head>
        <title>Bookmarkt</title>
      </Head>
      <MaterialHeader/>
      <section id="bestsellers">
      </section>
      {/* FOOTER */}
      <div>
      {user?.name} {user?.id} test
      </div>
    </>
  )
}

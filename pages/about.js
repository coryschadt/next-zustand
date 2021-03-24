import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Dropdown, DropdownTrigger } from '../components/dropdown'

import { useStore } from '../store'

export default function About () {
  const { count, increase, removeAllCounts } = useStore()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>About</h1>

      <div className='dropdown-user'>

        <DropdownTrigger className='user-trigger' uid='user-menu'>
          My Trigger
        </DropdownTrigger>

        <Dropdown uid='user-menu'>
          <ul>
            <li>
              <Link href='/about'>About</Link>
            </li>
          </ul>
        </Dropdown>


      </div>
    </div>
  )
}

import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async() => {
  const loggedIn = await getLoggedInUser()
  console.log(loggedIn);
  
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            title='Welcome'
            type='greeting'
            user={loggedIn.name || 'Guest'}
            subtext='Access and manage your account and transactions efficiently.'
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={5750.95}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[{currentBalance: 1500},{ currentBalance: 2500 }]}/>
    </section>
  )
}

export default Home

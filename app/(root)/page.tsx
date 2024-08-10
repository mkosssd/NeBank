import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Manas' }
  return (
    <section className='home'>
      <div className='home-content'>
        <div className='home-header'>
          <HeaderBox
            title='Welcome'
            type='greeting'
            user={loggedIn.firstName || 'Guest'}
			subtext='Access and manage your account and transactions efficiently.'
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1390.95}/>
        </div>
      </div>
    </section>
  )
}

export default Home

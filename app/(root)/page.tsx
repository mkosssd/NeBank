import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import { getBanks, getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async({searchParams: {id, page}}: SearchParamProps) => {
    const loggedIn = await getLoggedInUser()
    const accounts = await getAccounts({userId: loggedIn.$id})
    const currentPage = Number(page as string) || 1

    if(!accounts) return
    const accountsData = accounts?.data
    console.log(accountsData[0]);
    
    const appwriteItemId = await accountsData[0]?.appwriteItemId

    const account = await getAccount({appwriteItemId})
    console.log(account);
    
    return (
        <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
            <HeaderBox
                title='Welcome'
                type='greeting'
                user={loggedIn?.firstName || 'Guest'}
                subtext='Access and manage your account and transactions efficiently.'
            />
            <TotalBalanceBox
                accounts={accountsData}
                totalBanks={accounts?.totalBanks}
                totalCurrentBalance={accounts.totalCurrentBalance}
            />
            </header>
            <RecentTransactions page={currentPage}
                accounts={accountsData} 
                transactions={account?.transactions}
                appwriteItemId={appwriteItemId}/>
        </div>
        <RightSideBar user={loggedIn} transactions={accounts?.transactions} banks={accountsData?.slice(0,2)}/>
        </section>
    )
}

export default Home

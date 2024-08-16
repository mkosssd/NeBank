import PlaidLink from '@/components/PlaidLink'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const MyBanks = async() => {
    const user = await getLoggedInUser()
  return (
    <div>mybanks</div>
  )
}

export default MyBanks
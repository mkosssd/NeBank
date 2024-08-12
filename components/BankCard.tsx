import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BankCard = ({showBalance, account, userName}: CreditCardProps) => {
  return (
    <div className='flex flex-col'>
        <Link href='/' className='bank-card'>
            <div className="bank-card_content">
                <div>
                    <h2 className='text-16 font-semibold text-white'>
                        {account.name || userName}
                    </h2>
                    <p className="font-black text-white font-ibm-plex-serif">
                        {formatAmount(account.currentBalance)}
                    </p>
                </div>
                <article className='flex flex-col gap-2'>
                    <div className="flex justify-between">
                        <h2 className='text-12 font-semibold text-white'>{userName}</h2>
                        <h3 className='text-12 font-semibold text-white'>10 / 25</h3>
                    </div>
                        <p className="text-14 font-semibold tracking-[1.1px] text-white">●●●● ●●●● ●●●● <span className='text-16'>{account.mask || 1235}</span></p>
                </article>
            </div>
            <div className="bank-card_icon">
                <Image src="/icons/Paypass.svg" width={20} height={24} alt='Pay'/>
                <Image src="/icons/mastercard.svg" width={45} height={32} alt='MasterCard' className='ml-5'/>
            </div>
            <Image src="/icons/lines.png" width={316} height={190} alt='Lines' className='absolute top-0 left-0'/>
        </Link>
    </div>
  )
}

export default BankCard
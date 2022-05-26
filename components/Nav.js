import React from 'react'
import Link from 'next/link';
import styles from '@/styles/Nav.module.css'
import Image from 'next/image';

export default function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <div className={styles.logo} >
          <Link href='/'>
            <Image src="/images/patternbot.png" width={120} height={40} alt="LOGO"/></Link>
          </div>
          <div className={styles.mainMenu}>
              <Link href='/menu/chouse'>거래소</Link>
              <Link href='/menu/sales'>투자현황</Link>
              <Link href='/menu/preset'>설정</Link>
              <Link href='/menu/about'>About</Link>
              <Link href='/menu/faq'>FAQ</Link>
              <Link href='/menu/contact'>Contact</Link>

          </div>
        <div className={styles.loginMenu}>
          <div className={styles.login}>
            <Link href='/auth/login' >로그인</Link>
          </div>
          <div className={styles.register}>
            <Link href='/auth/register' className={styles.register}>회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  )
}



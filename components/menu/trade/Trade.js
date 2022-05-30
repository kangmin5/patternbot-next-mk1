import Link from "next/link";
import React from "react";
import styles from "/styles/Trade.module.css"

const Trade = () => { 
    const onClick = () => {
        <Link href="/menu/trade/ttrade"/>
    }
return (
    <div className={styles.container}>
        <h1>거래소</h1>
        <div className={styles.secWrapper}>
            <div className={styles.secLeft}>
                <div className={styles.tab}>
                    <h4 >자동거래</h4>
                    <p>종목시세</p>
                    <select style={{height:30, width:"90%"}} >
                        <option >비트코인</option>
                        <option >도지코인</option>
                        <option >샌드박스</option>
                    </select>

                    <div className={styles.tr}>
                        <div className={styles.text}><br />로그인이 필요한 서비스 입니다. <br /><br />
                            <button className={styles.buttons} onClick={onClick}>로그인하러가기</button>
                            <br /><br />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.secRight}>
            코인종목별 차트
            </div>
        </div>
    </div>
)
}
export default Trade
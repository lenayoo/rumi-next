'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import fetchQuotes from '@/actions/fetch-quotes';
import { mockQuotes } from '@/mock/quotes';
import type { Quotes } from '@/types';
import Image from 'next/image';

export default function Home() {
  const [oneQuote, setOneQuote] = useState<Quotes | undefined>(undefined);
  const [quotes, setQuotes] = useState<Quotes[] | undefined>(undefined);
  const [imgSrc, setImgSrc] = useState<string>('');

  //  TODO: 화면이늦게 실행되는것 수정
  useEffect(() => {
    const timestamp = new Date().getTime();
    setImgSrc(`https://picsum.photos/200/300?grayscale&t=${timestamp}`);
  }, []);

  // TODO: api에서 바로 불러올 수 있게 수정
  // TODO: useEFfect사용하지 않도록 수정
  useEffect(() => {
    setQuotes(mockQuotes);
    if (quotes) {
      setOneQuote(quotes[randomQuote]);
    }

    console.log(oneQuote);
  }, [quotes]);

  const length = quotes?.length;
  const randomQuote = getRandomInt(length!);

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>Today&apos;s quote</div>
      <div className={styles.container}>
        <div className={styles.imageBox}>
          <Image src={imgSrc} alt='Random image' width={200} height={200} />
        </div>
        {oneQuote ? (
          <div key={oneQuote.tags.length}>
            <div className={styles.quoteBox}>{oneQuote.quote}</div>
            <div className={styles.autherBox}>{oneQuote.author}</div>
          </div>
        ) : (
          '로딩중'
        )}
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import fetchQuotes from '@/actions/fetch-quotes';
import { mockQuotes } from '@/mock/quotes';
import type { Quotes } from '@/types';

export default function Home() {
  const [oneQuote, setOneQuote] = useState<Quotes | undefined>(undefined);
  const [quotes, setQuotes] = useState<Quotes[] | undefined>(undefined);

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
      <h3>Today's inspirational quote⛵️</h3>
      {oneQuote ? (
        <div className={styles.container} key={oneQuote.tags.length}>
          <div className={styles.quoteBox}>{oneQuote.quote}</div>
          <div className={styles.autherBox}>{oneQuote.author}</div>
        </div>
      ) : (
        '오늘의 문장을 불러오는데 실패했습니다.'
      )}
    </div>
  );
}

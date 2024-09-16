'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import fetchQuotes from '@/actions/fetch-quotes';
import { mockQuotes } from '@/mock/quotes';
import type { Quotes } from '@/types';

export default function Home() {
  const [quotes, setQuotes] = useState<Quotes[] | undefined>(undefined);

  useEffect(() => {
    setQuotes(mockQuotes);
  }, []);

  console.log(quotes);

  return (
    <div className={styles.page}>
      hello lena
      {quotes
        ? quotes.map((quote) => (
            <>
              <div>{quote.quote}</div>
              <div>{quote.author}</div>
            </>
          ))
        : ''}
    </div>
  );
}

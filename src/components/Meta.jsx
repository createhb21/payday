import React from 'react';
import { Helmet } from 'react-helmet';

function Meta() {
  return (
    <Helmet>
      <title>PAYDAYㅣ페이데이</title>
      <meta
        name="description"
        content="월급을 새로 정의하다, 세상에 없던 급여 계산 서비스! 공인노무사 중개 플랫폼 PAYDAYㅣ페이데이"
      />
      <meta
        name="keywords"
        content="PAYDAYㅣ페이데이, 공인노무사 중개 플랫폼, 월급 급여 계산"
      />
      <meta itemprop="image" content="./MetaImages/logo.png" />
      <meta property="og:url" content="https://everypd.co.kr/" />
      <meta property="og:site_name" content="PAYDAY" />
      <meta property="og:title" content="PAYDAYㅣ페이데이" />
      <meta property="og:image" content="./MetaImages/logo.png" />
      <meta
        property="og:description"
        content="월급을 새로 정의하다, 세상에 없던 급여 계산 서비스! 공인노무사 중개 플랫폼 PAYDAYㅣ페이데이"
      />
      <meta name="twitter:card" content="./MetaImages/logo.png" />
      <meta name="twitter:title" content="PAYDAYㅣ페이데이" />
      <meta
        name="twitter:description"
        content="월급을 새로 정의하다, 세상에 없던 급여 계산 서비스! 공인노무사 중개 플랫폼 PAYDAYㅣ페이데이"
      />
      <meta name="twitter:image" content="./MetaImages/logo.png" />
      <meta name="twitter:site" content="https://everypd.co.kr/" />
    </Helmet>
  );
}

export default Meta;

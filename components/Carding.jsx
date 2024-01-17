import React from 'react';
import Card from './Card';

const Carding = () => {


  return (
    <div>
      <div className="flex items-center justify-center gap-6 mx-auto my-5 flex-col lg:flex-row">
        <div>
          <Card icon="tv" stat="tv" orta='reqemsal' asagi='kanal' />
        </div>
        <div>
          <Card icon="internet" stat="internet" orta='tarif' asagi='kompaniya' />
        </div>
        <div>
          {/* "gamma" card'ının içində Google Play Store linki */}
          <Card icon="iptv" stat="iptv" orta='gammatv' asagi='gamma' />
        </div>
        <div>
          <Card icon="Odeme" stat="Odeme" orta='million' asagi='emanat' />
        </div>
      </div>
    </div>
  );
};

export default Carding;

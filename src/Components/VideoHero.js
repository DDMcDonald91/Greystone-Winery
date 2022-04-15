import Greystone_Winery from './Videos/Greystone_Winery.mp4';

export default function VideoHero() {

  return (
    <div id="home" style={{margin: '0px;', width: '100vw'}}>
      <video
        id="main-video"
        src={Greystone_Winery}
        autoPlay
        muted
        type="video/mp4"
        width="100%"
        height="100%"
        loop
        playsInline
      />
    </div>
  )
}

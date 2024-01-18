import './youtube.css'
function Youtube() {
  return (
    <div>
      <div className='container-preview'>
      <div className='video-preview'>
        <div className='thumbnail-row'>
          <img className='thumbnail' src='/color2.jpg' alt='thumbnail'/>
        </div>
        <div className='video-info-grid'>
          <div className='channel-pics'>
          <img className='profile-pics' src='/color2.jpg' alt='profile'/>
          </div>
          <div className='video-info'>
          <p className='video-title'>Talking Tech with Victor dVee Tutor</p>
        <p className='video-author'>Victor Unekwuojo Abuka</p>
        <p className='video-stat'>3.4M views &#183; 6 months ago</p>
          </div>
        </div>
      </div> 
     </div>
     </div>
  )
}

export default Youtube
import './youtube.css'
function Youtube() {
  return (
    <div>
      <div className='header'>
       <div className="left-section">
        <img className='harmbuger-menu' src='/hamburger-menu.svg' alt='menu tab'/>
        <img className='youtube-logo' src='youtube-logo.svg' alt='youtube logo'/>
       </div>
       <div className="middle-section">
        <input className='search-bar' type='text' placeholder='Search'/>
        <button className='search-btn'>
          <img className='search-icon' src='/search.svg' alt='search btn'/>
        </button>
        <button className='voice-btn'>
          <img className='voice-icon' src='/voice-search-icon.svg' alt='voice btn'/>
        </button>
       </div>
       <div className="right-section">
        <img className='upload-icon' src='/upload.svg' alt='upload icon'/>
        <img className='apps-icon' src='/youtube-apps.svg' alt='app icon'/>
        <img className='notification-icon' src='/notifications.svg'/>
        <img className='current-user-icon' src='/color2.jpg' alt='user profile'/>
       </div>
      </div>
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
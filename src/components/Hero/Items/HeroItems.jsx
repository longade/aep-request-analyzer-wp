import "./HeroItems.scss";

const HeroItems = () => {
  return (
    <div className='items-div'>
      <h1 className='hero-item-h1'>Adobe Experience Platform</h1>
      <p className='hero-item-p'>analytics requests analyzer</p>
      <a
        className='hero-item-link'
        href="https://chrome.google.com/webstore/detail/aep-requests-analyzer/ackephkehloidacldkffjpohlhmmnfof"
        target='_blank'
        rel="noopener noreferrer"
      >
        Go to Chrome Web Store
      </a>
    </div>
  );
}

export default HeroItems;
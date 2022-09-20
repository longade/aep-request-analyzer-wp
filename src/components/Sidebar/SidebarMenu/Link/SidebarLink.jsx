import "./SidebarLink.scss";

const SidebarLink = ({ title, to, isExtLink, elementId }) => {

  const scrollIntoElement = () => {
    const fixedElementId = elementId.startsWith('#') ? elementId : '#' + elementId;
    const element = document.querySelector(fixedElementId);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {isExtLink ?
        <a className='link' href={to} target='_blank' rel="noopener noreferrer">
          {title}
        </a>
        :
        <div className='link' onClick={scrollIntoElement}>
          {title}
        </div>}
    </>
  );
}

export default SidebarLink;
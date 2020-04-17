import Img from "./Img"

export default ({title, image, children}) => <>
  <h1>{ title }</h1>
  <article>
    { image && <div className='primary-image'>
      <Img
        alt={title}
        src={image}
        flags={['c_thumb']}
        ratio='1:1'
        size={100}
      />
    </div> }

    { children }
  </article>
</>

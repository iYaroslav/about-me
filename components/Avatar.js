import Img from "./Img"

const Avatar = () => <div className='avatar'>
  <Img
    alt='Yaroslav Samardak'
    src={'avatar_kdi0ti.jpg'}
    flags={['c_thumb', 'g_face']}
    ratio='1:1'
    size={160}
  />
</div>

export default Avatar

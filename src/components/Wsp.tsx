export const Wsp = () => {
  return (
    <div className='position-fixed bottom-0 end-0 m-4 wsp-hover' style={{ zIndex: 9999 }}>
        <a href="https://api.whatsapp.com/send?phone=543515228856&text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios." target="_blank" rel="noopener noreferrer">
            <img src="/logos/whatsapp.png" alt="WhatsApp" style={{ width: '11vh', height: '11vh' }} />
        </a>
    </div>
  )
}

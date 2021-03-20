import './App.css';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useState } from 'react';
import Menu from './components/Menu';
import ContentHome from './components/ContentHome'

function App() {
  const [OC, setOC] = useState(false)

  function IconReturn() {
    if (OC) {
      return (
        <CloseRoundedIcon style={{fontSize: '35pt', color: '#E6AF2E'}}/>
      )
    } else {
      return (
        <MenuOpenRoundedIcon style={{fontSize: '35pt', color: '#E6AF2E'}}/>
      )
    }
  }

  function Content() {
    if (OC) {
      return (
        <>
          <div className='Menuanimate'>
            <Menu />
            <ContentHome />
          </div>
        </>
      )
    } else {
      return (
        <ContentHome />
      )
    }
  }

  function TitleArea() {
    return (
      <div className='topArea'>
        <div className='titleArea'>Subject Allocation</div>
      </div>
    )
  }

  return (
    <>
      <div className='IconHolder' onClick={()=>{setOC(!OC)}}>
        <IconReturn />
      </div>
      <TitleArea />
      <Content />
    </>
  );
}

export default App;

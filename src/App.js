import logo from './logo.svg';
import './App.css';
import profile_img from './assets/profile_img.png'
import slack from './assets/slack.png'
import github from './assets/Icon.png'
import zuri from './assets/zuri internship.png'
import I4G from './assets/I4G.png'
import share from './assets/share.png'

function App() {
  return (
    <>
      <div id='share'>
        <img src={share} alt=''/>
      </div>
      
      {/* PROFILE IMAGE AND USERNAME */}
      <div classname='profile' id='profile'>
        <div >
          <img src={profile_img} alt='' id='profile_img'/>
        </div>

        <div id='twitter'>
          <a href='https://twitter.com/_E_hills'><h2>_E_hills</h2></a>
        </div>
      
        <div id='slack'>
          <h2>hills</h2>
        </div>
      </div>

    {/* Links*/}
      <div id='links'>
        <div classname='link' id='btn__zuri'>
          <a href='https://training.zuri.team/'>Training</a>
        </div>
        <div classname='link' id='books'>
          <a href='http://books.zuri.team'>Zuri Books</a>
          <sub>This is where you find books about design and coding</sub>
        </div>
        <div classname='link' id='book__python'>
          <a href='https://books.zuri.team/python-for-beginners?ref_id=<hills>'>Zuri Books for python</a>
          <sub>Best Python Book for Beginners</sub>
        </div>
        <div classname='link' id='pitch'>
          <a href='https://background.zuri.team'>Background Check On Coders</a>
          <sub>I recently just developed a Program that does background check on coders</sub>
        </div>
        <div classname='link' id='book__design'>
          <a href='https://books.zuri.team/design-rules'>Free Design Book</a>
          <sub>Free Design book where you can learn everything you need to become a designer</sub>
        </div>
      </div>

     {/* Social icons */} 
      <div id='social'>
        <div id='slack-link'>
          <img src={slack} alt='' />
        </div>

        <div>
          <img src={github} alt=''/>
        </div>
      </div>

      {/* Footer */}
      <div id='footer'>
        <div id='zuri-internship'>
          <img src={zuri} alt=''/>
        </div>

        <div classname='footer-text'>HNG Internship 9 Frontend Task</div>

        <div id='ingressive-logo'>
          <img src={I4G} alt=''/>
        </div>
      </div>
    </>
  );
}

export default App;
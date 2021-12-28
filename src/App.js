import './App.css';

function App() {
  return (
   <div className='main'>
     <div className='navbar'>
       <div className='icon'>
         <h2 className='logo'>praros</h2>
       </div>

       <div className='menu'>
         <ul>
           <li><a href='#'>HOME</a></li>
           <li><a href='#'>ABOUT</a></li>
           <li><a href='#'>SERVICE</a></li>
           <li><a href='#'>DESIGN</a></li>
           <li><a href='#'>CONTACT</a></li>
         </ul>
       </div>

       <div className='search'>
         <input className='srch' type="search"  name='' placeholder='type to text'/>
         <a href='#'><button className="btn">search</button></a>
       </div>

       <div className='content'>
         <h1>web design & <br /><span>Development</span><br /></h1>
         <p className='par'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <br />Saepe magnam quo quisquam rem aspernatur distinctio nihil, tempore ab, <br />esse ratione corporis iure ex accusantium rerum, nobis sequi eaque quae eligendi!</p>
          <button className="cn"><a href='#'>JOIN AS</a></button>
       </div>
     </div>
   </div>
  );
}

export default App;

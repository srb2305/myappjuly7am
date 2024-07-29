import Button from './components/Button';

function App() {

  const name = "Raj Ram";
  const lastName = "Rai";
  const logo = "https://srbitsolution.com/images/whatsappgroup.jpg";

  return (
    <>
        <div style={{ 
          background:'#ffffff',
          color:'red',
          border: '5px solid green',
          marginTop: 20,
          paddingBottom: 30
          }} >
          
           <h1 className="heading">Welcome </h1>
           <p>Hello, Good morning...</p>
         </div>

         <Button  title="Register" alt="abc" />
         <Button  title="Login" />
         <Button  title="Contact Us" />

         <div>
          <h2> My name is... { name } {lastName} </h2>
          <br/>
          <img src={logo}  alt="whatsapp img" />   
         </div>
    </>   
  );
}

export default App;

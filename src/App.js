import logo from './logo.svg';
import './App.css';
import Card from './component/Card';

function App() {

  const main_styling = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "0.1rem",
  };


  return (
    
      <>
             <div style={main_styling}>
          <Card title="#FF6663" color="PINK" hashcode="PINK" />
          <Card title="#333333" color="GRAY" hashcode="#333333" />
          <Card title="#000000" color="BLACK" hashcode="#000000" />
          <Card title="#38BB14" color="GREEN" hashcode="#38BB14" />
          <Card title="#C90B0B" color="RED" hashcode="#C90B0B" />
        </div>
  
        <div style={main_styling}>
          <Card title="#FF8000" color="ORANGE" hashcode="#FF8000" />
          <Card title="#FFf500" color="YELLOW" hashcode="#FFf500" />
          <Card title="#CCCCCC" color="LIGHT-GRAY" hashcode="#CCCCCC" />
          <Card title="#7E41A2" color="PURPLE" hashcode="#7E41A2" />
          <Card title="#C14911" color="BROWN" hashcode="#C14911" />
        </div>
      
      </>
  );
}

export default App;

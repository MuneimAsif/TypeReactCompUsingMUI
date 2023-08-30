import BtnCom from "./components/Button";
import IconLabelButtons from "./components/IconButton";
import Input from "./components/Input";
import SwitchCom from "./components/Switch";
import DynamicTable from "./components/Table";
import DynamicSelect from "./components/Select";

function App() {
  return (<>
  <div className="mainDiv">
     
    {/* Button Component Start*/}
   <BtnCom btnLabel='Errors :(' btnColor={"warning"}/>
   {/* Button Component End*/}
    
    {/* IconButton Start */}
    <IconLabelButtons label = 'Error'/>
    {/* IconButton End */}

    {/* Input Start */}
    <Input/>
    {/* Input End */}
    
    {/* Switch Start */}
    <SwitchCom />
    {/* Switch End */}
    
    {/* Table Start */}
    <DynamicTable cols ={[
      {
        heading:'ID',
        data:'id'
      },
      {
        heading:'NAME',
        data:'name'
      },
      {
        heading:'CLASS',
        data:'class'
      },
      {
        heading:'ID CARD',
        data:'idCard'
      },

    ]}   rows = {[
      {
        id:1,
        name:'Abu Bakar',
        class:'X',
        idCard:false,
      },
      
      {
        id:2,
        name:'Umar',
        class:'X',
        idCard:true,
      },
      {
        id:3,
        name:'Usman',
        class:'X',
        idCard:true,
      },
      {
        id:4,
        name:'Ali',
        class:'X',
        idCard:true,
      },

      ]}/>
    {/* Table End */}

    {/* Select Start */}
    <DynamicSelect data = {['Abu Bakar','Umar','Usman','Haider']}/>
    {/* Select End */}
  

  </div>
  </>
  );
}

export default App;

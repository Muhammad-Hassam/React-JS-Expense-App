import './App.css';
import {useState} from 'react'
import { Container,Row,Col,Form, FormGroup,  Input,Button, Label, } from 'reactstrap';
import { Table } from 'reactstrap';

function App() {
let[expenseItems,fExpenseItems]=useState([]);
let selectValue=()=>{
  let newexpenseItems=[...expenseItems]
  newexpenseItems.push({
    savings: savings,
    expenses: expenses,
    inputSelVal: inputSelVal,
    inputDatVal: inputDatVal,
  })
  fExpenseItems(newexpenseItems);
}

let deleteval=(index)=>{
  expenseItems.splice(index,1)
  let newexpenseItems=[...expenseItems];
  fExpenseItems(newexpenseItems);
}
// savings
let [inputSavVal,finputSavVal]=useState(parseInt(0));
let [savings,fsavings]=useState(0);

  let savingInput=({target})=>{
    finputSavVal(parseInt(target.value));
  }
   
  let savingAmmount=({target})=>{
    fsavings(savings+=inputSavVal);
    finputSavVal(target.value=0);
  }
  // savings end
  
  // expense
  let [inputExpVal,finputExpVal]=useState(0);
  let [expenses,fexpenses]=useState(0);

  let expenseInput=({target})=>{
    finputExpVal(target.value)
  } 

  let expenseAmmount=({target})=>{
    if (savings===0 || inputExpVal>savings) {
      alert("Your expenses is out of savings")
    }
    else{
    fexpenses(expenses=inputExpVal);
    fsavings(savings=savings-expenses);
    finputExpVal(target.value=0)
    selectValue();
    }
  }
   // expense end

  //  Category value
  let [inputSelVal, finputSelVal]=useState('Bike');
 
   let selectInput=({target})=>{
      finputSelVal(target.value)
   }
  //  Category value end
  
  // date value
  let [inputDatVal,finputDatVal]=useState("");

  let dateInput=({target})=>{
    finputDatVal(target.value);
  }
  
  return (
  <>
      <Container className="main-Container mt-5 pb-5" fluid="sm" >
        <Row>
          <Col><h1 className="pt-5 text-center main-heading">Expense Tracker App</h1></Col>
        </Row>
     <Container fluid>
       <Form className='mt-3'>
       <Label className='mt-5 labels'>Savings</Label>
         <Row >
           <Col sm='10' lg='10' md='10' >
           <FormGroup>
             <Input type="number" onChange={savingInput} value={inputSavVal} />
          </FormGroup>
           </Col>
           <Col sm='2' lg='2' md='2' > 
           <FormGroup>
           <Button color="success" className='pr-5 pl-5' onClick={savingAmmount}>Savings</Button>
           </FormGroup>
           </Col>
         </Row>
       </Form>
       <Row>
         <Col>
          <p className='saving text-center'>Total Savings: {savings}</p>
         </Col>
       </Row>
     </Container>
     
     <Container fluid>
     <Label className='mt-4 labels'>Expenses</Label>
         <Row >
           <Col sm='12' lg='12' md='12' >
           <FormGroup>
             <Input type="number" onChange={expenseInput} value={inputExpVal} />
          </FormGroup>
           </Col>
           </Row>
          <Row>
            <Col sm='5' lg='5' md='5'>
            <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" onChange={selectInput} defaultValue={'DEFAULT'}>
           <option value="DEFAULT" disabled>Choose an Expense</option>
           <option value="bike" >Bike</option>
           <option value="rent">Rent</option>
           <option value="groccery">Grocerries</option>
           <option value="extra">Extra</option>
        </Input>
      </FormGroup>
            </Col>
            <Col sm='5' lg='5' md='5'>
            <FormGroup>
        <Label for="exampleSelect">Date</Label>
        <Input  type="date" format="DD-MM-YYYY" onChange={dateInput} value={inputDatVal}></Input>
      </FormGroup>
       </Col>
            <Col sm='2' lg='2' md='2' className='pt-4'>
            <FormGroup className='pt-2'>
            <Button color="danger" className='pr-5 pl-5' onClick={expenseAmmount}>Expenses</Button>
            </FormGroup>
      </Col>
    </Row>
    <Row>
         <Col>
          <p className='saving text-center'>Last Expense: {expenses}</p>
         </Col>
       </Row>
    </Container> 
    <Container fluid>
    <h3>All Transaction</h3>  
    <Table bordered>
      <thead>
        <tr>
          <th>Saving</th>
          <th>Expense</th>
          <th>Date</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
     {expenseItems.map((Items, index) => <tr key={index}>
     <td>{Items.savings}</td>
     <td>{Items.expenses}</td>
     <td>{Items.inputDatVal}</td>
     <td>{Items.inputSelVal}</td>
     <td><Button color='danger' onClick={()=>deleteval(index)}>Delete</Button></td>
     </tr>)}
     </tbody>
</Table>
    </Container> 
     </Container>
   </>
   
  );
}

export default App;



import { LightningElement } from 'lwc';

export default class FirstLWC extends LightningElement {
    firstName = 'First Name'
    lastName = 'Last Name'

    handleInputChange(event){
        this.firstName = event.target.value;        
    } 

    handleInputChange1(event){        
        this.lastName = event.target.value;
    } 
    
}
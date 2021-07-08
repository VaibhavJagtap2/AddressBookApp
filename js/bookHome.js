window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {

    const headerHtml = "<th>Name</th><th>Address</th><th>City</th>"+"<th>State</th><th>Zip</th><th>Phone number</th><th>Action</th>";
    let addressBook = creteAddressBookJSON()[0];
    const innerHtml = `${headerHtml}
    
    <tr>
        <td>${addressBook._name}</td> I
        
        <td>${addressBook._address}</td>
        
        <td><div class='dept-label'>${addressBook._city}</div></td>
        
        <td>${addressBook._state}</td>
        
        <td>${addressBook._zip}</td>
        
        <td>${addressBook._phonenumber}</td>
        
        <td><img name="1" onclick="remove(this)" src="C:/Users/Admin/AddressbookApp/assets/icons/delete-black-18dp.svg" alt="delete">
        
        <img name="1" onclick="update(this)" src="C:/Users/Admin/AddressbookApp/assets/icons/create-black-18dp.svg" alt="edit"> 
        </td>
    
    </tr>
`;
    document.querySelector('#table-display').innerHTML = innerHtml;
    
}
const creteAddressBookJSON = () => { 
    let addressBookListLocal = [
    {

        _name: 'Vaibhav',
        _address: 'Shewalewadi',
        _city: 'Pune',
        _state: 'MAHARASHTRA',
        _zip: '412307',
        _phonenumber: '+91 9981228877',
    
    }, 
 ];  
    return addressBookListLocal;
}
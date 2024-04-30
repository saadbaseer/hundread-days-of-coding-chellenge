// Question 15: 
// Changing Guest List: One of your guests can't make it to 
// the dinner, so you need to send out a new set of invitations with 
// a replacement guest.

let guests: string[] = ['Tahir', 'Yasir', 'Aryan', 'Noor'] //stores names of guests
// used forEach method to go over the array
guests.forEach(guest => {
    console.log(`Hellow ${guest} you are invited fordinner tonight at my house`);})

     let notAvaliable='Yasir' // stored a guest whose is not availible
     console.log(`${notAvaliable} is not avaliable for dinner tonight`);
     
     let replacement='Imtiaz' // stored a guest as a replacement
     guests[guests.indexOf(notAvaliable)]=replacement
    // made a new invitation using forEach method
     guests.forEach(guests=>{   
        console.log(`Hellow ${guests} you are invited for dinner at my house tonight`);
        
     })
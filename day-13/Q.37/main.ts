// Question 37: 
// Large Shirts: Default values in make_shirt().



let make_shirt=(size:string="large",message='"i love coding"')=>{
    console.log(`make a ${size} size of shirt and write ${message} on it`);
    
}
make_shirt()
make_shirt("medium")
make_shirt('small','"problem solver"')
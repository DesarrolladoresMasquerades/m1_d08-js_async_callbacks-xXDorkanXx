//Exercise 1: What is the expected output? And why?

function print() {
    console.log(1);
    setTimeout(() => console.log(2), 1000);
    setTimeout(() => console.log(3), 0);
    console.log(4);
  }
  
  print(); // 1, 4, 3, 2
  
  // ------------------------------------------------------------------------
  
  
  //Exercise 2: Write a function blast() , which loops over the numbers 1 to 15. every 1 second 
  // - For every number divisible by 3 it prints BOOM!!
  // - For every number divisible by 5 it prints a BANG!!
  // - Forevery number divisible for 3 and 5 it prints BOOM BANG!! 

  function blast(){

    let counter = 0;

    const theInterval = setInterval(

      () => {

        counter++;

        for(let i = 1; i < 16; i++){
          if(i % 3 === 0 && i % 5 === 0){
            console.log("BOOM BBANG!!")
          } else if(i % 3 === 0){
            console.log("BOOM!!")
          } else if(i % 5 === 0){
            console.log("BANG!!")
          }
        }
      },
      1000
    )

    if(counter === 5){
      clearInterval(theInterval)
    }

    /*
    setTimeout(
      () => {clearInterval(theInterval)},
      10 * 1000
    );
    */

  };

  blast();

  

 
  
  

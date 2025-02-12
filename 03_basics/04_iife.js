
(function chai(){
    // this is a named iife
    console.log("Connected..."); 
})();

// create problem if we use iife consecutive ...so apply semicolon at end

(  () => {
    console.log("Connected 2....");
    
})();

(  (name) => {
    console.log(`how are you ${name}`);
    
})("Akan")
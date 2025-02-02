

    let timeout;
    myTextarea = document.querySelector('#textarea');
    function checkTimeout(){
    clearTimeout(timeout)
    timeout = setTimeout(function(){
    myTextarea.value = ""
    }, 3000)
    }
   myTextarea.addEventListener('keyup', checkTimeout)

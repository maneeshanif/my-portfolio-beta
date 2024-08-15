window.addEventListener('load', () => {
    const curtain = document.querySelector('.curtain') as Element
    const heading = document.querySelector('.heading') as Element
    const loader = document.querySelector('.loader') as Element
  
    
    setTimeout(() => {
        loader.classList.add('hidden'); 
        curtain.classList.add('open'); 
  
        
        setTimeout(() => {
            heading.classList.add('show');
        }, 500); 
  
    }, 2000); 
  });
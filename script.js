
const sections = document.querrySelectorAll('section');
const bubble = document.querrySelectorAll('.bubble');
const options={
    threshold: 0.7;
}
let observer = new IntersectionObserver(navCheck, options);

function navCheck(enteries){
    enteries.forEach(entry => {
      const className = entry.target.classNew;
      const activeAnchor = document.querrySelector('[data-page=${className}]');
       const coords = activeAnchor.getBoundingClientReact();
       const direction ={
           height: coords.height,
           width: coords.width,
           top: coords.top,
           left: coords.left,
       };
       if (entry.isIntersecting){
          bubble.style.setProperty("left",'${direction.left}px');
           bubble.style.setProperty("top",'${direction.top}px');
            bubble.style.setProperty("width",'${direction.width}px');
             bubble.style.setProperty("height",'${direction.height}px');
       }
    });
}
sections.forEach(section =>{
    observer.observe(section);
});
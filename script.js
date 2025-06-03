// Get all buttons
const errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Add event listeners to each button
errorBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;
        
        switch(buttonText) {
            case 'Console Log':
                console.log('Console Log Demo');
                break;
                
            case 'Console Error':
                console.error('Console Error Demo');
                break;
                
            case 'Console Count':
                console.count('Count Button');
                break;
                
            case 'Console Warn':
                console.warn('Console Warn Button');
                break;
                
        }
    });
}); 
const samplePerson = {
    name: 'Alice',
    age: 25,
    hobbies: ['reading', 'hiking', 'photography'],
    address: {
        street: '123 Main St',
        city: 'San Diego',
        state: 'CA'
    }
};// Get all buttons
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

            case 'Console Assert':
                console.assert(samplePerson.age < 20, 'Console Assert Button');
                break;

            case 'Console Clear':
                console.clear();
                break;

            case 'Console Dir':
                console.dir(samplePerson);
                break;

            case 'Console dirxml':
                console.dirxml(document.querySelector('main'));
                break;

            case 'Console Group Start':
                console.group('Console Group Start');
                break;

            case 'Console Group End':
                console.groupEnd();
                break;


        }
    });
}); 
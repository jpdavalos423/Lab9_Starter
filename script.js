const samplePerson = {
    name: 'Alice',
    age: 25,
    hobbies: ['reading', 'hiking', 'photography'],
    address: {
        street: '123 Main St',
        city: 'San Diego',
        state: 'CA'
    }
};

class NetworkError extends Error {
    constructor(message, endpoint) {
        super(message);
        this.name = 'NetworkError';
        this.endpoint = endpoint;
        this.timestamp = new Date();
    }
}

// Add these functions to demonstrate console.trace
function functionC() {
    console.trace('Trace from functionC');
}

function functionB() {
    functionC();
}

function functionA() {
    functionB();
}

const errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Add window.onerror handler
window.onerror = function(message, source, lineno, colno, error) {
    console.log('Error caught by window.onerror:');
    console.log('Message:', message);
    console.log('Source:', source);
    console.log('Line:', lineno);
    console.log('Column:', colno);
    console.log('Error object:', error);
    
    // Return true to prevent the error from being displayed in the console
    return true;
};

// Add event listeners to each button
errorBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;
        
        switch(buttonText) {
            case 'Console Log':
                console.log('Console Log Demo');
                break;
                
            case 'Console Error':
                const endpoint = 'https://api.example.com/data';
                fetch(endpoint)
                    .then(response => {
                        if (!response.ok) {
                            throw new NetworkError('Failed to fetch data', endpoint);
                        }
                        return response.json();
                    })
                    .catch(error => {
                        if (error instanceof NetworkError) {
                            console.error(`${error.name} for ${error.endpoint} at ${error.timestamp}: ${error.message}`);
                        } else {
                            console.error('Network request failed:', error.message);
                        }
                    });
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

            case 'Console Table':
                console.table(samplePerson);
                break;

            case 'Start Timer':
                console.time('Start Timer');
                break;

            case 'End Timer':
                console.timeEnd('Start Timer');
                break;

            case 'Console Trace':
                functionA();
                break;

            case 'Trigger a Global Error':
                // Throw our custom NetworkError
                throw new NetworkError('Simulated network failure', 'https://example.com/api');
                break;
        }
    });
}); 
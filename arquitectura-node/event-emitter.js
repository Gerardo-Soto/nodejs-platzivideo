const EventEmmiter = require('events');

class Logger extends EventEmmiter {
    execute(cb){
        console.log('Before');
        this.emit('start');
        cb();
        this.emit('finish');
        console.log('After');
    }
}

const my_logger = new Logger();

//Execution of events
my_logger.on('start', () => console.log('The event start is emitted'));
my_logger.on('finish', () => console.log('The event finish is emitted'));
my_logger.on('finish', () => console.log('Second notice of event finish'));

my_logger.execute(() => setTimeout(() => console.log("Hello, World!"), 500));



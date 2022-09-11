if(command == 'run cli'){
    var spawn = require("child_process").spawn;
    var process = spawn('python', ["python/hello.py"]);
    process.stdout.on('data', function(data) {
          console.log(data.toString());
    });
}
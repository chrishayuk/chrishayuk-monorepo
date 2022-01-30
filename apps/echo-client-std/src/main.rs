use std::io::prelude::*;
use std::net::TcpStream;

// constants
const ECHO_SERVER_ADDRESS: &str = "127.0.0.1:1234";

fn main() {
    // connecting
    println!("connecting to {}",ECHO_SERVER_ADDRESS);

    // connected
    if let Ok(mut stream) = TcpStream::connect(ECHO_SERVER_ADDRESS) {
        // connected message
        println!(
            "connected to echo server: {}:{}",
            stream.local_addr().unwrap().ip(),
            stream.local_addr().unwrap().port()
        );

        // set our message as hello world
        let message = "Hello World!";
        let _ = stream.write(message.as_bytes());
        let _ = stream.flush();
        println!("Sent: {}", message);
 
        // read the result
        let mut buffer = [0; 1024];
        let len = stream.read(&mut buffer).unwrap();
        let message = String::from_utf8_lossy(&buffer[..len]); 
        println!("Received: {:?}", message);
    } else {
        println!(
            "couldn't connect to echo server: {}",
            ECHO_SERVER_ADDRESS
        );
    }
}
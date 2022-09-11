import serial 
ser = serial.Serial()
ser.baudrate = 38400 #Suggested rate in Southco documentation, both locks and program MUST be at same rate 
ser.port = "COM{}".format(comport) 
ser.timeout = 10 
ser.open() 
#call the serial_connection() function 
ser.write(("%s\r\n"%command).encode('ascii'))
# OPCUA.embedded

OPCUA embedded is a set of OPCUA servers specifically designed to work with popular CNC and PLC models. These servers are developed in ANSI C and optimized for binary size and runtime resource requirements. This makes it possible to install and run the OPCUA server directly on the device being serviced, when needed.

The OPCUA server code is fully cross-platform, meaning it can be used on a variety of different operating systems. For some OPCUA servers, there is even a version available for Linux, as well as for older versions of the Windows operating system such as XP/2000/NT4. This is especially important since many CNC machines with HMI operator panels still use these older operating systems.

Using OPCUA embedded allows for greater connectivity and interoperability between different devices and systems. It also allows for easier data exchange and analysis, making it possible to optimize processes and increase efficiency.

# SINUMERIK S7 TCP
The [SINUMERIK S7 TCP OPC UA server](../../wiki/SINUMERIK-S7-TCP) enables the connection of Siemens SINUMERIK CNCs, including the 840 Dsl and 828 Dsl models, and other models through Ethernet, utilizing the S7 TCP protocol. This allows for remote communication with the CNCs.

However, in situations where external communication via S7 TCP is not possible, the OPC UA server can be installed directly on the operator HMI. This allows the server to communicate with the CNC and PLC via S7 TCP protocol through internal Ethernet network instead of relying on external communication protocols.

[SINUMERIK S7 ONLINX](../../wiki/SINUMERIK-S7-ONLINX)

[FANUC FOCAS](../../wiki/FANUC-FOCAS)

[CNDEX](../../wiki/CNDEX)

[SYNTEC](../../wiki/SYNTEC)

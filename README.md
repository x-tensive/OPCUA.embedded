# OPCUA.embedded

OPCUA embedded is a set of OPCUA servers specifically designed to work with popular CNC and PLC models. These servers are developed in ANSI C and optimized for binary size and runtime resource requirements. This makes it possible to install and run the OPCUA server directly on the device being serviced, when needed.

The OPCUA server code is fully cross-platform, meaning it can be used on a variety of different operating systems. For some OPCUA servers, there is even a version available for Linux, as well as for older versions of the Windows operating system such as XP/2000/NT4. This is especially important since many CNC machines with HMI operator panels still use these older operating systems.

Using OPCUA embedded allows for greater connectivity and interoperability between different devices and systems. It also allows for easier data exchange and analysis, making it possible to optimize processes and increase efficiency.

## SINUMERIK S7 TCP
[SINUMERIK S7 TCP OPC UA server](../../wiki/SINUMERIK-S7-TCP) enables the connection of Siemens SINUMERIK CNCs, including the 840 Dsl and 828 Dsl models, and other models through Ethernet, utilizing the S7 TCP protocol. This allows for remote communication with the CNCs.

However, in situations where external communication via S7 TCP is not possible, the OPC UA server can be installed directly on the operator HMI. This allows the server to communicate with the CNC and PLC via S7 TCP protocol through internal Ethernet network instead of relying on external communication protocols.

## SINUMERIK S7 ONLINX
If the operator HMI is connected to the CNC and PLC via PROFIBUS/MPI, and the S7 TCP protocol is unavailable, the [SINUMERIK S7 ONLINX OPC UA server](../../wiki/SINUMERIK-S7-ONLINX) can be used. It is installed directly on the operator HMI and utilizes the s7onlinx interface to communicate through PROFIBUS/MPI.

To make this possible, we provide a variety of builds for this OPC UA server that are compatible with different versions of Windows, including Windows XP, Windows 2000, and Windows NT4, which are commonly used on SINUMERIK 840 Dpl HMIs.

This OPC UA server has been tested and proven to work well on the SINUMERIK 840 Dpl series, as well as on other models of Siemens SINUMERIK.

## FANUC FOCAS
[FANUC FOCAS OPC UA server](../../wiki/FANUC-FOCAS) utilizes the FOCAS protocol to communicate with FANUC CNCs and provides a rich interface to collect important machine data.

As of now, the OPC UA server is in an alpha version, and we are currently conducting intensive testing to ensure its reliability and compatibility with various FANUC CNC models.

## CNDEX
[CNDEX OPC UA server](../../wiki/CNDEX) is compatible with PRIMA POWER LASER and other CNC models that use OpenCNC, allowing for seamless communication between the OPC UA server and the CNCs.

## SYNTEC
[SYNTEC OPC UA server](../../wiki/SYNTEC) offers connectivity for both new and older versions of SYNTEC CNCs. It provides a rich interface to fetch machine data from these types of CNCs, making it an essential tool for monitoring and analyzing machine performance.

# General concepts

OPC UA server instances are explained in [this article](../../wiki/Instances).

How to request, install and manage licenses is explained [here](../../wiki/Licensing)

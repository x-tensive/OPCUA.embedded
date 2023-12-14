## [v2.0.0] - 2023-12-14
### platform:
- fix monitored items register/unregister notifications to safely handle bad (unparsable) indexes
- unification and simplification of platform (windows/lynux) abstraction layer

### s7:
- s7 deep refactoring of the protocol implementation, async model, transactions scheduler, cache and engines
- s7 asynchronous tcp connection layer with event driven model
- s7 CLNP and COTP protocols deep refactoring including event driven model
- s7 ONLINX deep refactring including event driven model, much more simple and clean implementation
- s7 TRANSPORT deep refactoring, much more simple and clean implementation
- s7 API layer is introduced which extends s7 TRANSPORT with all types of s7 requests and s7 responses
- s7 AMQ layer is introduced which is in full responsibility of transactions and tasks handling
- s7 SCHEDULER deep refactoring
- s7 SCHEDULER strategies: "device read", "device write", "batch read"

## [v1.7.0] - 2023-11-17
### platform:
- The COMMON library has been introduced, serving as a shared component across all OPC UA servers. It encapsulates essential functionalities such as license management, certificate management, instances, aliases, and more. This approach enables us to maintain cleaner and bug-free projects for OPC UA servers
-  COMMON library 's-sync' strategy. It offers an asynchronous engine designed for SERIAL/SYNCHRONOUS protocols. In this context, 's-sync' signifies that the next API call is permissible only when the preceding call has been completed, and the response/error has been received. This strategy is particularly useful for SYNCHRONOUS protocols, where the API call blocks the worker thread until the response is received. Typically, the 's-sync' strategy is applied when utilizing third-party protocol implementations, often supplied by CNC/PLC vendors, where we may lack in-depth control over the internal workings of the protocol
- COMMON lib: modbus, syntec, ylr, pmac, cndex, evl

### SYNTEC:
- switch to loader and arg2
- NcGetOSInfo - custom read - to avoid any requirements on indexes.
- NC pending alarms
- s-sync
- gracefully process device disconnect/reconnect
- retrying callbacks
- MFC cleanup
- cnc File System support, including Download, Send, List files, List dirs
- kernel/multi tcp always come both if any
- OCUser.dll should be included and installed - as it is needed for kernel api
### PMAC:
- s-sync

## [v1.6.3] - 2023-10-16
### platform:
- HID calculation for linux: use enX0 adapter when eth0 is not there
- HID calculation for linux: machine-id is used only if exists
- update open62541 submodule
- docker builder: ALPINE builder container
### MODBUS:
- modbus worker now fully supports gracefull shutdown
- modbus synchronous socket io (less code, more reliable)
- modbus socket listen: fix for linux
- MODBUS proto: response timeout
- MODBUS command line args: refactor descriptions
- modbus OPC UA server now supports Linux
- modbus OPC UA server is now available as docker image on DockerHub
### PMAC:
- PMAC fix BSTR to UA_String conversion
- PMAC dcom reconnect timeouts
- pmac pcomm32 stub/proxy
- PMAC motor dump small fix
- PMAC now supports "last error"
- PMAC fix: correct device number to connect
- PMAC error processing improved
- PMAC process "RPC server is unavailable" error
- PMAC async: monitored items, cache, requests, scheduler, handlers
- PMAC link properties exposed

## [v1.6.2] - 2023-07-24
### features:
- MODBUS recovery of protocol failures
- CNDEX switch opcua server to standard loader
- PMAC STD model
- PMAC VAR
- PMAC DPR MEM
- PMAC DCOM support

## [v1.6.1] - 2023-07-20
### features:
- MODBUS recoverable errors
- MODBUS request interval default 100 ms

## [v1.6.0] - 2023-07-18
### features:
- configurable Aliases \
  [https://github.com/x-tensive/OPCUA.embedded/wiki/Aliases](https://github.com/x-tensive/OPCUA.embedded/wiki/Aliases)
### bugfixes:
- YLR opc ua server: fixes in communication protocol

## [v1.5.11] - 2023-06-29
### features:
- MODBUS OPC UA server: graceful process of timeouts.\
  Important, when device is not ready to send responses.

## [v1.5.10] - 2023-06-28
### features:
- MODBUS OPC UA server: configurable timeouts
- MODBUS OPC UA server: device write

## [v1.5.9] - 2023-06-27
### features:
- MODBUS OPC UA server: async model of communiction
- MODBUS OPC UA server: cache for efficient device reads, transactions scheduler

## [v1.5.8] - 2023-06-19
### features:
- MODBUS OPC UA server: pass slave id as index (optional)

## [v1.5.7] - 2023-06-15
### features:
- MODBUS slave id support
- universal tcp connection functionality: autmatic reconnect, notifications model
- internal refactoring: unify command line args processing, services, OPC UA servers bootstrap code

## [v1.5.6] - 2023-05-18
### features:
- beta release OPC UA server for MODBUS

## [v1.5.5] - 2023-05-12
### bugfixes:
- HID calculation: legacy/current way to fetch mac addresses
- DELTA TAU PMAC: multiple fixes in beta version

## [v1.5.4] - 2023-05-06
### features:
- beta release OPC UA server for IPG PHOTONICS YLR
- beta release OPC UA server for DELTA TAU PMAC

## [v1.5.3] - 2023-04-25
### bugfixes:
- HID calculation\
  for some servers with multiple Ethernet interfaces the HID was randomly changing

## [v1.5.2] - 2023-04-11
### bugfixes:
- Release build of open62541 writes INFO/WARN logs to console std out.\
  INFO/WARN are needed for Debug builds only!

## [v1.5.1] - 2023-04-10
This is an EMERGENCEY fix release due to a critical error in v1.5.0:\
OPC UA servers fail to load nodesets.\
v1.5.0 was removed from downloads.

## [v1.5.0] - 2023-04-07
### features:
- switch to mbedtls 2.28.3
- platform build tools: mbedtls, open62541
- restructure libs dir
- update build scripts and installer scripts
- s7nck for linux: cleanup CMakeLists.txt
- github actions: build for linux
- qt5 git submodule
- opcua model compiler scripts for linux: license.sh, opcuamodel.sh
- FOCAS add "AS" node to comply address spaces structure agreements
- test server upgrade to v143 toolset

### bugfixes:
- bugfix: FOCAS incorrectly determines CNC system
 
## [v1.4.5] - 2023-03-10
### CHANGED:
- UA namespaces changed to use "http://dpaxt.io" prefix

## [v1.4.4] - 2023-02-28
### FIXED:
- HID calculation was fixed\
  license HID calculation was corrupted in case of multiple ethernet interfaces including virtual interfaces (like VPN or Bridge)

## [v1.4.3] - 2023-02-27
### ADDED:
- SYNTEC: NcDumpPendingAlarm, NcGlobalDump, NcCoordVarDump, SPLCA_ParamDump, Rot_ParamDump, LASER_ParamDump, LASER_GAxisParamDump

## [v1.4.2] - 2023-02-27
### ADDED:
- SYNTEC: PlcDumpTimer, PlcDumpCounter, CncParamDump, NcDebugDump
### FIXED:
- SYNTEC installer: misprint in installed dll name

## [v1.4.1] - 2023-02-21
### ADDED:
- SYNTEC license validation
- SYNTEC NcStateDump

## [v1.4.0] - 2023-01-31
### ADDED:
- Windows NT4 support
- SINUMERIK S7 ONLINE for Windows NT4


## [v1.2.2] - 2022-10-16
### ADDED:
- FANUC FOCAS opcua server. ALPHA version, do not use in production!


## [v1.2.1] - 2022-08-10
### FIXED:
- s7nck & s7onck: estimate REQUEST pdu size - to correctly merge packages.\
  OPC UA server generates corrupted requests in case when s7 dispatcher groups too many read items in one request.


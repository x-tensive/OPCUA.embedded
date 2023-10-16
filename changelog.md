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


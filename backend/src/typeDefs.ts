import {DriverList} from './resolvers'

export const typeDefs = `
  type CurrentLocation {
    lat: Float
    lon: Float
  }

  type NearestDrivers {
    EAT: Float
    id: Float
    name: String
    currentLocation: CurrentLocation
    averageSpeedKmPerHour: Float
    telephone: String
  }

  type Query {
    helloWorld: String
    getNearestDrivers(longLoc: Float!, latLoc: Float!) : [NearestDrivers]
  }
`

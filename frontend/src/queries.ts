import { gql } from '@apollo/client'

export const helloWorldQuery = gql`
  query {
    helloWorld
  }
`

export const GET_NEAREST_DRIVERS = gql`
query getNearestDrivers($lon:Float!,$lat:Float!){
    getNearestDrivers(longLoc:$lon,latLoc:$lat)  {
      EAT
      id
      name
      averageSpeedKmPerHour
      telephone
    }
  }
`

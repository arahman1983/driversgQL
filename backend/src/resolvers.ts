import drivers from '../data.json'
import { calculateDistance } from './calculateDistance'

export const resolvers = {
  Query: {
    helloWorld: () => 'Hello World!',
    getNearestDrivers : (longLoc:number, latLoc:number) => {
      const driversList = drivers.map(driver => (
        {...driver, 
          EAT: calculateDistance(longLoc,latLoc,driver.currentLocation.lon,driver.currentLocation.lat)/driver.averageSpeedKmPerHour
        }
        )).sort((a,b) => a.EAT - b.EAT)
        return driversList
      }
  }
}
